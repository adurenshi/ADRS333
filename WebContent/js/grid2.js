function Grid2(selector, buffer, options) {
	var def = {
		colNames: [],
		colModel: [],
		formatters: {},
		widths: {},
		rows: 10,
		styles: {},
		total: 10,
		records: 1000,
		page: 1,
		caption: ""
	}; //默认配置项
	var options = $.extend({}, def, options || {}); //配置总配置项
	var checks = [];
	var buffer = buffer;
//	var selector = selector; //绑定的选择器
	var that = this;
	var showData = {
		gData: [],
		page: 1,
		records: 0,
		total: 0
	};
	var init = function() {
			var jqObj = {
				datatype: "local",
				autowidth: true,
				shrinkToFit: false,
				autoScroll: true,
				height: 'auto',
				viewrecords: false,
				caption: options.caption,
				rowNum: options.rows,
				onSelectRow: function(rowid, status) {
					var p = (showData.page - 1) * (options.rows) + Number(rowid);
					checks[p] = status;
				},
				onSelectAll: function(aRowids, status) {
					var p = (showData.page - 1) * (options.rows);
					for (var i = 1; i <= aRowids.length; i++) {
						checks[p + i] = status;
					}
				},
				loadComplete: function() {
					//先删再插入数据，保证无重复
					var rowIds = $(selector).jqGrid('getDataIDs');
					for (var i = 0; i < rowIds.length; i++) {
						$(selector).jqGrid("delRowData", rowIds[i]);
					}
					$('#gridPager_right').html('共' + showData.records + '条记录')
						//数组模式
					var gData = showData.gData;
					var first = (showData.page - 1) * options.rows + 1;
					for (var i = 0; i < gData.length; i++) {
						var rowData = {};
						for (var j = 0; j < options.colNames.length; j++) {
							rowData[j + ''] = gData[i][j];
						}
						$(selector).jqGrid('addRowData', i + 1, rowData);
						if (checks[Number(first) + Number(i)]) {
							$(selector).jqGrid("setSelection", i + 1);
						}
					}
					//注：列样式需要在这里生效！
					for (var i = 0; i < options.colNames.length; i++) {
						var m = {};
						m.name = i + '';
						m.align = "center";
						//注入formatter
						if (typeof options.styles[i] != 'undefined') {
							$('td[aria-describedby="gridTable_' + i + '"]').css(options.styles[i]);
						}
					}
				},
				onPaging: function(pgButton) {
					//					$(selector).clearGridData();
					switch (pgButton) {
						//首页事件
						case 'first_gridPager':
							showData.page = 1;
							break;
							//最后一页事件
						case 'last_gridPager':
							showData.page = showData.total;
							break;
							//前一页事件
						case 'prev_gridPager':
							if (showData.page > 1) {
								showData.page = showData.page - 1;
							}
							break;
							//下一页事件
						case 'next_gridPager':
							if (showData.page < showData.total) {
								showData.page = Number(showData.page) + 1;
							}
							break;
					}
					$.extend({}, showData, buffer.read((showData.page - 1) * options.rows + 1, options.rows, showData.page) || {});
				},
				localReader: { //  
					page: function(obj) {
						return showData.page;
					},
					total: function(obj) {
						return showData.total;
					},
					records: function(obj) {
						return showData.records;
					},
					repeatitems: true,
					id: "no_id"
				},
				pager: '#p_'+selector.substring(3),
				hidegrid: false,
				multiselect: true,
			};
			jqObj.colNames = options.colNames;
			jqObj.colModel = [];
			for (var i = 0; i < options.colNames.length; i++) {
				var m = {};
				m.name = i + '';
				m.align = "center";
				//注入formatter
				if (typeof options.formatters[i] != 'undefined') {
					m.formatter = eval(options.formatters[i])
				}
				//注入width
				if (typeof options.widths[i] != 'undefined') {
					m.width = options.widths[i]
				}
				jqObj.colModel.push(m)
			}
			$(selector).jqGrid(jqObj);
			//执行某些数据清空操作
			for (var i = 0; i <= showData.records; i++) {
				checks[i] = false;
			}
			$(selector).closest(".ui-jqgrid-bdiv").css({
				'overflow-x': 'scroll'
			});
			$(selector).closest(".ui-jqgrid-bdiv").css({
				'overflow-y': 'scroll'
			});
			$(selector).closest(".ui-jqgrid-bdiv").css({
				'width': '100%'
			});
			//初始化跳页事件
			//处理jqgrid页码框失去焦点事件
			$('.ui-pg-input').blur(function() {
					var v = $(this).val();
					var p = parseInt(v);
					if (p == v) {
						if (p >= 1 && p <= options.total) {
							//						console.log("p:" + p);
							showData.page = p;
							showData.gData = buffer.read(1, 10);
							$(selector).trigger("reloadGrid")
						}
					} else {
						$(this).val(showData.page);
					}
				})
				//处理全选事件
				$('#a_'+selector.substring(3)).click(function() {
				var flag = $(this).prop('checked');
				for (var i = 0; i <= showData.records; i++) {
					checks[i] = flag;
				}
				$(selector).trigger("reloadGrid");
			});
		}
		//	init();
	this.injectData = function(data, flag) {
		showData = $.extend({}, showData, data || {});
		if (typeof data.records != 'undefined' && showData.records != data.records) {
			//每当设置record，checks需重置
			checks = [];
		}
		if (flag == true) {} else {
			$(selector).trigger("reloadGrid");
		}
	};
	this.setGridCols = function(newOptions) {
		options = $.extend({}, options, newOptions || {});
		$(selector).jqGrid('GridUnload');
		init();
		//TODO  由于buffer未有，这里注释！
//		this.injectData({
//			gData: buffer.read(1, 10)
//		})
	};
	this.extGrid = function() {
		//checkbox版本
		//		var exData = {};
		//		exData.cols = options.colNames;
		//		exData.recs = [];
		//		for (var i = 1; i <= showData.gData.length; i++) {
		//			if (checks[i]) {
		//				exData.recs.push(showData.gData[i - 1])
		//			}
		//		}
		var exData = [];
		for (var i = 1; i <= checks.length; i++) {
			if (checks[i]) {
				exData.push(i);
			}
		}
		return JSON.stringify(exData).toString();
		//tSel版本
		//		var tSel = "5:16,9:9";
		//		var sels = tSel.split(',');
		//		var a = [];
		//		for (var i = 0; i < sels.length; i++) {
		//			var fl = sels[i].split(':');
		//			if ($.isNumeric(fl[0]) && $.isNumeric(fl[1])) {
		//				var tFirst = parseInt(fl[0]);
		//				var tLast = parseInt(fl[1]);
		//				//如果tFirst > tLast,则抛弃之
		//				if (tFirst <= tLast) {
		//					for (var j = tFirst; j <= tLast; j++) {
		//						a.push(Number(j));
		//					}
		//				}
		//			}
		//		}
		//		if (a.length == 0) {
		//			return a;
		//		}
		//		a.sort(function(a, b) {
		//			return a - b;
		//		});
		//		var returnArray = [];
		//		var max = a[0];
		//		returnArray.push(max);
		//		for (var i = 1; i < a.length; i++) {
		//			if (a[i] > max) {
		//				max = a[i];
		//				returnArray.push(max);
		//			}
		//		}
		//		return returnArray;
	};
	//设置总页数
	this.setTotal = function(total) {
		showData.total = total;
		$(selector).trigger("reloadGrid");
	};
	//设置总条数
	this.setRecords = function(records) {
		showData.records = records;
		//每当设置record，checks需重置
		checks = [];
		$(selector).trigger("reloadGrid");
	}
}

function Buffer() {
	this.read = function(start, num) {
		return [
			[1, "data1"],
			[2, "data2"],
			[3, "data3"],
			[4, "data4"],
			[5, "data5"],
			[6, "data6"],
			[7, "data7"],
			[8, "data8"],
			[9, "data9"],
			[10, "data10"]
		];

	}
}
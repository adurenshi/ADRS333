function validateadd(tagname)// 获取单选的值
{
	var New = document.getElementsByName(tagname);
	var strNew;
	for ( var i = 0; i < New.length; i++) {
		if (New.item(i).checked) {			
			strNew = New.item(i).getAttribute("value");
			if(strNew=="other"){
				strNew=document.getElementById("packnumother").value;
			}
			break;
		} else {
			continue;
		}
	}
	//alert(strNew);
	return strNew;
}

function getRadio(){//磁片（审核）
	  var getval="";
	    if(document.getElementById("appnopass").checked){
	      var appreso=document.getElementById("appreso").value;
	      getval="\"approvalradio\":\"no\",\"reso\":\""+appreso+"\"";
	    }
	   if(document.getElementById("apppass").checked){
	      var appreso=document.getElementById("appreso").value;
	      getval="\"approvalradio\":\"yes\"";
	    }
	  return getval;
}

function testSelectrowsId(selectortable, _gird_idvalue, buttype) {// 表id,得数据库表id字段,业务类型
	var rowDataid = new Array();
	rowDataid.length = 0;
	//var rowData = jQuery(selectortable).jqGrid('getGridParam', 'selarrrow');
	rowDataid=cVei.selectidall();
	//if (rowData.length) {
		if (rowDataid.length) {
	/*	for ( var i = 0; i < rowData.length; i++) {
			var name = jQuery(selectortable).jqGrid('getCell', rowData[i],
					_gird_idvalue);// name是colModel中的一属性
			rowDataid.push(name);
		}*/
			
		if (buttype == "makecheck" || buttype == "rollback") {
			dataStr = "{\"reqtype\":\"" + buttype + "\",\"dataid\":\""
					+ rowDataid.join(",") + "\"}";
		}
		if (buttype == "_optionpack") {
			
			  var vali=/^[1-9]\d*$/;
            if(!vali.test(validateadd("packnum"))){
            	alert("请输入正整数");
            	return false;
            }		
			if(rowDataid.length>parseInt(validateadd("packnum"))){
				alert("实际数量大于指定数");
				return false;
			}
			dataStr = "{\"reqtype\":\"feipei\",\"subpack\":\""
					+ validateadd("packname") + "\"" + ",\"subnumber\":\""
					+ validateadd("packnum") + "\"" + ",\"dataid\":\""
					+ rowDataid.join(",") + "\"}";
		}
		if (buttype == "approval") {//磁片（审核，通过与不通过）
			dataStr = "{\"reqtype\":\"approval\","+getRadio()+",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		
		if (buttype == "approval2") {//磁片（审核，下达任务）
			dataStr = "{\"reqtype\":\"approval2\","+getRadio()+",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		
		if (buttype == "resetfeipei") {//磁片（制卡任务分配，重新分配）
			dataStr = "{\"reqtype\":\"resetfeipei\",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}	
		
		/////////////////第二个子系统//////////////////
		if (buttype == "maketaskacce") {//磁片（受理制卡任务，受理动作）
			dataStr = "{\"reqtype\":\"maketaskacce\",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		if (buttype == "accecarddata") {//磁片（接收制卡数据，接收制卡数据的动作）
			dataStr = "{\"reqtype\":\"accecarddata\",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		
		if (buttype == "backplatemanagecheck") {//磁片（回盘数据管理，验证）
			var tempstate=document.getElementById("ifcheckvalue").value;
			var packname1to2=document.getElementById("packname1to2").value
			if(tempstate=="no"){
				alert("没有选择，请选择!");
				return false;
			}
			dataStr = "{\"reqtype\":\"backplatemanagecheck\",\"dataid\":\""
			+ rowDataid.join(",") + "\",\"ifcheckvalue\":\""
			+ tempstate + "\",\"packname\":\""+ packname1to2 + "\"}";
			//alert(packname1to2+"：包");
		}
		if (buttype == "backplatemanagegoback") {//磁片（回盘数据管理，退回）,不要了
			var tempstate1=document.getElementById("gobackreason").value;
			if(tempstate1==""){
				alert("没有输入退回原因!");
				return false;
			}
			dataStr = "{\"reqtype\":\"backplatemanagegoback\",\"dataid\":\""
			+ rowDataid.join(",") + "\",\"ifcheckvalue1\":\""
			+ tempstate1 + "\"}";
		}
		if (buttype == "uploaddata") {//回盘数据管理（上传）
			dataStr = "{\"reqtype\":\"uploaddata\",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		
		if (buttype == "reportgoback") {//磁片（上传回盘数据－回盘上报）
			dataStr = "{\"reqtype\":\"reportgoback\",\"dataid\":\"1\",\"packname\":\""
			+ document.getElementById("packnameid").value + "\"}";
			//alert(document.getElementById("packnameid").value);
		}
		
		if (buttype == "badcardmanagerhandle") {//磁片（坏卡次卡管理－处理）
			dataStr = "{\"reqtype\":\"badcardmanagerhandle\",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		if (buttype == "badcardmanagercheck") {//磁片（坏卡次卡管理－审核）
			dataStr = "{\"reqtype\":\"badcardmanagercheck\",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		if (buttype == "badcardreasoncheck") {//磁片（坏卡，次卡审核）
			dataStr = "{\"reqtype\":\"badcardcheck\","+getRadio()+",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		if (buttype == "addpersoninfo") {//磁片（个人化信息添加）
			dataStr = "{\"reqtype\":\"addpersoninfo\","+addpersonformdata()+",\"dataid\":\""
			+ rowDataid.join(",") + "\"}";
		}
		
		datatoserver = function() {
			return dataStr;
		}

		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstosubpackupdate', cMsgConfigure);

	}
}

function undofeipack(packname){	//撤消分包	
	dataStr = "{\"reqtype\":\"undofeipack\",\"dataid\":\"1\",\"packname\":\""+packname+"\"}";
	alert(dataStr);
	datatoserver = function() {
		return dataStr;
	}
	cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
			'MsgGetDbRecstosubpackupdate', cMsgConfigure);
}


function updatereportstates(){	//磁片（上报制卡状态，上报按扭）	
	dataStr = "{\"reqtype\":\"updatereportstate\",\"dataid\":\"1\","+reportcardformdata();
	datatoserver = function() {
		return dataStr;
	}
	cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
			'MsgGetDbRecstosubpackupdate', cMsgConfigure);
}


function reportcardformdata(){
	 formData = "\"packnameid\":\""+document.getElementById("packnameid").value+"\"";//包号
	 formData += ",\"reportperson\":\""+document.getElementById("reportperson").value+"\"";//上报人
	 formData += ",\"iphone\":\""+document.getElementById("iphone").value+"\"";//联系电话
	 formData += ",\"reportdate\":\""+document.getElementById("reportdate").value+"\"";//上报日期
	 formData += ",\"cardnumber\":\""+document.getElementById("cardnumber").value+"\"";//完成卡数量
	 formData += ",\"userequ\":\""+document.getElementById("userequ").value+"\"";//设备
	 formData += ",\"worktask\":\""+document.getElementById("worktask").value+"\"";//工作任务
	 formData += ",\"Privacy\":\""+document.getElementById("Privacy").value+"\"";//所涉及的隐私数据
	 formData += ",\"completeDate\":\""+document.getElementById("completeDate").value+"\"}";//预计完成时间	
     return formData;
}


function badcardadd(){	//磁片（次卡、坏卡管理，添加）	
	dataStr = "{\"reqtype\":\"badcardadd\",\"dataid\":\"1\","+badcarddata();
	datatoserver = function() {
		return dataStr;
	}
	cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
			'MsgGetDbRecstosubpackupdate', cMsgConfigure);
}


function badcarddata(){
	 formData = "\"packnameid\":\""+document.getElementById("packnameid").value+"\"";//包号
	 formData += ",\"badssn\":\""+document.getElementById("badssn").value+"\"";//ssn
	 formData += ",\"serialsNumber\":\""+document.getElementById("serialsNumber").value+"\"";//坏卡流水号
	 formData += ",\"coopBank\":\""+document.getElementById("coopBank").value+"\"";//合作银行
	 formData += ",\"person\":\""+document.getElementById("person").value+"\"";//上报人
	 formData += ",\"fromBadCard\":\""+document.getElementById("fromBadCard").value+"\"";//坏卡来源
	 formData += ",\"factorybus\":\""+document.getElementById("factorybus").value+"\"";//制卡厂商
	 formData += ",\"badreason\":\""+document.getElementById("badreason").value+"\"}";//坏卡原因
     return formData;
}

// 分包，审核，撤回开始//////////////
function reqFormDatato() {// 一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
	// alert("从消息人口gotoMsgHandle 进入 消息处理函数reqQueryDb");
	var sendData = datatoserver();// 调用用户自己的数据提取函数
	// (serverUri,method,isAsync,sendData)
	//alert(sendData);
	cVe.setConn(cServerUri, "POST", true, sendData);
}

function addpersonformdata(){//返回个人化信息
	var New=document.getElementById("personinfodiv").getElementsByTagName("input");	
	//var formData="";
	var formData="\"personinfo\":\"";
	for ( var i = 0; i < New.length; i++) {
		if (New.item(i).checked) {
			//formData +="\""+New.item(i).getAttribute("id")+"\":\""+New.item(i).getAttribute("value")+"\",";
		    formData +=New.item(i).getAttribute("value")+","
		}
	}
    return formData.substring(0, formData.length-1)+"\"";
}

////上报信息，添加开始/////
function reportupadd(){	//磁片（次卡、坏卡管理，添加）	
	var selectid = $("#handid option:selected").text();
	

		dataStr = "{\"reqtype\":\"reportgobackaddinfo\",\"dataid\":\"1\","+reportupadddata();
		
		datatoserver = function() {
			return dataStr;
		}
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstosubpackupdate', cMsgConfigure);
		
	

		
	
	
}


function reportupadddata(){
	 formData = "\"idxx\":\""+document.getElementById("idxx").value+"\"";//id号,外键
	 formData += ",\"ssn\":\""+document.getElementById("ssn").value+"\"";//ssn
	 formData += ",\"cobank\":\""+document.getElementById("cobank").value+"\"";//合作银行
	 formData += ",\"personcardid\":\""+document.getElementById("personcardid").value+"\"";//银行卡号
	 formData += ",\"bankpassword\":\""+document.getElementById("bankpassword").value+"\"";//初始密码
	 formData += ",\"handid\":\""+document.getElementById("handid").value+"\"}";//芯片号	
     return formData;
}


////上报信息，添加结束/////////
//回盘上报按扭
function reportupupup(){	//磁片（回盘按扭）	
	dataStr = "{\"reqtype\":\"reportgoback\",\"dataid\":\"1\",\"packname\":\""
		+ document.getElementById("packnameid").value + "\"}";
		alert(document.getElementById("packnameid").value);
		datatoserver = function() {
			return dataStr;
		}
	cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
			'MsgGetDbRecstosubpackupdate', cMsgConfigure);
}


function resGetDbRecsseccess() {
	var retData = cVe.XHR.responseText;
	var retDataObj = eval("(" + retData + ")");
	alert("res:" + retData);
	// 分包
	if (retDataObj["EIOVEDATA"] == "updateok") {
		alert("分包成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb', 'MsgGetDbRecsToVeGrid0',
				cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "updateerror") {
		alert("分包失败！");
	}
	// 撤包
	if (retDataObj["EIOVEDATA"] == "undofeipackok") {
		alert("撤消成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb', 'MsgGetDbRecsToVeGrid1',
				cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "undofeipackerror") {
		alert("撤消失败！");
	}
	
	// 制卡审核
	if (retDataObj["EIOVEDATA"] == "updatecheckok") {
		alert("审核成功");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstomakecardno2', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "updateecheckerror") {
		alert("审核失败！");
	}
	// 制卡撤回
	if (retDataObj["EIOVEDATA"] == "updatebackok") {
		alert("撤回成功");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstomakecardno1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "updatebackerror") {
		alert("撤回失败！");
	}
	
	// 磁片,审核(通过与不通过)
	if (retDataObj["EIOVEDATA"] == "updateapprovalok") {
		alert("审核成功");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstoapprovaltask1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "updateapprovalerror") {
		alert("审核失败！");
	}
	
	// 磁片,审核(通过与不通过)
	if (retDataObj["EIOVEDATA"] == "updateapproval2ok") {
		alert("下达任务成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstoapprovaltask1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "updateapproval2error") {
		alert("下达任务失败！");
	}
	
	
	if (retDataObj["EIOVEDATA"] == "backplatemanagecheckok") {
		alert("回盘验证成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstobackplate3', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "backplatemanagecheckerror") {
		alert("回盘验证失败！");
	}
	if (retDataObj["EIOVEDATA"] == "uploaddataok") {
		alert("上传成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstobackplate2', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "uploaddataerror") {
		alert("上传失败！");
	}
	
	
	// 磁片,制卡任务分配(重新分配)
	if (retDataObj["EIOVEDATA"] == "resetfeipeiok") {
		alert("重新分配成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstomakecardno1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "resetfeipeierror") {
		alert("重新分配失败！");
	}
	
	// 磁片,制卡任务分配(重新分配)
	if (retDataObj["EIOVEDATA"] == "maketaskacceok") {
		alert("受理成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstomaketask1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "maketaskacceerror") {
		alert("受理失败！");
	}

	// 磁片,接收制卡数据(接收确定)
	if (retDataObj["EIOVEDATA"] == "accecarddataok") {
		alert("接收制卡数据成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstoaccepterdata1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "accecarddataerror") {
		alert("接收制卡数据失败！");
	}
	
	
	// 磁片,接收制卡数据(接收确定)
	if (retDataObj["EIOVEDATA"] == "updatereportstateok") {
		alert("上报制卡状态成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb',
				'MsgGetDbRecstoreportmakestate1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "updatereportstateerror") {
		alert("上报制卡状态失败！");
	}
	
	//磁片（上传回盘数据－回盘上报）
	if (retDataObj["EIOVEDATA"] == "reportgobackok") {
		alert("上报回盘数据成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportgoback0', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "reportgobackerror") {
		alert("上报回盘数据失败！");
	}
	
	//磁片（上传回盘数据－回盘信息添加）
	if (retDataObj["EIOVEDATA"] == "reportgobackaddinfook") {
		alert("个人回盘数据添加成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportgoback1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "reportgobackaddinfoerror") {
		alert("个人回盘数据添加失败！");
	}
	
	//磁片（坏卡次卡－添加）
	if (retDataObj["EIOVEDATA"] == "badcarddataok") {
		alert("坏卡次卡添加成功！");
		//cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportgoback1', cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "badcarddataerror") {
		alert("坏卡次卡添加失败！");
	}
	
	if (retDataObj["EIOVEDATA"] == "badcardmanagerhandleok") {
		alert("坏卡次卡处理成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardmanage1',cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "badcardmanagerhandleerror") {
		alert("坏卡次卡处理失败！");
	}
	if (retDataObj["EIOVEDATA"] == "badcardmanagercheckok") {
		alert("提交审核成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardmanage2',cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "badcardmanagercheckerror") {
		alert("提交审核失败！");
	}
	
	if (retDataObj["EIOVEDATA"] == "badcardcheckreasonok") {//坏卡，次卡审核成功
		alert("审核成功！");
		cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardcheck1',cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "badcardcheckreasonerror") {
		alert("审核失败！");
	}
	if (retDataObj["EIOVEDATA"] == "addpersoninfook") {//卡片信息个人化管理,添加信息成功
		alert("个人化信息添加成功！");
		//cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardcheck1',cMsgConfigure);
	} else if (retDataObj["EIOVEDATA"] == "addpersoninfoerror") {
		alert("个人化信息添加失败！");
	}
	
}
// 分包，审核 结束/////////////////////

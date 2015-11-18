//本文件对应的页面组所需的全局JS变量
var cVe= new EIO.ve();
var cVei = new EIO.vei();
var cVeUti = new EIO.veUti();
//Tree初始化－－－－－－－
var Dtree=cVei.initTree("ddd","<a href='' onclick=\"cVe.startReqByMsgMap(cVeName,'MsgInjectTree1','MsgInjectDTree1',cMsgConfigure)\">全国2</a>"); 

var cVeName="VeDemo1";//定义本应用的Ve引擎名称，用户自定义，用作服务按的消息处理调度
var cServerUri="EIOServletMsgEngine" //指定servlet的引用名，该名为web.xml中指定的<url-pattern>内容
var cMsgConfigure;

///////////////////系统初始化消息//////////////////
function reqSysInit()
{//系统初始化消息，被ve自动调用
	//请求消息数据格式：{"MsgInitName1" : Init初始化名称1, "MsgInitName2" : Init初始化名称21, ...}
	  //回送消息数据格式：{Init初始化名称1 : 回送数据1, Init初始化名称2 : 回送数据2, ...}	
  //alert("从消息人口 进入 消息处理函数reqSysInit();	
 var sendData = "{\"MsgInitName1\": \"GetMsgMap\"}";
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resSysInit()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用

 var retData =cVe.XHR.responseText;
 //alert("设置cookie:"+retData);
 //alert("++++==="+ratData);
 //alert("从 消息响应人口 进入 消息回应消息处理函数reqSysInit()， 获得服务器的响应数据为：" +cVe.cEioVeDataId+"=="+retData); 
 var retDataObj=eval("("+retData+")");	
 //                         ["EIOVEDATA"].GetMsgMap
 cMsgConfigure = retDataObj[cVe.cEioVeDataId].GetMsgMap;//配置文件信息
 //cVeUti.Cookie.setCookie("VeMsgMap",retData);//将消息映射保存到Cookies
 
 //alert(cVeUti.Cookie.getCookie('VeMsgMap'));
 //这里调用其他初始化程序
 //cVe.startReqByMsgMap(cVeName, 'MsgVcInject','MsgVcInjectSelect',cMsgConfigure);
 if(pageoption=='accemaketask.html'){//未受理制卡任务
 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomaketask1',cMsgConfigure);
 }
 if(pageoption=='accecarddata.html'){//未接收数据
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoaccepterdata1',cMsgConfigure);
}
 if(pageoption=='reportmakestate.html'){//
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportmakestate1',cMsgConfigure);
	// cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','1MsgGetDbRecstoreportmakestate1',cMsgConfigure);
}
 if(pageoption=='reportgoback.html'){//
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportgoback0',cMsgConfigure);
	// cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','1MsgGetDbRecstoreportmakestate1',cMsgConfigure);
}
}

function extLoginData()
{
	var loginData;
	 loginData ="{\"MsgUserName\": " + "\""+ document.getElementById("idUsername").value + "\"";
		"\"Msgpassword\": " + "\""+document.getElementById("idPassword").value + "\""; "\"MsgcheckCode\": " + "\""+ document.getElementById("idCheckCode").value + "\"}";
	 //loginData += "&password="+document.getElementById("password").value;
	 return loginData;
}
///////////////////////////登录///////////////////////
function reqLogin()
{//系统初始化消息，被ve自动调用
	//请求消息数据格式：{"MsgInitName1" : Init初始化名称1, "MsgInitName2" : Init初始化名称21, ...}
	  //回送消息数据格式：{Init初始化名称1 : 回送数据1, Init初始化名称2 : 回送数据2, ...}	
  //alert("从消息人口 进入 消息处理函数reqSysInit();
 var userName;
 var password;
 var checkCode;
 userName=document.getElementById(id)
 var sendData = extLoginData();
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resLogin()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用

 var retData =cVe.XHR.responseText;
 //alert("从 消息响应人口 进入 消息回应消息处理函数reqSysInit()， 获得服务器的响应数据为：" +cVe.cEioVeDataId+"=="+retData); 
 var retDataObj=eval("("+retData+")");	
 var cLoginPermission=retDataObj[cEioVeDataId];
 if(cLoginPermission[0]=="true"){
		if(cLoginPermission[1]=='0')
		{
			window.location.href="selfmanage.html";
		}else if(cLoginPermission[1]=='2'||cLoginPermission[1]=='3')
		{
			window.location.href="usermanage.html";
		}else if(cLoginPermission[1]=='1')
		{
			window.location.href="educationcenter.html";
		}
		LoggedUser=document.getElementById("username").value;
	}else if(cLoginPermission[0]=="false")
	{
		alert("用户名或密码错误，无权访问");
	}
 cMsgConfigure = retDataObj[cVe.cEioVeDataId].GetMsgMap;
 cVeUti.Cookie.setCookie("VeLoginPermission",retData);//将消息映射保存到Cookies
 
 //alert(cVeUti.Cookie.getCookie('VeMsgMap'));
 //这里调用其他初始化程序
 cVe.startReqByMsgMap(cVeName, 'MsgVcInject','MsgVcInjectSelect',cMsgConfigure);

}

function reqFormDatatomaketast1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecmaketast1()
{
	var selectortable="#g_tab14";
	var tablepage="#p_tab14";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','卡数量','合作银行','完成日期','数据方式'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'110%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'110%',align: 'right'},
           { name: 'card_sub_pri_id', index: 'card_sub_pri_id', width:'110%',align: 'right'},
           { name: 'if_distrubution', index: 'if_distrubution', width:'110%',align: 'right'},
           { name: 'co_factory_id', index: 'co_factory_id', width:'110%',align: 'right'},   
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
       cVei.myGrid(selectortable,tablepage,colNA,colMA);      
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	//alert("无数据了");                    	
    }
     cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstomaketask2',cMsgConfigure);
      
}

function reqFormDatatomaketast2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecmaketast2()
{
	var selectortable="#g_tab15";
	var tablepage="#p_tab15";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','卡数量','合作银行','完成日期','数据方式'];
    colMA=[{ name: 'id号', index: 'id号', width:'150%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'150%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'150%',align: 'right'},
           { name: 'card_sub_pri_id', index: 'card_sub_pri_id', width:'150%',align: 'right'},
           { name: 'if_distrubution', index: 'if_distrubution', width:'150%',align: 'right'},
           { name: 'co_factory_id', index: 'co_factory_id', width:'150%',align: 'right'},   
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
       cVei.myGrid(selectortable,tablepage,colNA,colMA);      
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	//alert("无数据了");                    	
    }      
}

function reqFormDatatoaccepterdata1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecaccepterdata1()
{
	var selectortable="#g_tab16";
	var tablepage="#p_tab16";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','卡数量','合作银行','完成日期','数据方式'];
    colMA=[{ name: 'id号', index: 'id号', width:'150%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'150%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'150%',align: 'right'},
           { name: 'card_sub_pri_id', index: 'card_sub_pri_id', width:'150%',align: 'right'},
           { name: 'if_distrubution', index: 'if_distrubution', width:'150%',align: 'right'},
           { name: 'co_factory_id', index: 'co_factory_id', width:'150%',align: 'right'},   
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
       cVei.myGrid(selectortable,tablepage,colNA,colMA);      
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	//alert("无数据了");                    	
    }
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoaccepterdata2',cMsgConfigure);    
}

function reqFormDatatoaccepterdata2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function unloadfile(packid){
	cVei.exportdata('sqltype');	
}
function resGetDbRecaccepterdata2()
{
	var selectortable="#g_tab17";
	var tablepage="#p_tab17";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','卡数量','合作银行','完成日期','数据方式','导出操作'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'150%',align: 'right'},
           { name: 'card_count', index: 'card_count', width:'120%',align: 'right'},
           { name: 'card_sub_pri_id', index: 'card_sub_pri_id', width:'120%',align: 'right'},
           { name: 'if_distrubution', index: 'if_distrubution', width:'150%',align: 'right'},
           { name: 'co_factory_id', index: 'co_factory_id', width:'120%',align: 'right'},
           {name:'id号',align:'center', label:'操作',formatter:function(cellvalue, options, row){return  '<a href=\"#\" class=\"btn\" onclick=cVei.exportdata(\"packid\",\"'+row.pakage_number+'\")>导出制卡数据</a>'}},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');    
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	//alert("无数据了");                    	
    }     
}

function reqFormDatatoreportmakestate1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecreportmakestate1()
{
	var retData =cVe.XHR.responseText;
	var retDataObj=eval("("+retData+")");
   if(retDataObj["EIOVEDATA"]!='rsisempty'){     
	   var arrdateoption=new Array();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         for(var key1 in retDataObj["EIOVEDATA"][i]){
               arrdateoption.push(retDataObj["EIOVEDATA"][i]['package_number']);
               break;
           } 
       }
       cVei.injectSelect("packnameid",arrdateoption);
    }else{
    	cVei.injectSelect("packnameid",new Array('无上报数据包'));
    	//alert("无数据了");                    	
    }
     cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportmakestate2',cMsgConfigure);     
}

function reqFormDatatoreportmakestate2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecreportmakestate2()
{
	var selectortable="#g_tab18";
	var tablepage="#p_tab18";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','开始时间','预计完成时间','任务状态'];
    colMA=[{ name: 'id号', index: 'id号', width:'150%',align: 'right'},
           { name: 'package_number', index: 'package_number', width:'190%',align: 'right'},
           { name: 'req_compl_date', index: 'req_compl_date', width:'190%',align: 'right'},
           { name: 'date_of_declaration', index: 'date_of_declaration', width:'180%',align: 'right'},
           { name: 'task_status', index: 'task_status', width:'190%',align: 'right'},
          ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
   cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');     
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }     
       cVei.myreloadGrid();
    }else{
    	//alert("无数据了");                    	
    }
}

function reqFormDatatoreportgoback0()
{

 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecreportgoback0()
{
	
	var retData =cVe.XHR.responseText;
	var retDataObj=eval("("+retData+")");
   if(retDataObj["EIOVEDATA"]!='rsisempty'){     
	   var arrdateoption=new Array();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         for(var key1 in retDataObj["EIOVEDATA"][i]){
               arrdateoption.push(retDataObj["EIOVEDATA"][i]['package_number']);
               break;
           } 
       }
       cVei.injectSelect("packnameid",arrdateoption);
    }else{
    	cVei.injectSelect("packnameid",new Array('无上报数据包'));
    	//alert("无数据了");                    	
    }
     cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportgoback1',cMsgConfigure);     
}


function reqFormDatatoreportgoback1()
{
formData = "{\"packnameid\":\""+document.getElementById("packnameid").value +"\"}";
 cVe.setConn(cServerUri,"POST", true, formData);
}



function resGetDbRecreportgoback1()
{
	var selectortable="#g_tab19";
	var tablepage="#p_tab19";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN号','合作银行','银行卡号','初化始密码','芯片号'];
    colMA=[{ name: 'foreid', index: 'foreid', width:'150%',align: 'right'},
           { name: 'package_number', index: 'package_number', width:'150%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'150%',align: 'right'},
           { name: 'co_bank_cardno', index: 'co_bank_cardno', width:'150%',align: 'right'},
           { name: 'card_serial_number', index: 'card_serial_number', width:'150%',align: 'right'},
           { name: 'initial_password', index: 'initial_password', width:'150%',align: 'right'},
           { name: 'handid', index: 'handid', width:'150%',align: 'right'},
          ];
    cVei.myGridmodi(selectortable,tablepage,colNA,colMA);
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	    cVei.myGridmodi(selectortable,tablepage,colNA,colMA);    
       cVei.myclearGridData();
       var arrdateoption=new Array();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]); 
       }  
       document.getElementById("exportsql").value=retDataObj["sql"];
       cVei.myreloadGrid(); 
       
    }else{
    	 cVei.myclearGridData();
    	//alert("无数据了");                    	
    }
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportgoback2',cMsgConfigure);
}


function reqFormDatatoreportgoback2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecreportgoback2()
{
	var selectortable="#g_tab20";
	var tablepage="#p_tab20";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN号','合作银行','银行卡号','初化始密码','芯片号'];
    colMA=[{ name: 'foreid', index: 'foreid', width:'110%',align: 'right'},
           { name: 'package_number', index: 'package_number', width:'150%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'co_bank_cardno', index: 'co_bank_cardno', width:'120%',align: 'right'},
           { name: 'card_serial_number', index: 'card_serial_number', width:'120%',align: 'right'},
           { name: 'initial_password', index: 'initial_password', width:'120%',align: 'right'},
           { name: 'handid', index: 'handid', width:'150%',align: 'right'},
          ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');     
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       } 
       document.getElementById("exportsql2").value=retDataObj["sql"];
       cVei.myreloadGrid();
       
    }else{
    	//alert("无数据了");                    	
    }  
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstoreportgoback3',cMsgConfigure);
}

function reqFormDatatoreportgoback3()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecreportgoback3()
{
	var selectortable="#g_tab21";
	var tablepage="#p_tab21";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','合作银行','银行卡号','初化始密码','退回原因'];
    colMA=[{ name: 'id号', index: 'id号', width:'125%',align: 'right'},
           { name: 'package_number', index: 'package_number', width:'140%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'125%',align: 'right'},
           { name: 'card_sub_pri_id', index: 'card_sub_pri_id', width:'125%',align: 'right'},
           { name: 'co_bank_cardno', index: 'co_bank_cardno', width:'125%',align: 'right'},
           { name: 'initial_password', index: 'initial_password', width:'125%',align: 'right'},
           { name: 'reason', index: 'reason', width:'125%',align: 'right'},
           
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');     
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }  
       document.getElementById("exportsql3").value=retDataObj["sql"];
       cVei.myreloadGrid();
    }else{
    	//alert("无数据了");                    	
    }       
}

/*function reqInjectTree() {
    var range = ""; //指定要显示的树形目录的范围，如果为空则默认为全国。
    var sendData = "{\"TreeName\":\"NationalAdmRegion\",\"TreeRange\":\"" + range + "\"}"; //
    cVe.setConn(cServerUri, "POST", false, sendData);
}

function resInjectTree(reqStatus) { //一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用
    var retData = cVe.XHR.responseText;
    var retDataObj = eval("(" + retData + ")");
    var divID = 'treeDiv';
    var pagename = "#"
    cVei.injectTree(divID, retDataObj[cVe.cEioVeDataId], Dtree, pagename);
}*/
//获取全国机构树形结构信息

window.onload=function(){
	
		
	
	 //cVe.startReqByMsgHandle(cVeName, '','', 'reqInjectTree', 'resInjectTree', 'csAsc.ECOSS.reso.demo1.CMsgGetTree.handleMsg')
		cVe.startReqByMsgHandle(cVeName, 'MsgInit','MssgInitMsgMap','reqSysInit', 'resSysInit', 'csAsc.EIO.SysMsgHandle.CMsgInit.handleMsg');	 
		
		//Dtree = cVei.initTree("treeDiv", "全国");
}

$().ready(
		function(){
		
		}	
);

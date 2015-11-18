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
 if(pageoption=='badcardmanager.html'){
 //alert("maketaskhtml");
 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardmanage1',cMsgConfigure);
 }

 if(pageoption=='badcardcheck.html'){
	 //alert("maketaskhtml");
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardcheck1',cMsgConfigure);
	 }
 
 if(pageoption=='cardinfoprivate.html'){
	 cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstocardpersonmanager1',cMsgConfigure);
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

function reqFormDatatobadcardmanage1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadcardmanage1()
{
	var selectortable="#g_tab22";
	var tablepage="#p_tab22";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','制卡厂商','坏卡原因','上报人','提交日期','是否处理'];
    colMA=[{ name: 'id号', index: 'id号', width:'125%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'140%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'125%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'125%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'125%',align: 'right'},
           { name: 'cardfactory', index: 'cardfactory', width:'125%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'125%',align: 'right'},
           { name: 'person', index: 'person', width:'125%',align: 'right'},
           { name: 'dataSubmitted', index: 'dataSubmitted', width:'125%',align: 'right'},
           { name: 'ifProcess', index: 'ifProcess', width:'125%',align: 'right'},
           
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
    	alert("无数据了");                    	
    } 
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardmanage2',cMsgConfigure);
       
}

function reqFormDatatoselectcardfactory()
{
 cVe.setConn(cServerUri,"POST", true, "");
}

function resGetDbRecselectcardfactory()
{
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
   if(retDataObj["EIOVEDATA"]!='rsisempty'){
	   var arrdateoption=new Array();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         for(var key1 in retDataObj["EIOVEDATA"][i]){       	 
               arrdateoption.push(retDataObj["EIOVEDATA"][i]['factoryname']);
               break;
           } 
       }
       cVei.injectSelect("factorybus",arrdateoption);
    }else{
    	cVei.injectSelect("factorybus",new Array('无厂商分配'));
    	alert("无数据了");                    	
    }
   cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstocardfactory',cMsgConfigure);
         
}


function reqFormDatatobadcardmanage2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadcardmanage2()
{
	var selectortable="#g_tab23";
	var tablepage="#p_tab23";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','制卡厂商','坏卡原因','受理日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'100%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'110%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'110%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'110%',align: 'right'},
           { name: 'cardfactory', index: 'cardfactory', width:'110%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'125%',align: 'right'},
           { name: 'AcceptanceDate', index: 'AcceptanceDate', width:'125%',align: 'right'},
           ];
    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');
       if(retDataObj["EIOVEDATA"]!='rsisempty'){
    	    cVei.myGrid(selectortable,tablepage,colNA,colMA,'id号');    
       cVei.myclearGridData();
       for(var i=0;i<=retDataObj["EIOVEDATA"].length;i++){
         jQuery(selectortable).jqGrid('addRowData',i+1,retDataObj["EIOVEDATA"][i]);  
       }  
       document.getElementById("exportsql").value=retDataObj["sql"];
       cVei.myreloadGrid();
    }else{
    	alert("无数据了");                    	
    }  
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardmanage3',cMsgConfigure);
       
}


function reqFormDatatobadcardmanage3()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadcardmanage3()
{
	var selectortable="#g_tab24";
	var tablepage="#p_tab24";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','制卡厂商','坏卡原因','审核人','退回原因'];
    colMA=[{ name: 'id号', index: 'id号', width:'80%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'100%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'100%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'100%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'100%',align: 'right'},
           { name: 'cardfactory', index: 'cardfactory', width:'100%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'100%',align: 'right'},
           { name: 'personckeck', index: 'personckeck', width:'100%',align: 'right'},
           { name: 'backreason', index: 'backreason', width:'100%',align: 'right'},     
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
    	alert("无数据了");                    	
    }       
}


function reqFormDatatobadcardcheck1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadcardcheck1()
{
	var selectortable="#g_tab25";
	var tablepage="#p_tab25";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','制卡厂商','坏卡原因','上报人','提交日期','是否处理'];
    colMA=[{ name: 'id号', index: 'id号', width:'125%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'140%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'125%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'125%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'125%',align: 'right'},
           { name: 'cardfactory', index: 'cardfactory', width:'125%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'125%',align: 'right'},
           { name: 'person', index: 'person', width:'125%',align: 'right'},
           { name: 'dataSubmitted', index: 'dataSubmitted', width:'125%',align: 'right'},
           { name: 'ifProcess', index: 'ifProcess', width:'125%',align: 'right'},
           
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
    	alert("无数据了");                    	
    } 
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstobadcardcheck2',cMsgConfigure);
       
}

function reqFormDatatobadcardcheck2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadcardcheck2()
{
	var selectortable="#g_tab26";
	var tablepage="#p_tab26";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','制卡厂商','坏卡原因','审核日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'70%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'120%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'120%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'120%',align: 'right'},
           { name: 'cardfactory', index: 'cardfactory', width:'120%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'120%',align: 'right'},
           { name: 'badcheckdate', index: 'badcheckdate', width:'100%',align: 'right'},
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
    	alert("无数据了");                    	
    }       
}

function reqFormDatatocardpersonmanager1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbReccardpersonmanager1()
{
	var selectortable="#g_tab27";
	var tablepage="#p_tab27";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','卡流水号','合作银行'];
    colMA=[{ name: 'id号', index: 'id号', width:'150%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'150%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'150%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'150%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'150%',align: 'right'},
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
    	alert("无数据了");                    	
    } 
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstocardpersonmanager2',cMsgConfigure);
       
}

function reqFormDatatocardpersonmanager2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbReccardpersonmanager2()
{
	var selectortable="#g_tab28";
	var tablepage="#p_tab28";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','卡流水号','合作银行','个人化信息','生成日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'120%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'120%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'130%',align: 'right'},
           { name: 'personinfo', index: 'personinfo', width:'150%',align: 'right'},
           { name: 'compldate', index: 'compldate', width:'150%',align: 'right'},
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
    	alert("无数据了");                    	
    } 
       cVe.startReqByMsgMap(cVeName, 'MsgQueryDb','MsgGetDbRecstocardpersonmanager3',cMsgConfigure);
       
}

function reqFormDatatocardpersonmanager3()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbReccardpersonmanager3()
{
	var selectortable="#g_tab29";
	var tablepage="#p_tab29";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','个人化信息','完成日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'120%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'120%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'130%',align: 'right'},
           { name: 'personinfo', index: 'personinfo', width:'150%',align: 'right'},
           { name: 'compldate', index: 'compldate', width:'150%',align: 'right'},
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
    	alert("无数据了");                    	
    } 
           
}

/////////////////////////////////////
function reqFormDatatobadquerycount_1()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadquerycount_1()
{
	var selectortable="#g_tab30";
	var tablepage="#p_tab30";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','坏卡原因','提交日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'120%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'120%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'130%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'150%',align: 'right'},
           { name: 'dataSubmitted', index: 'dataSubmitted', width:'150%',align: 'right'},
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
    	alert("无数据了");                    	
    } 
           
}

function reqFormDatatobadquerycount_2()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadquerycount_2()
{
	var selectortable="#g_tab31";
	var tablepage="#p_tab31";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','制卡厂商','坏卡原因','审核日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'70%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'120%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'120%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'120%',align: 'right'},
           { name: 'cardfactory', index: 'cardfactory', width:'120%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'120%',align: 'right'},
           { name: 'badcheckdate', index: 'badcheckdate', width:'100%',align: 'right'},
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
    	alert("无数据了");                    	
    }  
           
}

function reqFormDatatobadquerycount_3()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadquerycount_3()
{
	var selectortable="#g_tab32";
	var tablepage="#p_tab32";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','制卡厂商','坏卡原因','上报人','提交日期','是否处理'];
    colMA=[{ name: 'id号', index: 'id号', width:'125%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'140%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'125%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'125%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'125%',align: 'right'},
           { name: 'cardfactory', index: 'cardfactory', width:'125%',align: 'right'},
           { name: 'reasonOfBadCard', index: 'reasonOfBadCard', width:'125%',align: 'right'},
           { name: 'person', index: 'person', width:'125%',align: 'right'},
           { name: 'dataSubmitted', index: 'dataSubmitted', width:'125%',align: 'right'},
           { name: 'ifProcess', index: 'ifProcess', width:'125%',align: 'right'},
           
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
    	alert("无数据了");                    	
    }
           
}

function reqFormDatatobadquerycount_4()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadquerycount_4()
{
	var selectortable="#g_tab33";
	var tablepage="#p_tab33";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','卡流水号','合作银行','个人化信息','生成日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'120%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'120%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'130%',align: 'right'},
           { name: 'personinfo', index: 'personinfo', width:'150%',align: 'right'},
           { name: 'compldate', index: 'compldate', width:'150%',align: 'right'},
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
    	alert("无数据了");                    	
    } 
           
}

function reqFormDatatobadquerycount_5()
{
 cVe.setConn(cServerUri,"POST", true, "");
}
function resGetDbRecbadquerycount_5()
{
	var selectortable="#g_tab34";
	var tablepage="#p_tab34";
	var retData =cVe.XHR.responseText;
    var retDataObj=eval("("+retData+")");
    colNA= ['id号','包号','SSN','坏卡流水号','合作银行','个人化信息','完成日期'];
    colMA=[{ name: 'id号', index: 'id号', width:'100%',align: 'right'},
           { name: 'pakage_number', index: 'pakage_number', width:'120%',align: 'right'},
           { name: 'ssn', index: 'ssn', width:'120%',align: 'right'},
           { name: 'serialsNumberOfBadCard', index: 'serialsNumberOfBadCard', width:'120%',align: 'right'},
           { name: 'coopBank', index: 'coopBank', width:'130%',align: 'right'},
           { name: 'personinfo', index: 'personinfo', width:'150%',align: 'right'},
           { name: 'compldate', index: 'compldate', width:'150%',align: 'right'},
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
    	alert("无数据了");                    	
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

var cVe= new EIO.ve();
var cVei = new EIO.vei();
var cEioVeDataId="EIOVEDATA";
//cVe.test();
var cServerUri="EIOServletMsgEngine" //指定servlet的引用名，该名为web.xml中指定的<url-pattern>内容
var cName="齐德昱";//定义该页面的通信变量
var cWhere="华南理工大学计算机系统研究所csAsc";
var cAge=55;
var cVeNameId="VeName";//消息头中的标识消息种类的Key
var cVeName="VeDemo1";//定义本应用的Ve引擎名称，用户自定义，用作服务按的消息处理调度
var cMsgTypeId="VEReqMsgType";//消息头中的标识消息种类的Key
var cMsgNameId="VEReqMsgName"; //消息头中的标识消息名称的Key
var cGetMsgHead; // = cMsgTypeId+"="+msgType+"&"+cMsgNameId+"="+msgName;
var cJsonMsgHead; // = cMsgTypeId+":"+msgType+","+cMsgNameId+":"+msgName;
//VE的消息头有两种形式: Get格式： VEReqMsgType="消息种类标识符"&VEReqMsgName="消息名称标识符"; JSON格式：=-->:  &-->，  
//消息描述表，JSON格式：定义了本页上的所需的各种消息的处理方式，可以从系统的配置文件vmr.xml读入
var cResFunc;
var cSelData =['中国','俄罗斯','日本','韩国','加拿大'] ;

var cMsgConfigure
     ={ MsgSendFormData:{
                         MsgCheckFormData:{ReqFunc:"reqCheckFormData",ResFunc:"resCheckFormData"},
                         MsgVcInject:{ReqFunc:"sendVcIds",ResFunc:"resInjectVcSelect"},
    	                 MsgProcessFormData:{ReqFunc:"sendFormdata", ResFun:"refreshForm"}
                       },
        MsgVcInject: {
                       MsgVcInjectSelect:{ReqFunc:"reqInjectSelect",ResFunc:"resInjectSelect"},
                       MsgVcInjectInput:{ReqFunc:"sendVcIds",ResFunc:"resInjectVcSelect"},
      	               MsgProcessFormData:{ReqFunc:"sendFormdata", ResFun:"refreshForm"}
                     },               
        MsgGetNewPage:{
        	           MsgOpenNewWindow:{ReqFunc:"reqOpenNewWindow",ResFunc:"resOpenNewWindow"},
        	           MsgSwitchPage:{ReqFunc:"reqGetNewPageData",ResFunc:"resGetNewPageData"},
        	           MsgOpenNewPageFile:{ReqFunc:"reqOpenNewPageFile",ResFunc:"resOpenNewPageFile"},
                      },
        MsgQueryDb:{
          	           MsgGetDbRecs:{ReqFunc:"reqGetDbRecs",ResFunc:"resGetDbRecs"},
          	           MsgGetDbRecsToVeGrid:{ReqFunc:"reqGetDbRecsToVegrid",ResFunc:"resGetDbRecsToVegrid"} 
        	       },
        MsgInjectBuffer:{
          	             MsgInjectBuff1:{ReqFunc:"reqInjectBuffer",ResFunc:"resInjectBuffer"},
          	             MsgInjectBuff2:{ReqFunc:"reqInjectBuffer",ResFunc:"resInjectBuffer"} 
        	           }       	       
      };

////////////////具体的请求消息函数与回复处理函数，在VE消息表中指定============
function reqCheckFormData()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
  //alert("从消息人口gotoMsgHandle 进入 消息处理函数sendFormData");	
 var cGetMsgHead = cVeNameId+"="+cVeName+"&"+ cMsgTypeId+"="+cVe.msgType+"&"+cMsgNameId+"="+cVe.msgName;
 var sendData =cGetMsgHead+"&"+getFormData();//调用用户自己的数据提取函数
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resCheckFormData()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用

 var retData =cVe.XHR.responseText;
 alert("从 消息响应人口 进入 消息回应消息处理函数resCkeckFormData， 获得服务器的响应数据为："+retData); 
 var retDataObj=eval("("+retData+")");	 
 var htmlData = "<table border=0>";
 htmlData += "<tr><td><b>姓名：</b></td><td>" + retDataObj[cEioVeDataId].cName + "</td></tr>";
 htmlData += "<tr><td><b>年龄：</b></td><td>" + retDataObj[cEioVeDataId].cAge + "</td></tr>";
 htmlData += "<tr><td><b>简介：</b></td><td>" + retDataObj[cEioVeDataId].cInfo + "</td></tr>";
 htmlData += "</table>";
		  
 document.getElementById("serverReturn").innerHTML = htmlData;	
}


//////////////////消息sendVcIds的处理与相应函数/////////////////////////
function reqInjectSelect()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
 //返回EIO视图组件Vc的ID号。用于从服务器请求相应的Vc数据
  //alert("从消息人口gotoMsgHandle 进入 消息处理函数sendVcIds");	
  var cGetMsgHead = cVeNameId+"="+cVeName+"&"+ cMsgTypeId+"="+cVe.msgType+"&"+cMsgNameId+"="+cVe.msgName;
  var sendData =cGetMsgHead;
  sendData +="&"+"VcId=idSelCountry" ;//设置信息内容：Vc的ID值，这里假设，ID好用键值对表示，键为VxID,所需数据的HTML元素的iD值
  //(serverUri,method,isAsync,sendData)
  cVe.setConn(cServerUri,"POST", true, sendData);
}

function resInjectSelect()
{//resInjectSelect()的响应处理人口，需要在消息配置表中描述
 //设服务端返回一个JSON格式的字符串：{VcId:VC的id值, VcItems:[条目1，条目2，...]}
 var retData =cVe.XHR.responseText; //获取服务端回送的数据；
 alert("从 消息响应人口 进入 消息回应消息处理函数， 获得服务器的响应数据为："+retData); 
 var retDataObj=eval("("+retData+")");//将消息数据转化为JS的JSON对象，以方便处理	 

 cVei.injectSelect(retDataObj[cEioVeDataId].VcId,retDataObj[cEioVeDataId].VcItems);//调用注入函数，将服务端返回的数据注入到指定的视图控件
}

////////////消息MsgSendLoinData的处理///////////
function reqOpenNewWindow()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
  alert("从消息人口gotoMsgHandle 进入 消息处理函数reqOpenNewWindow");

  var s=injectText("idName");
  var sendData = genMsgHead("TestMainPage", cVe.msgType,cVe.msgName);
  sendData +="&"+cEioVeDataId+"={\"idName\":\"" + s+"\"}" ;//设置信息内容：cName:“张三"为查询条件，该值需要与服务端信息处理器协商确定
  //(serverUri,method,isAsync,sendData)
  cVe.setConn(cServerUri,"POST", true, sendData);
 
}

function resOpenNewWindow()
{//响应处理人口，需要在消息配置表中描述
	//这里收到的数据的格式规定：消息头后接HTML文件内容，以EIO的数据标志（即cEioVeDataId的值）为起点，结束字符必须是"</html>", 大小写无关，要求7个字符
 var retData =cVe.XHR.responseText; //获取服务端回送的数据；
 alert("从 消息响应人口 进入 消息回应消息处理函数resOpenNewWindow， 获得服务器的响应数据为："+retData);
 //var retDataObj=eval("("+retData+")");//将消息数据转化为JS的JSON对象，以方便处理
 k = retData.indexOf(cEioVeDataId);
 kk =retData.lastIndexOf("<"); //定位到最后的</html>
 retData=retData.substring(k+cEioVeDataId.length+2,kk+7);

 //mesg=window.open("","后台生成网页并打开","toolbar=no,,menubar=no,location=no,scrollbars=no");
 mesg=window.open("", "newwin", "height=250, width=250,toolbar=no,scrollbars=no,menubar=no"); 
 
 mesg.document.write(retData);//Chrome不支持？
  
}

function reqGetNewPageData()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
 //从服务端请求一个新网页内容
 var s=injectText("idName");
 var sendData = genMsgHead("TestMainPage", cVe.msgType,cVe.msgName);
 sendData +="&"+cEioVeDataId+"={\"idName\":\"" + s+"\"}" ;//设置信息内容：cName:“张三"为查询条件，该值需要与服务端信息处理器协商确定
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
 
}

function resGetNewPageData()
{//reqGetNewPageData()的响应处理人口，需要在消息配置表中描述
 //设服务端返回一个包含新网页内容的JSON格式串 ：{InitialData:初始化数, HTML:网页串 }
 //初始化数可用于在加载网页时或者其他时间执行JS程序的参数，本例不考虑
 var retData =cVe.XHR.responseText; //获取服务端回送的数据；
 alert("从 消息响应人口 进入 消息回应消息处理函数resGetNewPageData， 获得服务器的响应数据为："+retData);
 var retDataObj=eval("("+retData+")");//将消息数据转化为JS的JSON对象，以方便处理

 retData = "<head> <body><table border=1>";
 retData += "<tr><td><b>第一条：</b></td><td>" + retDataObj[cEioVeDataId].HTML[0] + "</td></tr>";
 retData += "<tr><td><b>第二条：</b></td><td>" + retDataObj[cEioVeDataId].HTML[1] + "</td></tr>";
 retData += "<tr><td><b>第三条：</b></td><td>" + retDataObj[cEioVeDataId].HTML[2] + "</td></tr>";
 retData += "</table> </head> </body>";
 
 //mesg=window.open("","后台生成网页并打开","toolbar=no,,menubar=no,location=no,scrollbars=no");
 switchToNewPage(retData); 
}

//==============MsgOpenNewPageFile==============
function reqOpenNewPageFile()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
 //从服务端请求一个新网页内容
 var s=injectText("idName");
 var sendData = genMsgHead("TestMainPage", cVe.msgType,cVe.msgName);
 sendData +="&"+cEioVeDataId+"={\"idName\":\"" + s+"\"}" ;//设置信息内容：cName:“张三"为查询条件，该值需要与服务端信息处理器协商确定
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
 
}

function resOpenNewPageFile()
{//reqGetNewPageData()的响应处理人口，需要在消息配置表中描述
 //这里收到的数据的格式规定：消息头后接HTML文件内容，以EIO的数据标志（即cEioVeDataId的值）为起点，结束字符必须是"</html>", 大小写无关，要求7个字符
 var retData =cVe.XHR.responseText; //获取服务端回送的数据；
 alert("从 消息响应人口 进入 消息回应消息处理函数resGetNewPageData， 获得服务器的响应数据为："+retData);
 //var retDataObj=eval("("+retData+")");//将消息数据转化为JS的JSON对象，以方便处理
 k = retData.indexOf(cEioVeDataId);
 kk =retData.lastIndexOf("<"); //定位到最后的</html>
 retData=retData.substring(k+cEioVeDataId.length+2,kk+7);
 //document.write('<html><head><script type="text/javascript">document.write("测试")<\/script><head></body></html>');
 
 window.document.write(retData);
 window.document.close();

 //mesg=window.open("","后台生成网页并打开","toolbar=no,,menubar=no,location=no,scrollbars=no");
// switchToNewPage(retData); 
}

//=================MsgGetDbRecs=============
function reqGetDbRecs()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
  //alert("从消息人口gotoMsgHandle 进入 消息处理函数reqQueryDb");	
 var cGetMsgHead = cVeNameId+"="+cVeName+"&"+ cMsgTypeId+"="+cVe.msgType+"&"+cMsgNameId+"="+cVe.msgName;
 var sendData =cGetMsgHead+"&"+getFormData();//调用用户自己的数据提取函数
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resGetDbRecs()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用

 var retData =cVe.XHR.responseText;
 var retDataObj=eval("("+retData+")");	

 document.getElementById("serverReturn").innerHTML="<tr><td><b>";
 for (var i=0;i<retDataObj[cEioVeDataId].length; i++)
 {
  document.getElementById("serverReturn").innerHTML += retDataObj[cEioVeDataId][i]+"<br>";
 }
 document.getElementById("serverReturn").innerHTML+="</tr></td></b>";
	
}

//=================MsgInjectBuffer=============
function reqInjectBuffer()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
 //请求服务端数据，以注入Buffer
 //调用方法：在读Buffer中，判断到需要从服务端请求新数据时，执行：
 //cVe.gotoMsgHandle('MsgInjectBuffer','MsgInjectBuff1',cMsgConfigure)
 //这里，MsgInjectBuff1为针对具体Buffer的消息名称（可以有多个Buffer）
  //alert("从消息人口gotoMsgHandle 进入 消息处理函数reqQueryDb");	
 var cGetMsgHead = cVeNameId+"="+cVeName+"&"+ cMsgTypeId+"="+cVe.msgType+"&"+cMsgNameId+"="+cVe.msgName;
 var sendData =cGetMsgHead+"&"+"&EIO-JSON="+cVe.msgName;//服务端读取EIO-JSON属性值，以识别请求数据的种类（以消息名称标识）
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resInjectBuffer()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用
 //处理服务端回送的数据，将其注入到缓冲区
 //回送的数据格式：{EIOVEDATA:{[r1, r2, ...] }
 //r1,r2， ...的格式：[f1, f2, ...]， 每个f是一个具体的数据内容
	
 var retData =cVe.XHR.responseText;
 var retDataObj=eval("("+retData+")");	
 //回送的数据存储在（长度为retDataObj[cEioVeDataId].length）：retDataObj[cEioVeDataId][i]，每个i为一条记录（数组）
 
 //cVei.Buffer.append(retDataObj[cEioVeDataId]);	
}

//==============reqGetDbRecsToVegrid============
function reqGetDbRecsToVegrid()
{//一个具体的请求消息函数， 在msgConfigure中描述，被ve自动调用
  //alert("从消息人口gotoMsgHandle 进入 消息处理函数reqQueryDb");	
 var cGetMsgHead = cVeNameId+"="+cVeName+"&"+ cMsgTypeId+"="+cVe.msgType+"&"+cMsgNameId+"="+cVe.msgName;
 var sendData =cGetMsgHead+"&"+getFormData();//调用用户自己的数据提取函数
 //(serverUri,method,isAsync,sendData)
 cVe.setConn(cServerUri,"POST", true, sendData);
}


function resGetDbRecsToVegrid()
{//一个具体的回复处理函数， 在msgConfigure中描述，被ve自动调用

 var retData =cVe.XHR.responseText;
 var retDataObj=eval("("+retData+")");	
alert(retDataObj[cEioVeDataId]);
//初始化表格的执行，目前尚缺合适的初始化时机
cVei.initGrid("serverReturn","测试表格",{
	'colNames': ['id', 'no', 'name','school','score','degree','diploma'],
	'widths': ['150%', '150%', '150%','150%','150%','150%','150%']
});
 var divID='serverReturn';
// window[divID].injectData({
//			gData: retDataObj[cEioVeDataId],
//			records: 1003,
//			total: 12,
//			page:1
//			});
	cVei.injectGrid(divID,{  // 调用抽注组件
			gData: retDataObj[cEioVeDataId],
			records: 1003,
			total: 12,
			page:1
			});
}
	

///////////一些通用函数////////////////////////
function switchToNewPage(htmlStr)
{//从原网页上打开一个新网页，关闭原网页。新网页的数据htmlStr，是完整的HTML页面串
	alert(htmlStr);
 document.write(htmlStr);
 document.close();	
}

function injectText(idText)
{//抽取id为inText的文本框中的内容，并返回
 return document.getElementById("idName").value;
}

function genMsgHead(cVeName,msgType,msgName)
{//生成VE的标准的消息头
 return cVeNameId+"="+cVeName+"&"+ cMsgTypeId+"="+msgType+"&"+cMsgNameId+"="+msgName;
}


function getFormData()
{
 //var formobj = document.getElementById("idForm"); alert(formData);
 //var formdata = new FormData(formobj);   
 var formData;
 formData = "cName="+document.getElementById("idName").value;
 formData += "&cAge="+document.getElementById("idAge").value;
 //formData += "&cRadio1="+document.getElementById("idGender11").value;
 var myJsonData='"{a:b,c:d}"';
 formData += "&EIO-JSON="+myJsonData;
 //其他元素的值的获取，此略
 return formData;
}


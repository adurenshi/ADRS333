var cLoginPermission =cVeUti.readLoginPermit();
var usertype=cLoginPermission["cUserType"];
var username=cLoginPermission["cUsername"];
var pagename=getCurrentPageName();
window.onload=function() {
	if(usertype=='2'||usertype=='3')
	{
	
		cVe.startReqByMsgHandle(cVeName, 'MsgInit','MsgGetSubInstitution','reqGetSubInstitution', 'resGetSubInstitution', 'csAsc.tree.C_Tree_GetSubInstitution.handleMsg');
	}
	
	
}

function reqGetSubInstitution()
{
	
	var sendData="{\"MsgUserName\": \""+cLoginPermission["cUsername"]+"\",\"PageName\":\""+pagename+"\"}";
	cVe.setConn(cServerUri,"POST", false, sendData);
}



function resGetSubInstitution()
{
	var retData =cVe.XHR.responseText;
	cVeUti.Cookie.setCookie("VeMsgMap",retData);//将消息映射保存到Cookies
	
}
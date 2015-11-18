package csAsc.ECOSS.reso.demo1;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import csAsc.EIO.MsgEngine.CEIOMsgRouter.CParam;
import csAsc.dbcom.CPermit;
import csAsc.dbcom.DBAccess;



public class CMsgLogin {
	
	
	public CPermit getPermit(String username, String password) throws Exception{
		if(isValid(username, password)){
			CPermit permit=new CPermit();
			permit.status=1;
			return permit;
		}else {
			return null;
		}
	}
	
	/**
	 * 判断用户名与密码是否匹配
	 * @param username
	 * @param password
	 * @return
	 * @throws Exception
	 */
	public boolean isValid(String username, String password) throws Exception {
		boolean isValid = false;
		DBAccess db = new DBAccess();

		if (db.createConn()) {
			String sql = "select * from user where username='" + username
					+ "'and password='" + password + "'";
			db.query(sql);

			if (db.next()) {// query后的结果为resultset，通过db.next判断密码是否与用户名匹配
				isValid = true;
			}

			db.closeRs();
			db.closeStm();
			db.closeConn();
		}
		return isValid;

	}
	
	public StringBuffer handleMsgHttp(CParam param) throws Exception{
		System.out.println("==进入Clogin的handleMsg");
		int userType;
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");

		StringBuffer reqMsgData = new StringBuffer();
		 reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId())); //从消息中获取消息数据体（JSON字符串)

		JSONObject msgDataObj = new JSONObject(reqMsgData.toString()); 
		  
		  String cName = msgDataObj.getString("MsgUserName"); //从消息中取出消息内容：cName的值
		  String cPassword = msgDataObj.getString("Msgpassword"); 
		  String cCheckCode=msgDataObj.getString("MsgcheckCode"); 
		  StringBuffer retData = new StringBuffer();
		
		
		System.out.println("user:"+cName+"; password:"+cPassword);
		CPermit permit=getPermit(cName, cPassword);
		if(permit!=null&&permit.status==1) {
			userType=permit.getUserType(cName);
			retData.append("['true',").append(userType).append("]");
		}else 
			retData.append("['false',null]");
		System.out.println("返回的数据是："+retData);
		return retData;
		
	}
	
}

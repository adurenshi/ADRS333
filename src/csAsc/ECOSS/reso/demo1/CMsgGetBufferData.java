package csAsc.ECOSS.reso.demo1;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.json.JSONException;
import org.json.JSONObject;

import csAsc.ECOSS.db.query.CQuery;
import csAsc.EIO.MsgEngine.CEIOMsgRouter.CParam;
import csAsc.dbcom.CTransform;

public class CMsgGetBufferData {
	public int handleMsg(CParam param) throws ServletException,IOException, SQLException, JSONException
	 {
	  System.out.println("进入CMsgGetBufferData的handleMsgHttp");
	  HttpServletRequest msgReq;
	  msgReq = param.getMsgReq();
	  msgReq.setCharacterEncoding("UTF-8");
		   
	  StringBuffer reqMsgData = new StringBuffer();
	  reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId())); //从消息中获取消息数据体（JSON字符串)

	  JSONObject msgDataObj = new JSONObject(reqMsgData.toString()); 
	  
	  String dataSource = msgDataObj.getString("DataSource"); //从消息中取出消息内容：cName的值
	  String dataStart = msgDataObj.getString("DataStart"); //从消息中取出消息内容：cAge的值
			  
	  String sqlStr;
	  ResultSet recs;
	  sqlStr = "select * from staff";
	  recs = CQuery.getRecsBySql(sqlStr);
	  param.respData.append( CTransform.RsToArrayStr(recs));
		  
	  return 0;  
	 }
}

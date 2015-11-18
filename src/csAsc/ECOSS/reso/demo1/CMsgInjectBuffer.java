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
import csAsc.dbcom.*;

public class CMsgInjectBuffer 
{
	public int handleMsg(CParam param ) throws ServletException,IOException,SQLException
	{//设客户端请求数据的格式为："{\"DataSource\":\"tb1\", \"DataStart\":\"1\", \"DataNum\":\"100\"}" ;
	 //表示：数据源名称，起点记录，记录数目	
	
	  System.out.println("进入CMsgInjectBuffer==");
	  HttpServletRequest msgReq;
	  msgReq = param.getMsgReq();
	  msgReq.setCharacterEncoding("UTF-8");
	 
	  StringBuffer reqMsgData = new StringBuffer();
	  reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId())); //从消息中获取消息数据体（JSON字符串)

	  JSONObject msgDataObj;
	  String ds;
	  String dst;
	  String dnum;
	try {
		msgDataObj = new JSONObject(reqMsgData.toString());
		  ds = msgDataObj.getString("DataSource");
		  dst = msgDataObj.getString("DataStart");
		  dnum = msgDataObj.getString("DataNum");
	} catch (JSONException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} 
	  
	
	  //上面的参数，可用于下列查询语句，定位记录与数目
	  
	  String sqlStr;
	  ResultSet recs;
	  sqlStr = "select * from staff";
	  recs = CQuery.getRecsBySql(sqlStr);
	  param.respData = CTransform.RsToArrayStr(recs);
	  
	  return 0;  
	 }
}

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

public class CMsgGetChipcard {
	public int handleMsgHttp(CParam param) throws ServletException, IOException,
	SQLException, JSONException {
		System.out.println("进入CMsgGetChipcard的handleMsgHttp");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		String sqlStr = "select cnum,type,content,cpu from chipcard";
		ResultSet recs;
		recs = CQuery.getRecsBySql(sqlStr);
		System.out.println("testdata="+param.respData.append(CTransform.RsToArrayStr1(recs) + ",\"sql\":\""
				+ sqlStr + "\""));
		CQuery.close();
		return 0;
	}
	public int GetChipcardId(CParam param) throws ServletException,
	IOException, SQLException, JSONException {
		System.out.println("进入CMsgGetChipcard的GetChipcardId");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
System.out.println(reqMsgData);
		String sqlStr = "select cnum from chipcard";
		
		ResultSet recs;
		recs = CQuery.getRecsBySql(sqlStr);
		System.out.println("testdata="+param.respData.append(CTransform.RsToArrayStr1(recs) + ",\"sql\":\""
				+ sqlStr + "\""));
		CQuery.close();
		return 0;
	}
	
	public int AddChip(CParam param) throws ServletException, IOException,
	SQLException, JSONException {
		System.out.println("进入CMsgGetChipcard的AddChip");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		String[] strarray=reqMsgData.toString().split(","); 
		String []strtemp = new String[strarray.length];
		for (int i = 0; i < strarray.length; i++) {
			if(strarray[i].trim() != null)
				strtemp[i] = strarray[i].trim();
			else strtemp[i] = "暂无数据";
		}
		String sqlcheck = "select count(*) from chipcard where cnum = '"+strtemp[0]+"'";
System.out.println(sqlcheck);
		ResultSet rec;
		rec = CQuery.getRecsBySql(sqlcheck);
		int count = 0; 
		while (rec.next()) { 
		count = rec.getInt(1); 
		} 
System.out.println(count);
		if(count>0)  {  
			//判断是否存在该芯片号
			param.respData.append("\"havecnum\"");
		} else { 
			String sqlStr = "insert into chipcard(cnum,type,content,cpu) values('"+strtemp[0]+"','"+strtemp[1]+"','"+strtemp[2]+"','"+strtemp[3]+"')";
System.out.println(sqlStr);
					if (CQuery.BatchUpate(sqlStr)) {
						param.respData.append("\"addsuccessful\"");
					} else {
						param.respData.append("\"adderror\"");
					}
		}
		CQuery.close();
		return 0;
	}
	
	public int UpdateChip(CParam param) throws ServletException, IOException,
	SQLException, JSONException {
		System.out.println("进入CMsgGetChipcard的UpdateChip");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		String[] strarray=reqMsgData.toString().split(","); 
		String []strtemp = new String[strarray.length];
		for (int i = 0; i < strarray.length; i++) {
			if(strarray[i].trim() != null)
				strtemp[i] = strarray[i].trim();
			else strtemp[i] = "暂无数据";
		}
		 
		String sqlStr = "update chipcard set type = '"+strtemp[1]+"',content='"+strtemp[2]+"',cpu='"+strtemp[3]+"' where cnum='"+strtemp[0]+"'";
System.out.println(sqlStr);
		if (CQuery.BatchUpate(sqlStr)) {
			param.respData.append("\"updatesuccessful\"");
		} else {
			param.respData.append("\"updateerror\"");
		}
		
		CQuery.close();
		return 0;
	}

	public int DeleteChip(CParam param) throws ServletException, IOException,
	SQLException, JSONException {
		System.out.println("进入CMsgGetChipcard的deleteChip");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		String sqlStr = "delete from chipcard where cnum in ("+reqMsgData.toString()+")";
		System.out.println(sqlStr);
		if (CQuery.BatchUpate(sqlStr)) {
			param.respData.append("\"delsuccessful\"");
		} else {
			param.respData.append("\"delerror\"");
		}
		CQuery.close();
		return 0;
	}
}

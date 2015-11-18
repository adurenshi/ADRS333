package csAsc.ECOSS.reso.demo2;

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

public class Ctest {

	public static int handleMsgHttp0(CParam param) throws ServletException,
	IOException, SQLException, JSONException {
		
		System.out.println("进入CMsgGetDbRecs的handleMsgHttp");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		//System.out.println(reqMsgData);
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());
		//System.out.println(msgDataObj);
		String sex = msgDataObj.getString("sex");
		String cardtype = msgDataObj.getString("cardtype");
		String schooltype = msgDataObj.getString("schooltype");
		//System.out.println(sex);
//		
//		String treevarvalue = msgDataObj.getString("treevarvalue");
//		
//		StringBuffer wherestrString = new StringBuffer();
//		System.out.println(sex + "--" + cardtype + "--" + schooltype+"-dd-"+treevarvalue);
//		if (!"全部".equals(sex)) {
//			wherestrString.append("性别='" + sex + "' and ");
//		}
//		if (!"全部".equals(cardtype)) {
//			wherestrString.append("卡类型='" + cardtype + "' and ");
//		}
//		if (!"".equals(treevarvalue)) {
//			wherestrString.append("机构名称='" + treevarvalue + "' and ");
//		}
//		if (!"全部".equals(schooltype)) {
//			wherestrString.append("学校类型='" + schooltype + "'");
//		
//		}
		String sqlStr;
		String ss = "";
		//if (wherestrString.length() == 0) {
			sqlStr = "select id号,ssn号,姓名,性别,出生日期,照片,所在学校,学校类型,卡类型,申报日期,完成日期 ,机构名称 from notpack where 包号=''";
		//} else {
		//	int index = wherestrString.lastIndexOf(" and");
		////	if (index == wherestrString.length() - 5) {
		//		wherestrString.delete(index, wherestrString.length());
	//		}
		//	ss = wherestrString.toString();
			//sqlStr = "select * from notpack where 包号='' and " + ss;
		//}
		ResultSet recs;
		recs = CQuery.getRecsBySql(sqlStr);
		//System.out.println("sql==" + sqlStr);
		//System.out.println(CTransform.RsToArrayStr1(recs));
		System.out.println("testdata="+param.respData.append(CTransform.RsToArrayStr1(recs) + ",\"sql\":\""
				+ sqlStr + "\""));
		CQuery.close();
		return 0;
		}


}

package csAsc.ECOSS.reso.demo1;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.json.JSONException;
import org.json.JSONObject;



import csAsc.ECOSS.db.query.CQuery;
import csAsc.EIO.MsgEngine.CEIOMsgRouter.CParam;
import csAsc.dbcom.*;
import csAsc.export.ExcelService;

public class CMsgGetDbRecs {
	public int handleMsg(CParam param) throws ServletException, IOException,
			SQLException, JSONException {
		System.out.println("进入CMsgGetDbRecs的handleMsgHttp");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");

		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId())); // 从消息中获取消息数据体（JSON字符串)

		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());

		String cName = msgDataObj.getString("cName"); // 从消息中取出消息内容：cName的值
		String cAge = msgDataObj.getString("cAge"); // 从消息中取出消息内容：cAge的值

		String sqlStr;
		ResultSet recs;
		sqlStr = "select * from staff";
		recs = CQuery.getRecsBySql(sqlStr);
		param.respData.append(CTransform.RsToArrayStr(recs));
		CQuery.close();
		return 0;
	}

	public int handleMsgHttp0(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		System.out.println("进入CMsgGetDbRecs的handleMsgHttp");
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");

		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));

		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());

		String sex = msgDataObj.getString("sex");
		String cardtype = msgDataObj.getString("cardtype");
		String schooltype = msgDataObj.getString("schooltype");
		
		String treevarvalue = msgDataObj.getString("treevarvalue");
		
		StringBuffer wherestrString = new StringBuffer();
		System.out.println(sex + "--" + cardtype + "--" + schooltype+"-dd-"+treevarvalue);
		if (!"全部".equals(sex)) {
			wherestrString.append("性别='" + sex + "' and ");
		}
		if (!"全部".equals(cardtype)) {
			wherestrString.append("卡类型='" + cardtype + "' and ");
		}
		if (!"".equals(treevarvalue)) {
			wherestrString.append("机构名称='" + treevarvalue + "' and ");
		}
		if (!"全部".equals(schooltype)) {
			wherestrString.append("学校类型='" + schooltype + "'");

		}
		String sqlStr;
		String ss = "";
		if (wherestrString.length() == 0) {
			sqlStr = "select id号,ssn号,姓名,性别,出生日期,照片,所在学校,学校类型,卡类型,申报日期,完成日期 ,机构名称 from notpack where 包号=''";
		} else {
			int index = wherestrString.lastIndexOf(" and");
			if (index == wherestrString.length() - 5) {
				wherestrString.delete(index, wherestrString.length());
			}
			ss = wherestrString.toString();
			sqlStr = "select * from notpack where 包号='' and " + ss;
		}
		ResultSet recs;
		recs = CQuery.getRecsBySql(sqlStr);
		System.out.println("sql==" + sqlStr);
		param.respData.append(CTransform.RsToArrayStr1(recs) + ",\"sql\":\""
				+ sqlStr + "\"");
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpsubpackUpdate(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");

		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());
		String subpack, dataid, subnumber, reqtype;

		reqtype = msgDataObj.getString("reqtype");
		dataid = msgDataObj.getString("dataid");
		int num=dataid.split(",").length;
		if (reqtype.equals("feipei")) {
			subpack = msgDataObj.getString("subpack");
			subnumber = msgDataObj.getString("subnumber");
			long packiddate = System.currentTimeMillis();
			String packids = "cn" + String.valueOf(packiddate);
			int number = Integer.parseInt(subnumber);//指定数

			String sqlcompackString = "insert into cardpack(包号,卡数量,分包原则) values('"
					+ packids + "'," + num + ",'" + subpack + "')";

			String sqlString = "update notpack set 包号='" + packids
					+ "' where id号 in(" + dataid + ")";

			if (CQuery.BatchUpatepackId(sqlcompackString, sqlString)) {
				param.respData.append("\"updateok\"");
			} else {
				param.respData.append("\"updateerror\"");
			}
		}
		
		
		if (reqtype.equals("undofeipack")) {
			subpack = msgDataObj.getString("packname");
			
			String sqlcompackString = "delete from cardpack where 包号='"+subpack+"'";

			String sqlString = "update notpack set 包号='' where 包号 ='"+subpack+"'";

			if (CQuery.BatchUpatepackId(sqlString, sqlcompackString)) {
				param.respData.append("\"undofeipackok\"");
			} else {
				param.respData.append("\"undofeipackerror\"");
			}
		}
		
		if (reqtype.equals("makecheck")) {

			String sqlString = "update cardpack set 审核='noyes' where id号 in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"updatecheckok\"");
			} else {
				param.respData.append("\"updateecheckerror\"");
			}
		}
		if (reqtype.equals("rollback")) {
			String sqlString = "update cardpack set 状态='未分配' where id号 in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"updatebackok\"");
			} else {
				param.respData.append("\"updatebackerror\"");
			}
		}
		if (reqtype.equals("approval")) {

			String sqlString = "";
			String approvalradio = msgDataObj.getString("approvalradio");//
			if (approvalradio.equals("yes")) {
				sqlString = "update cardpack set 审核='yes' where id号 in("
						+ dataid + ")";// 审核通过

			} else if (approvalradio.equals("no")) {
				String reso = msgDataObj.getString("reso");
				sqlString = "update cardpack set 审核='nono',退回原因='" + reso
						+ "' where id号 in(" + dataid + ")";// 退回
			}

			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"updateapprovalok\"");
			} else {
				param.respData.append("\"updateapprovalerror\"");
			}
		}
		if (reqtype.equals("approval2")) {

			String sqlString = "update cardpack set 审核='yesyes' where id号 in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				String sqlwrite = "INSERT INTO makeCardTask(pakage_number,card_count,card_sub_pri_id,if_distrubution,co_factory_id) SELECT 包号,卡数量,合作银行,完成日期,数据方式 from cardpack where id号 in("
						+ dataid + ")";
				if (CQuery.BatchUpate(sqlwrite)) {
					param.respData.append("\"updateapproval2ok\"");
				} else {
					param.respData.append("\"updateapproval2error\"");
				}
			} else {
				param.respData.append("\"updateapproval2error\"");
			}
		}

		if (reqtype.equals("resetfeipei")) {
			String sqlString = "update cardpack set 审核='no',状态='未分配' where id号 in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"resetfeipeiok\"");
			} else {
				param.respData.append("\"resetfeipeierror\"");
			}
		}
		if (reqtype.equals("backplatemanagecheck")) {
			String ifcheckvalue = msgDataObj.getString("ifcheckvalue");
			String packname = msgDataObj.getString("packname");
			String sqlString = "update offerdata set status='" + ifcheckvalue
					+ "' where foreid in(" + dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				String sqlString1 = "update makecardprocess set upstate='验证通过' where package_number='"
						+ packname + "'";
				if (CQuery.BatchUpate(sqlString1)) {
					param.respData.append("\"backplatemanagecheckok\"");
				}
			} else {
				param.respData.append("\"backplatemanagecheckerror\"");
			}
		}
		if (reqtype.equals("backplatemanagegoback")) {
			String ifcheckvalue1 = msgDataObj.getString("ifcheckvalue1");
			String sqlString = "update offerdata set status='" + ifcheckvalue1
					+ "',reason='" + ifcheckvalue1 + "' where foreid in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"backplatemanagecheckok\"");
			} else {
				param.respData.append("\"backplatemanagecheckerror\"");
			}
		}

		if (reqtype.equals("uploaddata")) {
			String sqlString = "update makecardprocess set upstate='upyes' where id号 in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				String sqlString1 = "update offerdata set upstate='upyes' where package_number in (select package_number from makecardprocess where id号  in("
						+ dataid + "))";
				CQuery.BatchUpate(sqlString1);
				param.respData.append("\"uploaddataok\"");
			} else {
				param.respData.append("\"uploaddataerror\"");
			}
		}

		if (reqtype.equals("maketaskacce")) {
			String sqlString = "update makecardtask set co_bank_id='已受理',req_compl_date='"
					+ new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
							.format(new Date())
					+ "' where id号 in("
					+ dataid
					+ ")";
			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"maketaskacceok\"");
			} else {
				param.respData.append("\"maketaskacceerror\"");
			}
		}
		if (reqtype.equals("accecarddata")) {
			String sqlString = "update makecardtask set data_issued='已接收' where id号 in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				String sqlwrite = "INSERT INTO makecardprocess(package_number,req_compl_date,card_count) SELECT pakage_number,req_compl_date,card_count from makecardtask where id号 in("
						+ dataid + ")";// 包，开始时间，卡数量
				if (CQuery.BatchUpate(sqlwrite)) {
					param.respData.append("\"accecarddataok\"");
				} else {
					param.respData.append("\"accecarddataerror\"");
				}
			} else {
				param.respData.append("\"accecarddataerror\"");
			}
		}

		if (reqtype.equals("updatereportstate")) {
			String packnameid = msgDataObj.getString("packnameid");
			String reportperson = msgDataObj.getString("reportperson");
			String iphone = msgDataObj.getString("iphone");
			String reportdate = msgDataObj.getString("reportdate");
			int cardnumber = Integer.parseInt(msgDataObj
					.getString("cardnumber"));
			String userequ = msgDataObj.getString("userequ");
			String worktask = msgDataObj.getString("worktask");
			String Privacy = msgDataObj.getString("Privacy");
			String completeDate = msgDataObj.getString("completeDate");
			String sql1 = "select card_count,st_photo from makecardprocess where package_number='"
					+ packnameid + "'";

			String compstring = CQuery.getRecsnumber(sql1, cardnumber);
			String sqlString = "update makecardprocess set st_name='"
					+ reportperson + "',st_phone='" + iphone + "',st_school='"
					+ userequ + "',st_birthday='" + reportdate
					+ "',st_photo=st_photo+" + cardnumber + ",school_type_id='"
					+ worktask + "',card_type_id='" + Privacy
					+ "',date_of_declaration='" + completeDate
					+ "',task_status='" + compstring
					+ "' where package_number='" + packnameid + "'";
			if (CQuery.BatchUpate(sqlString)) {
				if (compstring.equals("已完成")) {

					String sqltooffer = "insert into offerdata(foreid,package_number,ssn,co_bank_cardno) select a.id号,a.包号,a.ssn号,b.合作银行 from notpack a,cardpack b where a.包号='"
							+ packnameid + "' and a.包号=b.包号";

					CQuery.BatchUpate(sqltooffer);
				}
				param.respData.append("\"updatereportstateok\"");
			} else {
				param.respData.append("\"updatereportstateerror\"");
			}
		}

		if (reqtype.equals("reportgobackaddinfo")) {
			String idxx = msgDataObj.getString("idxx");
			String ssn = msgDataObj.getString("ssn");
			String cobank = msgDataObj.getString("cobank");
			String personcardid = msgDataObj.getString("personcardid");
			String bankpassword = msgDataObj.getString("bankpassword");
			String handid = msgDataObj.getString("handid");

			String sqlString = "update offerdata set co_bank_cardno='" + cobank
					+ "',initial_password='" + bankpassword
					+ "',card_serial_number='" + personcardid + "',handid='"
					+ handid + "' where ssn='" + ssn + "' and foreid='" + idxx
					+ "'";
			if (CQuery.BatchUpate(sqlString)) {
				System.out.println("666tets");
				param.respData.append("\"reportgobackaddinfook\"");
			} else {
				param.respData.append("\"reportgobackaddinfoerror\"");
			}
		}

		if (reqtype.equals("reportgoback")) {

			String packnameid = msgDataObj.getString("packname");
			String sqlString = "update makecardprocess set upstate='up',reportcompdate='"
					+ new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
							.format(new Date())
					+ "' where package_number='"
					+ packnameid + "'";

			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"reportgobackok\"");
			} else {
				param.respData.append("\"reportgobackerror\"");
			}
		}

		if (reqtype.equals("badcardadd")) {
			String packnameid = msgDataObj.getString("packnameid");
			String badssn = msgDataObj.getString("badssn");
			String serialsNumber = msgDataObj.getString("serialsNumber");
			String coopBank = msgDataObj.getString("coopBank");
			String person = msgDataObj.getString("person");
			String fromBadCard = msgDataObj.getString("fromBadCard");
			String badreason = msgDataObj.getString("badreason");
			String factorybus = msgDataObj.getString("factorybus");
			String sql1 = "insert into badcardinfo(pakage_number,ssn,serialsNumberOfBadCard,coopBank,person,fromWhereOfBadCard,reasonOfBadCard,cardfactory,dataSubmitted) values('"
					+ packnameid
					+ "','"
					+ badssn
					+ "','"
					+ serialsNumber
					+ "','"
					+ coopBank
					+ "','"
					+ person
					+ "','"
					+ fromBadCard
					+ "','"
					+ badreason
					+ "','"
					+ factorybus
					+ "','"
					+ new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
							.format(new Date()) + "')";
			if (CQuery.BatchUpate(sql1)) {
				param.respData.append("\"badcarddataok\"");
			} else {
				param.respData.append("\"badcarddataerror\"");
			}
		}

		if (reqtype.equals("badcardmanagerhandle")) {
			String datestr = new SimpleDateFormat("yyyy-MM-dd")
					.format(new Date());
			String sqlString = "update badcardinfo set ifProcess='是',AcceptanceDate='"
					+ datestr + "' where id号 in(" + dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"badcardmanagerhandleok\"");
			} else {
				param.respData.append("\"badcardmanagerhandleerror\"");
			}
		}

		if (reqtype.equals("badcardmanagercheck")) {
			String sqlString = "update badcardinfo set badcheck='noyes' where id号 in("
					+ dataid + ")";
			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"badcardmanagercheckok\"");
			} else {
				param.respData.append("\"badcardmanagercheckerror\"");
			}
		}

		if (reqtype.equals("badcardcheck")) {
			String datestr = new SimpleDateFormat("yyyy-MM-dd")
					.format(new Date());
			String sqlString = "";
			String approvalradio = msgDataObj.getString("approvalradio");//
			if (approvalradio.equals("yes")) {
				sqlString = "update badcardinfo set badcheck='yes',badcheckdate='"
						+ datestr + "' where id号 in(" + dataid + ")";// 坏卡次卡审核通过

			} else if (approvalradio.equals("no")) {
				String reso = msgDataObj.getString("reso");
				sqlString = "update badcardinfo set badcheck='nono',backreason='"
						+ reso + "' where id号 in(" + dataid + ")";// 退回
			}

			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"badcardcheckreasonok\"");
			} else {
				param.respData.append("\"badcardcheckreasonerror\"");
			}
		}

		if (reqtype.equals("addpersoninfo")) {
			String datestr = new SimpleDateFormat("yyyy-MM-dd")
					.format(new Date());
			String sqlString = "";

			String personinfo = msgDataObj.getString("personinfo");//
			String[] ids = dataid.split(",");
			String Strsqlvalues = "";
			for (String sid : ids) {
				Strsqlvalues += "(" + sid + ",'" + personinfo + "','" + datestr
						+ "'),";
			}
			Strsqlvalues = Strsqlvalues.substring(0, Strsqlvalues.length() - 1);

			sqlString = "insert into personinfo(foreid,personinfo,compldate) values "
					+ Strsqlvalues;// 坏卡次卡审核通过

			if (CQuery.BatchUpate(sqlString)) {
				param.respData.append("\"addpersoninfook\"");
			} else {
				param.respData.append("\"addpersoninfoerror\"");
			}
		}
		CQuery.close();
		return 0;
	}
	
/////
	public int handleMsgHttp1(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));

		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());

		String packstate = msgDataObj.getString("packstate");
		String BranchPrinc = msgDataObj.getString("BranchPrinc");
		
		StringBuffer wherestrString = new StringBuffer();
		if (!"全部".equals(packstate)) {
			wherestrString.append("状态='" + packstate + "' and ");
		}
		if (!"全部".equals(BranchPrinc)) {
			wherestrString.append("分包原则='" + BranchPrinc+"'");
		}
		
		String sqlStr;
		ResultSet recs;
		
		String ss = "";
		if (wherestrString.length() == 0) {
			sqlStr = "select id号,包号,卡数量,分包原则,状态  from cardpack";
			System.out.println("sql0:"+sqlStr);
		} else {
			int index = wherestrString.lastIndexOf(" and");
			if (index == wherestrString.length() - 5) {
				wherestrString.delete(index, wherestrString.length());
			}
			ss = wherestrString.toString();
			sqlStr = "select id号,包号,卡数量,分包原则,状态  from cardpack where "+ ss;
			System.out.println("sql1:"+sqlStr);
		}

		recs = CQuery.getRecsBySql(sqlStr);
		param.respData.append(CTransform.RsToArrayStr1(recs) + ",\"sql\":\""
				+ sqlStr + "\"");
		CQuery.close();
		return 0;
	}

	public int handleMsgGetUri(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());
		String uriid = msgDataObj.getString("uriid");
		String sqlStr;
		ResultSet recs;
		if (!uriid.equals("")) {
			sqlStr = "select * from notpack where 包号='" + uriid + "'";
			recs = CQuery.getRecsBySql(sqlStr);
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"emptydata\"");
		}
		CQuery.close();
		return 0;
	}

	public int MsgGetDbRecstomakecardno1(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		System.out.println("进入CMsgGetDbRecs的MsgGetDbRecstomakecardno1----123");
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());
		String cardnumber = msgDataObj.getString("cardnumber");//卡数量
		String BranchPrinc = msgDataObj.getString("BranchPrinc");//分包原则
		
		StringBuffer wherestrString = new StringBuffer();
		System.out.println(cardnumber + "--" + BranchPrinc);
		if (!"".equals(cardnumber)) {
			wherestrString.append("卡数量=" + cardnumber + " and ");
		}
		if (!"全部".equals(BranchPrinc)) {
			wherestrString.append("分包原则='" + BranchPrinc+"'");
		}
		
		String sqlStr;
		ResultSet recs;
		
		String ss = "";
		if (wherestrString.length() == 0) {
			sqlStr = "select id号,包号,卡数量,分包原则  from cardpack where 状态='未分配'";
			System.out.println("sql0:"+sqlStr);
		} else {
			int index = wherestrString.lastIndexOf(" and");
			if (index == wherestrString.length() - 5) {
				wherestrString.delete(index, wherestrString.length());
			}
			ss = wherestrString.toString();
			sqlStr = "select id号,包号,卡数量,分包原则  from cardpack where 状态='未分配' and " + ss;
			System.out.println("sql1:"+sqlStr);
		}
		//sqlStr = "select id号,包号,卡数量,分包原则  from cardpack where 状态='未分配'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int MsgGetDbRecstomakecardno2(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		System.out.println("进入CMsgGetDbRecs的MsgGetDbRecstomakecardno2----123");
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,包号,卡数量,分包原则,制卡厂商,合作银行,完成日期  from cardpack where 状态='已分配' and 审核='no'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int MsgGetDbRecstomakecardno3(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		System.out.println("进入CMsgGetDbRecs的MsgGetDbRecstomakecardno1----123");
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");

		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,包号,卡数量,分包原则,制卡厂商,合作银行,完成日期 from cardpack where 状态='已分配' and 审核='yesyes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int MsgGetDbRecstomakecardno4(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		System.out.println("进入CMsgGetDbRecs的MsgGetDbRecstomakecardno1----123");
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,包号,卡数量,分包原则,制卡厂商,合作银行,完成日期 ,退回原因 from cardpack where 审核='nono'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int MsgGetDbRecstoselectcardfactory(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		System.out
				.println("进入CMsgGetDbRecs的MsgGetDbRecstoselectcardfactory----123");
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select * from zkfactory";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int MsgGetDbRecstocardfactory(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId())); // 从消息中获取消息数据体（JSON字符串)
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());
		String factorybus = msgDataObj.getString("factorybus");
		String sqlStr;
		ResultSet recs;

		String s1 = "select 包号,分包原则  from cardpack where 制卡厂商='" + factorybus
				+ "'";// 包号

		String s2 = "select package_number,card_count,task_status from makecardprocess where package_number in (select 包号  from cardpack where 制卡厂商='"
				+ factorybus + "')";

		sqlStr = "select * from zkfactory where factoryname='" + factorybus
				+ "'";

		String s3 = "Select a.*,b.*,c.分包原则 from (" + s2 + ") as a,(" + sqlStr
				+ ") as b,(" + s1 + ") as c where c.包号=a.package_number";
		recs = CQuery.getRecsBySql(s3);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpmakecardfenpei(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());

		String ospackid = msgDataObj.getString("ospackid");
		String factorybus = msgDataObj.getString("factorybus");
		String bankname = msgDataObj.getString("bankname");
		String compdate = msgDataObj.getString("compdate");
		String cardnumber = msgDataObj.getString("cardnumber");
		String pub_data = msgDataObj.getString("pub_data");
		String sqlStr;
		ResultSet recs;
		sqlStr = "update cardpack set 制卡厂商='" + factorybus + "',合作银行='"
				+ bankname + "',完成日期='" + compdate + "', 数据方式='" + pub_data
				+ "',状态='已分配" + "' where 包号='" + ospackid + "'";
		System.out.println("sql:" + sqlStr);
		if (CQuery.BatchUpate(sqlStr)) {
			param.respData.append("\"feipeiok\"");
		} else {
			param.respData.append("\"feipeierror\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpapproval1(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,包号,卡数量,分包原则,制卡厂商,合作银行,完成日期 from cardpack where 状态='已分配' and 审核='noyes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpapproval2(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,包号,卡数量,分包原则,制卡厂商,合作银行,完成日期,审核  from cardpack where 状态='已分配' and 审核='yes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbackplate1(CParam param) throws ServletException,
			IOException, SQLException, JSONException {

		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select a.package_number,a.card_count,a.date_of_declaration,a.reportcompdate,b.card_sub_pri_id from makecardprocess a,makecardtask b where a.package_number=b.pakage_number and a.upstate='up'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbackplate2(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select a.id号,a.package_number,a.card_count,a.date_of_declaration,a.reportcompdate,b.card_sub_pri_id,a.upstate from makecardprocess a,makecardtask b where a.package_number=b.pakage_number and (a.upstate='验证通过' or a.upstate='upyes')";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbackplate3(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());

		String packagename = msgDataObj.getString("packagename");

		String sqlStr;
		ResultSet recs;
		sqlStr = "select foreid,package_number,ssn,co_bank_cardno,card_serial_number,initial_password,handid,status from offerdata where package_number='"
				+ packagename + "'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpprogress(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select a.id号,a.package_number,b.制卡厂商 as cardfor,a.st_name,a.st_phone,a.req_compl_date,a.date_of_declaration,a.task_status from makecardprocess as a,cardpack as b where a.package_number=b.包号 ";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpselect1(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());

		String selecttype = msgDataObj.getString("selecttype");
		String makeforact = msgDataObj.getString("makeforact");
		String cooperationbank = msgDataObj.getString("cooperationbank");
		String packrinciple = msgDataObj.getString("packrinciple");
		String compldate = msgDataObj.getString("compldate");
		String sqlStr = "";
		ResultSet recs;
		if (selecttype.equals("selectdata3")) {
			sqlStr = "select a.package_number,a.card_count,a.date_of_declaration,b.制卡厂商,b.合作银行,b.分包原则 from makecardprocess a,cardpack b where a.package_number=b.包号 and a.task_status='no'";
			recs = CQuery.getRecsBySql(sqlStr);
			if (recs.next()) {
				param.respData.append(CTransform.RsToArrayStr1(recs)
						+ ",\"datatype\":\"selectdata3\"");
			} else {
				param.respData.append("\"rsisempty\"");
			}
			System.out.println("33333333333333333");
		}
		if (selecttype.equals("selectdata4")) {
			sqlStr = "select a.package_number,a.card_count,a.date_of_declaration,b.制卡厂商,b.合作银行,b.分包原则 from makecardprocess a,cardpack b where a.package_number=b.包号 and a.task_status='已完成'";
			recs = CQuery.getRecsBySql(sqlStr);
			if (recs.next()) {
				param.respData.append(CTransform.RsToArrayStr1(recs)
						+ ",\"datatype\":\"selectdata4\"");
			} else {
				param.respData.append("\"rsisempty\"");
			}
			System.out.println("444444444444444");
		}
		if (selecttype.equals("selectdata1")) {
			sqlStr = "select * from notpack where 包号=''";
			recs = CQuery.getRecsBySql(sqlStr);
			if (recs.next()) {
				param.respData.append(CTransform.RsToArrayStr1(recs)
						+ ",\"datatype\":\"selectdata1\"");
			} else {
				param.respData.append("\"rsisempty\"");
			}
			System.out.println("11111111111111");
		}
		if (selecttype.equals("selectdata2")) {
			sqlStr = "select * from notpack where 包号 !=''";
			recs = CQuery.getRecsBySql(sqlStr);
			if (recs.next()) {
				param.respData.append(CTransform.RsToArrayStr1(recs)
						+ ",\"datatype\":\"selectdata2\"");
			} else {
				param.respData.append("\"rsisempty\"");
			}
			System.out.println("22222222222222222");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpselectcount_jpg(CParam param) throws ServletException,
	IOException, SQLException, JSONException {
HttpServletRequest msgReq = param.getMsgReq();
msgReq.setCharacterEncoding("UTF-8");
String sqlStr1,sqlStr2,sqlStr3,sqlStr4,sqlStr;
ResultSet recs;
sqlStr1 = "select count(*) as a_num from notpack where 包号=''";//未分包
sqlStr2 = "select count(*) as b_num from notpack where 包号 !=''";//已分包
//未完成
sqlStr3 = "select count(*) as c_num from makecardprocess a,cardpack b where a.package_number=b.包号 and a.task_status='no'";
//已完成
sqlStr4 = "select count(*) as d_num from makecardprocess a,cardpack b where a.package_number=b.包号 and a.task_status='已完成'";

sqlStr = "Select a.a_num,b.b_num,c.c_num,d.d_num from ("+sqlStr1+") a,("+sqlStr2+") b,("+sqlStr3+") c,("+sqlStr4+") d";
recs = CQuery.getRecsBySql(sqlStr);

if (recs.next()) {	
	String string="[{value:"+recs.getLong(1)+", name:'未分包'},{value:"+recs.getLong(2)+", name:'已分包'},{value:"+recs.getLong(3)+", name:'未完成'},{value:"+recs.getLong(4)+", name:'已完成'},]";
	param.respData.append(string);
} else {
	param.respData.append("\"rsisempty\"");
}
CQuery.close();
return 0;
}
	
	
	public int handleMsgHttpmaketask1(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,card_count,card_sub_pri_id,if_distrubution,co_factory_id from makeCardTask where co_bank_id='no'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpmaketask2(CParam param) throws ServletException,
			IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,card_count,card_sub_pri_id,if_distrubution,co_factory_id from makeCardTask where co_bank_id='已受理'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpaccepterdata1(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,card_count,card_sub_pri_id,if_distrubution,co_factory_id from makeCardTask where co_bank_id='已受理' and data_issued='no'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpaccepterdata2(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,card_count,card_sub_pri_id,if_distrubution,co_factory_id from makeCardTask where co_bank_id='已受理' and data_issued='已接收'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpreportmakestate1(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select * from makecardprocess where card_count>st_photo";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpreportmakestate2(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,package_number,req_compl_date,date_of_declaration,task_status from makecardprocess";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpreportgoback0(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select package_number from makecardprocess where task_status='已完成' and upstate='no'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpreportgoback1(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId()));
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString());
		String sqlStr;
		ResultSet recs;
		String packnameid = msgDataObj.getString("packnameid");
		sqlStr = "select foreid,package_number,ssn,co_bank_cardno,card_serial_number,initial_password,handid from offerdata where package_number='"
				+ packnameid + "'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpreportgoback2(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select foreid,package_number,ssn,co_bank_cardno,card_serial_number,initial_password,handid from offerdata where package_number in (select package_number from makecardprocess where upstate='up')";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpreportgoback3(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select a.id号,a.package_number,a.co_bank_cardno,a.initial_password,b.card_sub_pri_id,a.reason from offerdata a,makecardtask b where a.package_number=b.pakage_number and a.status='back'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbadcardmanage1(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,cardfactory,reasonOfBadCard,person,dataSubmitted,ifProcess from badcardinfo";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbadcardmanage2(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,cardfactory,reasonOfBadCard,AcceptanceDate from badcardinfo where ifProcess='是' and badcheck='no'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs)
					+ ",\"sql\":\"" + sqlStr + "\"");
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbadcardmanage3(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,cardfactory,reasonOfBadCard,personckeck,backreason from badcardinfo where badcheck='nono'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbadcardcheck1(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,cardfactory,reasonOfBadCard,person,dataSubmitted,ifProcess from badcardinfo where badcheck='noyes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpbadcardcheck2(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,cardfactory,reasonOfBadCard,personckeck,backreason,badcheckdate from badcardinfo where badcheck='yes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpcardpersonmanager1(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank from badcardinfo where badcheck='yes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpcardpersonmanager2(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select a.id号,a.pakage_number,a.ssn,a.serialsNumberOfBadCard,a.coopBank,a.cardfactory,b.personinfo,b.compldate from badcardinfo a,personinfo b where a.id号=b.foreid";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

	public int handleMsgHttpcardpersonmanager3(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select a.id号,a.pakage_number,a.ssn,a.serialsNumberOfBadCard,a.coopBank,a.cardfactory,b.personinfo,b.compldate from badcardinfo a,personinfo b where a.id号=b.foreid";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}
	
	
	//查询统计
	public int handleMsgHttpbadquerycount_1(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,reasonOfBadCard,dataSubmitted from badcardinfo";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}
	
	public int handleMsgHttpbadquerycount_2(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,cardfactory,reasonOfBadCard,personckeck,backreason,badcheckdate from badcardinfo where badcheck='yes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}
	
	public int handleMsgHttpbadquerycount_3(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		//sqlStr = "select a.id号,a.pakage_number,a.ssn,a.serialsNumberOfBadCard,a.coopBank,a.cardfactory,b.personinfo,b.compldate from badcardinfo a,personinfo b where a.id号=b.foreid";
		sqlStr = "select id号,pakage_number,ssn,serialsNumberOfBadCard,coopBank,cardfactory,reasonOfBadCard,person,dataSubmitted,ifProcess from badcardinfo where badcheck='noyes'";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}
	public int handleMsgHttpbadquerycount_4(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		//sqlStr = "select a.id号,a.pakage_number,a.ssn,a.serialsNumberOfBadCard,a.coopBank,a.cardfactory,b.personinfo,b.compldate from badcardinfo a,personinfo b where a.id号=b.foreid";
		sqlStr = "select a.id号,a.pakage_number,a.ssn,a.serialsNumberOfBadCard,a.coopBank,a.cardfactory,b.personinfo,b.compldate from badcardinfo a,personinfo b where a.id号=b.foreid";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}
	
	public int handleMsgHttpbadquerycount_5(CParam param)
			throws ServletException, IOException, SQLException, JSONException {
		HttpServletRequest msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		String sqlStr;
		ResultSet recs;
		//sqlStr = "select a.id号,a.pakage_number,a.ssn,a.serialsNumberOfBadCard,a.coopBank,a.cardfactory,b.personinfo,b.compldate from badcardinfo a,personinfo b where a.id号=b.foreid";
		sqlStr = "select a.id号,a.pakage_number,a.ssn,a.serialsNumberOfBadCard,a.coopBank,a.cardfactory,b.personinfo,b.compldate from badcardinfo a,personinfo b where a.id号=b.foreid";
		recs = CQuery.getRecsBySql(sqlStr);
		if (recs.next()) {
			param.respData.append(CTransform.RsToArrayStr1(recs));
		} else {
			param.respData.append("\"rsisempty\"");
		}
		CQuery.close();
		return 0;
	}

}

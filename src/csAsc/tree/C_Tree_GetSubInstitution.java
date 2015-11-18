package csAsc.tree;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;


import csAsc.EIO.MsgEngine.CEIOMsgRouter.CParam;
import csAsc.dbcom.DBAccess;


public class C_Tree_GetSubInstitution {
	public int handleMsg(CParam param)
			throws ServletException, IOException, SQLException, Exception 
	{
		System.out.println("进入C_Tree_GetSubInstitution的handleMsgHttp");
		
		HttpServletRequest msgReq;
		msgReq = param.getMsgReq();
		msgReq.setCharacterEncoding("UTF-8");
		
		StringBuffer reqMsgData = new StringBuffer();
		reqMsgData.append(msgReq.getParameter(param.getReqMsgDataId())); //从消息中获取消息数据体（JSON字符串)
		JSONObject msgDataObj = new JSONObject(reqMsgData.toString()); 
		  
		String username = msgDataObj.getString("MsgUserName"); //从消息中取出消息内容：TreeName的值
		String pagename = msgDataObj.getString("PageName");
		
		StringBuffer retData=new StringBuffer();
		StringBuffer rootinstitution=new StringBuffer();
		rootinstitution=getRootIns(username,pagename);
		retData=getSubInstitutions(username,pagename);
		
		param.respData.append("{\"RootInstitution\":"+rootinstitution+", \"SubInstitution\":"+retData+"}");	
		return 0;
		
	}
	
	public StringBuffer getSubInstitutions(String institutionuser,String pagename) throws SQLException{
		List <List> childrenlist=new ArrayList<List>();
		
		DBAccess db = new DBAccess();
		if(db.createConn()){
			int jigouid=getJiGouIDbyUserName(institutionuser, db);
			getChildrenByID(jigouid, childrenlist, db, pagename);
		}
		db.closeRs();
		db.closeStm();
		db.closeConn();	
		return list2Array(childrenlist);
	}
	
	public int getJiGouIDbyUserName(String username,DBAccess db)throws SQLException{
		
		ResultSet result;
		int jigouid=0;
		if (db.getConn()!=null) {
			String sql ="SELECT DISTINCT(jigou.id) from jigou INNER JOIN role_user on role_user.jigou_id=jigou.id INNER JOIN user on `user`.id=role_user.user_id WHERE `user`.username='"+username+"'";
			result = db.query(sql);
			if(result.next()){
				jigouid=result.getInt("id");
			}
			
			
		}
		return jigouid;
	}
	
	
	public  void getChildrenByID(int id,List<List> childrenlist,DBAccess db,String pagename) throws SQLException{
		String sql="select jigou.id,jigou.parent_id,jigou.name from jigou where jigou.parent_id="+id;
		List<Integer> temp=new ArrayList<Integer>();
		ResultSet result=db.query(sql);
	
		while(result.next()){			
			List<String> oneChild=new ArrayList<String>();
			oneChild.add(String.valueOf(result.getInt("id")));
			oneChild.add(String.valueOf(result.getInt("parent_id")));
			oneChild.add(result.getString("name"));
			oneChild.add(pagename);
			temp.add(result.getInt("id"));
			childrenlist.add(oneChild);
		}
		for (Integer children : temp){
			getChildrenByID(children,childrenlist, db,pagename);
		}
	}
	
	public StringBuffer getRootIns(String institutionuser, String pagename) throws SQLException{
		DBAccess db = new DBAccess();
		StringBuffer sqlSet=new StringBuffer();
		if(db.createConn()){
			int id=getJiGouIDbyUserName(institutionuser, db);
			String sql="select jigou.id,jigou.parent_id,jigou.name from jigou where jigou.id="+id;
			ResultSet result=db.query(sql);
			
			sqlSet.append("[");
			while(result.next()){
				sqlSet.append("'"+result.getInt("id")+"',");
				sqlSet.append("'"+result.getInt("parent_id")+"',");
				sqlSet.append("'"+result.getString("name")+"',");
				sqlSet.append("'"+pagename+"'");
			}
		}
		
		sqlSet.append("]");
		db.closeRs();
		db.closeStm();
		db.closeConn();	
		return sqlSet;
	}
	
	
	
	
	public StringBuffer list2Array(List<List> childrenlist){
		StringBuffer sqlSet=new StringBuffer();
		//int i=0, length=childrenlist.size();
		sqlSet.append("[");
		int j=0;
		int childrenlength=childrenlist.size();
		for(List<String> onechild: childrenlist){
			sqlSet.append("[");
			int i=0;
			for(String each:onechild){
				
				int onelength=onechild.size();
				if(i<onelength-1){
					sqlSet.append("'"+each+"',");
				}else{
					sqlSet.append("'"+each+"'");
				}	
				i++;
			}
			if(j<childrenlength-1){
				sqlSet.append("],");
			}else {
				sqlSet.append("]");
			}
			j++;
		}
		
		
		sqlSet.append("]");
		return sqlSet;
	}
	
}

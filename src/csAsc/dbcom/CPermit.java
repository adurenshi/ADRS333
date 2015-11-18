package csAsc.dbcom;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import csAsc.com.ControlTable;
import csAsc.com.NetWorkUtil;



public class CPermit {
	public int status=0;//0:无通行证；1：有效通行证；2：过期通行证
	private String permit;//通行证字符串
	public static final String seperator=",";
	public static final long expireTime=10*60*1000;//超时时间
	
	/**
	 * 根据HttpServletRequest对象和用户姓名获得客户端相关信息，如访问时间，ip，权限列表，并形成通行证字符串
	 * @param request
	 * @param username
	 * @return
	 * @throws Exception
	 */
	public String getClientInformation(javax.servlet.http.HttpServletRequest request, String username) throws Exception{
		String IPAdr=NetWorkUtil.getRemoteHost(request);
		
		long timeStamp=System.currentTimeMillis();
		
		List <String> authList=getAuthorizedList(username);
		String information=username+seperator+timeStamp+seperator+IPAdr+seperator+authList;
		return this.permit=information;
	}
	
	//获得用户能访问的资源列表
	public List<String> getAuthorizedList(String username) throws Exception {
		List<Integer> authIDs = getUserAuth(username);
		ControlTable controlTable = new ControlTable();
		List<String> authorizedLists = new ArrayList<String>();
		for (Integer authID : authIDs) {
			List<String> specifiedIDLists = controlTable
					.getPageAuthTable(authID);
			for (String authorizedpage : specifiedIDLists) {
				authorizedLists.add(authorizedpage);
			}
		}
		return authorizedLists;

	}
	
	// 获取用户权限id列表
	public List<Integer> getUserAuth(String username) throws Exception {

		DBAccess db = new DBAccess();
		ResultSet result;
		ArrayList<Integer> authids = new ArrayList<Integer>();
		if (db.createConn()) {
			String sql = "select distinct(role_right.right_id) from role_right INNER JOIN role_user on role_right.role_id=role_user.role_id INNER JOIN user on role_user.user_id=user.id where `user`.username='"
					+ username + "' ";
			try {
				result = db.query(sql);
				while (result.next()) {
					authids.add(result.getInt("role_right.right_id"));
				}

			} catch (SQLException e) {
				
				authids.add(0);
			}
			db.closeRs();
			db.closeStm();
			db.closeConn();
		}
		return authids;
	}
	
	/**
	 * 提取并分解客户端访问信息
	 * @param information
	 * @return
	 */
	public String[] extractClientInformation(String information) {
		return information.split(CPermit.seperator);
	}
	
	/**
	 * 获得客户端访问ip
	 * @return
	 */
	public String getLoginIp() {
		String[] clientInformation = extractClientInformation(this.permit);
		return clientInformation[2];
	}
	
	/**
	 * 获得到目前为止客户端访问持续时间
	 * @return
	 */
	public long getLastingTime() {
		String[] clientInformation = extractClientInformation(this.permit);
		return System.currentTimeMillis()
				- Long.parseLong(clientInformation[1]);
	}
	
	/**
	 * 获得客户端访问时间和日期
	 * @return
	 */
	public String getLoginDataTime(){
		String[] clientInformation = extractClientInformation(this.permit);
		String date= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(Long.parseLong(clientInformation[1]));
		return date;
	}
	
	/**
	 * 获得用户访问权限列表
	 * @return
	 */
	public String[] getAuthList() {
		String[] clientInformation = extractClientInformation(this.permit);
		String[] lists = clientInformation[3].substring(1,
				clientInformation[3].length() - 2).split(", ");
		return lists;
	}
	
	
	/**用户名是否存在
	 * 
	 * @param username
	 * @return
	 * @throws Exception
	 */
	public boolean isUsernameExist(String username) throws Exception {
		boolean isExist = false;
		DBAccess db = new DBAccess();
		boolean success = db.createConn();
		if (success) {
			String sql = "select * from user where username='" + username + "'";
			ResultSet rs = db.query(sql);
			if (db.next()) {
				isExist = true;
			}

			db.closeRs();
			db.closeStm();
			db.closeConn();
		}
		return isExist;
	}
	
	/**
	 * 用户user_id是否具有角色role_id
	 * @param user_id
	 * @param role_id
	 * @return
	 * @throws Exception
	 */
	public boolean isUserRoleExist(int user_id, String role_id) throws Exception {
		boolean isExist = false;
		DBAccess db = new DBAccess();
		boolean success = db.createConn();
		if (success) {
			String sql = "select * from role_user where user_id='" + user_id
					+ "' and role_id='" + role_id + "'";
			ResultSet rs = db.query(sql);
			if (db.next()) {
				isExist = true;
			}

			db.closeRs();
			db.closeStm();
			db.closeConn();
		}
		return isExist;
	}
	
	/**
	 * 判断用户username对资源MyRes是否有访问权限
	 * @param username
	 * @param pagename
	 * @return
	 * @throws Exception
	 */
		public boolean isPermit(String username, String myRes)
				throws Exception {
			
			List<String> lists = getAuthorizedList(username);
			for (String list : lists) {
				if (myRes.equals(list)) {
					return true;
				}
			}
			return false;
		}
		
		
	/**
	 * 判断是否超时
	 * @return
	 */
		public boolean isOvertime(){
			return getLastingTime()>this.expireTime? true:false;
		}
		
		/**
		 * 根据用户名判断用户类型
		 * @param username
		 * @return
		 * @throws Exception
		 */
		public int getUserType(String username) throws Exception{
			DBAccess db = new DBAccess();
			int type=0;
			boolean success = db.createConn();
			if (success) {
				String sql = "SELECT `user`.user_type FROM `user` WHERE `user`.username='"+username+"'";
				ResultSet rs = db.query(sql);
				if(rs.next()){
					type=rs.getInt("user_type");
				}
				
			}
			db.closeRs();
			db.closeStm();
			db.closeConn();
			return type;
		}
}

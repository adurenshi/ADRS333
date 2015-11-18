package csAsc.ECOSS.db.query;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.Statement;
import csAsc.dbcom.*;

public class CQuery {
	static String tServUrl = "jdbc:mysql://localhost:3306";
	static String tUserName = "root";
	static String tPassWord = "123456";
	static String tDbName = "ecossmain";
	private static Connection tConn = null;
	private static Statement tStmt = null;
	private static ResultSet tRs = null;
	

	public static Statement getconn(){
		try {
			tConn = CDbConn.MySQLConnOpen(tServUrl, tDbName, tUserName,
					tPassWord);
			tStmt = tConn.createStatement();
		}catch (ClassNotFoundException se) {
			System.out.println("数据库无法连接：驱动未找到");
			se.printStackTrace();
		} catch (SQLException se) {
			System.out.println("数据库连接失败:或者用户名、密码错误，或者数据库名错误");
			se.printStackTrace();
		}
	
		return tStmt;
	}
	
	public static ResultSet getRecsBySql(String sqlStr) {
		tStmt = CQuery.getconn();
		tRs = null;
		try {
			tRs = tStmt.executeQuery(sqlStr);
		} catch (SQLException e) {
			System.out.println("MySQL操作错误");
			e.printStackTrace();
		}
		return tRs;
	}
	
	public static String getRecsnumber(String sqlStr,int number) {
		String complnum="未完成";
		tStmt = CQuery.getconn();
	   tRs = null;
		try {
			tRs = tStmt.executeQuery(sqlStr);
			if(tRs.next()){
				if((tRs.getInt("card_count")-tRs.getInt("st_photo"))<=number){
					complnum="已完成";	
				}
			}
		} catch (SQLException e) {
			System.out.println("MySQL操作错误");
			e.printStackTrace();
		}
		return complnum;
	}

	// 打包数据写入
	public static boolean BatchUpatepackId(String insertarg0,String updatearg1) {
		boolean b=false;
		tStmt = CQuery.getconn();
		try {
			    int i=tStmt.executeUpdate(insertarg0);//插入
			    if(i>0){
				    tStmt.executeUpdate(updatearg1);//更新
				    b=true;
			    }
			
		} catch (SQLException e) {
			System.out.println("MySQL插入失败");
			e.printStackTrace();
		}
		return b;
	}
	
	public static boolean BatchUpate(String updatearg0) {
		boolean b=false;
		tStmt = CQuery.getconn();
		try {
			tStmt.executeUpdate(updatearg0);//更新
			b=true;	
		} catch (SQLException e) {
			System.out.println("MySQL更新审核失败");
			e.printStackTrace();
		}
		return b;
	}
  public static void close(){
	  try {
		if(tRs != null && tRs.isClosed()==false){
			 tRs.close(); 
			
		  }
        if(tStmt != null && tStmt.isClosed()==false){
			  tStmt.close();
			
		  }
        if(tConn != null && tConn.isClosed()==false){
			  tConn.close();
				
		  }
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	  
	  
  }
}

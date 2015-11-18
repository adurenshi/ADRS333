package csAsc.com;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import csAsc.dbcom.DBAccess;

;

public class ControlTable {
	public ArrayList<ArrayList<String>> authTable=new ArrayList<ArrayList<String>>();
	
	public  List<String>  getPageAuthTable(int authid) {
		
		DBAccess db = new DBAccess();
		List<String> lists=new ArrayList<String>();
		if(db.createConn()){
			String sql = "select pages from controltable where right_id='" + authid + "'";
			ResultSet rs = db.query(sql);
			try{
				while(rs.next()){
				lists.add(rs.getString("pages"));
			}
			}catch (SQLException e) {
				//return 0;
				
			}
			
		}
		db.closeRs();
		db.closeStm();
		db.closeConn();
		return lists;

		
	}
}

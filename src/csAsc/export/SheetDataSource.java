package csAsc.export;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class SheetDataSource {
	public static String[] colname(ResultSet rs) {													// 每行的字段用逗号分隔，每行用一对方括号括起来，行间用逗号分隔
		ResultSetMetaData rsmd = null;
		int k = 0;
		ArrayList<String> tRecsBuffer = new ArrayList<String>();
		try {
			rsmd = rs.getMetaData();
			k = rsmd.getColumnCount(); 
			if (k < 1) return null;
			for (int i = 1; i <= k; i++) {
				tRecsBuffer.add(rsmd.getColumnName(i));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return (String[])tRecsBuffer.toArray(new String[tRecsBuffer.size()]);
		
	}

}

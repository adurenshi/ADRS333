package csAsc.xlsimport;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class ConnCOnnection {
	
	Connection conn=null;

	public Connection getConnect()
	{
		try {
			Class.forName("com.mysql.jdbc.Driver");
			//conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/ecossmain","root","csasc");
			conn=DriverManager.getConnection("jdbc:mysql://localhost:3316/test2","root","123");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
}

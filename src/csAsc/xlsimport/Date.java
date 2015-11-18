package csAsc.xlsimport;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;


import jxl.Workbook;
import jxl.read.biff.BiffException;


public class Date {
	
	public boolean getDate(InputStream istr)
	{
        boolean f=false;
		List liststu=new ArrayList();
		InputStream is=istr;
		try {
			Workbook wb=Workbook.getWorkbook(is);
			jxl.Sheet sheet=wb.getSheet(0);
			String content=null; 	
			for(int i=1;i<sheet.getRows();i++)
			{
				Badcardinfo badinfo=new Badcardinfo();
				for(int j=0;j<sheet.getColumns();j++)
				{
					content=sheet.getCell(j, i).getContents();
					System.out.print(content);
					if(badinfo.getPakage_number()==null)
					{
						badinfo.setPakage_number(sheet.getCell(j, i).getContents());
						continue;
					}
					
					if(badinfo.getSsn()==null)
					{
						badinfo.setSsn(sheet.getCell(j, i).getContents());
						continue;
					}
					
					if(badinfo.getSerialsNumberOfBadCard()==null)
					{
						badinfo.setSerialsNumberOfBadCard(sheet.getCell(j, i).getContents());
						continue;
					}
					if(badinfo.getCoopBank()==null)
					{
						badinfo.setCoopBank(sheet.getCell(j, i).getContents());
						continue;
					}
					if(badinfo.getFromWhereOfBadCard()==null)
					{
						badinfo.setFromWhereOfBadCard(sheet.getCell(j, i).getContents());
						continue;
					}
					if(badinfo.getReasonOfBadCard()==null)
					{
						badinfo.setReasonOfBadCard(sheet.getCell(j, i).getContents());
						continue;
					}

					if(badinfo.getCardfactory()==null)
					{
						badinfo.setCardfactory(sheet.getCell(j, i).getContents());
						continue;
					}
	
					if(badinfo.getPerson()==null)
					{
						badinfo.setPerson(sheet.getCell(j, i).getContents());
						break;
					}

				}
				if(getBadcardInfo(badinfo)){
					f=true;
				}else{
					f=false;
				}
			}
			
		} catch (BiffException e) {
			e.printStackTrace();
			f= false;
	   } catch (IOException e) {
			e.printStackTrace();
			 f=false;
		}
		return f;
		
	}
	
	public boolean getBadcardInfo(Badcardinfo badcard)
	{   boolean b=false;
	String date1=new SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date());
		String sql="insert into badcardinfo(pakage_number,ssn,serialsNumberOfBadCard,coopBank,fromWhereOfBadCard,reasonOfBadCard,cardfactory,person,dataSubmitted) values('"+badcard.getPakage_number()+"','"+badcard.getSsn()+"','"+badcard.getSerialsNumberOfBadCard()+"','"+badcard.getCoopBank()+"','"+badcard.getFromWhereOfBadCard()+"','"+badcard.getReasonOfBadCard()+"','"+badcard.getCardfactory()+"','"+badcard.getPerson()+"','"+date1+"')";
		ConnCOnnection conn=new ConnCOnnection();
		Connection con=conn.getConnect();
		try {
			Statement state=con.createStatement();
			state.executeUpdate(sql);
			b=true;
		} catch (SQLException e) {
			b=false;
			e.printStackTrace();
			
		}finally{
			
			try {
				con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return b;
	}

}

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


public class Batchbackgo {
	
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
				Offerdata badinfo=new Offerdata();
				for(int j=0;j<sheet.getColumns();j++)
				{
					content=sheet.getCell(j, i).getContents();
					System.out.print(content);
					if(badinfo.getForeid()==null)
					{
						badinfo.setForeid(sheet.getCell(j, i).getContents());
						continue;
					}
					
					if(badinfo.getPackage_number()==null)
					{
						badinfo.setPackage_number(sheet.getCell(j, i).getContents());
						continue;
					}
					
					if(badinfo.getSsn()==null)
					{
						badinfo.setSsn(sheet.getCell(j, i).getContents());
						continue;
					}
					
				
					if(badinfo.getCo_bank_cardno()==null)
					{
						badinfo.setCo_bank_cardno(sheet.getCell(j, i).getContents());
						continue;
					}
					if(badinfo.getCard_serial_number()==null)
					{
						badinfo.setCard_serial_number(sheet.getCell(j, i).getContents());
						continue;
					}
					if(badinfo.getInitial_password()==null)
					{
						badinfo.setInitial_password(sheet.getCell(j, i).getContents());
						continue;
					}

					if(badinfo.getHandid()==null)
					{
						badinfo.setHandid(sheet.getCell(j, i).getContents());
						continue;
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
	
	public boolean getBadcardInfo(Offerdata badinfo)
	{   boolean b=false;
	String date1=new SimpleDateFormat("yyyy-MM-dd").format(new java.util.Date());
		//String sql="insert into badcardinfo(pakage_number,ssn,serialsNumberOfBadCard,coopBank,fromWhereOfBadCard,reasonOfBadCard,cardfactory,person,dataSubmitted) values('"+badinfo.getPakage_number()+"','"+badinfo.getSsn()+"','"+badinfo.getSerialsNumberOfBadCard()+"','"+badinfo.getCoopBank()+"','"+badinfo.getFromWhereOfBadCard()+"','"+badinfo.getReasonOfBadCard()+"','"+badinfo.getCardfactory()+"','"+badinfo.getPerson()+"','"+date1+"')";
		String sql="update offerdata set card_serial_number='"+badinfo.getCard_serial_number()+"',initial_password='"+badinfo.getInitial_password()+"',handid='"+badinfo.getHandid()+"' where ssn='"+badinfo.getSsn()+"'";
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

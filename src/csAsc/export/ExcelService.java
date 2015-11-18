package csAsc.export;

import java.io.FileOutputStream;   
import java.io.IOException;   
import java.io.OutputStream;   
import java.sql.ResultSet;   
import java.sql.SQLException;   
import java.util.*;   
import javax.swing.JOptionPane;   
import org.apache.poi.hssf.usermodel.HSSFCell;   
import org.apache.poi.hssf.usermodel.HSSFFooter;   
import org.apache.poi.hssf.usermodel.HSSFHeader;   
import org.apache.poi.hssf.usermodel.HSSFRow;   
import org.apache.poi.hssf.usermodel.HSSFSheet;   
import org.apache.poi.hssf.usermodel.HSSFWorkbook; 
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Color;
import org.apache.poi.ss.usermodel.Font;

import csAsc.ECOSS.db.query.CQuery;

public class ExcelService {
 public  String[] tableHeader =null;   
    public  HSSFWorkbook demoWorkBook = null;   
    public  HSSFSheet demoSheet = null;   
    public  short cellNumber = 0;   
    public int columNumber = 0;   
    public String sql=null;
    public ExcelService(String sql){
    	this.sql=sql;
    	tableHeader=(String[]) SheetDataSource.colname(CQuery.getRecsBySql(sql));
    	demoWorkBook = new HSSFWorkbook();
    	demoSheet = demoWorkBook.createSheet("表1");
    	cellNumber = (short)tableHeader.length; 
    	columNumber = tableHeader.length;
    }
      
    @SuppressWarnings("deprecation")  
    public void createTableHeader() 
    { 
        HSSFHeader header = demoSheet.getHeader();   
        header.setCenter("用户表");   
        HSSFRow headerRow = demoSheet.createRow((short) 0);   
        for(int i = 0;i < cellNumber;i++)   
        {   
            HSSFCell headerCell = headerRow.createCell((short) i);   
            headerCell.setCellValue(tableHeader[i]);   
        }  
    }  
  
@SuppressWarnings("deprecation")  
public void createTableRow(List<String> cells , short rowIndex)   
{   
    HSSFRow row = demoSheet.createRow((short) rowIndex);   
    for(short i = 0;i < cells.size();i++)   
    {   
        HSSFCell cell = row.createCell((short) i);    
        cell.setCellValue(cells.get(i));   
    }   
}   
 
public  void createExcelSheeet() throws Exception   
{   
    createTableHeader(); 
    ResultSet rs = CQuery.getRecsBySql(sql);
    int rowIndex = 1;   
    while(rs.next())   
    {   
        List<String> list = new ArrayList<String>();   
        for(int i = 1;i <= columNumber;i++)   
        {   
            list.add(rs.getString(i));   
        }   
        createTableRow(list,(short)rowIndex);   
        rowIndex++;   
    }   
}   
 
public void exportExcel(HSSFSheet sheet,OutputStream os) throws IOException   
{   
    sheet.setGridsPrinted(true);   
    HSSFFooter footer = sheet.getFooter();   
    footer.setRight("Page " + HSSFFooter.page() + " of " +   
            HSSFFooter.numPages());   
    demoWorkBook.write(os);   
}  
}

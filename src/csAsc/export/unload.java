package csAsc.export;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.poi.hssf.usermodel.HSSFCell;   
import org.apache.poi.hssf.usermodel.HSSFFooter;   
import org.apache.poi.hssf.usermodel.HSSFHeader;   
import org.apache.poi.hssf.usermodel.HSSFRow;   
import org.apache.poi.hssf.usermodel.HSSFSheet;   
import org.apache.poi.hssf.usermodel.HSSFWorkbook; 
@WebServlet("/unload")
public class unload extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
      this.doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		
		String datatype=request.getParameter("datatype");
		String sql=null;
		if(datatype.equals("sqltype")){
			sql=request.getParameter("exportData");
		}
         if(datatype.equals("packid")){
           String packid=request.getParameter("datainfo");
			sql="select * from notpack where 包号='"+packid+"'";
		}
		  if(datatype.equals("badcardsql")){
			  sql=request.getParameter("exportData");
			}
	
		ExcelService pd = new ExcelService(sql);   
    	try {
			pd.createExcelSheeet();
			downloadEXCEL(pd.demoWorkBook,System.currentTimeMillis()+".xls",request,response);		
		} catch (Exception e) {
			e.printStackTrace();
		}    

	}

	private void downloadEXCEL(HSSFWorkbook hssfworkbook,String downloadFileName, HttpServletRequest request,HttpServletResponse response) throws Exception {
			 try {
			 response.setContentType("application/vnd.ms-excel");
			 response.setHeader("content-disposition",
			 "attachment;filename=\""
			 + new String(downloadFileName.getBytes("GBK"),
			 "ISO-8859-1") + "\";size="
			 + hssfworkbook.getBytes().length);
			 OutputStream out = response.getOutputStream();
			 hssfworkbook.write(out);
			 out.flush();
			 out.close();
			 } catch (Exception e) {
			 throw new Exception(e);
			 }
			 }	
}

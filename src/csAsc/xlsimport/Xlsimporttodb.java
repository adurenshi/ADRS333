package csAsc.xlsimport;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
@WebServlet("/Xlsimporttodb")
@MultipartConfig(location="c:/temp")
public class Xlsimporttodb extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		this.doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		Part part=request.getPart("fileUp");
		String uptype=request.getParameter("gobackdata");
		System.out.println("上传参数："+uptype);
		if(uptype.equals("gobackdata")){
			Batchbackgo importdata=new Batchbackgo();
			if(importdata.getDate(part.getInputStream())){
				out.println("<script>parent.callback('导入成功')</script>");
			}else{
				out.println("<script>parent.callback('导入失败')</script>");
			}	
		}else{
			Date date=new Date();
			if(date.getDate(part.getInputStream())){
				out.println("<script>parent.callback('导入成功')</script>");
			}else{
				out.println("<script>parent.callback('导入失败')</script>");
			}
		}
	}

}

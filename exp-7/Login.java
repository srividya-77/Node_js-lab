import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class Login extends HttpServlet{

public void doPost(HttpServletRequest req,HttpServletResponse res)
throws IOException{

PrintWriter out=res.getWriter();

String user=req.getParameter("userName");
String pass=req.getParameter("password");

if(user.equals("admin") && pass.equals("123")){
out.println("Login Success");
}
else{
out.println("Login Failed");
}

}
}
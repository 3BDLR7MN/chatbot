<%
  try{
    String param = request.getParameter("param");
    if (param.equals("lemon")) {
      out.print("lemon found");
    } else {
      out.print("lemon NOT found");
    }
  } catch (Exception e) {
    e.printStackTrace();
  }
%>

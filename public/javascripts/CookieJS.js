function makeCookie()
{
   var days = 1;
   var firstname = document.getElementById('FirstName').value;
   var lastname = document.getElementById('LastName').value;
   var email = document.getElementById('Email').value;
   var animal = document.getElementById('Animal').value;
   if (firstname != "" && firstname != null) {
       //set cookie
    setCookie("FirstName", firstname , days);   
   }else{
       //Erase cookie
       setCookie("FirstName", "" , -1);   
   }
   if (lastname != "" && lastname != null) {
   setCookie("LastName", lastname , days);   
   }else{
       setCookie("LastName", "" , -1);   
   }   
    if (email != "" && email != null) {
   setCookie("Email", email , days);   
   }else{
       setCookie("Email", "" , -1);   
   }
   if (animal != "" && animal != null) {
   setCookie("Animal", animal , days);   
   }else{
       setCookie("Animal", "" , -1);   
   }
   return true;
}

function setCookie(cname, cvalue, cdays) 
{
  var cookie = cname + "=" + escape(cvalue) + ";";
  var expiry  = new Date(new Date().getTime() + cdays * 1000 * 60 * 60 * 24);
  cookie += "expires=" + expiry.toGMTString() + ";";
  document.cookie = cookie;
}

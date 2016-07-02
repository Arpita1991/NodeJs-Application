var CookieValue = ['FirstName','LastName','Email','Animal'];
var personDetails = [];
var headData = ['Subject','Descrition'];

window.onload = function() {
    //get cookie and push into personDetails array
    for(k=0;k<CookieValue.length;k++)
    {
       var resultValue = getMyCookie(CookieValue[k]);
       if(resultValue != '')
       {
       personDetails.push(CookieValue[k]+"="+getMyCookie(CookieValue[k]));
       }
    }
    //create table     
    var table = document.createElement("TABLE");
    //create table row
    var row = table.insertRow(0);
    //loop to add table header
    for(h = 0; h<headData.length;h++)
    {
        if(personDetails.length>0)
        {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = headData[h];
        //append row to table 
        row.appendChild(headerCell);
        }
    }  
    // loop to add data in table row
    for(j=0;j<personDetails.length;j++)
    {    
        value = personDetails[j].split('=');
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = value[0];  
        cell = row.insertCell(-1);
        cell.innerHTML = value[1];  
     }
    var dvTable = document.getElementById("myload");
    dvTable.appendChild(table);
  };
  
  //retrive cookie for particular name
  function getMyCookie(cname)
   {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
     {
        var c = ca[i];
        while (c.charAt(0)==' ')
        c = c.substring(1);
        if (c.indexOf(name) == 0) 
        return c.substring(name.length,c.length);
    }
    return "";
}

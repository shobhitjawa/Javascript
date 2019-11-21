var ca=["fr","gh","fg"];
document.write("<br>");
for(var i=0;i<3;i++)
{
 document.write(ca[i]+" ");   
}
var ff=new Array("abc","abcd","abcde");
ff.push("gfds");
ff.push(45);
document.write("<br>");
for(var i=0;i<5;i++)
{
 document.write(ff[i]+" ");   
}

var c={
    brand:"rxs",
    model:"Model 3",
    price:350000,
   tapilot : function()
   {
       return "<h2>This Car has autopilot</h2>";
   }
}
c.fueltype="petrol";
delete c.brand;
c.price=960000
document.write("<h2>"+c.brand+" "+c.model+" "+c.price+" "+c.fueltype+"</h2>");
document.write(c.tapilot());
function f(brand,model,price)
{
    this.brand=brand;
    this.model=model;
    this.price=price;
    this.tre =function()
    {
        document.write("this is autopilot function.");
    }
}
var f1=new f("sbh","model4",450000);
var f2=new f("bfghj","model8",5453423);
f1.tre();
document.write(f2.model+" "+f1.model);

var str1=new String();
document.write("<h2>"+typeof(str1)+"</h2>");
function buttonclickon()
{
alert("buton clicked");
}
function vgf()
{
    document.getElementById("juj").innerHTML="Adjective";
}
function rrgf() 
{
     var s=document.getElementById("dfse").value;
      var d=document.getElementById("dfse1").value;
      if(s==d)
      {
          alert("Sucessfully login");
      }
      else{
          alert("Incorrect password");
      }
}
function gt()
{
      var f1=document.getElementById("rd1");
      var f2=document.getElementById("rd2");
      if(f1.checked==true)
      {
          alert(f1.value);
      }
      else if(f2.checked==true)
      {
          alert(f2.value);
      }
      else{
          alert("nothing entered");
      }
      
}
function tgt()
{
var select=document.getElementById("ll2");
alert(select.options[select.selectedIndex].value);
}
function chaa()
{
    var para=document.getElementsByTagName("p");
    para[0].style.color="red";
    para[1].style.color="blue";
    para[2].style.color="orange";
    para[3].style.color="green";
    para[4].style.color="brown";
}
function chau()
{
    var element=document.getElementsByClassName("gt1");
    for(var i=0;i<element.length;i++)
    {
        element[i].style.color="red";
    } 
}
function setNew()
{
    document.getElementById("img1").src="download1.png";
}
function setold()
{
    document.getElementById("img1").src="download.png";
}
function validate()
{
    var username=document.getElementById("uname");
    var password=document.getElementById("password");
    if(username.value.trim()==""||password.value.trim()=="")
    {
        alert("no blank values allowed");
        return false;
    }
    else{
  return true;
    }
}
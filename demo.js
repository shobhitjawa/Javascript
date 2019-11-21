document.write("<h1>Hello External World</h1>");
var num=8;
var Num=9;
var sum=num+Num;
//document.write(sum);
var r=6;
var result=r+num+"abc"+Num+num; //this document is called associativity.
document.write(result+"<br>");
if(r%2==0)
{
    document.write("Even Number"+"<br>");
}
else{
    document.write("odd Number"+"<br>");
}
var x=2;
switch(x)
{
    case 1:
        document.write("this is one"+"<br>");
        break;
        case 2:
         document.write("this is two"+"<br>");
         break;
         case 3:
             document.write("this is three"+"<br>");
              break;
              default:
                  document.write("wrong value"+"<br>");
            }

            var x="abc";
            switch(x)
            {
             case "bvc":
             document.write("this is one");
            break;
             case "vfv":
             document.write("this is two");
             break;
             case "abc":
             document.write("this is three");
              break;
             default:
             document.write("wrong value");
                        }
                        var t=5;
            for(var i=1;i<=10;i++)
            {
            document.write((t*i))
            }
      var f=10;
      while(f!=0)
      {
          document.write(f);
          f--;
      }      
      function myfun()
      {
          var a=2;
          var b=1;
          return a+b;
      }
     document.write(myfun());
     function star(q,z)
     {
         return q-z;
     }
     var l=star(4,2);
     document.write(l);
      
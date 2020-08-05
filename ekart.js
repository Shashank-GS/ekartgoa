// alert("Welcome to Ekart"); 

 var totalamount=0;
function myCart(elem) {
    var l = Number(elem.id)
    console.log(typeof(l))
      var i = Number(elem.id);


      var node1 = document.createElement("LI");
      var textnode1 = document.createTextNode(document.getElementsByClassName('name')[i].textContent);
      node1.appendChild(textnode1);
      document.getElementById("cartitem").appendChild(node1);

      var node1 = document.createElement("LI");
      var textnode1 = document.createTextNode(document.getElementsByClassName('price')[i].textContent);
      node1.appendChild(textnode1);
      document.getElementById("cartprice").appendChild(node1);

      var str = document.getElementsByClassName('price')[i].textContent;
      // var itemprice = parseInt(textnode1)
      // console.log(String(textnode1))
      var  str1  = str.substring(1); 
      var str2= str1.replace(',', '');
      console.log(str2) ;  
      // var  substr  = str.substring(1); 
      console.log(typeof(str2)) 
      var itemprice = Number(str2)

      console.log(itemprice) ;  
      console.log(typeof(itemprice))
  totalamount=totalamount+itemprice;
  var amount=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(totalamount);
  console.log(amount) ;   
      document.getElementById("totamt").innerHTML= "₹"+amount; 
      
  }


  function  buyItems(){
    var amountalert=new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(totalamount);
    if(totalamount>0)
    alert("Thanks for Shopping. \nYour Total Amount to be paid is ₹"+amountalert  ); 
    else
    alert("You have not purchased Anything...") ; 
  } 


 
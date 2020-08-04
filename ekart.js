// alert("Welcome to Ekart"); 
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


      //   var item1 = document.getElementsByClassName('name')[i].textContent;
      // var item2 = document.getElementsByClassName('price')[i].textContent  ;    
      // var m=document.getElementById('cartitem')
      // var n=document.getElementById('cartprice')
      // m.append(item2+"\n\n"); 
      // n.append(item2+"\n\n"); 

  }


 
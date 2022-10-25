


document.addEventListener("DOMContentLoaded", function (e) {
    fetch(CART_ID).then(respuesta => respuesta.json())
      .then(datos => {
        let productos = datos;
       
let htmlParaApendear = "";

for (let product of productos.articles){

 
         htmlParaApendear = ` <div> <br>
         <div class="row">
         <div class="col">
         <p class="mb-2"><b></b></p>
         </div>
        
         <div class="col">
         <p class="mb-2"><b>Nombre</b></p>
         </div>
         <div class="col">
         <p class="mb-2"><b>Costo</b></p>
         </div>
         <div class="col">
         <p class="mb-2"><b>Cantidad</b></p>
         </div>
        <div class="col">
         <p class="mb-2"><b>Subtotal</b></p>
         </div>
        <hr style="height:2px">
        <div class="list-group-item">
        <div class="row">
       
        <div class="col">
            
           
            <p><img src=${product.image} style= "width:56px" class="img-thumbnail"></img></p>
            </div>
            <div class="col">
            
            <p>${product.name} </p> 
            </div>
            <div class="col">
            
            <p>${product.currency} ${product.unitCost} </p>
            </div>
            <div class="col" id="mul">
          
            
  <input id="count" type="number" min="1" max="" style="width:56px" value="${product.count}">
</div> 

<div class="col">
           
            <strong> ${product.currency} <p class ="d-inline" id="rr"> ${product.unitCost}</p></strong>  
            </div> 
            <hr>
            <div class="row" id="newSell">
            </div>
            
             `
}

             document.getElementById("cart").innerHTML += htmlParaApendear;

     
      document.getElementById('mul').addEventListener("input",function() {
let coste="";
        let count = document.getElementById("count").value;
        for (let product of productos.articles){
        
       let resultado =  subTotal(count , product.unitCost)
          
       coste=resultado;
        }   
         
        document.getElementById("rr").innerHTML = coste;
        document.getElementById("subT").innerHTML=`USD ` + coste;
        
          let typeSend= document.querySelector('input[name="typeSend"]:checked').value;
    console.log(typeSend);
       
   let result =  porcentajeSend(coste, typeSend);


          document.getElementById("cSend").innerHTML =`USD `+ result;
          document.getElementById("total").innerHTML =`USD `+ (result + coste);
        });
           
    })
  });
  
function porcentajeSend(num, valor){
  let premium= document.getElementById('1').value;
  let express= document.getElementById('2').value;
  let standard= document.getElementById('3').value;
if(valor===premium){
  return num * 0.15
}
else if( valor=== express){
  return num * 0.07
}
else if( valor=== standard){
return num * 0.05
}
}
    function subTotal(cant, price) {
      return cant * price
    }
function sumaSubTotal(price,price2){
  return price + price2
}

  
    document.addEventListener("DOMContentLoaded", function (e) {
      fetch(PRODUCTS).then(respuesta => respuesta.json())
        .then(datos => {
          let productos = datos;
let htmlParaApendear="";

  htmlParaApendear = ` <div> <br>
       
  
  <div class="row">
 
  <div class="col">
      
    
      <p><img src=${productos.images[0]} style= "width:56px" class="img-thumbnail"></img></p>
      </div>
      <div class="col">
    
      <p>${productos.name} </p> 
      </div>
      <div class="col">
   
      <p>${productos.currency} ${productos.cost} </p>
      </div>
      <div class="col" id="mr">
   
      
<input id="step" type="number" min="1" max="" style="width:56px" value="1">
</div> 

<div class="col">
   
      <strong> ${productos.currency} <p class ="d-inline" id="tt"> ${productos.cost}</p></strong>  
      </div> `
        
        document.getElementById("newSell").innerHTML += htmlParaApendear;
      
      
      document.getElementById('count').addEventListener("input",function() {

        let counts = document.getElementById("count").value;
        let sub = document.getElementById("subT").value;
        let typeSend= document.getElementById("typeSend");
       let result =  subTotal(counts , productos.cost);
            let rrr= sumaSubTotal(result,counts);
           let ggg= porcentajeSend(sub, typeSend);
          
          document.getElementById("count").innerHTML =result;
          document.getElementById("subT").innerHTML += rrr;
          document.getElementById("cSend").innerHTML = ggg;
        });
           
    });
  });

 /* let counts = document.getElementById("step").value;
  let count = document.getElementById("count").value;
  let cost= document.getElementById("tt").value;
  let cost2= document.getElementById("rr").value;

  document.getElementById("subT").innerHTML=count+counts;*/



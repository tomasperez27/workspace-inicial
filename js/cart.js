


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
          
            
  <input id="count" type="number" min="1" max="" style="width:56px" value="" required>
  <div class="invalid-feedback">La cantidad de cada artículo debe estar especificada</div>
</div> 

<div class="col">
           
            <strong> ${product.currency} <p class ="d-inline" id="inputSubtotal"> ${product.unitCost}</p></strong>  
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
         
        document.getElementById("inputSubtotal").innerHTML = coste;
        document.getElementById("subT").innerHTML=`USD ` + coste;
        
          let typeSend1= document.getElementById("type-form");
    
       let typeSend2= typeSend1.typeSend.value;
   let result =  porcentajeSend(coste, typeSend2);


          document.getElementById("cSend").innerHTML =`USD `+ result;
          document.getElementById("total").innerHTML =`USD `+ (result + coste);
        });
           
    })
  });
  
function porcentajeSend(num, valor){
  let premium= document.getElementById('premium').value;
  let express= document.getElementById('express').value;
  let standard= document.getElementById('standard').value;
let porcentajePremium= 0.15;
let porcentajeExpress= 0.07;
let porcentajeStandard= 0.05;

if(valor===premium){
  return num * porcentajePremium
}
else if( valor=== express){
  return num * porcentajeExpress
}
else if( valor=== standard){
return num * porcentajeStandard
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


 document.getElementById("tarj-credito").addEventListener('input', function(){
  let formModal = document.getElementById("type-form");
  let numCuenta= document.getElementById("nmr-cuenta");
  let tarjCre= document.getElementById("tarj-credito").value;
  let numTarj= document.getElementById("nmr-tarjeta");
  let codSeg= document.getElementById("cod-seg");
  let venc= document.getElementById("venc");
  let check = formModal.check.value;
  let textModal=    document.getElementById("textModal");
  numCuenta.disabled  = false;
  numTarj.disabled  = false;
codSeg.disabled  = false;
venc.disabled  = false;
  if(check === tarjCre){
    numCuenta.disabled  = true;
    textModal.innerHTML="Tarjeta de crédito";
  }

 });

 document.getElementById("transf-banc").addEventListener('input', function(){
  let formModal = document.getElementById("type-form");
  let numTarj= document.getElementById("nmr-tarjeta");
let codSeg= document.getElementById("cod-seg");
let venc= document.getElementById("venc");
let transfBan= document.getElementById("transf-banc").value;
let check = formModal.check.value;
let numCuenta= document.getElementById("nmr-cuenta");
let textModal=    document.getElementById("textModal");
  numTarj.disabled  = false;
codSeg.disabled  = false;
venc.disabled  = false;
numCuenta.disabled  = false;
  
  if(check === transfBan){
    numTarj.disabled  = true;
    codSeg.disabled  = true;
    venc.disabled  = true;
    textModal.innerHTML="Transferencia bancaria";
  }

 });
 
 (() => {
  'use strict'

const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    validarChecks()
    
  
      if (!form.checkValidity()) {
          event.preventDefault()
         
      }
      else if(form.checkValidity() ){
      cambiarTipo(event)}
      form.classList.add('was-validated')
  }) 
}) 

})()

 function validarChecks(){
  let boton = document.getElementById("seleccionar");
  let formModal = document.getElementById("type-form");
  let check = formModal.check.value;
  let transfBan= document.getElementById("transf-banc").value;
  let tarjCre= document.getElementById("tarj-credito").value;
  
if(check === transfBan || check === tarjCre ){
  boton.style.color="rgb(66, 66, 252)"
}
else {
  boton.style.color="rgb(250, 58, 58)"
}
  }



 /* function validarForms(){
    let msjAlert = document.getElementById("msj-alert");
    msjAlert.classList.remove("hidden");
  }*/
  function cambiarTipo(event){
event.preventDefault()
    document.getElementById('msj-alert').style = 'display:block';
  }
 /*<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
  </div>*/
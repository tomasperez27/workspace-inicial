
let gt =[];

document.addEventListener("DOMContentLoaded", function (e) {
    fetch(CART_ID).then(respuesta => respuesta.json())
      .then(datos => {
        let productos = datos;
        let newMovie = document.createElement("button");
        newMovie.classList.add("btn","text-start");
let htmlParaApendear = "";

for (let product of productos.articles){
//<div style="column-count:5">
 gt = `${product.unitCost}`;
         htmlParaApendear = ` <div> <br>
       
        <div class="list-group-item">
        <div class="row">
       
        <div class="col">
            
            <p style="height:24px"> </p>
            <hr> 
            <p><img src=${product.image} style= "width:56px" class="img-thumbnail"></img></p>
            </div>
            <div class="col">
            <strong>Nombre</strong> 
            <hr>
            <p style="border-right">${product.name} </p> 
            </div>
            <div class="col">
            <strong>Costo</strong>
            <hr>
            <p>${product.currency} ${product.unitCost} </p>
            </div>
            <div class="col">
            <strong>Cantidad</strong>
            <hr>
            
  <input id="mul" type="number" min="1" max="9"  value="">
</div> 

<div class="col">
            <strong>Subtotal</strong>
            <hr>
            <p id="rr"> <b>${product.currency} ${gt}</b></p>
            </div>
             `
}
             document.getElementById("cart").innerHTML += htmlParaApendear;
           
      })
      document.getElementById('mul').addEventListener("input",function() {

        let gg = document.getElementById("mul").value;
        if ( gg ===1){
          gt = product.unitCost
        }
        else (gg > 1) ;{
       gt =  subTotal(gg,product.unitCost)
            }
            document.getElementById("rr").innerHTML += gt;
          });
           
    })
    function subTotal(cant, price) {
      return cant * price
    }

  

   
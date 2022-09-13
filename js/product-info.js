let productos = [];
//let productosId = localStorage.getItem("Id");
//const PRODUCTS = `https://japceibal.github.io/emercado-api/products/${localStorage.getItem("productID")}.json`;
//let productosId = localStorage.getItem("productID");
//const URL_PRO_INFO = "https://japceibal.github.io/emercado-api/products/" + productosId;
//localStorage.getItem("productID");


//class="d-flex w-100 justify-content-between"
document.addEventListener("DOMContentLoaded", function(e){
fetch(PRODUCTS).then( respuesta => respuesta.json())
         .then(datos => {
           let productos = datos;
           let htmlParaApendear = ` <div> <br>
           <h2 class="mb-4">${productos.name}  </h2>  </div> 
           <div class="list-group-item">
           <div class="row">
          
           <div class="col">
               <div class="col">
                   
                   <h5 class="mb-2"><b>Precio</b></h5>
                   <p class="mb-1">${productos.currency}${productos.cost}</p> 
                   </div>
              <h5 class="mb-1"><b>Descripción</b></h5>
               <p class="mb-1">${productos.description}</p>
               </div>
               <h5 class="mb-1"><b>Categoría</b></h5> 
               <p class="mb-1">${productos.category}</p>
            </div>
               <h5 class="mb-1"><b>Cantidad de vendidos</b></h5> 
               <p class="mb-1">${productos.soldCount}</p>
               <h5 class="mb-1"><b>Imágenes ilustrativas</b></h5> 
               </div>
               </div>
                `
                //for (let productoss of productos.images) {
                  for(  let i = 0; i < productos.images.length; i++){
                    let productoss= productos.images[i];
                    htmlParaApendear += `<img src="${productoss.images}" class="img-thumbnail">
                    </img>`;
                }
               

   

       document.getElementById("products").innerHTML += htmlParaApendear;
   });
});
document.addEventListener("DOMContentLoaded", function(e){
    fetch(PRO_INF_COMM).then( respuesta => respuesta.json())
             .then(datos => {
               let comentarios = datos;
               let htmlParaApendear=`<h3 class="mb-1">Comentarios</h3>`;
               for(  let coment of comentarios){
                
              htmlParaApendear+= `
             <div id="comentarios">
              <div class="list-group-item" >
              <div class="row" >
              
              <p class="mb-1"> <b>${JSON.stringify(coment.user)}</b>${JSON.stringify(coment.dateTime)}</p>
              <p class="mb-1"> ${JSON.stringify(coment.description)}</p>
              
              </div>
              </div>
              `;
            }
            //for(i=0 ; i <= 4 ; i++){
              
             // htmlParaApendear += `<span class="fa fa-star checked">
            // `;
            
            document.getElementById("products").innerHTML += htmlParaApendear;
        
           /*for(i=0 ; i <= comentarios.score ; i++){
             htmlParaApendear += `<span class="fa fa-star checked">
            `;
           }
           document.getElementById("scores").innerHTML += htmlParaApendear;*/
        })
        });
      
        //<span class="fa fa-star checked"></span><span class="fa fa-star"></span>


        document.getElementById("coments").addEventListener("submit", function(e){
          let coment= document.getElementById("coment").value;
          let stars= document.getElementById("stars").value;
         console.log(stars);
       
          let newComent = [];

          e.preventDefault();
      newComent= `
      <div class="list-group-item" >
      <div class="row"
      <p class="mb-1" id="scores"> <b>${localStorage.getItem("mail")}</b></p>
              <p class="mb-1"> ${coment}</p>
              </div>
              </div>
      `
      for(i=0; i <= stars; i++) {
       // <span class="fa fa-star checked"></span>
        document.getElementById("scores").innerHTML += `<span class="fa fa-star checked"></span>`;
      }
      
          
          document.getElementById("coments").innerHTML += newComent;
        });

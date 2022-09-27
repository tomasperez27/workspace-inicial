let productos = [];

document.addEventListener("DOMContentLoaded", function (e) {
  fetch(PRODUCTS).then(respuesta => respuesta.json())
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
     

              let active = "carousel-item active";
                let slide = "";
                for (let i = 0; i < productos.images.length; i++) {
                  let productoss = productos.images[i];
                  slide += `  <div class="${active}">
                 <img src="${productoss}" class="d-block w-10" alt="...">
               </div> `;
               active = "carousel-item";
                };
               
      
               
     // for (let i = 0; i < productos.images.length; i++) {
      //  let productoss = productos.images[i];

        htmlParaApendear += 
        `<div id="carouselExampleControls"; class="carousel slide" data-bs-ride="carousel" style="width: 60%">
        <div class="carousel-inner"  >
          ${slide}
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"data-bs-slide="prev">
          <span class="carousel-control-prev-icon" style="background-color:grey"  aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"data-bs-slide="next">
          <span class="carousel-control-next-icon"  style="background-color:grey"  aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`
      
       // `<img src=${productoss} style= "height:136px" class="img-thumbnail">
               //   </img>`; }
      

      document.getElementById("products").innerHTML += htmlParaApendear;
    });
});

document.addEventListener("DOMContentLoaded", function (e) {
  fetch(PRO_INF_COMM).then(respuesta => respuesta.json())
    .then(datos => {
      let comentarios = datos;
      let htmlParaApendear = `<h3 class="mb-1">Comentarios</h3>`;
      e.preventDefault();
      comentarios.sort(function (a, b) {
        if (a.dateTime < b.dateTime) { return -1; }
        if (a.dateTime > b.dateTime) { return 1; }
        return 0;
      });

      for (let coment of comentarios) {
        let stars = "";
        for (i = 1; i <= coment.score; i++) {
          stars += `<span class="fa fa-star checked"></span>`;
        }
        for (i = coment.score; i < 5; i++) {
          stars += `<span class="fa fa-star"></span>`;
        }
        htmlParaApendear += `
              <div id="comentarios">
              <div class="list-group-item">
              <div class="row" >
              
              <p class="mb-1"> <b>${coment.user}</b> ${coment.dateTime} ${stars}</p> 
              
              <p class="mb-1"> ${coment.description}</p>
             
              </div>
              </div>
              `;
      }
      document.getElementById("products").innerHTML += htmlParaApendear;
    })
});

//<span class="fa fa-star checked"></span><span class="fa fa-star"></span>


document.getElementById("coments").addEventListener("submit", function (e) {
  let comenta = document.getElementById("coment").value;
  let estrella = document.getElementById("stars").value;

  console.log(estrella);
  let newComent = [];
  let fecha = new Date();
  fecha = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} 
          ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} `;

  e.preventDefault();

  let stars = "";
  for (i = 1; i <= estrella; i++) {
    stars += `<span class="fa fa-star checked"></span>`;
  }
  for (i = estrella; i < 5; i++) {
    stars += `<span class="fa fa-star"></span>`;
  }

  newComent = `
  
      <div class="list-group-item" >
      <div class="row">
      <p class="mb-1" id="scores"> <b>${localStorage.getItem("mail")}</b> ${fecha}  ${stars}</p>
              <p class="mb-1"> ${comenta}</p>
              
              </div>
              </div>
      `

  document.getElementById("comentarios").innerHTML += newComent;
});
function productsetID(id) {
  localStorage.setItem("productID", id);
  window.location = "products-info.html";
}

document.addEventListener("DOMContentLoaded", function (e) {
  fetch(PRODUCTS).then(respuesta => respuesta.json())
    .then(datos => {
      let productos = datos;
      let htmlParaApendear=` <br> <h3 class="mb-1">Productos relacionados</h3>`;;
      for (let product of productos.relatedProducts) {
       
        htmlParaApendear += ` 
        <div onclick="productsetID(${product.id})" class="list-group-item list-group-item-action cursor-active">
        
        <img src=${product.image} style= "width:18%" class="img-thumbnail">
                    </img>
                    <h5 class="mb-1">${product.name}</h5>
                    </div>
      
        `
        
      }

       document.getElementById("related").innerHTML += htmlParaApendear;
    })
  });

  document.getElementById("related").addEventListener('click', function () {
localStorage.getItem("productID")
    window.location.href = 'product-info.html';

});
 
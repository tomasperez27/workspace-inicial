const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COST = "Precio";
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

let cars = [];

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COST){
        result = array.sort(function(a, b) {
            let aCost = parseInt(a.productCost);
            let bCost = parseInt(b.productCost);

            if ( aCost > bCost ){ return -1; }
            if ( aCost < bCost ){ return 1; }
            return 0;
        });
    }

    return result;
}
function productsetID(id) {
    localStorage.setItem("productID", id);
    window.location = "products-info.html"
}


function showCarsList(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.products.length; i++) {
        let carsArray = array.products[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(carsArray.productCost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(carsArray.productCost) <= maxCount))){

        htmlContentToAppend += `
        <div onclick="productsetID(${carsArray.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="list-group-item list-group-item-action cursos-active">
        <div class="row">
        <div class="col-3">
            <img src=${carsArray.image}  class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${carsArray.name} - ${carsArray.currency} ${carsArray.cost}   </h4>
                <small class="text-muted">${carsArray.soldCount} artículos</small>
            </div>
            <p class="mb-1 th">${carsArray.description}</p>
        </div>
    </div>
</div>
    </div>
 `
    }};
    document.getElementById('list-cars').innerHTML += htmlContentToAppend;
};
function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCarsList();
};


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cars = resultObj.data;
            showCarsList(cars);
           
        }
    });

document.getElementById("sortAsce").addEventListener("click", function(){
    sortAndShowCategories(ORDER_ASC_BY_NAME);
});

document.getElementById("sortDesce").addEventListener("click", function(){
    sortAndShowCategories(ORDER_DESC_BY_NAME);
});

document.getElementById("sortByCost").addEventListener("click", function(){
    sortAndShowCategories(ORDER_BY_PROD_COST);
});

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCostMin").value = "";
    document.getElementById("rangeFilterCostMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    showCarsList(cars);
            
});

document.getElementById("rangeFilterCost").addEventListener("click", function(){
    //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
    //de productos por categoría.
    minCount = document.getElementById("rangeFilterCostMin").value;
    maxCount = document.getElementById("rangeFilterCostMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    showCarsList(cars);
            
});
});

document.getElementById('list-cars').addEventListener('click', function() {
  
 window.location.href = 'product-info.html';
 
});

     
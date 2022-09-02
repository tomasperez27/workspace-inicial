let cars = [];

function showCarsList(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.products.length; i++) {
        let carsArray = array.products[i];

        htmlContentToAppend += `
    
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
    }
    document.getElementById('list-cars').innerHTML += htmlContentToAppend;
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARS_URL_101).then(function (resultObj) {
        if (resultObj.status === "ok") {
            cars = resultObj.data;
            showCarsList(cars);
        }
    });
});


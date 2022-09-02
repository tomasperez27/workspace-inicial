document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

/*let mail= document.getElementById('email-input').value;
let saveUser = document.getElementById('save-user');
let subm = document.getElementById('subm');
let user = [];





if (localStorage.getItem(mail.length) !== 0) {
    user = JSON.parse(localStorage.getItem(mail));
}

saveUser.innerHTML = '';
for (let name of  user) {
    console.log(name);
    saveUser.innerHTML += `<p>${name}</p>`;
}

subm.addEventListener('submit', function(){
    user.push(`${mail}`);
    localStorage.setItem(mail, JSON.stringify( user));

    // Una opción:
    // contenedor.innerHTML += `<p>bulbasaur</p>`;

    // Otra opción:
    saveUser.innerHTML = '';
    for (let name of  user) {
        console.log(name);
        saveUser.innerHTML += `<p>${name}</p>`;
    }
});*/
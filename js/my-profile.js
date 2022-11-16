document.getElementById("email-profile").value = localStorage.getItem("mail");

document.getElementById("nameProfile").value = localStorage.getItem("nameP");
document.getElementById("secondName").value = localStorage.getItem("secondNameP");
document.getElementById("lastName").value = localStorage.getItem("lastNameP");
document.getElementById("secondLastName").value = localStorage.getItem("secondLastNameP");
document.getElementById("phoneNumber").value = localStorage.getItem("phoneP");


  let form = document.getElementById("form-profile")

    form.addEventListener('submit', event => {
 
        if (!form.checkValidity()) {
            event.preventDefault();
           event.stopPropagation();
        }
        productSetProfile();
        event.preventDefault();
        form.classList.add('was-validated');

    }); 




      
        

    



    function productSetProfile() {
let nameProfile= document.getElementById("nameProfile").value;
let secondName= document.getElementById("secondName").value;
let lastName= document.getElementById("lastName").value;
let secondLastName= document.getElementById("secondLastName").value;
let emailProfile= document.getElementById("email-profile").value;
let numberContact= document.getElementById("phoneNumber").value;


        localStorage.setItem("nameP", nameProfile );
        localStorage.setItem("secondNameP", secondName );
        localStorage.setItem("lastNameP", lastName );
        localStorage.setItem("secondLastNameP", secondLastName );
        localStorage.setItem("emailP", emailProfile );
        localStorage.setItem("phoneP", numberContact );

         }


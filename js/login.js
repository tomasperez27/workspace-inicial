
document.getElementById('my-form').addEventListener('submit', function(e) {
    let mail= document.getElementById('email-input').value;
    let pass= document.getElementById('contraseña-input').value;
    let user = [];
    if (mail.length === 0  ) {
        e.preventDefault();
        document.getElementById('email-input').style.border = "2px solid red"
        
        document.getElementById('my-div').innerHTML = `<p>Ingresa tu e-mail</p>`
    
    }
    else if(pass.length === 0) {
        e.preventDefault();
        document.getElementById('contraseña-input').style.border = "2px solid red"
        
        document.getElementById('my-div2').innerHTML = `<p>Ingresa tu contraseña</p>`
        
}

else {
        e.preventDefault();
      
            user.push(mail);
            localStorage.setItem("mail", user);
           
            window.location.href = 'index2.html';
    }
            console.log(user);
});






  
   



function registrator(e){
  e.preventDefault();
    let name = document.getElementById("name").value;
      let email = document.getElementById("Email").value;
        let password = document.getElementById("pass").value;
     



        if(email === "admin@gmail.com" && pass ==="123"){
          alert("This Id And Password Not Available");
          return;
        }
        
              let user = {name , email , password};
         
           
           if(user) {
        
          localStorage.setItem("user " ,JSON.stringify(user));
          window.location.href = "my-website/login.html";


        }else{
          alert("Please fill right Id and Password");
          return
        }
}




function login(e){
    e.preventDefault();
    let email = document.getElementById("useremail").value;
    let pass = document.getElementById("password").value;
    if(email === "admin@gmail.com" && pass === "123"){
        localStorage.setItem("isLogin" , true);
        window.location.href = "../admin/dashboard.html";

    }
let userData = (   JSON.parse( localStorage.setItem("user" )));

    if(userData && email === userData.email && password === userData.password){
       JSON.parse( localStorage.setItem("user" , user ));
       window.location.href="./my-website/home.html";

    }else{
        alert("Invalid Id and Password");
        return;
    }
}

function logout(){
    localStorage.removeItem("isLogin");
    window.location.href = "../my-website/home.html";
    
}

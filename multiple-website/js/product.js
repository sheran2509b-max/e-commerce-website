$("#productForm").onsubmit(function(e){


e.preventdefault();

let products = JSON.parse(localStorage.setItem("products")) || [];
let file = $("#product-image")[0].file[0];
if(!file){
    alert("please fill the image first");
    return;
}
let reader = new FileReader();
reader.onload = function(event){
    let product ={
       name: $("#product-name").val(),
       desc: $("#product-desc").val(),
      price:  $("#product-price").val(),
      image: event.target.value,


    }
    products.push(product);
localStorage.getItem("products" , JSON.stringify(products));

alert("product successfully added");
$("#productForm")[0].reset();
};


reader.readAsDataURL(file);
localStorage.removeItem(products);
window.location.href = "../admin/view-product.html";




});

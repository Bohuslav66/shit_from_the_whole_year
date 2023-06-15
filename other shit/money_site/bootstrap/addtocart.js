let itemsCart=[]
let totalPrice = 0;


function addtocart(productId){

    var productName = document.getElementById(productId).getElementsByClassName("card-title")[0].innerHTML;
    var productPrice = parseInt(document.getElementById(productId).getElementsByClassName("card-price")[0].innerHTML);

    console.log(productName + " " + productPrice)

    let product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    let productToFind = itemsCart.find(item=>item.name===productName);

    if(productToFind){
        productToFind.quantity++;
        totalPrice += prudoctPrice;
    }
    else{
        itemsCart.push(product);
        totalPrice += productPrice;
    }
    console.log(itemsCart, totalPrice)
}
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else {
    ready();
}

//Activate remove item from cart
function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    for (var i=0; i<removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i=0; i<quantityInputs.length;i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
    // Add to Cart
    var addCart = document.getElementsByClassName('add-cart')
    for (var i=0; i<addCart.length; i++){
        var button = addCart[i]
        button.addEventListener("click", addCartClicked)
    }
    // Buy button
    document
        .getElementsByClassName('buy-button')[0].addEventListener('click', buyButtonClicked);

}

//Buy Button
function buyButtonClicked(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var earnBeans = 0
    var earnXp = 0
    for (var i=0; i< cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var quantity = quantityElement.value
        
    }

    alert('Transaction Completed! Enjoy your purchase')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updatetotal()
}

// Remove item from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updatetotal();
}

//Quantity change
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1 
    }
    updatetotal();
}

// Add to cart
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText
    var price = shopProducts.getElementsByClassName('price')[0].innerText
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i=0; i<cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("You have already add this item  to cart")
            return;
        }
    }
    var cartBoxContent = `
                <div class="row">
                    <div class="col-6">
                    <div class="p-3 border bg-light">
                        <img src="${productImg}" width="200" height="auto" class="img-fluid" alt="">
                    </div>
                    </div>
                    <div class="col-4">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                    <div class="col-2">
                    <i class="bi bi-trash-fill cart-remove"></i>
                    </div>
                </div>`
                
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click', removeCartItem);
    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChanged);
}

            

//Update Total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for (var i=0; i< cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + price * quantity
    }  
    //if price is cents
    total = Math.round(total * 100) / 100

    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}




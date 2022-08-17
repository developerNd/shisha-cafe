let ShoppingCart = document.getElementById("cart_items");
let label = document.getElementById("label");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basketData = localStorage.getItem("data");
let basket;
if (basketData != null) {
    basket = (basketData.split(","));
} else {
    basket = [];
}



let generateCartItems = () => {
    if (basket.length !== 0) {
        return (basket
            .forEach(x => {
                //    console.log(x); 
                for (const key in menuItemsData) {
                    if (menuItemsData.hasOwnProperty(key)) {
                        //   console.log(menuItemsData[key]);
                        for (let i = 0; i < menuItemsData[key].length; i++) {
                            let itemObj = menuItemsData[key][i];
                            // let search = itemObj.find((x) => x.id === id) || [];
                            // console.log(typeof(itemObj));
                            if (x == itemObj.id) {
                                console.log(itemObj.id);
                                return (ShoppingCart.innerHTML += `
                                <div class="card" id="product-id-${itemObj.id}">
                                            <div class="card_image">
                    
                                            </div>
                                            <div class="card_detail" id="">
                                                <div class="card_title">
                                                    <span>${itemObj.name}</span>
                                                </div>
                                                <div class="card_description">
                                                    <span>${itemObj.desc}.</span>
                                                </div>
                                                <div class="card_bottom">
                                                    <div class="price">
                                                        <span>AED ${itemObj.price}</span>
                                                    </div>
                                                    <div class="cart" >
                                                        <button id="${itemObj.id}" onclick="removeItem('${itemObj.id}');" >Remove</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  `);
                            }
                            // console.log(x.id);
                        }
                    }
                }
            }));
    } else {
        ShoppingCart.innerHTML = "";
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="sheesha.html">
            <button class="HomeBtn">Back to Home</button>
            </a>
            `;
    }
};

generateCartItems();

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};


// let removeItem = (id) => {
//     let selectedItem = id;
//     basket = basket.filter((x) => x.id !== selectedItem);
//     // calculation();
//     generateCartItems();
//     // TotalAmount();
//     localStorage.removeItem("data", JSON.stringify(basket));
// };

function removeItem(item) {
    console.log(item);
    var myIndex = basket.indexOf(item);
    if (basket.length > 1) {
        if (myIndex !== -1) {
            basket.splice(myIndex, 1);
            localStorage.setItem('data', basket);
        }
    } else {
        localStorage.clear();
        document.getElementById("cart_items").innerHTML = "<h2 style='color: #fff;text-align: center; margin: 1rem;'>Cart is empty</h2>";
    }
    console.log(basket);
    document.getElementById("product-id-"+item).style.display="none";

}

let clearCart = () => {
    localStorage.clear();
    
    document.getElementById("cart_items").innerHTML = "<h2 style='color: #fff;text-align: center; margin: 1rem;'>Cart is empty</h2>";
};
location.reload();

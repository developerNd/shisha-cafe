let ShoppingCart = document.getElementById("cart_items");
let label = document.getElementById("label");
let basketData = localStorage.getItem("data");
let basket;
if (basketData != null) {
    basket = (basketData.split(","));
} else {
    basket = [];
}

let generateCartItems = (data) => {
         let itemData = data;
    if (basket.length !== 0) {
        // console.log(menuItemsData);
        return (basket
            .forEach(x => {
                for (const key in itemData ) {
                    if (itemData.hasOwnProperty(key)) {
                        // console.log(key);
                        for (let i = 0; i < itemData[key].length; i++) {
                            let itemObj = itemData[key][i];
                            console.log(itemObj.id);
                            // console.log(x);
                            if (x == itemObj.id) {
                                console.log("dikesh");
                                console.log(itemObj.id);
                                let hideImage;
                                let hideDesc;
                                 if(itemObj.image == undefined){
                                      hideImage = " display:none";
                                    }
                                if(itemObj.desc  == undefined){
                                    hideDesc = "style='display:none'";
                                }
                                

                                return (ShoppingCart.innerHTML += `
                                <div class="card" id="product-id-${itemObj.id}">
                                            <div class="card_image">
                                                <img src="${itemObj.image}" style="width:100%;object-fit:cover;${hideImage}">
                                            </div>
                                            <div class="card_detail" id="">
                                                <div class="card_title">
                                                    <span>${itemObj.name}</span>
                                                </div>
                                                <div class="card_description" ${hideDesc}>
                                                    <span>${itemObj.desc}.</span>
                                                </div>
                                                <div class="card_bottom">
                                                    <div class="price">
                                                        <span>AED ${itemObj.price}</span>
                                                    </div>
                                                    <div class="cart" >
                                                        <button id="${itemObj.id}" class="cartBtn" onclick="removeItem('${itemObj.id}');" >Remove</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  `);
                            }
                        }
                    }
                }
            }));
    } else {
        ShoppingCart.innerHTML = "";
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a onclick="history.back()">
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

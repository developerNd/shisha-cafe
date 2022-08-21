

let shop = document.getElementById("menuItems");

let basketData = localStorage.getItem("data");
let basket;
if (basketData != null) {
  basket = (basketData.split(","));
} else {
  basket = [];
}

function generateShop(data, containerId) {
  // Iterate through the object
  for (const key in data) {
    if (data.hasOwnProperty(key)) {

      containerId.innerHTML += `<div class="section_heading">
      <span>${key}</span>
      </div>
      <hr class="hr" style="
      height: mar;
      margin: .4rem 0 1rem 0;
      ">`;
      // Iterate through the array inside the object
      for (let i = 0; i < data[key].length; i++) {
        let itemObj = data[key][i];
        let cartBtn;
        if ((basket.find(element => element == itemObj.id)) == undefined) {
          cartBtn = `<button id="${itemObj.id}" onclick="addToCart('${itemObj.id}');" class="cartBtn" >Add to cart</button>`;
        } else {
          cartBtn = `<button class="cartBtn" >Added</span>`;
        }
        let hideDesc;
        let hidePirce;
        let hideCart;
        if (itemObj.desc == undefined) {
          hideDesc = "style='display:none'";
        } else if (itemObj.price == undefined) {
          hidePirce = "style='display:none'";
        }
        if (data == indoorGamesItems) {
          hideCart = "style='display:none'"
          hidePirce = "style='display:none'";
        }

        containerId.innerHTML += `
            <div class="card" id="product-id-${itemObj.id}">
                        <div class="card_image">

                        </div>
                        <div class="card_detail" id="">
                            <div class="card_title">
                                <span>${itemObj.name}</span>
                            </div>
                            <div class="card_description" ${hideDesc}>
                                <span>${itemObj.desc}.</span>
                            </div>
                            <div class="card_bottom">
                                <div class="price" ${hidePirce}>
                                    <span>AED ${itemObj.price}</span>
                                </div>
                                <div class="cart" ${hideCart}>
                                 ${cartBtn}
                                </div>
                            </div>
                        </div>
                    </div>`;
      }
    }
  }
}
// generateShop(menuItemsData,shop);

function addToCart(id) {

  let selectedItem = id;
  update(selectedItem);

  let itemToAdd = basket.push(id);
  localStorage.setItem("data", basket);
  document.getElementById(id).innerHTML = "Added";
  // console.log(basket);
  calculation();

}

let update = (id) => {

  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.length;
};

calculation();
let cartItems = localStorage.getItem("data");


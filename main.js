$('.button').click(function () {
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
  console.log("in");
})

$('#modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
  console.log("out");
});

let shop = document.getElementById("menuItems");

let basket = JSON.parse(localStorage.getItem("data")) || [];

function generateShop() {
  // Iterate through the object
  for (const key in menuItemsData) {
    if (menuItemsData.hasOwnProperty(key)) {
      // console.log(`${key}: ${a[key]}`);

      shop.innerHTML += `<div class="section_heading">
      <span>${key}</span>
  </div>`;
      // Iterate through the array inside the object
      for (let i = 0; i < menuItemsData[key].length; i++) {
        let itemObj = menuItemsData[key][i];
         
        // .map((x) => {
        //   // let { id, name, desc, img, price } = x;
        //   // let search = basket.find((y) => y.id === id) || [];
          shop.innerHTML += `
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
                                    <button id="${itemObj.id}" onclick="addToCart('${itemObj.id}');" >Add to cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
              `;
        // })
        // appendChild
      }
    }
  }
}
generateShop();

function addToCart(id){
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  console.log(basket);
  update(selectedItem);
  localStorage.setItem("data", JSON.stringify(basket));
}


let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

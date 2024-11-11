
// let bagItemsObjects;
onLoad();
function onLoad() {
    // loadBagItemsObjects();
    displayBagItems();
}

// function loadBagItemsObjects() {
//     console.log(bagItems);

//     // bagItemsObjects = bagItems.map(itemId => {
//     //     for (let i = 0; i < item.length; i++) {
//     //         if (itemId == item[i].id) {
//     //             return item[i];
//     //         }
//     //     }
//     // });
//     // console.log(bagItemsObjects);
// }
function displayBagItems() {
console.log(bagItems);  
    let containerElement = document.querySelector('.bag-items-container');
    containerElement.innerHTML = `<div class="bag-item-container">
                <div class="item-left-part">
                    <img class="bag-item-img" src="./${item.images}"/>
                </div>
                <div class="item-right-part">
                    <div class="company">${item.company}</div>
                    <div class="item-name"> ${item.item_name} </div>
                    <div class="price-container">
                        <span class="current-price">Rs ${item.current_price}</span>
                        <span class="original-price"> Rs ${item.original_price}</span>
                        <span class="discount-percentage">(${item.dicount}% OFF) </span>

                    </div>
                    <div class="return-period">
                        <span class="return-period-days">${item.return_period}days</span>
                    </div>
                    <div class="delivery-details">
                        <span class="return-period-days">10 oct 2024 </span>
                    </div>
                </div>
                <div class="remove-from-cart"></div>
            </div>`;
            function generateItemHTML(items){

            }

}

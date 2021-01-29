// Products request function
const goodsReq = new Request('goods/goods.json')

const getGoods = () => {
    fetch(goodsReq)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let catalogWrapper = document.querySelector('.products-catalog-list');
        for (let key in data) {
            let sale = document.createElement('div');
            sale.classList.add('sale-icon');
            sale.innerHTML = "Sale";
            let hit = document.createElement('div');
            hit.classList.add('hit-icon');
            hit.innerHTML = "Хит";
            let productModule = document.createElement('div');
            productModule.classList.add('product-card');
            let oldPrice = document.createElement('div');
            oldPrice.classList.add('old-price');
            productModule.innerHTML =
            `
                <div class="card-item-img">
                    <img src="`+data[key].image+`" alt="card-item-img">
                </div>
                <div class="item-number"><div class="favorite-wrapper"><svg class="svg-icon"><use class="svg-use" href="img/svg/sprite.svg#fav-icon" onclick="favoriteButton(this)"></use></svg></div>`+key+`</div>
                <div class="item-description">
                    `+data[key].description+`
                </div>
                <div class="item-price">
                    `+checkDiscounts()+' '+`₽
                </div>
                <button class="add-to-cart">Добавить в корзину</button>
            `;
            if (data[key].hit === true) {
                productModule.prepend(hit);
            }
            function checkDiscounts() {
                let priceValue = data[key].price;
                if (!data[key].discount == 0) {
                    let discountValue = data[key].discount / 100;
                    let totalPrice = Math.round(priceValue - (priceValue * discountValue));
                    oldPrice.innerHTML = priceValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽';
                    productModule.appendChild(oldPrice);
                    productModule.prepend(sale);
                    return totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                } else
                    return priceValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

            checkDiscounts();
            catalogWrapper.prepend(productModule);
        }
    });
}

getGoods();




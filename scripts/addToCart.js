const product = [
    {
        id: 0,
        image: 'img/products/product1.png',
        title: 'ROG Strix SCAR 18 (2024) G834',
        price: 299995,
    },
    {
        id: 1,
        image: 'img/products/product2.png',
        title: 'ROG Strix G18 (2024) G814',
        price: 162999,
    },
    {
        id: 2,
        image: 'img/products/product3.png',
        title: 'Predator Helios 16 PH16-72-94UE',
        price: 129950,
    },
    {
        id: 3,
        image: 'img/products/product4.png',
        title: 'Predator Helios Neo 16 PHN16-72-75Z0',
        price: 104995,
    },
    {
        id: 4,
        image: 'img/products/product5.png',
        title: 'Aspire C27-1751',
        price: 70999,
    },
    {
        id: 4,
        image: 'img/products/product6.png',
        title: 'Aspire C24-175',
        price: 51999,
    },
    {
        id: 5,
        image: 'img/products/product7.jpg',
        title: 'iMac',
        price: 84990,
    },
    {
        id: 6,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        price: 173047,
    }
];

const categories = [...new Set(product.map((item) => item))];

let i = 0;

document.getElementById('products').innerHTML = categories.map((item) => {
    var { image, title, price } = item;

    return (
        `
        <div class="col-sm-3 text-center">
            <div class="card w-100 my-2 shadow-sm"  style="width: 18rem; ">
                <img src="${image}" class="card-img-top" style="aspect-ratio: 1 / 1" alt="${title}"/>
                <div class="card-body">
                    <h6><span class="badge bg-danger pt-1">New</span></h6>
                    <h5 class="card-title">${title}</h5> 
                    <p class="card-text">₱${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <div class="card-footer pt-3 pb-0">` +
                    "<button type='button' class='btn btn-primary shadow-0 me-1 buy' onclick='addtocart(" + (i++) + ")'><i class='fa fa-cart-plus'></i> Add to Cart</button>" +
                    `</div>
                </div>
            </div>
        </div>`
    );
}).join('');

var cart=[];

function addtocart(a) {
    cart.push({...categories[a]});
    displayCart();
}

function displayCart(a){
    let j = 0;
    let total = 0;
    if (cart.length==0) {
        document.getElementById('cart').innerHTML = "Your cart is empty :(";
    }
    else {
        document.getElementById('cart').innerHTML = cart.map((item) =>
        {
            total = total + item.price;
            var {image, title, price} = item;

            return (
                `<div class="row">
                    <div class="col-sm-3"><img style="width: 100px; aspect-ratio: 1 / 1;" src="${image}" alt=""></div>
                    <div class="col-sm-6"><h4>${title}</h4></div>
                    <div class="col-sm-3"><p>₱${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p></div>
                </div>`
            );
            
        }).join('');
    }
    document.getElementById('total').innerHTML = "₱" + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
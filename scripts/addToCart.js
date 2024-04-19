const product = [
    {
        id: 0,
        image: 'img/products/0.jpg',
        title: 'PC Product 1',
        price: 5100,
    },
    {
        id: 1,
        image: 'img/products/1.jpg',
        title: 'PC Product 2',
        price: 5100,
    },
    {
        id: 2,
        image: 'img/products/2.jpg',
        title: 'PC Product 3',
        price: 5100,
    },
    {
        id: 3,
        image: 'img/products/0.jpg',
        title: 'PC Product 4',
        price: 5100,
    },
    {
        id: 4,
        image: 'img/products/0.jpg',
        title: 'PC Product 2',
        price: 5100,
    },
    {
        id: 4,
        image: 'img/products/0.jpg',
        title: 'PC Product 2',
        price: 5100,
    },
    {
        id: 5,
        image: 'img/products/clay.webp',
        title: 'Romeo Jagonia Jr.',
        price: 69420,
    },
    {
        id: 6,
        image: 'img/products/clay.webp',
        title: 'Alvin Gumapac alyas Gangstah',
        price: 69420,
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
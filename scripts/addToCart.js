const product = [
    {
        id: 0,
        image: 'img/products/product1.png',
        title: 'ROG Strix SCAR 18 (2024) G834',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        2TB + 2TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 299995,
    },
    {
        id: 1,
        image: 'img/products/p2.jpg',
        title: "Legion 9i (16', Gen9)",
        description: 
        `Windows 11 Pro
        Intel® Core™ i9-14900HX
        NVIDIA® GeForce RTX™ 4090 Laptop GPU, 16GB GDDR6 (150W TGP +25W Boost)
        64GB (2x32GB) 5600Mhz Dual Channel DDR5
        2TB (RAID 0 1TB+1TB) PCIe SSD (Gen 4)`,
        price: 257745,
    },
    {
        id: 2,
        image: 'img/products/p3.jpg',
        title: 'Titan 18 HX A14VIG',
        description: 
        `Windows 11 Pro
        Intel® HM770
        NVIDIA® GeForce RTX™ 4090 Laptop GPU 16GB GDDR6 Up to 2040MHz
        16" WQXGA (2560 x 1600) 16:10 IPS 240 Hz
        Max 192GB DDR5
        4TB (2TB x 2) NVMe SSD in Gen4x4 configuration`,
        price: 349995,
    },
    {
        id: 3,
        image: 'img/products/product4.png',
        title: 'Predator Helios Neo 16 PHN16-72-72HZ',
        description: 
        `Windows 11 Home
        Intel® Core™ i7-14650HX processor Hexadeca-core
        NVIDIA® GeForce RTX™ 4060 with 8 GB dedicated memory
        16" WUXGA (1920 x 1200) 16:10 IPS 165 Hz
        16 GB, DDR5 SDRAM
        1 TB SSD`,
        price: 104995,
    },
    {
        id: 4,
        image: 'img/products/product5.png',
        title: 'Aspire C27-1751',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 70999,
    },
    {
        id: 5,
        image: 'img/products/product6.png',
        title: 'Aspire C24-175',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 51999,
    },
    {
        id: 6,
        image: 'img/products/p7.png',
        title: 'Aspire C24-1750',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 84990,
    },
    {
        id: 7,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 8,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 9,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 10,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    },
    {
        id: 11,
        image: 'img/products/product9.jpg',
        title: 'HP Envy 34',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4090 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula HDR Display
        1TB + 1TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage (RAID 0)`,
        price: 173047,
    }
];

const categories = [...new Set(product.map((item) => item))];

$(document).ready(function () {
    populateProducts();
});

function populateProducts() {
    if ($('#allProducts').length) {
        populateSection('allProducts', product);
    }
    if ($('#recentlyAdded').length) {
        const recentlyAdded = product.slice(0, 4);
        populateSection('recentlyAdded', recentlyAdded);
    }
    if ($('#recommended').length) {
        const recommended = getRandomItems(product, 4);
        populateSection('recommended', recommended);
    }
}

function populateSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    section.innerHTML = items.map((item) => {
        const { id, image, title, price } = item;
        return `
            <div class="col-sm-3 text-center">
                <div class="card w-100 my-2 shadow-sm" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" style="aspect-ratio: 1 / 1" alt="${title}" />
                    <div class="card-body">
                        <h6><span class="badge bg-danger pt-1">New</span></h6>
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">₱${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        <div class="card-footer pt-3 pb-2">
                            <button type='button' class='btn btn-primary shadow-0 me-1 buy' onclick='addtocart(${id})'><i class='fa fa-cart-plus'></i> Add to Cart</button>
                            <button type='button' class='btn btn-primary shadow-0 me-1' onclick='seeMore(${id})'><i class='fa fa-eye'></i></button>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join('');
}

function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}



// Cart system
var cart=[];

function addtocart(a) {
    cart.push({...categories[a]});
    displayCart();
}

function displayCart(){
    let total = 0;
    if (cart.length==0) {
        document.getElementById('cart').innerHTML = "Your cart is empty :(";
    }
    else {
        document.getElementById('cart').innerHTML = cart.map((item) =>
        {
            total += item.price;
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

function seeMore(id) {
    // Show the modal
    $('#seeMore').modal('show');

    // Fetch the product details based on the id
    const selectedProduct = product.find(item => item.id === id);
    
    // Update modal content with product details
    document.getElementById('modalProductImage').src = selectedProduct.image;
    document.getElementById('modalProductTitle').innerText = selectedProduct.title;
    document.getElementById('modalProductDescription').innerHTML = selectedProduct.description ? 
        `<ul>${selectedProduct.description.split('\n').map(item => `<li>${item.trim()}</li>`).join('')}</ul>` : 
        "No description available.";
}
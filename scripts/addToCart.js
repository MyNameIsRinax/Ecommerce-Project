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
        title: "Legion 9i (16', Gen 9)",
        description: 
        `Windows 11 Pro
        Intel® Core™ i9-14900HX
        NVIDIA® GeForce RTX™ 4090 Laptop GPU, 16GB GDDR6 (150W TGP +25W Boost)
        64GB (2x32GB) 5600Mhz Dual Channel DDR5
        2TB (RAID 0 1TB+1TB) PCIe SSD (Gen 4)
        2 x 2 WiFi 7`,
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
        title: 'Predator Helios 16 PH16-72-96H6',
        description: 
        `Windows 11 Pro
        Intel® Core™ i9-14900HX processor Tetracosa-core (24 Core™)
        NVIDIA® GeForce RTX™ 4070 with 8 GB dedicated memory
        40.6 cm (16") WQXGA (2560 x 1600) 16:10 IPS 240 Hz
        16 GB, DDR5 SDRAM
        1 TB SSD`,
        price: 132999,
    },
    {
        id: 4,
        image: 'img/products/p5.png',
        title: 'ROG Strix G16 (2023) G614JV-N4369W',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4060 Laptop GPU
        13th Gen Intel® Core™ i7-13650HX Processor
        QHD+ (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
        1TB M.2 NVMe™ PCIe® 4.0 SSD storage`,
        price: 109599,
    },
    {
        id: 5,
        image: 'img/products/p6.png',
        title: 'ROG Strix G18 (2024) G814JIR-N6083WS',
        description: 
        `Windows 11 Home
        NVIDIA® GeForce RTX™ 4070 Laptop GPU
        Intel® Core™ i9-14900HX Processor
        2.5K (2560 x 1600, WQXGA) 16:10 240Hz ROG Nebula Display
        1TB M.2 NVMe™ PCIe® 4.0 SSD storage`,
        price: 153450,
    },
    {
        id: 6,
        image: 'img/products/p7.jpg',
        title: 'Predator Helios 16 PH16-71-95L8',
        description: 
        `Windows 11 Home Single Language 64-bit
        Intel® Core™ i9-13900HX processor Tetracosa-core (24 Core™) 2.20 GHz
        NVIDIA® GeForce RTX™ 4070 with 8 GB dedicated memory
        40.6 cm (16") WQXGA (2560 x 1600) 16:10 240 Hz
        16 GB, DDR5 SDRAM
        1 TB SSD`,
        price: 123499,
    },
    {
        id: 7,
        image: 'img/products/p8.jpg',
        title: 'Predator Helios Neo 16 PHN16-72-99K9',
        description: 
        `Windows 11 Home Single Language
        Intel® Core™ i9-14900HX processor Tetracosa-core (24 Core™) 2.20 GHz
        NVIDIA® GeForce RTX™ 4060 with 8 GB dedicated memory
        40.6 cm (16") WQXGA (2560 x 1600) 16:10 IPS 165 Hz
        16 GB, DDR5 SDRAM
        512 GB SSD`,
        price: 109249,
    },
    {
        id: 8,
        image: 'img/products/p9.jpg',
        title: "Legion Pro 7i (16', Gen 9)",
        description: 
        `Windows 11 Pro
        14th Gen Intel® Core™ i9-14900HX
        NVIDIA® GeForce RTX™ 4090 Laptop GPU,16GB GDDR6 (175W), 2040MHz Boost Clock
        32GB overclocked DDR5 (2 x 16GB 6000MHz)
        2TB (2 x 1TB) PCIe SSD Gen 4`,
        price: 216564,
    },
    {
        id: 9,
        image: 'img/products/p10.jpg',
        title: "Legion Pro 5i (16', Gen 9)",
        description: 
        `Windows 11 Pro
        14th Gen Intel® Core™ i9-14900HX
        NVIDIA® GeForce RTX™ 4070 Laptop GPU 8GB GDDR6 (140W) 2175Mhz Boost Clock
        32GB (2 x 16GB) 5600Mhz DDR5
        2 TB (1TB x 1TB) PCIe SSD Gen 4`,
        price: 114745,
    },
    {
        id: 10,
        image: 'img/products/p11.jpg',
        title: 'Raider 18 HX A14VHG',
        description: 
        `Windows 11 Home
        18” UHD+ (3840x2400), MiniLED, 120Hz
        2280MHz Boost Clock 175W Maximum Graphics Power with Dynamic Boost. Max. 250W CPU-GPU Power with MSI OverBoost Technology
        NVIDIA® GeForce RTX™ 4080 Laptop GPU 12GB GDDR6
        Max 192GB DDR5`,
        price: 96900,
    },
    {
        id: 11,
        image: 'img/products/p12.png',
        title: 'Crosshair 16 HX MONSTER HUNTER EDITION D14V',
        description: 
        `Windows 11 Home
        Intel® Core™ i7 processor HX series (14th Gen)
        16” QHD+ (2560x1600), 240Hz, IPS-Level
        NVIDIA® GeForce RTX™ 4060 Laptop GPU 8GB GDDR6 Up to 2370MHz Boost Clock 140W Maximum Graphics Power with Dynamic Boost
        Max 96GB DDR5-5600`,
        price: 119995,
    },
    {
        id: 12,
        image: 'img/products/p13.jpg',
        title: 'Lenovo ThinkCentre M90a Gen 5 (24″ Intel)',
        description: 
        `Windows 11 Home
        Intel® UHD Graphics 770
        Intel vPro® with 14th Gen Intel® Core™ i7
        64GB 5600Mhz, DDR5
        4TB SSD for Intel® UHD Graphics model`,
        price: 52795,
    },
    {
        id: 13,
        image: 'img/products/p14.jpg',
        title: 'IdeaCentre AIO 24 Intel Gen 9',
        description: 
        `Windows 11 Pro
        Intel® Core™ i7-13620H
        Intel® UHD Graphics
        32GB 2 x DDR5
        1TB M.2 PCIe SSD
        Wi-Fi 6 (2 x 2 802.11 ax)`,
        price: 50955,
    },
    {
        id: 14,
        image: 'img/products/p15.jpg',
        title: 'ThinkCentre M90a Pro Gen 4 (27 Inch Intel)',
        description: 
        `Windows 11 Home
        Intel vPro® Enterprise with 13th Gen Intel® Core™ i9
        64GB DDR5
        Intel® UHD 770
        2TB M.2 PCIe SSD&`,
        price: 70074,
    },
    {
        id: 15,
        image: 'img/products/p16.jpg',
        title: 'Modern AM242TP 1M',
        description: 
        `Windows 11 Home
        Intel® Core™ 7 processor 150U (12M Cache, 1.80 GHz up to 5.40 GHz)
        Intel® Iris® Xe Graphics
        Max 64GB SO-DIMM DDR5 5200 MHz
        1x M.2 slots`,
        price: 55594,
    },
    {
        id: 16,
        image: 'img/products/p17.jpg',
        title: 'Modern AM242 12M',
        description: 
        `Windows 11 Home
        ntel® Core™ i7-1260P
        Intel® Iris® Xe Graphics
        2x DDR4 2666/3200MHz SO-DIMMs, up to 64GB
        1x M.2 SSD (PCIE/SATA auto-switch)`,
        price: 23500,
    },
    {
        id: 17,
        image: 'img/products/p18.jpg',
        title: 'PRO AP272P 14M',
        description: 
        `Windows 11 Home
        Intel® Core™ i7 processor 14700 (33M Cache, 2.10 GHz up to 5.40 GHz)
        Intel® UHD Graphics
        2x DDR5 SO-DIMMs, up to 64GB
        1x M.2 SSD (PCIE / SATA Auto Switch)`,
        price: 86054,
    },
    {
        id: 18,
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
    loadCart();
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

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    displayCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addtocart(a) {
    cart.push({...categories[a]});
    saveCart();
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
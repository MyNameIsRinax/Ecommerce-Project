// List of products
const product = [
    {
        id: 0,
        image: 'img/products/product1.png',
        title: 'ROG Strix SCAR 18 G834',
        brand: 'asus',
        category: 'laptop',
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
        brand: 'lenovo',
        category: 'laptop',
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
        brand: 'msi',
        category: 'laptop',
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
        brand: 'acer',
        category: 'laptop',
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
        brand: 'asus',
        category: 'laptop',
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
        brand: 'asus',
        category: 'laptop',
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
        brand: 'acer',
        category: 'laptop',
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
        brand: 'acer',
        category: 'laptop',
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
        brand: 'lenovo',
        category: 'laptop',
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
        brand: 'lenovo',
        category: 'laptop',
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
        brand: 'msi',
        category: 'laptop',
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
        brand: 'msi',
        category: 'laptop',
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
        brand: 'lenovo',
        category: 'desktop',
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
        brand: 'lenovo',
        category: 'desktop',
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
        brand: 'lenovo',
        category: 'desktop',
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
        brand: 'msi',
        category: 'desktop',
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
        brand: 'msi',
        category: 'desktop',
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
        brand: 'msi',
        category: 'desktop',
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
        image: 'img/products/p19.jpg',
        title: 'Aspire C27-1751 All-in-One',
        brand: 'acer',
        category: 'desktop',
        description: 
        `Windows 11 Home Single Language 64-bit
        Intel® Core™ i7-1260P processor Dodeca-core
        8 GB, DDR4 SDRAM
        256 GB SSD, 1 TB HDD`,
        price: 67999,
    },
    {
        id: 19,
        image: 'img/products/p20.jpg',
        title: 'Aspire C24-1750 All-in-One',
        brand: 'acer',
        category: 'desktop',
        description: 
        `Windows 11 Home Single Language 64-bit
        Intel® Core™ i5-1240P processor Dodeca-core
        Intel® Iris® Xe Graphics eligible shared memory
        8 GB, DDR4 SDRAM
        256 GB SSD, 1 TB HDD`,
        price: 43999,
    },
    {
        id: 20,
        image: 'img/products/p21.jpg',
        title: 'Aspire C24-1700 All-in-One',
        brand: 'acer',
        category: 'desktop',
        description: 
        `Windows 11 Home Single Language 64-bit
        Intel® Core™ i3-1215U processor Hexa-core
        Intel® UHD Graphics shared memory
        8 GB, DDR4 SDRAM
        256 GB SSD, 1 TB HDD`,
        price: 44999,
    },
    {
        id: 21,
        image: 'img/products/p22.jpg',
        title: 'Nitro KG251Q Z Widescreen Gaming LCD Monitor',
        brand: 'acer',
        category: 'monitor',
        description: 
        `Screen: 62.2 cm (24.5") Full HD (1920 x 1080) 250 Hz
        Panel Technology: Vertical Alignment (VA) (178°x178°) AMD FreeSync™ Premium certified, HDR 10
        Inputs: DisplayPort, HDMI
        Response Time: 1 ms
        Brightness: 250 cd/m²`,
        price: 10395,
    },
    {
        id: 22,
        image: 'img/products/p23.jpg',
        title: 'Nitro VG271 S Widescreen Gaming LCD Monitor',
        brand: 'acer',
        category: 'monitor',
        description: 
        `Screen: 68.6 cm (27") Full HD (1920 x 1080) 165 Hz
        Panel Technology: IPS (178°x178°) AMD FreeSync™ Premium certified
        Inputs: DisplayPort, HDMI
        Response Time: 1 ms
        Brightness: 400 cd/m²`,
        price: 11589,
    },
    {
        id: 23,
        image: 'img/products/p24.jpg',
        title: 'ED320QR S Widescreen LCD Monitor',
        brand: 'acer',
        category: 'monitor',
        description: 
        `Screen: 80 cm (31.5") Full HD (1920 x 1080) 165 Hz
        Panel Technology: Vertical Alignment (VA) (178°x178°) AMD Free-Sync
        Inputs: DisplayPort, HDMI
        Response Time: 1 ms
        Brightness: 300 cd/m²`,
        price: 11095,
    },
    {
        id: 24,
        image: 'img/products/p25.jpg',
        title: 'Lenovo G24e-20 Gaming Monitor',
        brand: 'lenovo',
        category: 'monitor',
        description: 
        `Screen Size. 23.8 inch.
        Brightness. 300 cd/㎡
        Aspect Ratio. 16:9.
        Contrast Ratio. 3000:1.
        Backlight. WLED.
        Response Time. 1ms (MPRT), 4ms (Level 4), 5ms (Level 3), 6ms (Level 2), 7ms (Level 1), 12ms (off)
        Panel Type. VA.`,
        price: 8799,
    },
    {
        id: 25,
        image: 'img/products/p26.jpg',
        title: 'Lenovo Legion Y32p-30 31.5" Monitor',
        brand: 'lenovo',
        category: 'monitor',
        description: 
        `Panel Size. 31.5 inches. Resolution. 3840 x 2160.
        Aspect ratio. 32:9. Pixel Pitch. 0.181 mm x 0.181 mm.
        Dot/Pixel Per Inch (DPI/PPI) 139. Response Time. 0.181 mm x 0.181 mm.
        Pixel Pitch. 0.2ms (MPRT*), 2ms (Level 4), 3ms (Level 3), 4ms (Level 2), ...
        Brightness (typical) 400 cd/m2(Peak) 350 cd/m2(Typical) Contrast Ratio (typical)`,
        price: 39995,
    },
    {
        id: 26,
        image: 'img/products/p27.jpg',
        title: 'Lenovo Legion R27q-30 27" Monitor',
        brand: 'lenovo',
        category: 'monitor',
        description: 
        `Display Size. 27"
        Response Time. 0.5 ms (MPRT) / 1 ms (Level 4) / 2 ms (Level 3) / 3ms (Level 2) / 4 ms (Level 1)
        Color Support. 1.07 Billion
        Refresh Rate. 165Hz (Overclock to 180Hz)
        Brightness. 350 cd/m² (Typical) / 400 cd/m² (Peak)`,
        price: 16100,
    },
    {
        id: 27,
        image: 'img/products/p28.jpg',
        title: 'MEG 342C QD-OLED',
        brand: 'msi',
        category: 'monitor',
        description: 
        `Curved: Ir.
        Panel Type: OLED.
        Refresh rate: 175 Hz.
        Response time: 1ms.
        Contrast ratio: 1000000:1.
        Brightness: 250cd/m2.
        Size: 34"
        Resolution: UWWQHD 3440x1440.`,
        price: 69995,
    },
    {
        id: 28,
        image: 'img/products/p29.jpg',
        title: 'MPG 274URF QD',
        brand: 'msi',
        category: 'monitor',
        description: 
        `Panel Size: 27-inch
        Panel Type: Rapid IPS
        Resolution: 3840x2160 (UHD)
        Aspect Ratio: 16:9
        Refresh Rate: 160Hz
        Response Time: 0.5ms GtG
        Brightness (typ): 400nits
        Contrast Ratio: 1000:1`,
        price: 27895,
    },
    {
        id: 29,
        image: 'img/products/p30.jpg',
        title: 'MAG 274QRF QD E2 MONSTER HUNTER EDITION',
        brand: 'msi',
        category: 'monitor',
        description: 
        `Display Size. 27"
        Panel Type. IPS-Type LCD
        Native Resolution. 2560 x 1440
        Maximum Brightness.	400 nits / cd/m2 (Sustained)
        HDR Support. No,
        Bit Depth / Color Support. 8-Bit+FRC (1.07 Billion Colors)`,
        price: 18995,
    },
    {
        id: 30,
        image: 'img/products/p31.jpg',
        title: 'ROG Swift PG329Q',
        brand: 'asus',
        category: 'monitor',
        description: 
        `Panel Size (inch) : 32
        Aspect Ratio : 16:9
        Panel Type : Fast IPS
        True Resolution : 2560x1440
        Display Viewing Area (HxV) : 708.48 x 398.52 mm
        Brightness (Typ.) : 450cd/㎡
        Brightness (HDR, Peak) : 600 cd/㎡
        Contrast Ratio (Typ.) : 1000:1
        Response Time : 1ms(GTG)
        Display Colors : 1073.7M (10 bit)
        Refresh Rate (max) : 175Hz`,
        price: 14267,
    },
    {
        id: 31,
        image: 'img/products/p32.jpg',
        title: 'ROG Strix XG259QN',
        brand: 'asus',
        category: 'monitor',
        description: 
        `Panel Size (inch) : 24.5
        Aspect Ratio : 16:9
        Display Surface : Non-Glare
        Pixel Pitch : 0.2829mm x 0.2802mm
        Brightness (Typ.) : 400cd/㎡
        Contrast Ratio (Typ.) : 1000:1
        Response Time : 1ms(GTG), 0.3ms(min.)
        Display Colors : 16.7M
        HDR (High Dynamic Range) Support : HDR10
        Refresh Rate (max) : 380Hz`,
        price: 10894,
    },
    {
        id: 32,
        image: 'img/products/p33.jpg',
        title: 'ROG Swift Pro PG248QP',
        brand: 'asus',
        category: 'monitor',
        description: 
        `Panel Size (inch) : 24.1
        Aspect Ratio : 16:9
        Display Viewing Area (H x V) : 535.68 x 298.08 mm
        Resolution : 1920x1080
        Color Space (sRGB) : 125%
        Brightness (HDR, Peak) : 400 cd/㎡
        Contrast Ratio (Typ.) : 1000:1
        Display Colors : 16.7M
        Response Time : 0.2ms(GTG)
        Refresh Rate (Max) : 540Hz
        HDR (High Dynamic Range) Support : HDR10`,
        price: 61495,
    },
    {
        id: 33,
        image: 'img/products/34.jpg',
        title: 'Nitro RG0',
        brand: 'acer',
        category: 'monitor',
        description: 
        `Display Size: 23.8 inches
        Resolution: Full HD (1920 x 1080 pixels)
        Panel Type: IPS (In-Plane Switching) technology for better color accuracy and wider viewing angles
        Refresh Rate: 75Hz, providing smoother motion for gaming and video playback
        Response Time: 1ms Visual Response Boost (VRB), which reduces motion blur`,
        price:  9999,
    },
    {
        id: 34,
        image: 'img/products/p35.jpg',
        title: 'TUF Gaming VG27VQ3B',
        brand: 'asus',
        category: 'monitor',
        description: 
        `Panel Size (inch) : 27
        Display Viewing Area (H x V) : 597.888 x 336.312 mm
        Backlight Type : LED
        Viewing Angle (CR≧10, H/V) : 178°/ 178°
        Curvature : 1500R
        Pixel Pitch : 0.311mm
        Resolution : 1920x1080
        Color Space (DCI-P3) : 90%
        Brightness (Typ.) : 250cd/㎡
        Contrast Ratio (Typ.) : 3000:1
        Display Colors : 16.7M
        Response Time : 1ms(GTG)
        Refresh Rate (Max) : 180Hz`,
        price:  15635,
    },
    {
        id: 35,
        image: 'img/products/p36.jpg',
        title: 'G272QPF E2',
        brand: 'msi',
        category: 'monitor',
        description: 
        `Display Size: 27 inches
        Panel Type: IPS (In-Plane Switching)
        Resolution: 2560 x 1440 (QHD)
        Refresh Rate: Up to 170 Hz
        Response Time: 0.5 ms (Gray to Gray)
        Aspect Ratio: 16:9
        Brightness: 400 nits (typical)
        Contrast Ratio: 1000:1 (typical)
        Color Gamut: Covers 95% of the DCI-P3 color space
        HDR Support: Yes, VESA DisplayHDR 400`,
        price:  18395,
    }
];

const categories = [...new Set(product.map((item) => item))];

$(document).ready(function () {
    populateProducts();
    filterProducts();
    $('#priceOption, #brandOption, #categoryOption').on('change', filterProducts);
});

// Select a product type then generate them accordingly
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

// Generate product cards
function populateSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    section.innerHTML = items.map((item) => {
        const { id, image, brand, title, price } = item;
        return `
            <div class="col-sm-3 text-center">
                <div class="card w-100 my-2 shadow-sm" style="width: 18rem;">
                    <div class="position-relative">
                    <img src="img/brand/${brand}.png" class="card-img-brand position-absolute top-0 start-0" alt="${brand}" />
                    <img src="${image}" class="card-img-top" style="aspect-ratio: 1 / 1" alt="${title}" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-1">${title}</h5>
                        <p class="card-text mb-2">₱${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        <div class="card-footer p-0">
                            <button type='button' class='btn btn-primary shadow-0 me-1 my-2 buy' onclick='addToCart(${id})'>
                                <i class='fa fa-cart-plus'></i>
                                <span class="d-none d-xl-inline"> Add to Cart</span>
                            </button>
                            <button type='button' class='btn btn-primary shadow-0 me-1 my-2' onclick='seeMore(${id})'>
                                <i class='fa fa-eye'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join('');
}

// Function to sort and filter products
function filterProducts() {
    const sortOption = document.getElementById('priceOption').value;
    const brandOption = document.getElementById('brandOption').value;
    const categoryOption = document.getElementById('categoryOption').value;

    let filteredProducts = product.slice();

    // Filter by brand
    if (brandOption !== 'all') {
        filteredProducts = filteredProducts.filter(item => item.brand === brandOption);
    }

    // Filter by category
    if (categoryOption !== 'all') {
        filteredProducts = filteredProducts.filter(item => item.category === categoryOption);
    }

    // Sort products
    if (sortOption === 'highest') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'lowest') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'newest') {
        filteredProducts.sort((a, b) => b.id - a.id); // Sorting by ID in descending order
    } else {
        filteredProducts.sort((a, b) => a.id - b.id); // Default sorting by ID in ascending order
    }

    populateSection('allProducts', filteredProducts);
}

// Category in Home Page
// Function to extract query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Check if there's a 'category' parameter in the URL
const categoryParam = getQueryParam('category');
if (categoryParam) {
    const categorySelect = document.getElementById('categoryOption');
    for (let option of categorySelect.options) {
        if (option.value === categoryParam) {
            option.selected = true;
            break;
        }
    }
}

// For recommendation product type
function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Cart system
var cart = [];

// Load cart data
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    displayCart();
}

// Save cart data locally
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product data to cart
function addToCart(id) {
    const itemSelected = product.find(p => p.id === id);
    if (product) {
        const item = cart.find(cartItem => cartItem.id === itemSelected.id);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({...itemSelected, quantity: 1});
        }
        saveCart();
        displayCart();
    }
}

// Update quantity of an item
function updateQuantity(index, newQuantity) {
    if (newQuantity >= 0) {
        cart[index].quantity = parseInt(newQuantity);
        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }
        saveCart();
        displayCart();
    }
}

// Display and generate products from cart data
function displayCart() {
    let total = 0;
  
    // If you have 0 items in the cart
    if (cart.length == 0) {
      document.getElementById('cart').innerHTML = "Your cart is empty :(";
    } else {
      document.getElementById('cart').innerHTML = cart.map((item, index) => {
        // Add up every item prices to total amount
        total += item.price * item.quantity;
        var {image, title, price, quantity} = item;
  
        return (
            `<div class="row mb-4 g-0 align-items-center">
              <div class="col-md-2">
                <img src="${image}" class="img-fluid" alt="" style="max-width: 100%; height: auto;">
              </div>
              <div class="col-md-4 col-lg-4 col-xl-4">
                <h6 class="text-black mb-0">${title}</h6>
              </div>
              <div class="col-md-3 d-flex align-items-center">
                <button class="btn btn-link px-2" onclick="updateQuantity(${index}, ${quantity - 1})">
                  <i class="fas fa-minus"></i>
                </button>
          
                <input min="0" name="quantity" value="${quantity}" type="number" class="form-control form-control-sm m-1" style="width: 40px;" onchange="updateQuantity(${index}, this.value)" />
          
                <button class="btn btn-link px-2" onclick="updateQuantity(${index}, ${quantity + 1})">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-2 align-items-center">
                <p class="mb-0 ms-1">₱${(price * quantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
              </div>
            </div>`
          );
      }).join('');
    }
    // Display the total amount
    document.getElementById('total').innerHTML = `₱${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;

    displayCheckout();
}

// Call loadCart to initialize the cart on page load
loadCart();

function displayCheckout(){
    let total = 0;

    // If you have 0 item in the cart
    if (cart.length==0) {
        document.getElementById('checkout').innerHTML = "Your cart is empty :(";
    }

    // If you have items in the cart
    else {
        document.getElementById('checkout').innerHTML = cart.map((item) =>
        {
            // Add up every item prices to total amount
            total += item.price * item.quantity;
            var {image, title, price, quantity} = item;

            return (
                `
                <li class="list-group-item d-flex align-items-center">
                    <img src="${image}" class="rounded-3 img-fluid img-thumbnail" style="max-width: 100px; height: auto;" alt="${title}">
                    <div class="ms-3">
                        <h6 class="my-0">${title}</h6>
                        <small class="text-muted">Quantity: ${quantity}</small>
                    </div>
                    <span class="ms-auto text-muted">₱${(price * quantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                </li>
                `
            );
            
        }).join('');
    }
    // Update total price
    document.getElementById('checkout-total').innerHTML = "₱" + total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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

function purchaseItems(event) {
    console.log("hi")
    event.preventDefault();
    $('#purchased').modal('show');
    // Clear the form
    $('form')[0].reset();
    // Clear the cart
    localStorage.removeItem('cart');
  }
// ----------------------- Data -----------------------
const products = {
    "Wines": [
        { name: "Red Wine", image: "1.jpeg" },
        { name: "White Wine", image: "2.jpeg" },
        { name: "Rose Wine", image: "3.jpeg" },
        { name: "Sparkling Wine", image: "4.jpeg" },
        { name: "Dessert Wine", image: "5.jpeg" },
        { name: "Table Wine", image: "6.jpeg" },
        { name: "Fruit Wine", image: "7.jpeg" },
        { name: "Ice Wine", image: "8.jpeg" },
        { name: "Dry Wine", image: "9.jpeg" },
        { name: "Organic Wine", image: "10.jpeg" }
    ],
    "Spirits": [
        { name: "Gin", image: "11.jpeg" },
        { name: "Rum", image: "12.jpeg" },
        { name: "Brandy", image: "13.jpeg" },
        { name: "Absinthe", image: "14.jpeg" },
        { name: "Mezcal", image: "15.jpeg" },
        { name: "Pisco", image: "16.jpeg" },
        { name: "Cachaca", image: "17.jpeg" },
        { name: "Schnapps", image: "18.jpeg" },
        { name: "Soju", image: "19.jpeg" },
        { name: "Grappa", image: "20.jpeg" }
    ],
    "Tequila": [
        { name: "Blanco", image: "21.jpeg" },
        { name: "Reposado", image: "22.jpeg" },
        { name: "Anejo", image: "23.jpeg" },
        { name: "Extra Anejo", image: "24.jpeg" },
        { name: "Cristalino", image: "25.jpeg" },
        { name: "Gold Tequila", image: "26.jpeg" },
        { name: "Silver Tequila", image: "27.jpeg" },
        { name: "Agave Tequila", image: "28.jpeg" },
        { name: "Mixto Tequila", image: "29.jpeg" },
        { name: "Reserva Tequila", image: "30.jpeg" }
    ],
    "Soft Drinks": [
        { name: "Coca-Cola", image: "31.jpeg" },
        { name: "Pepsi", image: "32.jpeg" },
        { name: "Sprite", image: "33.jpeg" },
        { name: "Fanta", image: "34.jpeg" },
        { name: "Mountain Dew", image: "35.jpeg" },
        { name: "Ginger Ale", image: "36.jpeg" },
        { name: "Root Beer", image: "37.jpeg" },
        { name: "Tonic Water", image: "38.jpeg" },
        { name: "Club Soda", image: "39.jpeg" },
        { name: "Lemonade", image: "40.jpeg" }
    ],
    "Vodka": [
        { name: "Classic Vodka", image: "51.jpeg" },
        { name: "Flavored Vodka", image: "52.jpeg" },
        { name: "Premium Vodka", image: "53.jpeg" },
        { name: "Wheat Vodka", image: "54.jpeg" },
        { name: "Potato Vodka", image: "55.jpeg" },
        { name: "Corn Vodka", image: "56.jpeg" },
        { name: "Grape Vodka", image: "57.jpeg" },
        { name: "Rye Vodka", image: "58.jpeg" },
        { name: "Organic Vodka", image: "59.jpeg" },
        { name: "Crystal Vodka", image: "60.jpeg" }
    ],
    "Brandy": [
        { name: "Cognac", image: "61.jpeg" },
        { name: "Armagnac", image: "62.jpeg" },
        { name: "American Brandy", image: "63.jpeg" },
        { name: "Spanish Brandy", image: "64.jpeg" },
        { name: "Fruit Brandy", image: "65.jpeg" },
        { name: "Grape Brandy", image: "66.jpeg" },
        { name: "Aged Brandy", image: "67.jpeg" },
        { name: "Fine Brandy", image: "68.jpeg" },
        { name: "XO Brandy", image: "69.jpeg" },
        { name: "VSOP Brandy", image: "70.jpeg" }
    ],
    "Whiskey": [
        { name: "Scotch Whisky", image: "71.jpeg" },
        { name: "Irish Whiskey", image: "72.jpeg" },
        { name: "Bourbon", image: "73.jpeg" },
        { name: "Rye Whiskey", image: "74.jpeg" },
        { name: "Japanese Whisky", image: "75.jpeg" },
        { name: "Single Malt", image: "76.jpeg" },
        { name: "Blended Whiskey", image: "77.jpeg" },
        { name: "Tennessee Whiskey", image: "78.jpeg" },
        { name: "Corn Whiskey", image: "79.jpeg" },
        { name: "Canadian Whisky", image: "80.jpeg" }
    ]
};

let stock = {};
let price = 250;
let ratings = {};
let customers = []; // Stores registered customers
let currentCustomer = null; // Tracks the currently logged-in customer
let customerPurchases = []; // Stores purchase history for all customers
let cart = []; // Stores items in the customer's cart
let adminActivityLog = []; // Stores admin activity logs

// Initialize stock and ratings
for (let category in products) {
    stock[category] = {};
    ratings[category] = {};
    products[category].forEach(product => {
        stock[category][product.name] = { quantity: 40, price: price };
        ratings[category][product.name] = { totalStars: 0, totalRatings: 0 };
    });
}

// ----------------------- DOM Elements -----------------------
const loginPage = document.getElementById('loginPage');
const mainApp = document.getElementById('mainApp');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const registerSection = document.getElementById('registerSection');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const viewCartBtn = document.getElementById('viewCartBtn');

const categories = document.querySelectorAll('.category');
const productsSection = document.getElementById('products');
const productList = document.querySelector('.product-list');
const productTitle = document.getElementById('product-title');
const adminBtn = document.getElementById('adminBtn');
const adminModal = document.getElementById('adminModal');
const adminPass = document.getElementById('adminPass');
const loginAdmin = document.getElementById('loginAdmin');
const adminPanel = document.getElementById('adminPanel');
const stockList = document.getElementById('stockList');
const backBtn = document.getElementById('backBtn');
const logoutAdmin = document.getElementById('logoutAdmin');
const updatesBtn = document.getElementById('updatesBtn');
const updatesSection = document.getElementById('updatesSection');
const purchaseList = document.getElementById('purchaseList');
const activityLogList = document.getElementById('activityLogList');

// ----------------------- Event Listeners -----------------------

// Show registration form
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerSection.classList.remove('hidden');
});

// Show login form
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerSection.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Handle Registration Form Submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;

    // Check if the email is already registered
    if (customers.some(customer => customer.email === email)) {
        alert("Email already registered. Please login.");
        return;
    }

    // Add the new customer
    customers.push({ email, phone, password, purchases: [] });
    alert("Registration successful! Please login.");
    registerSection.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Handle Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate User
    const user = customers.find(customer => customer.email === username && customer.password === password);

    if (user) {
        // Successful Login
        currentCustomer = user; // Set the current customer
        loginPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
        loginError.classList.add('hidden');
    } else {
        // Failed Login
        loginError.classList.remove('hidden');
    }
});

// Open Admin Login Modal
adminBtn.addEventListener('click', () => {
    adminModal.style.display = "block";
});

// Admin Login Validation
loginAdmin.addEventListener('click', () => {
    if (adminPass.value === "admin123") {
        adminModal.style.display = "none";
        adminPanel.style.display = "block";
        updateAdminPanel(); // Initialize the admin panel views
    } else {
        alert("Wrong password! Access Denied.");
    }
});

// Handle Category Selection
categories.forEach(btn => {
    btn.addEventListener('click', () => {
        let category = btn.dataset.category;
        productTitle.innerText = category;
        updateProductDisplay(category); // Update the product display for the selected category
        productsSection.classList.remove('hidden');
        document.getElementById('categories').classList.add('hidden');
    });
});

// Add to Cart Function
function addToCart(category, productName, price) {
    const product = products[category].find(p => p.name === productName);
    const item = { category, product: product.name, price, image: product.image };
    cart.push(item);
    alert(`${product.name} added to cart!`);
}

// View Cart Functionality
viewCartBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Display the cart modal
    document.getElementById('cartModal').classList.remove('hidden');
    updateCartModal();
});

// Function to update the cart modal
function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;

    // Clear the cart items
    cartItems.innerHTML = "";

    // Add each item to the cart modal
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.product} - Ksh ${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    // Update the total
    cartTotal.textContent = `Total: Ksh ${total}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the specified index
    updateCartModal(); // Update the cart modal
}

// Proceed to Checkout
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    buyNow(); // Call the buyNow function to complete the purchase
    document.getElementById('cartModal').classList.add('hidden'); // Close the cart modal
});

// Close Cart Modal
document.querySelector('#cartModal .close').addEventListener('click', () => {
    document.getElementById('cartModal').classList.add('hidden');
});

// Buy Now Function
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you, ${currentCustomer.email}! Your total is Ksh ${total}.`);

    // Log the purchase and reduce stock
    cart.forEach(item => {
        // Reduce stock for the purchased item
        stock[item.category][item.product].quantity -= 1;

        // Log the purchase for the customer
        currentCustomer.purchases.push({
            product: item.product,
            category: item.category,
            price: item.price,
            date: new Date().toLocaleString()
        });

        // Log the purchase for the admin
        customerPurchases.push({
            customer: currentCustomer.email,
            product: item.product,
            category: item.category,
            price: item.price,
            date: new Date().toLocaleString()
        });
    });

    // Clear the cart
    cart = [];

    // Update the product display to reflect the new stock levels
    updateProductDisplay(productTitle.innerText);

    // Update the admin panel views
    if (adminPanel.style.display === "block") {
        updateAdminPanel();
    }
}

// Rate Drink Function
function rateDrink(category, drink, stars) {
    ratings[category][drink].totalStars += stars;
    ratings[category][drink].totalRatings++;
    alert(`You rated ${drink} with ${stars} stars!`);
    updateStockView();
}

// Update Stock View in Admin Panel
function updateStockView() {
    const stockList = document.getElementById('stockList');
    stockList.innerHTML = "";

    for (let category in stock) {
        for (let drink in stock[category]) {
            const quantity = stock[category][drink].quantity;
            const price = stock[category][drink].price;
            const avgRating = ratings[category][drink].totalRatings > 0 ?
                (ratings[category][drink].totalStars / ratings[category][drink].totalRatings).toFixed(1) : "No Ratings";

            stockList.innerHTML += `
                <tr>
                    <td>${category}</td>
                    <td>${drink}</td>
                    <td>${quantity}</td>
                    <td>${price}</td>
                    <td>${avgRating}⭐</td>
                    <td>
                        <input type="number" id="increase-${drink}" placeholder="Add Stock">
                        <button onclick="increaseStock('${category}', '${drink}')">Increase</button>
                        <input type="number" id="price-${drink}" placeholder="New Price">
                        <button onclick="modifyPrice('${category}', '${drink}')">Update Price</button>
                    </td>
                </tr>`;
        }
    }
}

// View Customer Purchases
function viewCustomerPurchases() {
    const purchaseList = document.getElementById('purchaseList');
    purchaseList.innerHTML = "";

    if (customerPurchases.length === 0) {
        purchaseList.innerHTML = `<tr><td colspan="5">No purchases recorded yet.</td></tr>`;
    } else {
        customerPurchases.forEach(purchase => {
            purchaseList.innerHTML += `
                <tr>
                    <td>${purchase.customer}</td>
                    <td>${purchase.product}</td>
                    <td>${purchase.category}</td>
                    <td>${purchase.price}</td>
                    <td>${purchase.date}</td>
                </tr>`;
        });
    }
}

// View Admin Activity Log
function viewAdminActivityLog() {
    const activityLogList = document.getElementById('activityLogList');
    activityLogList.innerHTML = "";

    if (adminActivityLog.length === 0) {
        activityLogList.innerHTML = `<tr><td colspan="6">No admin activity recorded yet.</td></tr>`;
    } else {
        adminActivityLog.forEach(log => {
            activityLogList.innerHTML += `
                <tr>
                    <td>${log.product}</td>
                    <td>${log.category}</td>
                    <td>${log.action}</td>
                    <td>${log.oldValue}</td>
                    <td>${log.newValue}</td>
                    <td>${log.timestamp}</td>
                </tr>`;
        });
    }
}

// Increase Stock Function
function increaseStock(category, drink) {
    let increaseAmount = parseInt(document.getElementById(`increase-${drink}`).value);
    if (!isNaN(increaseAmount)) {
        const oldQuantity = stock[category][drink].quantity;
        stock[category][drink].quantity += increaseAmount;
        const newQuantity = stock[category][drink].quantity;

        // Log the stock increase
        adminActivityLog.push({
            product: drink,
            category: category,
            action: "Stock Increased",
            oldValue: oldQuantity,
            newValue: newQuantity,
            timestamp: new Date().toLocaleString()
        });

        alert(`${increaseAmount} units added to ${drink}`);
        updateStockView();
        updateProductDisplay(category); // Update the product display for customers
        updateAdminPanel(); // Update the admin panel views
    } else {
        alert("Please enter a valid number.");
    }
}

// Modify Price Function
function modifyPrice(category, drink) {
    let newPrice = parseFloat(document.getElementById(`price-${drink}`).value);
    if (!isNaN(newPrice)) {
        const oldPrice = stock[category][drink].price;
        stock[category][drink].price = newPrice;

        // Log the price modification
        adminActivityLog.push({
            product: drink,
            category: category,
            action: "Price Updated",
            oldValue: oldPrice,
            newValue: newPrice,
            timestamp: new Date().toLocaleString()
        });

        alert(`Price for ${drink} updated to Ksh ${newPrice}`);
        updateStockView();
        updateProductDisplay(category); // Update the product display for customers
        updateAdminPanel(); // Update the admin panel views
    } else {
        alert("Please enter a valid price.");
    }
}

// Update Product Display for Customers
function updateProductDisplay(category, filteredProducts = products[category]) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const quantity = stock[category][product.name].quantity;
        const price = stock[category][product.name].price;
        productList.innerHTML += `
            <div class="product" data-category="${category}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <p>${product.name} - <strong>Ksh ${price}</strong> (${quantity} left)</p>
                <button onclick="addToCart('${category}', '${product.name}', ${price})">Add to Cart</button>
                <div class="rating" id="rating-${category}-${product.name.replace(/\s+/g, '-')}">
                    ${[1, 2, 3, 4].map(star => `
                        <span class="star" onclick="rateDrink('${category}', '${product.name}', ${star})">&#9733;</span>
                    `).join('')}
                </div>
            </div>`;
    });
}

// Filter Products Function
function filterProducts() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const priceFilter = document.getElementById('filterByPrice').value;
    const category = productTitle.innerText;
    let filteredProducts = products[category];

    // Filter by search query
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery)
        );
    }

    // Filter by price
    if (priceFilter === "lowToHigh") {
        filteredProducts.sort((a, b) => stock[category][a.name].price - stock[category][b.name].price);
    } else if (priceFilter === "highToLow") {
        filteredProducts.sort((a, b) => stock[category][b.name].price - stock[category][a.name].price);
    }

    // Update the product display
    updateProductDisplay(category, filteredProducts);
}

// Update Admin Panel Function
function updateAdminPanel() {
    updateStockView(); // Refresh stock management view
    viewCustomerPurchases(); // Refresh purchase history view
    viewAdminActivityLog(); // Refresh admin activity log view
}

// Admin Logout
logoutAdmin.addEventListener('click', () => {
    adminPanel.style.display = "none";
    adminModal.style.display = "none";
    adminPass.value = "";
});

// Back Button to Return to Categories
backBtn.addEventListener('click', () => {
    productsSection.classList.add('hidden');
    document.getElementById('categories').classList.remove('hidden');
});
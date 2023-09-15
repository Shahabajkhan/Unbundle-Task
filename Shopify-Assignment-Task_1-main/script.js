// JavaScript for handling chocolate selection and pricing

const chocolates = [
    {
        name: "Candy pack",
        price: 799.00,
    },
    {
        name: "Dairy Milk",
        price: 299.00,
    },
    {
        name: "Hershey's Milk Chocolate",
        price: 199.00,
    },
    {
        name: "kinder",
        price: 150.00,
    },
    {
        name: "Nestle Crunch",
        price: 100.00,
    },
    {
        name: "Hazelnot",
        price: 199.00,
    },
    {
        name: "LUST Protein Bar ",
        price: 250.00,
    },
    {
        name: "ROSHEN",
        price: 150.00,
    },
    {
        name: "Toren Expresso Chocolate",
        price: 500.00,
    },
    {
        name: "Tamam Dark Chocolate Coated Wafer With Cocoa Cream - Rayyanfoods",
        price: 1000.00,
    },
    {
        name: "Premium Wafers Cocoa Cream ",
        price: 799.00,
    },
    {
        name: "Power Crunch",
        price: 200.00,
    },
    {
        name: "Milk Choco Bar",
        price: 49.00,
    },
    {
        name: "Neuerscheinungen",
        price: 199.00,
    },
    {
        name: "WHEY BAR",
        price: 99.00,
    },
    {
        name: "Fitness Bar",
        price: 99.00,
    },
];

// Initialize the selected chocolates array
const selectedChocolates = [];

// Function to update the cart display
function updateCart() {
    const selectedChocolatesList = document.querySelector(".selected-chocolates");
    selectedChocolatesList.innerHTML = "";
    
    let totalPrice = 0;
    
    selectedChocolates.forEach((chocolate) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = chocolate.name + " - ₹" + chocolate.price.toFixed(2);
        
        selectedChocolatesList.appendChild(listItem);
        
        totalPrice += chocolate.price;
    });
    
    const totalPriceDisplay = document.getElementById("total-price");
    totalPriceDisplay.textContent = "Total Price: ₹" + totalPrice.toFixed(2);
}
// Function to add a chocolate to the cart
function addToCart(chocolateIndex) {
    const selectedChocolate = chocolates[chocolateIndex];
    
    if (selectedChocolate) {
        // Check if the chocolate is already in the cart
        const existingItem = selectedChocolates.find(item => item.name === selectedChocolate.name);
        
        if (existingItem) {
            // If it exists, update the quantity
            existingItem.quantity += 1;
        } else {
            // If it doesn't exist, add it to the cart with quantity 1
            selectedChocolates.push({ ...selectedChocolate, quantity: 1 });
        }
        
        updateCart();
    }
}

// Add event listeners for the "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".btn-primary");
    
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            addToCart(index);
        });
    });
    
    // Add event listener for the "Clear Selection" button
    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", () => {
        clearCart();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Whey Protein", price: 2499, img: "whey.jpg", id: "protein" },
        { name: "Creatine", price: 1200, img: "bcaa.jpg", id: "creatine" },
        { name: "Mass Gainer", price: 3000, img: "pre.jpg", id: "massgainer" },
        { name: "Multivitamin", price: 799, img: "multivitamin.jpg", id: "multivitamin" },
        { name: "Omega-3 Fish Oil", price: 699, img: "fishoil.jpg", id: "fishoil" }
    ];

    const container = document.getElementById('products');
    
    if (container) {
        // Clear container first to avoid duplicates
        container.innerHTML = ''; 
        
        products.forEach(item => {
            container.innerHTML += `
                <div class="card">
                    <img src="${item.img}" alt="${item.name}" style="width: 100%; border-radius: 10px;">
                    <h2>${item.name}</h2>
                    <p>Price: ₹${item.price}</p>
                    <a href="product-details.html?item=${item.id}">
                        <button class="btn">VIEW DETAILS</button>
                    </a>
                </div>
            `;
        });
    } else {
        console.error("Could not find the product container!");
    }
});
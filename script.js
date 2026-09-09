/* =========================================
   NOVASMP PVP SHOP
   ========================================= */


/* SERVER IP */

const SERVER_IP = "play.novasmp.sryze.cc";


/* CART */

let cart = [];


/* COPY SERVER IP */

function copyIP() {

    navigator.clipboard.writeText(SERVER_IP)

        .then(() => {

            alert(
                "✅ SERVER IP COPIED!\n\n" +
                SERVER_IP
            );

        })

        .catch(() => {

            alert(
                "Server IP:\n" +
                SERVER_IP
            );

        });
}


/* ADD TO CART */

function addToCart(name, price) {

    const existing =
        cart.find(item => item.name === name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    openCart();

}


/* UPDATE CART */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    const totalQuantity =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (sum, item) =>
                sum + (item.price * item.quantity),
            0
        );


    cartCount.innerText =
        totalQuantity;


    cartTotal.innerText =
        "₹" + totalPrice;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>Your cart is empty</h3>

                <p>
                    Add some powerful PvP upgrades!
                </p>

            </div>

        `;

        return;
    }


    cartItems.innerHTML =
        cart.map((item, index) => `

            <div class="cart-item">

                <div class="cart-item-info">

                    <b>
                        ${item.name}
                    </b>

                    <span>
                        ₹${item.price}
                        × ${item.quantity}
                    </span>

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `).join("");

}


/* REMOVE FROM CART */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* OPEN CART */

function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("show");

}


/* CLOSE CART */

function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("show");

}


/* CLICK OUTSIDE CART */

function closeCartOutside(event) {

    if (
        event.target.id ===
        "cartOverlay"
    ) {

        closeCart();

    }

}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert(
            "🛒 Your cart is empty!"
        );

        return;
    }


    const total =
        cart.reduce(
            (sum, item) =>
                sum + (item.price * item.quantity),
            0
        );


    alert(
        "🔥 CHECKOUT\n\n" +
        "Total: ₹" + total +
        "\n\n" +
        "Payment gateway abhi connect nahi hai.\n" +
        "Payment gateway connect karne ke baad yahin se real checkout hoga."
    );

}


/* SEARCH OPEN */

function openSearch() {

    const searchBox =
        document.getElementById("searchBox");

    searchBox.classList.add("show");

    setTimeout(() => {

        document
            .getElementById("searchInput")
            .focus();

    }, 100);

}


/* SEARCH CLOSE */

function closeSearch() {

    document
        .getElementById("searchBox")
        .classList.remove("show");

}


/* SEARCH PRODUCTS */

function searchProducts() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const products =
        document.querySelectorAll(".product");


    products.forEach(product => {

        const text =
            product.innerText.toLowerCase();


        if (
            text.includes(query)
        ) {

            product.classList.remove("hidden");

        } else {

            product.classList.add("hidden");

        }

    });

}


/* FILTER */

function filterProducts(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    const products =
        document.querySelectorAll(".product");


    products.forEach(product => {

        const productCategory =
            product.dataset.category;


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.classList.remove("hidden");

        } else {

            product.classList.add("hidden");

        }

    });

}


/* SORT */

function sortProducts() {

    const grid =
        document.getElementById("productGrid");


    const products =
        Array.from(
            grid.querySelectorAll(".product")
        );


    const sort =
        document.getElementById("sortSelect")
            .value;


    if (sort === "low") {

        products.sort(
            (a, b) =>
                Number(a.dataset.price) -
                Number(b.dataset.price)
        );

    }


    if (sort === "high") {

        products.sort(
            (a, b) =>
                Number(b.dataset.price) -
                Number(a.dataset.price)
        );

    }


    products.forEach(product => {

        grid.appendChild(product);

    });

}


/* DISCORD */

function discordComing(event) {

    event.preventDefault();

    alert(
        "💬 NovaSMP Discord\n\n" +
        "Discord invite link yahan add kar sakte ho."
    );

}


/* ESC KEY */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeSearch();
            closeCart();

        }

    }
);


/* INITIAL CART */

updateCart();

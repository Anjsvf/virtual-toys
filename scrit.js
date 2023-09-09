const productsContainer = document.querySelector(".products");



const products = [
    {
        name: "boneco batman",
        classification: "classico",
        size: "18 cm",
        images: ["./img/batman2.jpg", "./img/batman1.webp"],
        description: "boneco do batman renascimento para colecionar",
        price: 20.00,
        rating: 4.2
    },
    {
        name: "boneco hulk",
        classification: "classico",
        size: "45 cm",
        images: ["img/hulk1.webp", "img/hulk2.webp"],
        description: "boneco do hulk vermelho articulado ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        price: 220.00,
        rating: 4.2
    },
    {
        name: "capitão america",
        classification: "original",
        size: "40 cm",
        images: ["img/capitao1.webp", "img/capitao2.webp"],
        description: "marvel, Boneco Avangers capitão America, azul  vermelho",
        price: 20.00,
        rating: 4.2
    },
    {
        name: "Homem de Ferro",
        classification: "classico",
        size: "20 cm",
        images: ["./img/homemferro1.webp", "./img/homemferro2.webp"],
        description: " Marvel Boneco homem de Ferroㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        price: 64.4,
        rating: 4.3
    },
    {
        name: "Homem-Aranha",
        classification: "original",
        size: "3 medio",
        images: ["./img/homemaranha1.webp", "./img/homemaranha2.webp"],
        description: "Boneco Homem aranha In New  york ㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        price: 25.00,
        rating: 3.2
    },
    {
        name: "Coringa",
        classification: "original",
        size: "30 cm",
        images: ["img/joker1.webp", "img/joker2.webp"],
        description: "Boneco Coringa DC creature Chaosㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        price: 25.00,
        rating: 3.2
    },
    {
        name: "Thor",
        classification: "classico",
        size: "30 cm",
        images: ["img/thor1.webp", "img/thor2.webp"],
        description: "Boneco Marvel Avangers Titan heroㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
        price: 25.00,
        rating: 3.2
    },
    


];

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";
        product.images.forEach(imageUrl => {

            const productImage = document.createElement("img");
            productImage.src = imageUrl;
            productImage.alt = product.name;

            productImage.classList.add("enlarge");
            imageContainer.appendChild(productImage);

        });

        const productName = document.createElement("h2");

        productName.textContent = product.name;


        const productPrice = document.createElement("p");

        productPrice.textContent = `preço: $${product.price.toFixed(2)}`;


        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";

        const ratingValue = document.createElement("span");

        ratingValue.textContent = product.rating.toFixed(1);

        ratingValue.className = "rating-value"

        const fullStars = Math.floor(product.rating);

        const halfStars = product.rating - fullStars >= 0.5 ? 1 : 0;

        for (let i = 0; i < fullStars; i++) {
            const starIcon = document.createElement("span");
            starIcon.className = "star full-star";
            ratingDiv.appendChild(starIcon);
        }
        


        if (halfStars > 0) {
            const halfStarIcon = document.createElement("span");

            halfStarIcon.className = "star half-star";
            ratingDiv.appendChild(halfStarIcon);

        }

        ratingDiv.appendChild(ratingValue);

        const classification = document.createElement("p");

        classification.textContent = `classificação: ${product.classification}`;


        const size = document.createElement("p");

        size.textContent = `tamanho: ${product.size}`;


        const addToCartbutton = document.createElement("button");
        addToCartbutton.className = "button";

        addToCartbutton.textContent = "comprar";

        productDiv.appendChild(productDescription);
        productDiv.appendChild(imageContainer);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(ratingDiv);
        productDiv.appendChild(classification);
        productDiv.appendChild(size);
        productDiv.appendChild(addToCartbutton);

        productsContainer.appendChild(productDiv)





    })




}

displayProducts();


const zipcodeForm = document.getElementById("zipcode-form");

zipcodeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const zipcodeInput = document.getElementById("zipcode").value;

    zipcodeInput.value = "";
})
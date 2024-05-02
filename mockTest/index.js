let cont = document.getElementById("cont");
let selectPrice = document.getElementById("navbar-select");
let button = document.getElementById("search-button");

button.addEventListener("click", async function() {
    const data = await fetchData();
    showData(data);
});

async function fetchData() {
    try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

function showData(data) {
    cont.innerHTML = "";
    data.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let title = document.createElement("h3");
        title.textContent = product.title;

        let price = document.createElement("p");
        price.textContent = product.price;

        let description = document.createElement("p");
        description.textContent = product.description;

        let image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;

        productDiv.append(image,title,price,description,);
        cont.appendChild(productDiv);
    });
}

function sortByPrice(data, order) {
    return data.sort((pre, curr) => {
        if (order === "asc") {
            return pre.price - curr.price;
        } else {
            return curr.price - pre.price;
        }
    });
}



selectPrice.addEventListener("change", async function() {
    const order = this.value;
    const data = await fetchData();
    const sortedData = sortByPrice(data, order);
    showData(sortedData);
});

(async function() {
    const data = await fetchData();
    showData(data);
})();






const filteredItems = items.filter((item) => item.category === "featured");
console.log("filteredItems", filteredItems);
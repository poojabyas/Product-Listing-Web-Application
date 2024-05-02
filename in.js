let container = document.getElementById("container")
let filters=document.getElementById("filters")
let categoryFilter = document.getElementById("categoryFilter")
let sortOrder = document.getElementById("sortOrder")
let searchInput = document.getElementById("searchInput")
let productList = document.getElementById("productList")
let button= document.querySelector("button")

button.addEventListener("click",function(){
    fetchData()
})

async function fetchData(){
   try {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()


    let sortedData = sortData(data, sortOrder.value);
    showData(sortedData);


    // showData(data)
    // console.log(data)
   } catch (error) {
    console.log(error)
    
   }
}


function sortData(data, order) {
    if (order === "asc") {
        return data.slice().sort((a, b) => a.price - b.price); // Sort in ascending order
    } else if (order === "desc") {
        return data.slice().sort((a, b) => b.price - a.price); // Sort in descending order
    }
    return data;
}
function showData(data){
    container.innerHTML = "";
    data.forEach(element => {
        let sepDiv = document.createElement("div")
        sepDiv.className="sepDiv"

        let id = document.createElement("h4")
        id.innerHTML=element.id

        let title = document.createElement("h4")
        title.innerHTML=element.title

        let description = document.createElement("h4")
        description.innerHTML=element.description

        let count = document.createElement("h4")
        count.innerHTML=element.count

        let image = document.createElement("img")
        image.src=element.image
       
        
        sepDiv.append(image,id,title,description,count)
        container.appendChild(sepDiv)
    });
}
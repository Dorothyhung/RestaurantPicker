list = [];

var Restaurant = function(name, cuisine, price, city, visited) {
    this.ID=Math.random().toString(16).slice(5);
    this.name=name;
    this.cuisine=cuisine;
    this.price=price;
    this.city=city;
    this.visited=visited;
    this.rID = list.length + 1;
}

/* let displayList = document.getElementById("myList");
let searchList = document.getElementById("myList2") */
//let selectedGenre = "not selected";

document.addEventListener("DOMContentLoaded", function(event) {
    //Add Restaurants
    this.getElementById("addButton").addEventListener("click", function() {
        list.push(new Restaurant(
            document.getElementById("name").value, 
            document.getElementById("cuisine").value,
            document.getElementById("price").value,
            document.getElementById("city").value,
            list.length,  // set ID
            document.location.href = "index.html#View"))
        console.log(list)

        document.getElementById("name").value = ""; 
        document.getElementById("cuisine").value = ""; 
        document.getElementById("city").value = ""; 
    })
    /* $(document).bind("change", "#select-price", function (event, ui) {
        selectedPrice = $('#select-price').val();
    }); */
/* let restName = document.getElementById("name").value
        let cuisine = document.getElementById("cuisine").value
        let price = document.getElementById("price").value
        let city = document.getElementById("city").value
        let priority = document.getElementById("priority").value
        if ((restName == "") || (cuisine == "") || (city == "")) {
            alert("Please enter text in all fields");
        } else {
            var newRestaurant = new Restaurant(restName, cuisine, price, city, priority);
            list.push(newRestaurant);
            idlist.push(newRestaurant.ID);
            console.log(list);
            console.log(idlist);
            document.getElementById("added").value = (restName + ' successfully added to your list!');
            document.getElementById("name").value = "";
            document.getElementById("cuisine").value = "";
            document.getElementById("city").value = "";
        } */
   

    //View List this works!
    /* this.getElementById("view").addEventListener("click", function() {
        item.addEventListener('click', function (){
            document.getElementById("myList").innerHTML = "";
            document.getElementById("added").value = '';
            displayList = document.getElementById("myList");
            console.log(list)
            for (i = 0; i < list.length; i++) {
                let ul = document.createElement("ul");
                let li = document.createElement("li");
                li.innerText = list[i].name + " cuisine is " + list[i].cuisine + " in " + list[i].city;
                let li2 = document.createElement("li"); 
                displayList.appendChild(li);
            }
            console.log(displayList)
        })
    }) */

    //Search List Page
    document.getElementById("searchButton").addEventListener("click", function() {
        list2 = document.getElementById("searchList")
        document.getElementById("searchList").innerHTML = "";
        for (i = 0; i < list.length; i++) {
            let li = document.createElement("li");
            li.innerText = list[i].name + " Cuisine: " + list[i].cuisine + " in " + list[i].city;
            list2.appendChild(li);
            i++;
        }
        
        
    })

    //View Page
    this.getElementById("displayButton").addEventListener("click", function() {
        createList();
    })

    //Hidden details page
    $(document).on("pagebeforeshow", "#details", function (event) {   
        let localID = localStorage.getItem('parm');
        console.log(list[localID - 1]);
        console.log("In details page")
        list = JSON.parse(localStorage.getItem('list'));
        document.getElementById("detailName").innerHTML = "Restaurant: " + list[localID - 1].name;
        document.getElementById("detailCuisine").innerHTML = "Cuisine: " + list[localID - 1].cuisine;
        document.getElementById("detailPrice").innerHTML = "Price range: " + list[localID - 1].price;
        document.getElementById("detailCity").innerHTML = "Location: " + list[localID - 1].city;
    })
})



function createList() {
    let myUL = document.getElementById("myList");
    myUL.innerHTML = "";
    
    list.forEach(function(oneRestaurant) {
        var myLi = document.createElement("li");
        myLi.classList.add("oneRestaurant");
        myLi.setAttribute("data-parm", oneRestaurant.rID);
        myLi.innerHTML = oneRestaurant.rID + ": " + oneRestaurant.name;
        myUL.appendChild(myLi);
    })
    var lilist = document.getElementsByClassName("oneRestaurant");
    let newList = Array.from(lilist);

    newList.forEach(function (element) {
        console.log("in dataparm function")
        element.addEventListener('click', function() {
            var parm = this.getAttribute("data-parm");
            localStorage.setItem('parm', parm);
            let stringList = JSON.stringify(list);
            localStorage.setItem('list', stringList);
            document.location.href="index.html#details";
        })
    })
}

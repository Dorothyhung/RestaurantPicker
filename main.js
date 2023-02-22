list = [];
idlist = [];

var Restaurant = function(name, cuisine, price, city, priority, visited) {
    this.ID=Math.random().toString(16).slice(5);
    this.name=name;
    this.cuisine=cuisine;
    this.price=price;
    this.city=city;
    this.priority=priority;
    this.visited=visited;
}

let displayList = document.getElementById("myList");

document.addEventListener("DOMContentLoaded", function(event) {
    //Add Restaurants
    this.getElementById("add").addEventListener("click", function() {
        let restName = document.getElementById("name").value
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
        }
    })

    //View List
    /* this.getElementById("display").addEventListener("click", function() {
        document.getElementById("myList").innerHTML = "";
        document.getElementById("added").value = '';
        displayList = document.getElementById("myList");
        console.log(list)
        for (i = 0; i < list.length; i++) {
            let li = document.createElement("li");
            console.log(list[i].name);
            li.innerText = list[i].name + " cuisine is " + list[i].cuisine + " in " + list[i].city;
            displayList.appendChild(li);
        }
        console.log(displayList)
    }) */

    //View List this works!
    this.querySelectorAll('.display').forEach(item=> {
        item.addEventListener('click', function (){
            document.getElementById("myList").innerHTML = "";
            document.getElementById("added").value = '';
            displayList = document.getElementById("myList");
            console.log(list)
            for (i = 0; i < list.length; i++) {
                let ul = document.createElement("ul");
                ul.
                let li = document.createElement("li");
                li.innerText = list[i].name + " cuisine is " + list[i].cuisine + " in " + list[i].city;
                let li2 = document.createElement("li"); 
                displayList.appendChild(li);
            }
            console.log(displayList)
        })
    })

})


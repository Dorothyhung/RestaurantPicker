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

document.addEventListener("DOMContentLoaded", function(event) {
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
})


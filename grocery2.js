var Grocery = /** @class */ (function () {
    function Grocery(id, name, description, quantity, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());

var Milk = new Grocery(1, "Milk", "Mik From Happy Cows", 4, 4.98);
var Eggs = new Grocery(2, "Eggs", "Eggs From Free-Range Chickens", 6, 2.97);
var Bread = new Grocery(3, "Bread", "Mrs. Bairds", 1, 5.98);
var Cereal = new Grocery(4, "Cereal", "Fruity Pebbles", 2, 3.98);
var groceries = [];
    groceries.push(Milk);
    groceries.push(Eggs);
    groceries.push(Bread);
    groceries.push(Cereal);
    
    var table = document.getElementById('grocery');
    groceries.map(function (grocery) {
        var name = grocery.name, id= grocery.id, description = grocery.description, quantity = grocery.quantity, price = grocery.price;
        var row = table.insertRow();
        row.innerHTML = "\n       <td id=\"id\">" + id + "</td>\n     <td id=\"name\">" + name + "</td>\n            <td id=\"desc\">" + description + "</td>\n            <td id=\"qty\">" + quantity + "</td>\n            <td id=\"price\">" + price + "</td>";
    });

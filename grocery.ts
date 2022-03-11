class Grocery  {
    name:String;
    quantity:Number;
    price:Number;
                


constructor(n:String, q:Number, p:number) {
    this.name=n;
    this.quantity=q;
    this.price=p;

                                           }

                }


let list_of_items=[
    new Grocery("milk", 3, 10),
    new Grocery("bread", 6 ,25),
    new Grocery("egg",11,10)
                  ]

const ele = document.getElementById("app");

list_of_items.forEach(e=>{
    const p =document.createElement("p")
    p.textContent='${e.name} ${e.quantity}->$${e.price}';
    ele.appendChild(p);

                         })
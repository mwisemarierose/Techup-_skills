const item = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
  ];
 
  // The Cheap item

  const min=Math.min(...item.map(product => product.price))
const cheapest= item.filter(product.price===min)
console.log(`the cheapest product is ${cheapest[0].name} with price of ${cheapest[0].price} `)


//   The expensive item

const max=Math.max(...item.map(product => product.price))
const expensive= item.filter(product.price===max)
console.log(`the expesnive product is ${expensive[0].name} with price of ${expensive[0].price} `)

  
  // total price of all items combined

  let total=0;
  for(let i=0; i<item.length;  i++) {
   total=total+item[i].price;
  }
  console.log(`total price of products is ${total}`)

  // total price combined excluding price < 10

 const UnderTenProduct= item.filter((product) =>{
   return product.price<10
 })

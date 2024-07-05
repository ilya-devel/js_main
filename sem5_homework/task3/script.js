const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
]

products.forEach(elem => elem.price = elem.price * 0.85)
console.log(products)
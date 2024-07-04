const someObject = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье",
    8: "test"
}

const user = {
    name: "Ilya",
    surname: "Black",
    age: 33,
    about: function () {
        console.log(`${this.name}-${this.surname}-${this.age}`)
    }
}

user.about()

user.patronymic = prompt("Введите своё отчество:")

console.log(`Вы ввели: ${user.patronymic}`)

delete user.surname

console.log(user)


const item = {
    id: 1,
    name: "some item",
    desc: "some description",
    price: 666,
    salePrice: function(discount=20) {
        return (this.price * ((100 - discount) / 100))
    }
}

console.log(`Цена со скидкой 20%: ${item.salePrice()}`)
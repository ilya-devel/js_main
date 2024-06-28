function getSalaryOnHandByClearSalary() {
    let salary = +prompt("Укажите вашу зарплату")
    while (isNaN(salary)) {
        alert("Не верно указаны данные")
        salary = +prompt("Укажите вашу зарплату")
    }
    let result = getSalaryWithTax(salary)
    alert(`Ваша зарплата после вычета налога равна ${result}`)
    console.log(`Размер заработной платы за вычетом налогов равен ${result}`)
}

const getSalaryWithTax = (salaryWithoutTax, tax = 13) => salaryWithoutTax * ((100 - tax) / 100)

getSalaryOnHandByClearSalary()
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}

function showAll(productsArray) {
    list.innerHTML = '' // garantia pra que comece vazio
    let myLi = ''
    productsArray.forEach(product => {
        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">🛒Preço: ${formatCurrency(product.price)}</p>
                </li>
            `
    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product, //spread operator
        price: product.price * 0.9, // 10% de desconto
    }))

    showAll(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    const totalDiscount = menuOptions.reduce((acc, curr) => acc + (curr.price * 0.9), 0)

    list.innerHTML = `
    <li class="card-total">
        <h2>📊 Resumo do Pedido</h2>
        <p>🛒 Total sem desconto: <span> <br>${formatCurrency(totalValue)}</span></p>
        <p>🔥 Total com 10% OFF: <span> <br>${formatCurrency(totalDiscount)}</span></p>
        <p>💸 Economia: <span> <br>${formatCurrency(totalValue - totalDiscount)}</span></p>
    </li>
    `
}

function filterAllItems() {
    const onlyVegan = menuOptions.filter((product) => product.vegan)

    showAll(onlyVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)
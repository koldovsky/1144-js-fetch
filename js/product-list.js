const products = [
    {
        id: '1',
        title: 'Baby Yoda',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 10.99,
        image: 'img/baby-yoda.svg'
    },
    {
        id: '2',
        title: 'Banana',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 9.99,
        image: 'img/banana.svg'
    },
    {
        id: '3',
        title: 'Girl',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 12.99,
        image: 'img/girl.svg'
    },
    {
        id: '4',
        title: 'Viking',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 11.99,
        image: 'img/viking.svg'
    },
];

function renderProducts(products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}
            </p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
    }
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsHtml;
}

renderProducts(products);

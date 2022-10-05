// Declare my data
const data = [
    {
        id: 1,
        name: 'Коптильня 10л',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et pulvinar odio, et tempor leo. Vivamus vitae eros nec ex venenatis eleifend feugiat sit amet augue. Curabitur fermentum enim non massa venenatis efficitur ut in dolor. Cras magna justo, ornare vel imperdiet id, scelerisque eget turpis.',
        image: 'images/marmite-10.jpg',
        price: 1200
    },
    {
        id: 2,
        name: 'Коптильня 20л',
        description: 'Sed aliquet mattis ipsum, a cursus turpis aliquam eu. Nullam tempor posuere nunc, non imperdiet libero interdum sit amet. Etiam lacinia quam nisl, ac tempus sem convallis ut. Proin vitae turpis vulputate, pulvinar sem sit amet, luctus dui. Morbi tincidunt suscipit libero',
        image: 'images/marmite-20.jpg',
        price: 1400
    },
    {
        id: 3,
        name: 'Коптильня 30л',
        description: 'et semper urna tristique vel. Vestibulum venenatis urna vel orci lobortis, eget malesuada nunc fermentum. Suspendisse posuere tortor velit.',
        image: 'images/marmite-30.jpg',
        price: 1600
    },
]

data.forEach(listProduct);

function listProduct(product, index){

    const container = document.createElement('div');
    container.classList.add('card','col-md-4','text-center','p-2');
    card.appendChild(container);

    const elTitle = document.createElement('h5');
    elTitle.classList.add('title-product','card-title');
    elTitle.textContent = data[index].name;
    container.appendChild(elTitle);

    const elImage = document.createElement('img');
    elImage.classList.add('img-product','img-fluid');
    elImage.src = data[index].image;
    container.appendChild(elImage);

    const elDescription = document.createElement('div');
    elDescription.classList.add('description-product','card-text');
    elDescription.textContent = data[index].description;
    container.appendChild(elDescription);

    const elPrice = document.createElement('div');
    elPrice.classList.add('price-product','font-weight-bold','py-2');
    
    // Format the number to thousands
    productPrice = data[index].price;
    productPrice = productPrice.toLocaleString().replace(/,/g, " ");

    elPrice.textContent = productPrice;
    container.appendChild(elPrice);

    const cta = document.createElement('button');
    cta.classList.add('cta','btn','btn-success');
    cta.textContent = 'add to cart';
    container.appendChild(cta);

    amount = document.getElementById('amount');
    total = 0;

    cta.addEventListener('click', function(event){
        cta.textContent = 'added';
        cta.disabled = true;
        cta.style.opacity=1;
        cta.style.backgroundColor= '#218838';
        total = total + data[index].price;
        amount.textContent = total;
    });
    

}
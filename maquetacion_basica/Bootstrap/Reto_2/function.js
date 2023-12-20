const chart = [];

const container = document.getElementById(`cards`);

class Clothes{

  constructor(id, title, description, img, price){
    this.id = id;
    this.title = title;
    this.description = description;
    this.img = img;
    this.price = price;
    
  }
}

const storageClothes = [
  new Clothes(1, "Top cuello halter", "Tejido de lúrex. Tejido de punto fino. Diseño entallado. Cuello halter. Sin mangas. Cierre de lazo en el cuello. Espalda abierta.", "./img/57079083_03.jpeg",19),
  new Clothes(2, "Vestido satinado", "Tejido fluido. Efecto satinado. Diseño largo. Diseño recto. Cuello escotado. Sin mangas. Tirantes finos. Espalda abierta.", "./img/57049103_90.jpeg",49),
  new Clothes(3, "Vestido cruzado hebilla", "Tejido fluido. Diseño corto. Diseño recto. Diseño cruzado. Escote de pico. Manga larga con puños abotonados.", "./img/67010468_99.jpeg",59),
  new Clothes(4, "Mono halter", "Diseño cruzado. Diseño recto. Diseño largo. Cuello halter. Tirantes anchos. Sin mangas. Espalda con escote. Lazo a la cintura.", "./img/57019114_99-99999999_01.jpeg",39),
];



function createClothes() {
  let htmlClothes = "";
  storageClothes.forEach(dress => {
    const cards = 
    `<div class="col">

    <div class="card" style="width: 18rem;">
        <img src="${dress.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title" id="title1">${dress.title}</h5>
          <p class="card-text">${dress.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="price1">${dress.price}€</li>
        </ul>
        <div class="card-body">
            <button type="button" class="btn btn-dark" onclick="addProduct(${dress.id})">Añadir al Carrito</button>
        </div>
    </div>
  </div>
    `
    htmlClothes += cards;
  })
  container.innerHTML = htmlClothes;
}


function totalPrice() {
  let totalPrice = 0;

  chart.forEach(product => {
    totalPrice += product.price;
  })
  return totalPrice;
}


// Añadir al carrito
function addProduct(id) {
  chart.push(storageClothes.find (item => item.id == id));
  console.log(chart);
}

// Selecciona el elemento del carrito de lista carrito y por cada producto creamos un elemento de la lista y le cambiamos el texto que hay dentro
// y despues metemos dentro del crrito el elemento que hemos creado
function addchart() {
  let chartClothes = document.getElementById(`listacarrito`);
  chartClothes.innerHTML = ``;

  chart.forEach(product => {
    let productElement = document.createElement(`li`);
    productElement.innerText = `${product.title} : ${product.price}€ ${product.img}`;
    chartClothes.appendChild(productElement);
  });

  const priceTotal = document.querySelector(`#total`);
  priceTotal.textContent = `${totalPrice()}€`;
}











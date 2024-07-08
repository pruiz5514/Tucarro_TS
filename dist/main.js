var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const brandCar = localStorage.getItem("carBrand");
console.log(brandCar);
let url;
if (brandCar === null || brandCar === "home") {
    url = "http://localhost:3000/carros";
}
else {
    url = `http://localhost:3000/carros?marca=${brandCar}`;
}
const cardsContainer = document.querySelector(".main_cards-container");
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getCars();
    data.map((car) => {
        const card = document.createElement("article");
        const infoContainer = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("p");
        const price = document.createElement("p");
        const yearKm = document.createElement("p");
        const city = document.createElement("p");
        img.src = car.img;
        img.className = "carImage";
        infoContainer.className = "card_info-container";
        title.innerText = `${car.marca} ${car.modelo}`;
        title.className = "text-info";
        price.innerText = `$ ${car.precio}`;
        price.className = "price";
        yearKm.innerText = `${car.anio} | ${car.kilometraje} Km`;
        yearKm.className = "text-info";
        city.innerText = `${car.ciudad}`;
        city.className = "city";
        infoContainer.append(title, price, yearKm, city);
        card.append(img, infoContainer);
        cardsContainer.appendChild(card);
    });
}));
document.addEventListener("click", (event) => {
    const target = event.target;
    const carBrand = target.getAttribute('carBrand');
    if (carBrand === "Mercedes-benz" || carBrand === "BMW" || carBrand === "Audi" || carBrand === "home") {
        localStorage.setItem("carBrand", carBrand);
    }
});
export {};

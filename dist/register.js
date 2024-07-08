var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("form");
const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const price = document.querySelector("#price");
const img = document.querySelector("#img-url");
const km = document.querySelector("#km");
const anio = document.querySelector("#anio");
const city = document.querySelector("#city");
const button = document.querySelector("#button");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    yield addCar();
    alert("Se agrego carro exitosamente");
    form.reset();
}));
function addCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const newCar = {
            marca: brand.value,
            modelo: model.value,
            precio: Number(price.value),
            img: img.value,
            kilometraje: Number(km.value),
            anio: Number(anio.value),
            ciudad: city.value
        };
        yield fetch("http://localhost:3000/carros", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        });
    });
}
export {};

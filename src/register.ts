import { Icarros } from "./interfaces/Icarros";

const form = document.querySelector("form") as HTMLFormElement;
const brand = document.querySelector("#brand") as HTMLInputElement;
const model = document.querySelector("#model") as HTMLInputElement;
const price = document.querySelector("#price") as HTMLInputElement;
const img = document.querySelector("#img-url") as HTMLInputElement;
const km = document.querySelector("#km") as HTMLInputElement;
const anio = document.querySelector("#anio") as HTMLInputElement;
const city = document.querySelector("#city") as HTMLInputElement;
const button = document.querySelector("#button") as HTMLButtonElement;

form.addEventListener("submit", async(event:Event) =>{
    event.preventDefault()
    await addCar()

    alert("Se agrego carro exitosamente")
    form.reset();
    
})

async function addCar():Promise<void>{
    const newCar: Icarros = {
        marca: brand.value,
        modelo: model.value,
        precio: Number(price.value),
        img: img.value,
        kilometraje: Number(km.value),
        anio: Number(anio.value),
        ciudad: city.value
    }

    await fetch("http://localhost:3000/carros",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
    })
}

document.addEventListener("click", (event:Event) =>{
    const target = event.target as HTMLElement;
    const carBrand: string | null = target.getAttribute('carBrand');

    if(carBrand === "Mercedes-benz" || carBrand === "BMW" || carBrand === "Audi" || carBrand === "home" ){
        localStorage.setItem("carBrand",carBrand)
    }
    
})
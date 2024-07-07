import { Icarros } from "./interfaces/Icarros";

const cardsContainer = document.querySelector(".main_cards-container") as HTMLElement;

const getCars = async():Promise<Icarros[]> => {
    const response = await fetch("http://localhost:3000/carros");
    const data = await response.json()

    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    const data: Icarros[] = await getCars();

    data.map( (car:Icarros) =>{
        const card = document.createElement("article") as HTMLElement;
        const infoContainer = document.createElement("div") as HTMLElement;
        const imgContainer = document.createElement("div") as HTMLElement;
        const img = document.createElement("img") as HTMLImageElement;
        const title = document.createElement("p") as HTMLParagraphElement;
        const price = document.createElement("p") as HTMLParagraphElement;
        const yearKm = document.createElement("p") as HTMLParagraphElement;
        const city = document.createElement("p") as HTMLParagraphElement;

        img.src = car.img;
        img.className = "carImage";
        infoContainer.className = "card_info-container"
        title.innerText = `${car.marca} ${car.modelo}`;
        title.className = "text-info"
        price.innerText = `$ ${car.precio}`
        price.className = "price"
        yearKm.innerText = `${car.anio} | ${car.kilometraje} Km`
        yearKm.className = "text-info"
        city.innerText = `${car.ciudad}`
        city.className = "city"

        infoContainer.append(title, price, yearKm, city);
        card.append(img, infoContainer);

        cardsContainer.appendChild(card);
    })

    
    
})

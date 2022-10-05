import { getPhotographers } from "../utils/helper.js";
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";

getPhotographers();

async function init(){
    let urlData = new URLSearchParams(window.location.search)
    const photographerId = urlData.get("id");
    const { photographers, media } = await getPhotographers();
    let photographer = photographers.find(p => p.id == photographerId);
    let myMedia = media.filter(m => m.photographerId == photographerId);

    async function displayPhotographerData(photographer){
        const photographHeader = document.querySelector(".photograph-header");
        const photographerModel = photographerFactory(photographer);
        const photographCardDOM = photographerModel.getPhotographCardDOM();
        photographHeader.appendChild(photographCardDOM);
    }

    async function displayMediaData(myMedia){
        const photographHeader = document.querySelector(".photograph-header");
        const mediaModel = mediaFactory(myMedia);
        const mediaCardDOM = mediaModel.getMediasCardDOM();
        photographHeader.appendChild(mediaCardDOM);
    }

    displayPhotographerData(photographer);
    displayMediaData(myMedia);
}

init();





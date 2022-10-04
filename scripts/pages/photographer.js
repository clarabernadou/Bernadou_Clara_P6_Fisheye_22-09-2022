import { getPhotographers } from "../utils/helper.js";

async function init(){
    // Recovery id form URL
    let urlData = new URLSearchParams(window.location.search)
    const photographerId = urlData.get("id");
    const { photographers, media } = await getPhotographers();
    const photographer = photographers.find(p => p.id == photographerId);
    const myMedia = media.filter(m => m.photographerId == photographerId);

    console.log(photographer, myMedia);
}

init();
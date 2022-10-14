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
    let mediaId = media.find(m => m.id);

    console.log(mediaId);

    // Display a photograph in header
    async function displayPhotographerData(photographer){
        const photographHeader = document.querySelector(".photograph-header");
        const photographerModel = photographerFactory(photographer);
        const photographCardDOM = photographerModel.getPhotographCardDOM();
        photographHeader.appendChild(photographCardDOM);
    };

    // Display all photographer's media
    async function displayMediaData(myMedia){
        const photographGallery = document.querySelector(".photograph-gallery");
        myMedia.forEach((myMedia) => {
            const mediaModel = mediaFactory(myMedia);
            const mediaCardDOM = mediaModel.getMediasCardDOM();
            photographGallery.appendChild(mediaCardDOM);
        })
    };

    // Display frame with price & likes
    async function displayFrameData(photographer){
        const photographGallery = document.querySelector(".photograph-gallery");
        const frameModel = photographerFactory(photographer);
        const frameCardDOM = frameModel.getFrameDOM();
        photographGallery.appendChild(frameCardDOM);
    };

    // Display photographer's name in form contact
    async function displayNameContact(photographer){
        const contactName = document.querySelector(".contactezMoi");
        const contactModel = photographerFactory(photographer);
        const contactNameDOM = contactModel.getNameContact();
        contactName.appendChild(contactNameDOM);
    };

    // Display a lightbox when one of the media is clicked
    async function lightboxMedia(){
        const lightbox = document.querySelector(".lightbox");
        const links = document.querySelectorAll("a");
        
        for(let link of links){
            link.addEventListener("click", function(e){
                e.preventDefault();
                    const mediaModel = mediaFactory(mediaId);
                    const mediaCardDOM = mediaModel.lightbox();
                    lightbox.appendChild(mediaCardDOM);
            });
        }
    };

    async function Filter(){
        const photographFilter = document.querySelector(".photograph-filter");
        const btnModel = mediaFactory(myMedia);
        const btnFilterDOM = btnModel.filterBtn();
        photographFilter.appendChild(btnFilterDOM);
    }

    displayPhotographerData(photographer);
    Filter(myMedia)
    displayMediaData(myMedia);
    displayFrameData(photographer);
    displayNameContact(photographer);
    lightboxMedia(mediaId);
    
    console.log(myMedia);
}

init();



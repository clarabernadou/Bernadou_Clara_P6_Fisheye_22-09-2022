import { getPhotographers } from "../utils/helper.js";
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";

getPhotographers();

let myMedia = [];

async function init(){
    let urlData = new URLSearchParams(window.location.search)
    const photographerId = urlData.get("id");
    const { photographers, media } = await getPhotographers();
    let photographer = photographers.find(p => p.id == photographerId);
    myMedia = media.filter(m => m.photographerId == photographerId);

// -------------------------------------------------------------------------------

    // Display a photograph in header
    async function displayPhotographerData(photographer){
        const photographHeader = document.querySelector(".photograph-header");
        const photographerModel = photographerFactory(photographer);
        const photographCardDOM = photographerModel.getPhotographCardDOM();
        photographHeader.appendChild(photographCardDOM);
    };

// -------------------------------------------------------------------------------

    // Display all photographer's media
    async function displayMediaData(myMedia){
        const photographGallery = document.querySelector(".photograph-gallery");
        myMedia.forEach((myMedia) => {
            const mediaModel = mediaFactory(myMedia);
            const mediaCardDOM = mediaModel.getMediasCardDOM();
            photographGallery.appendChild(mediaCardDOM);
        })
    };

// -------------------------------------------------------------------------------

    // Display frame with price & likes
    async function displayFrameData(photographer){
        const photographGallery = document.querySelector(".photograph-gallery");
        const frameModel = photographerFactory(photographer);
        const frameCardDOM = frameModel.getFrameDOM();
        photographGallery.appendChild(frameCardDOM);
    };

// -------------------------------------------------------------------------------

    // Display photographer's name in form contact
    async function displayNameContact(photographer){
        const contactName = document.querySelector(".contactezMoi");
        const contactModel = photographerFactory(photographer);
        const contactNameDOM = contactModel.getNameContact();
        contactName.appendChild(contactNameDOM);
    }; 

// -------------------------------------------------------------------------------

    // Display filter buttons
    async function filter(){
        const photographFilter = document.querySelector(".photograph-filter");
        const btnModel = mediaFactory(myMedia);
        const btnFilterDOM = btnModel.filterBtn();
        photographFilter.appendChild(btnFilterDOM);

        const title = document.querySelector('.title-all');
        const filterBtn = document.querySelector(".filter-btn");

        title.addEventListener(('click'), function(e){
            filterBtn.style.display = 'block';
            title.style.display = 'none';
        });
    };

// -------------------------------------------------------------------------------

    // Filter functions
    async function filterFunction(){
        const popularityBtn = document.querySelector('.popularity-btn');
        const dateBtn = document.querySelector('.date-btn');
        const titleBtn = document.querySelector('.title-btn');
        const title = document.querySelector('.title-all');
        const filterBtn = document.querySelector(".filter-btn");
    
        // POPULARITY
        popularityBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");    
            photographGallery.innerHTML = "";
            title.textContent = "Popularité";
            title.style.display = 'block';
            filterBtn.style.display = "none";

            let popularityFilter = myMedia.sort((l1, l2) => (l1.likes < l2.likes) ? 1 : (l1.likes > l2.likes) ? -1 : 0);
        
            popularityFilter.forEach((popularityFilter) => {
                const mediaModel = mediaFactory(popularityFilter);
                const mediaCardDOM = mediaModel.getMediasCardDOM();
                photographGallery.appendChild(mediaCardDOM);
            });
        });

         // DATE
        dateBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");
            photographGallery.innerHTML = "";
            title.textContent = "Date";
            title.style.display = 'block';
            filterBtn.style.display = "none";

            let dateFilter = myMedia.sort((d1, d2) => (d1.date < d2.date) ? 1 : (d1.date > d2.date) ? -1 : 0);
    
            dateFilter.forEach((dateFilter) => {
                const mediaModel = mediaFactory(dateFilter);
                const mediaCardDOM = mediaModel.getMediasCardDOM();
                photographGallery.appendChild(mediaCardDOM);
            });
        });

        // TITLE
        titleBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");
            photographGallery.innerHTML = "";
            title.textContent = "Titre";
            title.style.display = 'block';
            filterBtn.style.display = "none";

            let titleFilter = myMedia.sort((t1, t2) => (t1.title > t2.title) ? 1 : (t1.title < t2.title) ? -1 : 0);
        
            titleFilter.forEach((titleFilter) => {
                const mediaModel = mediaFactory(titleFilter);
                const mediaCardDOM = mediaModel.getMediasCardDOM();
                photographGallery.appendChild(mediaCardDOM);
            });
        });
    };

// -------------------------------------------------------------------------------

    // Display functions in page
    displayPhotographerData(photographer);
    displayFrameData(photographer);
    displayNameContact(photographer);
    displayMediaData(myMedia);
    filter();
    filterFunction();
};

init();



import { getPhotographers } from "../utils/helper.js";
import { photographerFactory } from "../factories/photographer.js";

getPhotographers();

    // Display photographers data
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    // Recovery data
    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
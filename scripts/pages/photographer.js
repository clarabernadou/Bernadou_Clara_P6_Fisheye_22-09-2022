import { getPhotographers } from "../utils/helper.js";
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";

getPhotographers(); // Import function

let myMedia = []; // Create array for photographer's medias

/* ----------------------------------------------------- FUNCTION INIT ----------------------------------------------------- */

async function init(){
    let urlData = new URLSearchParams(window.location.search) // Search URL
    const photographerId = urlData.get("id"); // Retrieve id from URL
    const { photographers, media } = await getPhotographers(); // Recovery data in function
    let photographer = photographers.find(p => p.id == photographerId); // Find a photographer with their id
    myMedia = media.filter(m => m.photographerId == photographerId); // Find all the media of the photographer with the identifier of the photographer

/* ------------------------------------------------- PHOTOGRAPHER'S HEADER ------------------------------------------------- */

    // Display a photograph in header
    async function displayPhotographerData(photographer){
        const photographHeader = document.querySelector(".photograph-header");
        // Display photographer's in header with factories
        const photographerModel = photographerFactory(photographer);
        const photographCardDOM = photographerModel.getPhotographCardDOM();
        photographHeader.appendChild(photographCardDOM);
    };

/* ------------------------------------------------- FRAME INFO ------------------------------------------------- */

    async function displayFrameData(photographer){
        const photographGallery = document.querySelector(".photograph-gallery");
        // Display likes & price in frame with factories
        const frameModel = photographerFactory(photographer);
        const frameCardDOM = frameModel.getFrameDOM();
        photographGallery.appendChild(frameCardDOM);
    };

/* ------------------------------------------------- NAME IN FORM CONTACT ------------------------------------------------- */

    async function displayNameContact(photographer){
        const contactName = document.querySelector(".contactezMoi");
        // Display photographer's name in form contact
        const contactModel = photographerFactory(photographer);
        const contactNameDOM = contactModel.getNameContact();
        contactName.appendChild(contactNameDOM);
    }; 

/* ------------------------------------------------- FUNCTION FILTER BUTTONS ------------------------------------------------- */

    async function filter(){
        const photographFilter = document.querySelector(".photograph-filter");``

        // Display filter button in page with factories
        const btnModel = mediaFactory(myMedia);
        const btnFilterDOM = btnModel.filterBtn();
        photographFilter.appendChild(btnFilterDOM);

        const title = document.querySelector('.title-all');
        const filterBtn = document.querySelector(".filter-btn");
        const icon = document.querySelector('.divIcon i');

        // Add event at button on click...
        title.addEventListener(('click'), function(e){
            // Visual changes
            filterBtn.style.display = 'block';
            title.style.display = 'none';
            icon.style.display = 'none';
        });
    };

/* ----------------------------------------------------- FUNCTION FILTER ----------------------------------------------------- */

    async function filterFunction(){
        const popularityBtn = document.querySelector('.popularity-btn');
        const dateBtn = document.querySelector('.date-btn');
        const titleBtn = document.querySelector('.title-btn');
        const title = document.querySelector('.title-all');
        const icon = document.querySelector('.divIcon i');
        const filterBtn = document.querySelector(".filter-btn");

/* ----------------------------------------------------- POPULARITY FILTER ----------------------------------------------------- */

        // Add an event to the popularity button on click...
        popularityBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");    
            photographGallery.innerHTML = ""; // Reset gallery images

            // Visual changes
            title.textContent = "Popularité";
            title.style.display = 'block';
            icon.style.display = 'block';
            filterBtn.style.display = "none";

            // Sort media by popularity
            myMedia.sort((l1, l2) => (l1.likes < l2.likes) ? 1 : (l1.likes > l2.likes) ? -1 : 0)
            displayMediaData(myMedia);
        });

/* ----------------------------------------------------- DATE FILTER ----------------------------------------------------- */

        // Add an event to the date button on click...
        dateBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");
            photographGallery.innerHTML = ""; // Reset gallery images

            // Visual changes
            title.textContent = "Date";
            title.style.display = 'block';
            icon.style.display = 'block';
            filterBtn.style.display = "none";

            // Sort media by date
            myMedia.sort((d1, d2) => (d1.date < d2.date) ? 1 : (d1.date > d2.date) ? -1 : 0);
            displayMediaData(myMedia);
        });

/* ----------------------------------------------------- TITLE FILTER ----------------------------------------------------- */

        // Add an event to the title button on click...
        titleBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");
            photographGallery.innerHTML = ""; // Reset gallery images

            // Visual changes
            title.textContent = "Titre";
            title.style.display = 'block';
            icon.style.display = 'block';
            filterBtn.style.display = "none";

            // Sort media by title (A-Z)
            myMedia.sort((t1, t2) => (t1.title > t2.title) ? 1 : (t1.title < t2.title) ? -1 : 0);
            displayMediaData(myMedia);
        });
    };

/* ---------------------------------------- FUNCTION TO ADD A LIKE FROM ALL LIKES COUNT ---------------------------------------- */

    function likePhoto(){
        const likeBtn = document.querySelectorAll(".div__likes");
        const likeCount = document.querySelectorAll('.likes');
        const totalLikeCount = document.querySelector('.totalLikes');

        let likesArray = []; // Total likes array

        // Add all image likes in array
        likeCount.forEach((e) => {
            likesArray.push(parseInt(e.firstChild.data));
        });

        // Cumulate all array elements
        const totalLikes = likesArray.reduce((a, b) => {
            return a + b;
        });
        
        totalLikeCount.textContent = totalLikes; // Add likes in HTML

/* ---------------------------------------- FUNCTION TO ADD A LIKE FROM ALL LIKES COUNT ---------------------------------------- */

        function addLikeInTotal(){
            likesArray.push(1); // Add 1 in the array

            // Cumulate all array elements
            const totalLikes = likesArray.reduce((a, b) => {
                return a + b;
            });

            totalLikeCount.textContent = totalLikes; // Add the new number of likes in the HTML
        }

/* ---------------------------------------- FUNCTION TO REMOVE A LIKE FROM ALL LIKES COUNT ---------------------------------------- */

        function removeLikeInTotal(){
            likesArray.pop(); // Remove the last element (like) in the array

            // Cumulate all array elements
            const totalLikes = likesArray.reduce((a, b) => {
                return a + b;
            });

            totalLikeCount.textContent = totalLikes; // Add the new number of likes in the HTML
        }

/* --------------------------------------------------- FUNCTION TO LIKE PHOTO --------------------------------------------------- */

        // Loop to run until there are no more likeBtn
        for (let i = 0; i < likeBtn.length; i++) {
            let hasClicked = false; // to like only once

            // Add event to the like button at click...
            likeBtn[i].addEventListener("click", function(e) {
                if(!hasClicked){ // Like if you haven't already
                    let mediaLikes = e.target.closest("article"); // For the info we have stored in the article
                    let numberLikes = parseInt(mediaLikes.getAttribute("data-likes")) + 1; // Add 1 to data-likes

                    // Visual changes
                    likeCount[i].textContent = numberLikes;
                    likeCount[i].style.color = '#901C1C';
                    likeCount[i].style.fontWeight = 500;
                    likeCount[i].style.fontSize = '24px';

                    mediaLikes.setAttribute('data-likes', numberLikes); // Add the new number of likes in mediaLikes
                    addLikeInTotal() // Add 1 to total likes
                    hasClicked = true; // To not like again

                }else{ // Otherwise remove the like
                    let mediaLikes = e.target.closest("article"); // For the info we have stored in the article
                    let numberLikes = parseInt(mediaLikes.getAttribute("data-likes")) - 1; // Remove 1 to data-likes

                    // Visual changes
                    likeCount[i].textContent = numberLikes;
                    likeCount[i].style.color = 'black';
                    likeCount[i].style.fontWeight = 400;
                    likeCount[i].style.fontSize = '16px';

                    mediaLikes.setAttribute('data-likes', numberLikes); // Add the new number of likes in mediaLikes
                    removeLikeInTotal() // Remove 1 to total likes                
                    hasClicked = false; // To like
                }
            });
        };
    };

/* --------------------------------------------------- FUNCTION DISPLAY MEDIAS --------------------------------------------------- */

    async function displayMediaData(myMedia){
        const photographGallery = document.querySelector(".photograph-gallery");

        // For all medias
        myMedia.forEach((myMedia) => {
            // Display media in gallery with factories
            const mediaModel = mediaFactory(myMedia);
            const mediaCardDOM = mediaModel.getMediasCardDOM();
            photographGallery.appendChild(mediaCardDOM);
        });

/* --------------------------------------------------- ADD EVENT TO MEDIAS --------------------------------------------------- */

        const medias = document.querySelectorAll('a');

        // Loop to have media of medias
        for(let media of medias){
            // Add an event to the media on click...
            media.addEventListener('click', function(e) {
                e.preventDefault() // Prevent event by default
                
/* --------------------------------------------------- FUNCTION LIGHTBOX ---------------------------------------------------------- */

                function lightbox(){
                    const lightbox = document.querySelector(".lightbox");
                    lightbox.showModal(); // Show lightbox
                    let mediaId = e.target.closest("article").getAttribute("data-id"); // Retrieve id from article data
                    let mediaImg = myMedia.find( m => m.id == mediaId); // Find media by id
                
                    // Display lightbox in page with factories
                    const mediaModel = mediaFactory(mediaImg);
                    const mediaCardDOM = mediaModel.lightbox();
                    lightbox.appendChild(mediaCardDOM);

/* ----------------------------------------------- FUNCTION DISPLAY MEDIA IN LIGHTBOX ----------------------------------------------- */

                    let currentIndex = myMedia.findIndex((m => m.id == mediaId)); // Find index by id

                    // Display media in lightbox with factories
                    function displayMediaInLightbox(currentIndex){
                        const mediaModel = mediaFactory(myMedia[currentIndex]);
                        const mediaCardDOM = mediaModel.lightboxMedia();
                        imgVideo.appendChild(mediaCardDOM); 
                    }

/* ----------------------------------------------- PREVIOUS MEDIA BUTTON ----------------------------------------------- */

                    const prevBtn = document.querySelector('.fa-chevron-left');
                    const imgVideo =  document.querySelector('.img-video');

                    // Add an event to the prev button on click...
                    prevBtn.addEventListener("click", function(e){
                        imgVideo.innerHTML = ""; // Reset media div
                        currentIndex -= 1; // Remove 1 to index

                        // If the current index is less than 0
                        if(currentIndex < 0){
                            currentIndex = myMedia.length -1; // currentIndex = the index of the last element
                        }
                        displayMediaInLightbox(currentIndex);
                    });

/* ----------------------------------------------- NEXT MEDIA BUTTON ----------------------------------------------- */

                    const NextBtn = document.querySelector('.fa-chevron-right');

                    // Add an event to the next button on click...
                    NextBtn.addEventListener("click", function(e){
                        imgVideo.innerHTML = ""; // Reset media div
                        currentIndex += 1; // Add 1 to index

                        const lastElement = myMedia.length -1 // Get last item
                        
                        // If number of the last element is bigger than the current index
                        if(currentIndex > lastElement){
                            currentIndex = 0; // currentIndex = the index of the first element
                        }
                        displayMediaInLightbox(currentIndex);
                    });

/* ----------------------------------------------- PLAY / PAUSE LIGHTBOX ----------------------------------------------- */

                    const videos = document.querySelectorAll('.img-video video');
                    const playVideo = document.querySelector('.fa-play');
                    const playBg = document.querySelector('.playVideo')

                    // Loop to run until no more video
                    for(let v = 0; v < videos.length; v++){
                        // Add an event to the playVideo on click...
                        playVideo.addEventListener('click', function(e){
                            videos[v].play(); // Play video

                            // Visual changes
                            playVideo.style.display = 'none'; 
                            playBg.style.display = 'none'                         
                        });

                        // Add an event to the video on click...
                        videos[v].addEventListener('click', function(e){
                            videos[v].pause(); // Pause video

                            // Visual changes
                            playVideo.style.display = 'flex';
                            playBg.style.display = 'flex'; 
                        });
                    }

/* --------------------------------------------------- CLOSE LIGHTBOX --------------------------------------------------- */

                    const closeBtn = document.querySelectorAll('.fa-times');
                    
                    // Loop to have the close button of the lightbox
                    for(let close of closeBtn){ 
                        // Add an event by clicking on the button
                        close.addEventListener('click', function(e){
                            const lightbox = document.querySelector('.lightbox');  
                            lightbox.innerHTML = ""; // Reset lightbox
                            lightbox.close(); // Close lightbox
                        });                        
                    };
                };
                // Call lightbox function
                lightbox();
            });
        };  
        // Call like function
        likePhoto(); 
    };

/* --------------------------------------------------- CALL ALL FUNCTIONS --------------------------------------------------- */

    displayPhotographerData(photographer);
    displayFrameData(photographer);
    displayNameContact(photographer);
    displayMediaData(myMedia);
    filter();
    filterFunction();
};

init();



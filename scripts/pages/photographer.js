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

        // Display filter buttons
        const title = document.querySelector('.title-all');
        const filterBtn = document.querySelector(".filter-btn");
        const icon = document.querySelector('.divIcon i');

        // Display filter title
        title.addEventListener(('click'), function(e){
            filterBtn.style.display = 'block';
            title.style.display = 'none';
            icon.style.display = 'none';
        });
    };

// -------------------------------------------------------------------------------

    // Filter functions
    async function filterFunction(){
        const popularityBtn = document.querySelector('.popularity-btn');
        const dateBtn = document.querySelector('.date-btn');
        const titleBtn = document.querySelector('.title-btn');
        const title = document.querySelector('.title-all');
        const icon = document.querySelector('.divIcon i');
        const filterBtn = document.querySelector(".filter-btn");
    
        // POPULARITY
        popularityBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");    
            photographGallery.innerHTML = "";
            title.textContent = "Popularité";
            title.style.display = 'block';
            icon.style.display = 'block';
            filterBtn.style.display = "none";

            myMedia.sort((l1, l2) => (l1.likes < l2.likes) ? 1 : (l1.likes > l2.likes) ? -1 : 0)
            displayMediaData(myMedia);
        });

         // DATE
        dateBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");
            photographGallery.innerHTML = "";
            title.textContent = "Date";
            title.style.display = 'block';
            icon.style.display = 'block';
            filterBtn.style.display = "none";

            myMedia.sort((d1, d2) => (d1.date < d2.date) ? 1 : (d1.date > d2.date) ? -1 : 0);
            displayMediaData(myMedia);
        });

        // TITLE
        titleBtn.addEventListener('click', function(e){
            const photographGallery = document.querySelector(".photograph-gallery");
            photographGallery.innerHTML = "";
            title.textContent = "Titre";
            title.style.display = 'block';
            icon.style.display = 'block';
            filterBtn.style.display = "none";

            myMedia.sort((t1, t2) => (t1.title > t2.title) ? 1 : (t1.title < t2.title) ? -1 : 0);
            displayMediaData(myMedia);
        });
    };

// -------------------------------------------------------------------------------

    // Like function
    function likePhoto(){
        const likeBtn = document.querySelectorAll(".div__likes");
        const likeCount = document.querySelectorAll('.likes');
        const totalLikeCount = document.querySelector('.totalLikes');

        // Total likes array
        let likesArray = [];

        // Add all image likes in array
        likeCount.forEach((e) => {
            likesArray.push(parseInt(e.firstChild.data));
        });

        // Cumulate all array elements
        const totalLikes = likesArray.reduce((a, b) => {
            return a + b;
        });
        
        // Add likes in HTML
        totalLikeCount.textContent = totalLikes;

        // Add 1 in total likes
        function addLikeInTotal(){
            likesArray.push(1);
            
            const totalLikes = likesArray.reduce((a, b) => {
                return a + b;
            });

            totalLikeCount.textContent = totalLikes;
        }

        // Remove 1 in total likes
        function removeLikeInTotal(){
            likesArray.pop();
            
            const totalLikes = likesArray.reduce((a, b) => {
                return a + b;
            });

            totalLikeCount.textContent = totalLikes;
        }

        // Like photo
        for (let i = 0; i < likeBtn.length; i++) {
            let hasClicked = false;

            likeBtn[i].addEventListener("click", function(e) {
                // Like
                if(!hasClicked){ 
                    let mediaId = e.target.closest("article").getAttribute("data-id");
                    let media = myMedia.find( m => m.id == mediaId);
                    let mediaLikes = e.target.closest("article")

                    let numberLikes = parseInt(mediaLikes.getAttribute("data-likes")) + 1;
                    likeCount[i].textContent = numberLikes;
                    likeCount[i].style.color = '#901C1C';
                    likeCount[i].style.fontWeight = 500;
                    likeCount[i].style.fontSize = '24px';
                    mediaLikes.setAttribute('data-likes', numberLikes); 
                    addLikeInTotal()  
                    hasClicked = true;

                // Dislike    
                }else{ 
                    let mediaId = e.target.closest("article").getAttribute("data-id");
                    let media = myMedia.find( m => m.id == mediaId);
                    let mediaLikes = e.target.closest("article")

                    let numberLikes = parseInt(mediaLikes.getAttribute("data-likes")) - 1;
                    likeCount[i].textContent = numberLikes;
                    likeCount[i].style.color = 'black';
                    likeCount[i].style.fontWeight = 400;
                    likeCount[i].style.fontSize = '16px';
                    mediaLikes.setAttribute('data-likes', numberLikes);  
                    removeLikeInTotal()                  
                    hasClicked = false;
                }
            });
        };
    };

// -------------------------------------------------------------------------------

    // Display all photographer's media
    async function displayMediaData(myMedia){
        const photographGallery = document.querySelector(".photograph-gallery");
        myMedia.forEach((myMedia) => {
            const mediaModel = mediaFactory(myMedia);
            const mediaCardDOM = mediaModel.getMediasCardDOM();
            photographGallery.appendChild(mediaCardDOM);
        });

        // Add media event
        const medias = document.querySelectorAll('a');
        for(let media of medias){
            media.addEventListener('click', function(e) {
                e.preventDefault()
                
                // Lightbox
                function lightbox(){
                    const lightbox = document.querySelector(".lightbox");
                    lightbox.showModal(); 

                    let mediaId = e.target.closest("article").getAttribute("data-id");
                    let mediaImg = myMedia.find( m => m.id == mediaId);
                
                    const mediaModel = mediaFactory(mediaImg);
                    const mediaCardDOM = mediaModel.lightbox();
                    lightbox.appendChild(mediaCardDOM);

                // ---------------------------------------------------------------

                myMedia[myMedia.length -1]
                
                    // Previous/Next button
                    const prevBtn = document.querySelector('.fa-chevron-left');
                    const NextBtn = document.querySelector('.fa-chevron-right');
                    const imgVideo =  document.querySelector('.img-video');
                    let currentIndex = myMedia.findIndex((m => m.id == mediaId))
                    console.log(currentIndex);

                    function displayMediaInLightbox(currentIndex){
                        const mediaModel = mediaFactory(myMedia[currentIndex]);
                        const mediaCardDOM = mediaModel.lightboxMedia();
                        imgVideo.appendChild(mediaCardDOM); 
                    }

                    prevBtn.addEventListener("click", function(e){
                        imgVideo.innerHTML = "";
                        currentIndex -= 1;
                        console.log(currentIndex);

                        if(currentIndex < 0){
                            currentIndex = myMedia.length -1;
                        }
                        displayMediaInLightbox(currentIndex);
                    });

                    NextBtn.addEventListener("click", function(e){
                        imgVideo.innerHTML = "";
                        currentIndex += 1;
                        console.log(currentIndex);
                        const lastElement = myMedia.length -1
                        console.log(lastElement);

                        if(currentIndex > lastElement){
                            currentIndex = 0;
                        }
                        displayMediaInLightbox(currentIndex);
                    });

                // ---------------------------------------------------------------

                    // For each video...
                    const videos = document.querySelectorAll('.img-video video');
                    const playVideo = document.querySelector('.fa-play');
                    const playBg = document.querySelector('.playVideo')

                    for(let v = 0; v < videos.length; v++){
                        // Play video
                        playVideo.addEventListener('click', function(e){
                            videos[v].play(); 
                            playVideo.style.display = 'none'; 
                            playBg.style.display = 'none'                         
                        });

                        // Pause video
                        videos[v].addEventListener('click', function(e){
                            videos[v].pause();
                            playVideo.style.display = 'flex';
                            playBg.style.display = 'flex'; 
                        });
                    }

                // ---------------------------------------------------------------

                    // Close button
                    const closeBtn = document.querySelectorAll('.fa-times');

                    for(let close of closeBtn){
                        close.addEventListener('click', function(e){
                            const lightbox = document.querySelector('.lightbox');  
                            lightbox.innerHTML = "";
                            lightbox.close();
                        });                        
                    };

                // ---------------------------------------------------------------

                };
                lightbox();
            });
        };  
        likePhoto();   
    };
// -------------------------------------------------------------------------------
    // Call functions in page
    displayPhotographerData(photographer);
    displayFrameData(photographer);
    displayNameContact(photographer);
    displayMediaData(myMedia);
    filter();
    filterFunction();
};

init();



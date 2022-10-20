// Recovery photographers data
async function getPhotographers() {
  let jsonFile = "../../data/photographers.json";
  let response = await fetch(jsonFile);
  return await response.json();
}

let myMedia = [];

async function init(){
    let urlData = new URLSearchParams(window.location.search)
    const photographerId = urlData.get("id");
    const { media } = await getPhotographers();
    myMedia = media.filter(m => m.photographerId == photographerId);

    // Display a lightbox when one of the media is clicked
    async function lightboxMedia(){
      const lightbox = document.querySelector(".lightbox");
      const links = document.querySelectorAll("a");

      for(let link of links){
          link.addEventListener("click", function(e){
              e.preventDefault();
              lightbox.showModal(); 
              // Recovery the media id
              let mediaId = e.target.closest("article").getAttribute("data-id");
              console.log(mediaId);
              // Find the media with the same id
              let mediaImg = myMedia.find( m => m.id == mediaId);
              // Display with factories
              const mediaModel = mediaFactory(mediaImg);
              const mediaCardDOM = mediaModel.lightbox();
              lightbox.appendChild(mediaCardDOM);
          // ---------------------------------------------------------------
              
          });
      };    
  };

  lightboxMedia();
}

init()



function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');  
  lightbox.innerHTML = ""
  lightbox.close();
}

function nextLightbox(){
  const prevBtn = document.querySelector('.fa-chevron-left');
  prevBtn.addEventListener("click", function(e){ 
    // Reset image
    lightbox.innerHTML = ""; 
    // Find media index
    const mediaIndex = myMedia.findIndex((m => m.id == mediaId));
    // Media index -1 for get prev media
    const pressPrev = mediaIndex -1;
    // Add index in myMedia
    const mediaIndexPrev = myMedia[pressPrev];
    // Display with factories
    const mediaModel = mediaFactory(mediaIndexPrev);
    const mediaCardDOM = mediaModel.lightbox();
    lightbox.appendChild(mediaCardDOM);
  });  
}

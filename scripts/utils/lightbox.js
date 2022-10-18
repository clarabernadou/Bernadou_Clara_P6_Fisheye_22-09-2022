// function openLightbox() {
//   document.querySelector('.lightbox').style.display = 'block';
// }

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');        
  const imgVideo = document.querySelectorAll(".img-video");
  
  lightbox.close();
}

function next(){
  console.log("next")
}

function prev(){
  console.log("prev")
}

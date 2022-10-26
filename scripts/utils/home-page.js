function homePage(){
    let logo = document.querySelector('.logo');
    logo.addEventListener('click', function(e){
        window.location.href = "http://127.0.0.1:5500/";
    })
}
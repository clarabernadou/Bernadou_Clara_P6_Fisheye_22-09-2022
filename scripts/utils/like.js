for (let i = 0; i < likeBtn.length; i++) {
    console.log("hello")
    likeBtn[i].addEventListener("click", function(e) {
    
        let mediaId = e.target.closest("article").getAttribute("data-id");
        let media = myMedia.find( m => m.id == mediaId);
        let mediaLikes = e.target.closest("article").getAttribute("data-likes");
        let hasClicked = false;

        const liked = parseInt(mediaLikes) + 1;
        
        for(let l = 0; l < likeCount.length; l++){
            console.log("hello");
        }
        if(!hasClicked){
            likeCount.innerHTML = "";
            hasClicked = true;
        };
    });
};

likePhoto();

function totalLikes(){
    const likesArray = Array.from(document.querySelectorAll(".likes"));
    const totalLikesElement = document.querySelector('.totalLikes');

    let somme = 0;

    for(let i = 0; i < likesArray.length; i++){
        somme += likesArray[i];
    }

    console.log(somme);
    totalLikesElement.textContent = somme;
}
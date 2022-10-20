// Like function
function likePhoto(){
    const likeBtn = document.querySelectorAll(".div__likes");
    const likeCount = document.querySelectorAll('.likes');

    for (let i = 0; i < likeBtn.length; i++) {
        likeBtn[i].addEventListener("click", function(e) {
            // Recovery the media id
            let mediaId = e.target.closest("article").getAttribute("data-id");
            console.log(mediaId);


            // Find the media with the same id
            let mediaLiked = myMedia.find( m => m.id == mediaId);
            console.log(mediaLiked);


            // Recovery the like count
            let mediaLikes = e.target.closest("article").getAttribute("data-likes");
            console.log(mediaLikes)


            // Set false the liked by default
            let hasClicked = false;

        
            // Add the like to the count
            const liked = mediaLikes + 1;
            console.log(liked)

        
            // For liked the photo 
            if(!hasClicked){
                likeCount.textContent = liked;
                hasClicked = true;
            }
        });
    }        
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
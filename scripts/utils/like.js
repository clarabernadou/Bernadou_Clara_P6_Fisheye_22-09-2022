function likePhoto(data){
    const likesArray = Array.from(document.querySelectorAll(".likes"))
    console.log(likesArray)

    likesArray.forEach((element) => {
        let hasClicked = false;
        let counter = data;
        const add = counter + 1;

        if(!hasClicked){
            element.textContent = add;
            hasClicked = true;
        }        
    });  
};

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
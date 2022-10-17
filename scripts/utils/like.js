function likePhoto(data){
    const likeCount = document.querySelector(".likes")
    let hasClicked = false;
    let counter = data;
    const add = counter + 1;

    if(!hasClicked){
        likeCount.textContent = add;
        hasClicked = true;
        
        console.log(likeCount);
    }
}
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
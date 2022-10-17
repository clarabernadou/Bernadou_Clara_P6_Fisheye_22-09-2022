function likePhoto(data){
    let counter = data; 
    const add = counter + 1;
    const likeCount = document.querySelector(".likes").textContent = add;
    console.log(likeCount);
}
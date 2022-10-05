export function mediaFactory(data){
    const { name, id, photographerId, title, image, likes, date, price } = data;
    const mediaPicture = `assets/images/${name}/${image}`
       
    function getMediasCardDOM(){
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const p = document.createElement( 'p' );

        img.setAttribute("src", mediaPicture);
        img.setAttribute("alt", `Image ${title} prise par ${name}`);
        h2.textContent = title;
        p.textContent = likes;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        return (article);
    }
    return { id, photographerId, title, image, likes, date, price, getMediasCardDOM }
};
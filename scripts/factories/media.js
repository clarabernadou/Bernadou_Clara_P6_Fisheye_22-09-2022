function mediaFactory(data){
    const { name, id, photographerId, title, image, likes, date, price } = data;
    const mediaPicture = `assets/images/${name}/${image}`
       
    function getMediasCardDOM(){
        const aside = document.createElement( 'aside' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const p = document.createElement( 'p' );

        img.setAttribute("src", mediaPicture);
        img.setAttribute("alt", `Image ${title} prise par ${name}`);
        h2.textContent = title;
        p.textContent = likes;

        aside.appendChild(img);
        aside.appendChild(h2);
        aside.appendChild(p);
        return (aside);
    }
    return { id, photographerId, title, image, likes, date, price, getMediasCardDOM }
};
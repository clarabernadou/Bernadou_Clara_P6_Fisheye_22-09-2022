export function mediaFactory(data) {
    const { image, title, likes } = data;
    const picture = `assets/images/${image}`;

    function getMediasCardDOM(){
        const article = document.createElement( "article" );
        const div = document.createElement( "div" );
        const img = document.createElement( "img" );
        const p = document.createElement( "p" );
        const p1 = document.createElement( "p" );

        img.setAttribute("src", picture);
        img.setAttribute("alt", `image ${title}`);
        div.setAttribute('class', 'infoMedia');
        p.textContent = title;
        p1.setAttribute('class', 'likes');
        p1.textContent = likes;

        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(p);
        div.appendChild(p1);
        return (article);
    }

    return { image, title, likes, getMediasCardDOM }
};
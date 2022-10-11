export function mediaFactory(data) {
    const { image, title, likes } = data;
    const picture = `assets/images/${image}`;

    function getMediasCardDOM(){
        const article = document.createElement( "article" );
        const div = document.createElement( "div" );
        const a = document.createElement( "a" );
        const img = document.createElement( "img" );
        const p = document.createElement( "p" );
        const p1 = document.createElement( "p" );

    // -------------------------------------------------------------------------

        // All card
        article.setAttribute("class", "article-photo");

        // Images
        a.setAttribute("href", picture);
        img.setAttribute("src", picture);

        // Photo info
        div.setAttribute('class', 'infoMedia');
        p.textContent = title;
        p1.setAttribute('class', 'likes');
        p1.textContent = likes;

    // -------------------------------------------------------------------------

        article.appendChild(a);
        a.appendChild(img);
        article.appendChild(div);
        div.appendChild(p);
        div.appendChild(p1);
        return (article);
    }

    function lightbox() {
        const lightbox = document.createElement("div");

    // -------------------------------------------------------------------------

        // Lightbox
        lightbox.setAttribute("class", "lightbox"); 

    // -------------------------------------------------------------------------
    
        return(lightbox);
    }

    return { image, title, likes, getMediasCardDOM, lightbox }
};
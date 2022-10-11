export function mediaFactory(data) {
    const { image, video, title, likes } = data;
    const picture = `assets/images/${image}`;
    const playVideo = `assets/images/${video}`

    function getMediasCardDOM(){
        const article = document.createElement( "article" );
        const div = document.createElement( "div" );
        const a = document.createElement( "a" );
        const p = document.createElement( "p" );
        const p1 = document.createElement( "p" );
        const i = document.createElement( "i" );

    // -------------------------------------------------------------------------

        // All card
        article.setAttribute("class", "article-photo");

        if(image){
            const img = document.createElement( "img" );

            a.setAttribute("href", picture);
            img.setAttribute("src", picture);
            
            a.appendChild(img);
            
        }else{
            const video = document.createElement( "video" );

            a.setAttribute("href", playVideo);
            video.setAttribute("src", playVideo);
            
            a.appendChild(video);
        }

        // Photo info
        div.setAttribute('class', 'infoMedia');
        p.textContent = title;
        p1.setAttribute('class', 'likes');
        p1.textContent = likes;
        i.setAttribute('class', 'fas fa-heart');

    // -------------------------------------------------------------------------
        article.appendChild(a);
        article.appendChild(div);
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(i);
        return (article);
    }

    function lightbox() {
        
    }

    return { image, video, title, likes, getMediasCardDOM, lightbox }
};
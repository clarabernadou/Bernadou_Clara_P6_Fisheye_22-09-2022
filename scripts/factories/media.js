export function mediaFactory(data) {
    const { image, video, title, likes, date, id } = data;
    const picture = `assets/images/${image}`;
    const playVideo = `assets/images/${video}`

    function getMediasCardDOM(){
        const article = document.createElement( "article" );
        const div = document.createElement( "div" );
        const a = document.createElement( "a" );
        const p = document.createElement( "p" );
        const div1 = document.createElement ( "div" );
        const p1 = document.createElement( "p" );
        const i = document.createElement( "i" );

    // -------------------------------------------------------------------------

        // All card
        article.setAttribute("class", "article-photo");
        article.setAttribute("data-id", id)
        a.setAttribute('onclick', 'openLightbox()')

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
        div1.setAttribute('class', 'div__likes')
        div1.setAttribute('onclick', `likePhoto(${data.likes})`);
        p1.setAttribute('class', 'likes');
        p1.textContent = likes;
        i.setAttribute('class', 'fas fa-heart');
    // -------------------------------------------------------------------------
        article.appendChild(a);
        article.appendChild(div);
        div.appendChild(p); 
        div.appendChild(div1);
        div1.appendChild(p1);
        div1.appendChild(i);
        return (article);
    }

    // Display lightbox
    function lightbox() {
        const article = document.createElement( 'article' );
        const div = document.createElement( 'div' );
        const divImgVideo = document.createElement( 'div' );
        const close = document.createElement( 'i' );
        const prev = document.createElement( 'i' );
        const next = document.createElement( 'i' );

    // -------------------------------------------------------------------------

        article.setAttribute('class', 'slide');
        close.setAttribute('class', 'fas fa-times');
        close.setAttribute('onclick', 'closeLightbox()');
        div.setAttribute('class', 'align__icon');
        prev.setAttribute('class', 'fas fa-chevron-left');
        prev.setAttribute('onclick', 'prev()')
        divImgVideo.setAttribute('class', 'img-video');

        if(image){
            const img = document.createElement( "img" );
            img.setAttribute("src", picture);
            divImgVideo.appendChild(img);
        }else{
            const video = document.createElement( "video" );
            video.setAttribute("src", playVideo);
            divImgVideo.appendChild(video);
        }

        next.setAttribute('class', 'fas fa-chevron-right');
        next.setAttribute('onclick', 'next()');

    // -------------------------------------------------------------------------

        article.appendChild(close);
        article.appendChild(div);
        div.appendChild(prev);
        div.appendChild(divImgVideo);
        div.appendChild(next);
        return(article)
    }

    function filterBtn() {
        const div = document.createElement( 'div' );
        const popularityBtn = document.createElement( 'button' );
        const dateBtn = document.createElement( 'button' );
        const titleBtn = document.createElement( 'button' );
        
    // -------------------------------------------------------------------------

        div.textContent = "Trier par ";
        popularityBtn.textContent = "Popularité";
        popularityBtn.setAttribute('class', 'popularity-btn');
        dateBtn.textContent = "Date";
        dateBtn.setAttribute('class', 'date-btn');
        titleBtn.textContent = "Titre";
        titleBtn.setAttribute('class', 'title-btn');

    // ------------------------------------------------------------------------- 

        div.appendChild(popularityBtn);
        div.appendChild(dateBtn);
        div.appendChild(titleBtn);  
        
        return(div);
    }

    return { image, video, title, likes, date, id, getMediasCardDOM, lightbox, filterBtn }
};
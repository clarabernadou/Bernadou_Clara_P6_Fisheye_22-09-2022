export function mediaFactory(data) {
    const { image, video, title, likes, date, id } = data;
    const picture = `assets/images/${image}`;
    const playVideo = `assets/images/${video}`

// DISPLAY MEDIA CARD
    function getMediasCardDOM(){
        const article = document.createElement( "article" );
        const div = document.createElement( "div" );
        const a = document.createElement( "a" );
        const p = document.createElement( "p" );
        const div1 = document.createElement ( "button" );
        const p1 = document.createElement( "p" );
        const i = document.createElement( "i" );

    // -------------------------------------------------------------------------

    // Card
        article.setAttribute("class", "article-photo");
        article.setAttribute("data-id", id);
        article.setAttribute("data-likes", likes);

    // Display image or video
        if(image){
            const img = document.createElement( "img" );
            a.setAttribute("href", picture);
            a.setAttribute("aria-label", `${title} closeup view`);
            img.setAttribute("src", picture);
            img.setAttribute("alt", `${title}`);
            a.appendChild(img);
        }else{
            const video = document.createElement( "video" );
            a.setAttribute("aria-label", `${title} closeup view`);
            a.setAttribute("href", playVideo);
            video.setAttribute("src", playVideo);
            a.appendChild(video);
        }

    // Photo info
        div.setAttribute('class', 'infoMedia');
        p.textContent = title;
        div1.setAttribute('class', 'div__likes')
        div1.setAttribute('aria-label', 'likes')
        p1.setAttribute('class', 'likes');
        p1.textContent = likes;
        i.setAttribute('class', 'fas fa-heart');

    // -------------------------------------------------------------------------

    // Display card
        article.appendChild(a);
        article.appendChild(div);
        div.appendChild(p); 
        div.appendChild(div1);
        div1.appendChild(p1);
        div1.appendChild(i);
        return (article);
    }

// DISPLAY LIGHTBOX
    function lightbox() {
        const article = document.createElement( 'article' );
        const div = document.createElement( 'div' );
        const divImgVideo = document.createElement( 'div' );
        const close = document.createElement( 'i' );
        const prev = document.createElement( 'i' );
        const next = document.createElement( 'i' );
        const h2 = document.createElement( 'h2' );

    // -------------------------------------------------------------------------

    // Lightbox
        article.setAttribute('class', 'slide');

    // Close button
        close.setAttribute('class', 'fas fa-times');
        close.setAttribute('aria-label', 'Close dialog');

    // Icon div
        div.setAttribute('class', 'align__icon');

    // Prev button
        prev.setAttribute('class', 'fas fa-chevron-left');
        prev.setAttribute('aria-label', 'Previous image');

    // Display image or video
        divImgVideo.setAttribute('class', 'img-video');
        if(image){
            const img = document.createElement( "img" );
            img.setAttribute("src", picture);
            img.setAttribute("alt", `${title}`);
            divImgVideo.appendChild(img);
        }else{
            const video = document.createElement( "video" );
            video.setAttribute("src", playVideo);
            video.toggleAttribute("controls");
            divImgVideo.appendChild(video);
        }

    // Next button
        next.setAttribute('class', 'fas fa-chevron-right');
        next.setAttribute('aria-label', 'Next image');

    // Media title
        h2.textContent = title;

    // -------------------------------------------------------------------------

        article.appendChild(close);
        article.appendChild(div);
        div.appendChild(prev);
        div.appendChild(divImgVideo);
        divImgVideo.appendChild(h2);
        div.appendChild(next);

        return(article)
    }

// CHANGE MEDIA TO PREV/NEXT
    function lightboxMedia() {
        const divImgVideo = document.createElement( 'div' );
        const h2 = document.createElement( 'h2' );
    
    // -------------------------------------------------------------------------

    // Display image or video
        divImgVideo.setAttribute('class', 'img-video');
        if(image){
            const img = document.createElement( "img" );
            img.setAttribute("src", picture);
            img.setAttribute("alt", `${title}`);
            divImgVideo.appendChild(img);
        }else{
            const video = document.createElement( "video" );
            video.setAttribute("src", playVideo);
            video.toggleAttribute("controls");
            video.setAttribute("alt", `${title}`);
            divImgVideo.appendChild(video);
        }

    // Media title
        h2.textContent = title;

    // -------------------------------------------------------------------------

        divImgVideo.appendChild(h2);

        return(divImgVideo);
    }  

// FILTER BUTTON
    function filterBtn() {
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        const divBtnTxt = document.createElement ( 'div' );
        const title = document.createElement( 'button' );
        const divBtn = document.createElement( 'div' );
        const popularityBtn = document.createElement( 'button' );
        const hr = document.createElement( 'hr' );
        const dateBtn = document.createElement( 'button' );
        const hr2 = document.createElement( 'hr' );
        const titleBtn = document.createElement( 'button' );
        const iconDown = document.createElement( 'i' );
        const iconUp = document.createElement( 'i' );
        const divIcon = document.createElement( 'div' );
        const divIconBtn = document.createElement( 'div' );
        
    // -------------------------------------------------------------------------

    // Button
        p.textContent = "Trier par";
        div.setAttribute('class', 'div-all');
        divBtnTxt.setAttribute('class', 'div-btn-txt');
        divBtnTxt.setAttribute('aria-label', 'Order by'); 

    // Not filter medias
        title.textContent = "Toutes les photos";
        title.setAttribute('class', 'title-all')

    // Popularity medias
        divBtn.setAttribute('class', 'filter-btn');
        popularityBtn.textContent = "Popularité";
        popularityBtn.setAttribute('class', 'popularity-btn');

    // Date medias
        dateBtn.textContent = "Date";
        dateBtn.setAttribute('class', 'date-btn');

    // Title medias
        titleBtn.textContent = "Titre";
        titleBtn.setAttribute('class', 'title-btn');

    // Icons
        divIcon.setAttribute('class', 'divIcon');
        divIconBtn.setAttribute('class', 'divIconBtn');
        iconDown.setAttribute('class', 'fas fa-chevron-down');
        iconUp.setAttribute('class', 'fas fa-chevron-up');
        
    // ------------------------------------------------------------------------- 

        div.appendChild(p);
        div.appendChild(divBtnTxt);
        divBtnTxt.appendChild(divIcon);
        divIcon.appendChild(title);
        divIcon.appendChild(iconDown);
        divBtnTxt.appendChild(divBtn);
        divBtn.appendChild(divIconBtn);
        divIconBtn.appendChild(popularityBtn);
        divIconBtn.appendChild(iconUp);
        divBtn.appendChild(hr);
        divBtn.appendChild(dateBtn);
        divBtn.appendChild(hr2);
        divBtn.appendChild(titleBtn);

        return(div);
    }

    return { image, video, title, likes, date, id, getMediasCardDOM, lightbox, lightboxMedia, filterBtn }
};
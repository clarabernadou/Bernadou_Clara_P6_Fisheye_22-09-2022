export function mediaFactory(dataMedia) {
    const { img, title, likes } = dataMedia;

    function getMediasCardDOM(){
        const article = document.createElement( "article" );
        const div = document.createElement( "div" );
        const img = document.createElement( "img" );
        const p = document.createElement( "p" );
        const p1 = document.createElement( "p" );

        div.setAttribute('class', 'infoMedia');
        p.textContent = "Voici une description en attendant";
        p1.setAttribute('class', 'likes');
        p1.textContent = 13;

        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(p);
        div.appendChild(p1);
        return (article);
    }

    return { img, title, likes, getMediasCardDOM }
};
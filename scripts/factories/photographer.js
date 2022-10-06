export function photographerFactory(data) {
    const { name, portrait, tagline, city, price, country, id } = data;
    const picture = `assets/photographers/${portrait}`;

    // Display photographers card in main page
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement( 'h4' );
        const p = document.createElement( 'p' );
        const a = document.createElement( 'a' );

    // -------------------------------------------------------------------------
        
        a.setAttribute("href", "/photographer.html"+"?"+`id=${id}`)
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo du photographe ${name}`)
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        h4.textContent = tagline;
        p.textContent = price + "€/jour";

    // -------------------------------------------------------------------------

        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4)
        article.appendChild(p);
        return (a);
    }

    // Display photograph header in photograph page
    function getPhotographCardDOM() {
        const aside = document.createElement( 'aside' );
        const section = document.createElement( 'section' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement( 'h4' );
        const sectionBtn = document.createElement( 'section' );
        const btn = document.createElement( 'button' );
        const sectionImg = document.createElement( 'section' );
        const img = document.createElement( 'img' );

    // -------------------------------------------------------------------------

        // Section text
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        h4.textContent = tagline;
        
        // Section btn
        btn.textContent = "Contactez-moi";
        btn.setAttribute("class", "contact_button");
        btn.setAttribute("onclick", "displayModal()");
        btn.setAttribute("aria-label", "Envoyer un message");

        // Section Img
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo du photographe ${name}`);
        
    // -------------------------------------------------------------------------

        // Display text
        aside.appendChild(section);
        section.appendChild(h2);
        section.appendChild(h3);
        section.appendChild(h4); 

        // Display btn
        aside.appendChild(sectionBtn);
        sectionBtn.appendChild(btn);

        // Display Img
        aside.appendChild(sectionImg);
        sectionImg.appendChild(img);
        return (aside);
    }
    
    function getFrameDOM() {
        

        const aside = document.createElement( 'aside' );
        const p = document.createElement( 'p' );
        const i = document.createElement( 'icon' )

    // -------------------------------------------------------------------------

        aside.setAttribute('class', 'frame')
        p.textContent = price + "€/jour";

    // -------------------------------------------------------------------------
    
        aside.appendChild(p);
        return (aside);
    }

    // Display name in form contact
    function getNameContact() {
        const h2 = document.createElement( 'h2' );

        h2.textContent = "Contactez-moi " + name;

        return(h2);
    }

    return { name, picture, city, tagline, price, country, id, getUserCardDOM, getPhotographCardDOM, getFrameDOM, getNameContact }
};
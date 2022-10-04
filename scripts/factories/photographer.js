export function photographerFactory(data) {
    const { name, portrait, tagline, city, price, country, id, likes } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement( 'h4' );
        const p = document.createElement( 'p' );
        const a = document.createElement( 'a' );
        
        a.setAttribute("href", "/photographer.html"+"?"+`id=${id}`)
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo du photographe ${name}`)
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        h4.textContent = tagline;
        p.textContent = price + "€/jour";

        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4)
        article.appendChild(p);
        return (a);
    }

    function getPhotographCardDOM() {
        const aside = document.createElement( 'aside' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement( 'h4' );

        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo du photographe ${name}`);
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        h4.textContent = tagline;

        aside.appendChild(img);
        aside.appendChild(h2);
        aside.appendChild(h3);
        aside.appendChild(h4);
        return (aside);
    }

    function getFrameDOM() {
        const aside = document.createElement( 'aside' );
        const p = document.createElement( 'p' );
        const p1 = document.createElement( 'p' );

        p.textContent = price + "€/jour";
        p1.textContent = likes + "icon";

        aside.appendChild(p);
        aside.appendChild(p1);
        return (aside);
    }

    return { name, picture, city, tagline, price, country, id, getUserCardDOM, getPhotographCardDOM, getFrameDOM }
};
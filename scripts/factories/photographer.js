function photographerFactory(data) {
    const { name, portrait, tagline, city, price, country, id } = data;

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
    return { name, picture, city, tagline, price, country, id, getUserCardDOM }
};


function popularity(myMedia){
    const photographGallery = document.querySelector(".photograph-gallery");
    let popularityFilter = myMedia.sort((l1, l2) => (l1.likes < l2.likes) ? 1 : (l1.likes > l2.likes) ? -1 : 0);

    popularityFilter.forEach((popularityFilter) => {
        const mediaModel = mediaFactory(popularityFilter);
        const mediaCardDOM = mediaModel.getMediasCardDOM();
        photographGallery.appendChild(mediaCardDOM);
    });
};

function date(){
    const photographGallery = document.querySelector(".photograph-gallery");
    let dateFilter = myMedia.sort((d1, d2) => (d1.date < d2.date) ? 1 : (d1.date > d2.date) ? -1 : 0);

    dateFilter.forEach((dateFilter) => {
        const mediaModel = mediaFactory(dateFilter);
        const mediaCardDOM = mediaModel.getMediasCardDOM();
        photographGallery.appendChild(mediaCardDOM);
    });
};

function title(){
    const photographGallery = document.querySelector(".photograph-gallery");
    let titleFilter = myMedia.sort((t1, t2) => (t1.title > t2.title) ? 1 : (t1.title < t2.title) ? -1 : 0);

    titleFilter.forEach((titleFilter) => {
        const mediaModel = mediaFactory(titleFilter);
        const mediaCardDOM = mediaModel.getMediasCardDOM();
        photographGallery.appendChild(mediaCardDOM);
    });
};
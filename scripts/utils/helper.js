// Recovery photographers data
export async function getPhotographers() {
    let jsonFile = "../../data/photographers.json";
    let response = await fetch(jsonFile);
    return await response.json();
}

export async function init(){
    let urlData = new URLSearchParams(window.location.search)
    const photographerId = urlData.get("id");
    const { photographers, media } = await getPhotographers();
    let photographer = photographers.find(p => p.id == photographerId);
    myMedia = media.filter(m => m.photographerId == photographerId);
}
// Recovery photographers data
export async function getPhotographers() {
    let jsonFile = "../../data/photographers.json";
    let response = await fetch(jsonFile);
    return await response.json();
}
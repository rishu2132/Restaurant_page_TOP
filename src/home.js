import biryani from "./images/biryani.jpg"
export function initialLoader(){
    const content = document.querySelector("#content");

    const heading = document.createElement("h2");
    heading.innerText = "Hunter Biryani";

    content.append(heading);

    const image = document.createElement("img");
    image.src = biryani;
    content.append(image);

    const detail = document.createElement("p");
    detail.innerText= "This is great place for having hyderabadi biryani in muzaffarpur, although it is far from my place it is still worth it.";

    content.append(detail);
 }
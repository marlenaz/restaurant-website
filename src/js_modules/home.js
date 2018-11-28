const renderHome = () => {

    const subjectDiv = document.getElementById("subject");

    const subTextcontent = document.createElement("div");
    subjectDiv.appendChild(subTextcontent);
    subTextcontent.setAttribute("class", "textcontent");

        const subContentTitle = document.createElement("div");
        subTextcontent.appendChild(subContentTitle);
        subContentTitle.setAttribute("class", "contenttitle");
        subContentTitle.innerHTML = `<div class="welcome">Learn</div>
        <div class="name">Our story</div>
        <div id="asterisk" class="content">*</div>`

        const subText = document.createElement("div");
        subTextcontent.appendChild(subText);
        subText.setAttribute("class", "text");
        subText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ex venenatis, facilisis sapien vitae, gravida massa. Aliquam fermentum at mi et accumsan. Phasellus blandit urna eget mauris condimentum pellentesque non sed diam. In tellus nibh, ultrices eu quam vel, sagittis scelerisque tellus. Quisque eleifend porttitor purus, nec hendrerit erat luctus a. Suspendisse quis urna eget est iaculis vehicula. Vestibulum ultrices ipsum in ultricies accumsan. Vivamus ut vehicula ligula, nec interdum metus. Sed in nulla a enim commodo finibus."

    const subFotocontent = document.createElement("div");
    subjectDiv.appendChild(subFotocontent);
    subFotocontent.setAttribute("class", "fotocontent");

        const fotoA = document.createElement("div");
        subFotocontent.appendChild(fotoA);
        fotoA.setAttribute("class", "foto");
        fotoA.innerHTML = `<img src="./images/brooke-lark-194252.jpg" alt="Meal" />`

        const fotoB = document.createElement("div");
        subFotocontent.appendChild(fotoB);
        fotoB.setAttribute("class", "foto");
        fotoB.innerHTML = `<img src="./images/taylor-kiser-373479-unsplash.jpg" alt="Meal" />`
}

export {renderHome}

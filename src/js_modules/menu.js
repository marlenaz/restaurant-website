const renderMenu = () => {

    const subjectDiv = document.getElementById("subject");

    const fotoMenu = document.createElement("div");
    subjectDiv.appendChild(fotoMenu);
    fotoMenu.setAttribute("class", "fotocontent foto-menu");

        const menuFoto1 = document.createElement("div");
        fotoMenu.appendChild(menuFoto1);
        menuFoto1.setAttribute("class", "foto menu");
        menuFoto1.innerHTML = `<img src="./images/joseph-gonzalez.jpg" alt="Meal">`;

        const menuFoto2 = document.createElement("div");
        fotoMenu.appendChild(menuFoto2);
        menuFoto2.setAttribute("class", "foto menu");
        menuFoto2.innerHTML = `<img src="./images/daniel-apodaca.jpg" alt="Meal">`;

        const menuFoto3 = document.createElement("div");
        fotoMenu.appendChild(menuFoto3);
        menuFoto3.setAttribute("class", "foto menu");
        menuFoto3.innerHTML = `<img src="./images/charles-deluvio.jpg" alt="Meal">`;

        const menuFoto4 = document.createElement("div");
        fotoMenu.appendChild(menuFoto4);
        menuFoto4.setAttribute("class", "foto menu");
        menuFoto4.innerHTML = `<img src="./images/ting-tian.jpg" alt="Meal">`;

    const textMenu = document.createElement("div");
    subjectDiv.appendChild(textMenu);
    textMenu.setAttribute("class", "textcontent text-menu");

        const menuTitle = document.createElement("div");
        textMenu.appendChild(menuTitle);
        menuTitle.setAttribute("class", "contenttitle");
        menuTitle.innerHTML = `<div class="welcome">Discover</div>
          <div class="name">Menu</div>
          <div id="asterisk" class="content">*</div>`

        const menuText = document.createElement("div");
        textMenu.appendChild(menuText);
        menuText.setAttribute("class", "text");
        menuText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ex venenatis, facilisis sapien vitae, gravida massa. Aliquam fermentum at mi et accumsan. Phasellus blandit urna eget mauris condimentum pellentesque non sed diam. In tellus nibh, ultrices eu quam vel, sagittis scelerisque tellus. Quisque eleifend porttitor purus, nec hendrerit erat luctus a. Suspendisse quis urna eget est iaculis vehicula. Vestibulum ultrices ipsum in ultricies accumsan. Vivamus ut vehicula ligula, nec interdum metus. Sed in nulla a enim commodo finibus."

        const menuLink = document.createElement("a");
        textMenu.appendChild(menuLink);
        menuLink.textContent = "Wiew the full menu";
}

export {renderMenu}

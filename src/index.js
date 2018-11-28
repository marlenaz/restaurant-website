import * as Home from './js_modules/home.js'
import * as Menu from './js_modules/menu.js'
import * as Contact from './js_modules/contact.js'

const initialPage = (() => {

    const contentDiv = document.getElementById("content");

//MAIN DIVS//

        const headerDiv = document.createElement("div");
        contentDiv.appendChild(headerDiv);
        headerDiv.setAttribute("id", "header");

        const subjectDiv = document.createElement("div");
        contentDiv.appendChild(subjectDiv);
        subjectDiv.setAttribute("id", "subject");

        const footerDiv = document.createElement("div");
        contentDiv.appendChild(footerDiv);
        footerDiv.setAttribute("id", "footer");

//HEADER CONTENT//

        const titleDiv = document.createElement("div");
        headerDiv.appendChild(titleDiv);
        titleDiv.setAttribute("class", "title");
        //TITLE DIV CONTENT//
            const titleWelcome = document.createElement("div");
            titleDiv.appendChild(titleWelcome);
            titleWelcome.setAttribute("class", "welcome");
            titleWelcome.textContent = "Welcome";

            const titleName = document.createElement("div");
            titleDiv.appendChild(titleName);
            titleName.setAttribute("class", "name");
            titleName.textContent = "XXX Restaurant";

            const titleSeparator = document.createElement("div");
            titleDiv.appendChild(titleSeparator);
            titleSeparator.setAttribute("class", "separator");
            titleSeparator.innerHTML = `----------------<span id="asterisk">*</span>----------------`;

            const titleSubtext = document.createElement("div");
            titleDiv.appendChild(titleSubtext);
            titleSubtext.setAttribute("class", "subtext");
            titleSubtext.textContent = "the greatest restaurant";

        const navBar = document.createElement("nav");
        headerDiv.appendChild(navBar);
        //NAV CONTENT//
            const navDiv = document.createElement("div");
            navBar.appendChild(navDiv);
            navDiv.innerHTML = `<ul>
              <li class="navigation" id="home">Home</li>
              <li class="navigation" id="menu">Menu</li>
              <li class="navigation" id="contact">Contact</li>
            </ul>`

//LOAD SUBJECT CONTENT//

      Home.renderHome();

//FOOTER CONTENT//

      const footerTitle = document.createElement("div");
      footerDiv.appendChild(footerTitle);
      footerTitle.setAttribute("class", "title");
      //FOOTER TITLE CONTENT//
          const footerWelcome = document.createElement("div");
          footerTitle.appendChild(footerWelcome);
          footerWelcome.setAttribute("class", "welcome");
          footerWelcome.textContent = "Visit us";

          const footerName = document.createElement("div");
          footerTitle.appendChild(footerName);
          footerName.setAttribute("class", "name");
          footerName.textContent = "Enjoy our dishes";

})();

const tabChange = (() => {

      const subjectDiv = document.getElementById("subject");
      const homeNav = document.getElementById("home");
      const menuNav = document.getElementById("menu");
      const contactNav = document.getElementById("contact");

      const deleteContent = () => {
          while (subjectDiv.firstChild) {
                subjectDiv.removeChild(subjectDiv.firstChild);
              }
      };

      homeNav.addEventListener("click", () => {
          deleteContent();
          Home.renderHome();
      });

      menuNav.addEventListener("click", () => {
          deleteContent();
          Menu.renderMenu();
      });

      contactNav.addEventListener("click", () => {
          deleteContent();
          Contact.renderContact();
      });

})();

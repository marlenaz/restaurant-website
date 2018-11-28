const renderContact = () => {

      const subjectDiv = document.getElementById("subject");

      const fotoContact = document.createElement("div");
      subjectDiv.appendChild(fotoContact);
      fotoContact.setAttribute("class", "foto-contact");

          const fotoContactDiv = document.createElement("div");
          fotoContact.appendChild(fotoContactDiv);
          fotoContactDiv.innerHTML = `<img src="./images/vishwas-katti.jpg" alt="Meal">`;

      const textContact = document.createElement("div");
      subjectDiv.appendChild(textContact);
      textContact.setAttribute("class", "textcontent text-contact");

          const titleContact = document.createElement("div");
          textContact.appendChild(titleContact);
          titleContact.setAttribute("class", "contact-title");
          titleContact.innerHTML = `<div class="welcome">Contact</div>
            <div class="name">Us</div>
            <div id="asterisk" class="content">*</div>`;

          const contactText = document.createElement("div");
          textContact.appendChild(contactText);
          contactText.setAttribute("class", "text");
          contactText.innerHTML = `<p>100 Pizza Square,</p>
            <p>Culinary Town, 84955</p>
            <p id="mail">info@restaurant.com</p>
            <p>Tel: 123 456 789</p>
            <p id="opening">OPENING HOURS</p>
            <p>Mon - Fr: 8am - 11pm</p>
            <p>Saturday: 9am - 12pm</p>
            <p>Sunday: 10am - 11pm</p>`;

      const mapContact = document.createElement("div");
      subjectDiv.appendChild(mapContact);
      mapContact.setAttribute("id", "map");
      mapContact.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11887.629006771509!2d12.557990140428332!3d41.851823100877375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132589d0522a5763%3A0xabfc6b20c046af5a!2s00174+Cinecitta+Rzym%2C+W%C5%82ochy!5e0!3m2!1spl!2spl!4v1543231203477" width="500" height="363" frameborder="0" allowfullscreen></iframe>`;
}

export {renderContact}

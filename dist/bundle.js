!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=()=>{const e=document.getElementById("subject"),t=document.createElement("div");e.appendChild(t),t.setAttribute("class","textcontent");const n=document.createElement("div");t.appendChild(n),n.setAttribute("class","contenttitle"),n.innerHTML='<div class="welcome">Learn</div>\n        <div class="name">Our story</div>\n        <div id="asterisk" class="content">*</div>';const i=document.createElement("div");t.appendChild(i),i.setAttribute("class","text"),i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ex venenatis, facilisis sapien vitae, gravida massa. Aliquam fermentum at mi et accumsan. Phasellus blandit urna eget mauris condimentum pellentesque non sed diam. In tellus nibh, ultrices eu quam vel, sagittis scelerisque tellus. Quisque eleifend porttitor purus, nec hendrerit erat luctus a. Suspendisse quis urna eget est iaculis vehicula. Vestibulum ultrices ipsum in ultricies accumsan. Vivamus ut vehicula ligula, nec interdum metus. Sed in nulla a enim commodo finibus.";const s=document.createElement("div");e.appendChild(s),s.setAttribute("class","fotocontent");const a=document.createElement("div");s.appendChild(a),a.setAttribute("class","foto"),a.innerHTML='<img src="./images/brooke-lark-194252.jpg" alt="Meal" />';const c=document.createElement("div");s.appendChild(c),c.setAttribute("class","foto"),c.innerHTML='<img src="./images/taylor-kiser-373479-unsplash.jpg" alt="Meal" />'};(()=>{const e=document.getElementById("content"),t=document.createElement("div");e.appendChild(t),t.setAttribute("id","header");const n=document.createElement("div");e.appendChild(n),n.setAttribute("id","subject");const s=document.createElement("div");e.appendChild(s),s.setAttribute("id","footer");const a=document.createElement("div");t.appendChild(a),a.setAttribute("class","title");const c=document.createElement("div");a.appendChild(c),c.setAttribute("class","welcome"),c.textContent="Welcome";const l=document.createElement("div");a.appendChild(l),l.setAttribute("class","name"),l.textContent="XXX Restaurant";const d=document.createElement("div");a.appendChild(d),d.setAttribute("class","separator"),d.innerHTML='----------------<span id="asterisk">*</span>----------------';const o=document.createElement("div");a.appendChild(o),o.setAttribute("class","subtext"),o.textContent="the greatest restaurant";const u=document.createElement("nav");t.appendChild(u);const r=document.createElement("div");u.appendChild(r),r.innerHTML='<ul>\n              <li class="navigation" id="home">Home</li>\n              <li class="navigation" id="menu">Menu</li>\n              <li class="navigation" id="contact">Contact</li>\n            </ul>',i();const m=document.createElement("div");s.appendChild(m),m.setAttribute("class","title");const p=document.createElement("div");m.appendChild(p),p.setAttribute("class","welcome"),p.textContent="Visit us";const v=document.createElement("div");m.appendChild(v),v.setAttribute("class","name"),v.textContent="Enjoy our dishes"})(),(()=>{const e=document.getElementById("subject"),t=document.getElementById("home"),n=document.getElementById("menu"),s=document.getElementById("contact"),a=()=>{for(;e.firstChild;)e.removeChild(e.firstChild)};t.addEventListener("click",()=>{a(),i()}),n.addEventListener("click",()=>{a(),(()=>{const e=document.getElementById("subject"),t=document.createElement("div");e.appendChild(t),t.setAttribute("class","fotocontent foto-menu");const n=document.createElement("div");t.appendChild(n),n.setAttribute("class","foto menu"),n.innerHTML='<img src="./images/joseph-gonzalez.jpg" alt="Meal">';const i=document.createElement("div");t.appendChild(i),i.setAttribute("class","foto menu"),i.innerHTML='<img src="./images/daniel-apodaca.jpg" alt="Meal">';const s=document.createElement("div");t.appendChild(s),s.setAttribute("class","foto menu"),s.innerHTML='<img src="./images/charles-deluvio.jpg" alt="Meal">';const a=document.createElement("div");t.appendChild(a),a.setAttribute("class","foto menu"),a.innerHTML='<img src="./images/ting-tian.jpg" alt="Meal">';const c=document.createElement("div");e.appendChild(c),c.setAttribute("class","textcontent text-menu");const l=document.createElement("div");c.appendChild(l),l.setAttribute("class","contenttitle"),l.innerHTML='<div class="welcome">Discover</div>\n          <div class="name">Menu</div>\n          <div id="asterisk" class="content">*</div>';const d=document.createElement("div");c.appendChild(d),d.setAttribute("class","text"),d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ex venenatis, facilisis sapien vitae, gravida massa. Aliquam fermentum at mi et accumsan. Phasellus blandit urna eget mauris condimentum pellentesque non sed diam. In tellus nibh, ultrices eu quam vel, sagittis scelerisque tellus. Quisque eleifend porttitor purus, nec hendrerit erat luctus a. Suspendisse quis urna eget est iaculis vehicula. Vestibulum ultrices ipsum in ultricies accumsan. Vivamus ut vehicula ligula, nec interdum metus. Sed in nulla a enim commodo finibus.";const o=document.createElement("a");c.appendChild(o),o.textContent="Wiew the full menu"})()}),s.addEventListener("click",()=>{a(),(()=>{const e=document.getElementById("subject"),t=document.createElement("div");e.appendChild(t),t.setAttribute("class","foto-contact");const n=document.createElement("div");t.appendChild(n),n.innerHTML='<img src="./images/vishwas-katti.jpg" alt="Meal">';const i=document.createElement("div");e.appendChild(i),i.setAttribute("class","textcontent text-contact");const s=document.createElement("div");i.appendChild(s),s.setAttribute("class","contact-title"),s.innerHTML='<div class="welcome">Contact</div>\n            <div class="name">Us</div>\n            <div id="asterisk" class="content">*</div>';const a=document.createElement("div");i.appendChild(a),a.setAttribute("class","text"),a.innerHTML='<p>100 Pizza Square,</p>\n            <p>Culinary Town, 84955</p>\n            <p id="mail">info@restaurant.com</p>\n            <p>Tel: 123 456 789</p>\n            <p id="opening">OPENING HOURS</p>\n            <p>Mon - Fr: 8am - 11pm</p>\n            <p>Saturday: 9am - 12pm</p>\n            <p>Sunday: 10am - 11pm</p>';const c=document.createElement("div");e.appendChild(c),c.setAttribute("id","map"),c.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11887.629006771509!2d12.557990140428332!3d41.851823100877375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132589d0522a5763%3A0xabfc6b20c046af5a!2s00174+Cinecitta+Rzym%2C+W%C5%82ochy!5e0!3m2!1spl!2spl!4v1543231203477" width="500" height="363" frameborder="0" allowfullscreen></iframe>'})()})})()}]);
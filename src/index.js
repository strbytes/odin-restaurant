import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js';

const content = document.querySelector("#content");

const createNavBar = function() {
  const navBar = document.createElement("div");
  navBar.id = "navbar";
  const navList = document.createElement("ul");

  for (let menuItem of ["Home", "Menu", "Contact"]) {
    let listItem = document.createElement("li");
    listItem.textContent = menuItem;
    listItem.id = menuItem;
    navList.appendChild(listItem);

    listItem.addEventListener("click", _ => {
      switch (_.target.id) {
        case "Home":
          page = createHomePage();
          break;
        case "Menu":
          page = createMenuPage();
          break;
        case "Contact":
          page = createContactPage();
          break;
      }
      content.removeChild(content.lastChild)
      content.appendChild(page);
    })
  }

  navBar.appendChild(navList);
  content.appendChild(navBar);
}()

let page = createHomePage();
content.appendChild(page);


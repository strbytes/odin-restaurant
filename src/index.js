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
          pageContents = createHomePage();
          break;
        case "Menu":
          pageContents = createMenuPage();
          break;
        case "Contact":
          pageContents = createContactPage();
          break;
      }
      page.removeChild(page.lastChild)
      page.appendChild(pageContents);
    })
  }

  navBar.appendChild(navList);
  content.appendChild(navBar);
}()

const page = document.createElement("div");
page.id = "page";
let pageContents = createHomePage();
page.appendChild(pageContents);
content.appendChild(page);


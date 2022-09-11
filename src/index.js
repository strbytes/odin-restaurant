const content = document.querySelector("#content");

const createNavBar = function() {
  const navBar = document.createElement("div");
  navBar.id = "navbar";
  const navList = document.createElement("ul");

  for (menuItem of ["Main", "Menu", "Contact"]) {
    const listItem = document.createElement("li");
    listItem.textContent = menuItem;
    navList.appendChild(listItem);

    listItem.addEventListener("click", _ => {
      console.log(_.target.textContent);
    })
  }

  navBar.appendChild(navList);
  content.appendChild(navBar);
}()


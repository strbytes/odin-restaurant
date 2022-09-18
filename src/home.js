import restaurant from './restaurante.jpg';

const createHomePage = function() {
  const page = document.createElement("div");
  page.id = "home";

  const name = document.createElement("h1");
  name.textContent = "Rrrestaurante!!"
  page.appendChild(name);

  const address1 = document.createElement("p");
  address1.textContent = "100 One Hundred Road";
  page.appendChild(address1);

  const address2 = document.createElement("p");
  address2.textContent = "East Hairsville, GA 10001";
  page.appendChild(address2);
  
  const image = new Image();
  image.src = restaurant;
  page.appendChild(image);

  return page;
}

export default createHomePage;


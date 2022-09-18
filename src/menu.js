import burger from './burger.jpeg';
import hotdog from './hotdog.jpeg';
import tacos from './tacos.jpeg';
import beer from './beer.jpeg';

function MenuItem(name, desc, price, image) {
  return {
    "name": name,
    "desc": desc,
    "price": price,
    "image": image,
    "makeCard": function() {
      const card = document.createElement("div");
      card.classList.add("card");
      const text = document.createElement("div");
      card.appendChild(text);
      const header = document.createElement("h3");
      header.textContent = name;
      text.appendChild(header);
      const descNode = document.createElement("p");
      descNode.textContent = desc;
      text.appendChild(descNode);
      const priceNode = document.createElement("h4");
      priceNode.textContent = "$" + price;
      text.appendChild(priceNode);
      const imageNode = new Image();
      imageNode.src = image;
      card.appendChild(imageNode);
      
      return card;
    }
  }
}

const Menu = [
  MenuItem("Burger", "A big burger", 12, burger),
  MenuItem("Hot Dog", "A big hot dog", 13, hotdog),
  MenuItem("Tacos", "A big plate of tacos", 22, tacos),
  MenuItem("Beer", "A big mug of beer", 5, beer),
]

const createMenuPage = function() {
  const page = document.createElement("div");
  page.id = "menu";
  
  for (let item of Menu) {
    page.appendChild(item.makeCard());
  }
  return page;
}

export default createMenuPage;


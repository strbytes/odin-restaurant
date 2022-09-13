function MenuItem(name, desc, price, image) {
  return {
    "name": name,
    "desc": desc,
    "price": price,
    "image": image,
    "makeCard": function() {
      const card = document.createElement("div");
      card.classList.add("card");
      const header = document.createElement("h3");
      header.textContent = name;
      card.appendChild(header);
      const descNode = document.createElement("p");
      descNode.textContent = desc;
      card.appendChild(descNode);
      const priceNode = document.createElement("h4");
      priceNode.textContent = "$" + price;
      card.appendChild(priceNode);
      const imageNode = new Image();
      imageNode.src = image;
      card.appendChild(imageNode);
      
      return card;
    }
  }
}

const Menu = [
  MenuItem("Pastrami", "A big ole plate of pastramis", 12, 'pastrami.jpg'),
  MenuItem("Salami", "A big ole plate of salamis", 13, 'salami.jpg'),
  MenuItem("Taco Miami", "A big ole plate of taco Miamis", 22, 'tacomiami.jpg'),
  MenuItem("Beer", "Beer", 5, 'beer.jpg'),
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


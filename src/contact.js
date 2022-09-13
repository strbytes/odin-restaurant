const createContactPage = function() {
  const page = document.createElement("div");
  page.id = "contact";
  
  const form = document.createElement("form");
  // form.method = "post";
  page.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.textContent = "Name: ";
  const nameInput = document.createElement("input");
  nameInput.id = "name";
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);

  const messageLabel = document.createElement("label");
  messageLabel.htmlFor = "message";
  messageLabel.textContent = "Message: ";
  const messageInput = document.createElement("textarea");
  messageInput.id = "message";
  messageLabel.appendChild(messageInput);
  form.appendChild(messageLabel);
  
  const button = document.createElement("button");
  button.textContent = "Submit";
  form.appendChild(button);

  return page;
}

export default createContactPage;


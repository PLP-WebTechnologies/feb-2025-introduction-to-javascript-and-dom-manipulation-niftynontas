// Changes text content dynamically
function changeText() {
    document.getElementById("message").textContent = "The text has been changed using JavaScript!";
  }
  
  // Modifies CSS styles via JavaScript
  function changeStyle() {
    const message = document.getElementById("message");
    message.style.color = "purple";
    message.style.fontSize = "20px";
    message.classList.toggle("highlight");
  }
  
  // Adds a new element to the DOM
  function addElement() {
    const newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph added dynamically.";
    newPara.id = "new-paragraph";
    document.getElementById("dynamic-area").appendChild(newPara);
  }
  
  // Removes the newly added element
  function removeElement() {
    const para = document.getElementById("new-paragraph");
    if (para) {
      para.remove();
    }
  }
  
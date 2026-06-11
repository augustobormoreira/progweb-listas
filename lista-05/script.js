function addItemToList() {
  const item = document.querySelector("#target_item");
  const list = document.querySelector("#list");

  if (item.value) {
    const newItem = document.createElement("li");
    newItem.classList.add("target-list-item");

    const itemText = document.createElement("span");
    itemText.textContent = item.value;

    const deleteItem = document.createElement("button");
    deleteItem.classList.add("delete-list-item");
    deleteItem.textContent = "X";
    deleteItem.onclick = function () {
      newItem.remove();
    };

    newItem.appendChild(itemText);
    newItem.appendChild(deleteItem);
    list.appendChild(newItem);
  }
}

// Exercicio 1

problem_1_flag = false;

function alterTitleAndParagraph() {
  const p = document.querySelector("#target_text");
  const title = document.querySelector("#target_title");
  if (!problem_1_flag) {
    p.textContent = "Exercicio 1 da Lista 04 com texto alterado!!!";
    title.textContent = "Exercicio 1 da Lista 04!!!";
    problem_1_flag = true;
  } else {
    title.textContent = "Exercicio 1";
    p.textContent = "Lorem Ipsum Dolor";
    problem_1_flag = false;
  }
}

//Exercicio 2

function changeBlockCss() {
  const block = document.querySelector("#block");
  block.classList.toggle("isSelected");
}

//Exercicio 3

function addItemToList() {
  const list_item = document.querySelector("#target_list_item");
  const list = document.querySelector("#target_list");
  if (list_item.value) {
    const new_list_item = document.createElement("li");
    new_list_item.textContent = list_item.value;
    list.appendChild(new_list_item);
  } else {
    alert("Item da lista esta vazio!!");
  }
}

/* Exercicio 4 */

function incrementCounter() {
  const counter = document.querySelector("#target_counter");
  let counter_as_number = parseInt(counter.textContent);
  counter_as_number++;
  counter.textContent = counter_as_number;
}

function decrementCounter() {
  const counter = document.querySelector("#target_counter");
  let counter_as_number = parseInt(counter.textContent);

  counter_as_number--;

  if (counter_as_number < 0) {
    alert("O número não abaixa além de zero!!!");
    counter_as_number = 0;
  }

  counter.textContent = counter_as_number;
}

/* Exercicio 5 */

function changeSelected(card) {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((current_card) => {
      current_card.classList.remove("isFeatured");
  });
  card.classList.add("isFeatured")
}

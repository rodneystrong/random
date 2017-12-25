var todos = ["get tall", "get smart", "get happy"];

var input = prompt("what you wanna do");

//if input is 'list' then list all the Todos
while (input !== "quit") {
  if (input === "list") {
    listItems();
  } else if (input === "new") {
    addItem();
  } else if (input === "delete") {
    delItem();
  }
  input = prompt("what you wanna do");
}

console.log("you quitter");

function listItems() {
  console.log("********");
  todos.forEach(function(item, index) {
    console.log(index + ": " + item);
  });
  console.log("********");
}

function addItem() {
  var newItem = prompt("gimme the todo");
  todos.push(newItem);
  console.log("added " + newItem);
}

function delItem() {
  //ask for the index of the item
  var deleted = prompt("what index wanna delete");
  todos.splice(deleted, 1);
  console.log("you removed " + deleted);
}

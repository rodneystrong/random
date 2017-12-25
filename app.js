var todos = ["get tall", "get smart", "get happy"];

var input = prompt("what you wanna do");

//if input is 'list' then list all the Todos
while (input !== "quit") {
  if (input === "list") {
    console.log("********");
    todos.forEach(function(item, index) {
      console.log(index + ": " + item);
    });
    console.log("********");
  } else if (input === "new") {
    var newItem = prompt("gimme the todo");
    todos.push(newItem);
    console.log(todos);
  } else if (input === "delete") {
    //ask for the index of the item
    var delItem = prompt("what index wanna delete");
    todos.splice(delItem, 1);
    console.log("you removed " + delItem);
  }
  input = prompt("what you wanna do");
}

console.log("you quitter");

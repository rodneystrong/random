console.log("lol");
var todos = ["get tall", "get smart", "get happy"];

var input = prompt("what you wanna do");

//if input is 'list' then list all the Todos
if (input === "list") {
  console.log(todos);
} else if (input === "new") {
  var newItem = prompt("gimme the todo");
  todos.push(newItem);
}

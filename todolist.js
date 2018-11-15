var todos =['study java script'];

var input = prompt("what would you like to do?");


while(input !== "quit"){
  // handle input
  if(input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodos();
  } else if (input === "delete") {
    deleteTodos();
  }
// ask again for new input
    input = prompt("what would you like to do?");

}
console.log('ok, you quit the app');

function listTodos(){
  console.log('**********')
  todos.forEach(function(todo, index){
  console.log(index + ": " +todo);
  });
  console.log('**********')
}

function addTodos(){
  // ask for new todo
  var newTodo = prompt ("Enter new todo");
  // add to todos array
  todos.push(newTodo);
  console.log("Added Todo")
}
function deleteTodos{
  // ask for index of todo to be deleted
  var index = prompt("enter index of todo to delete");
  // delete that todo
  todos.splice(index,1);
  console.log("Deleted Todo")
}

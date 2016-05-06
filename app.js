var todos = [];

$('document').ready(function(){
  buildList();
  
  $('#btnAdd').click(function(){
    var newTodo = $('#txtTodo').val();
    todos.push(newTodo);
    $('#txtTodo').val("");
    buildList();
  });
});

function buildList(){
  $('#todoList').html("");
  todos.forEach(function(todo, index){
    $('#todoList').append('<li>' + todo + ' <button class="btn-delete" data-todo-index="' + index + '">Delete</button></li>');
  });
  
  $('.btn-delete').click(function(){
    var index = $(this).data('todoIndex');
    todos.splice(index, 1);
    buildList();
  })
}
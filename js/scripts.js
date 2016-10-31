function List(title, date, addItems) {
  this.titleName = title;
  this.dateBy = date;
  this.items = addItems;
}



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var listTitle = $("input#title").val();
    var dateBy = $("input#date").val();
    // var items = $("input#items").val();
    var addItems = $('#add').click(function() {
        var item = $('#item')
        $('ul').prepend("<li>"+item.val()+"</li>");
    });


    var newList = new List(listTitle, dateBy, addItems);
    console.log(newList);

    // $("list-results").append("<h4><span class='title'>" + newList.titleName + "</span></h4>");

    $('ul').on('click', 'li', function() {
        $(this).remove();
    });

  });

});













$(document).ready(function() {
    addItems = $('#add').click(function() {
        var item = $('#item')
        $('ul').prepend("<li>"+item.val()+"</li>");
    });
    $('ul').on('click', 'li', function() {
        $(this).remove();
    });
});

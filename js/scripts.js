function List(title, date, items) {
  var itemsArray = [ items ];
  this.titleName = title;
  this.dateBy = date;
  this.items = itemsArray;
}



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var listTitle = $("input#title").val();
    var dateBy = $("input#date").val();
    var items = $("input#items").val();

    var newList = new List(listTitle, dateBy, items);
    console.log(newList);

    // $("list-results").append("<h4><span class='title'>" + newList.titleName + "</span></h4>");


  });

});











//
//
// $(document).ready(function() {
//     $('#add').click(function() {
//         var item = $('#item')
//         $('ul').prepend("<li>"+item.val()+"</li>");
//     });
//     $('ul').on('click', 'li', function() {
//         $(this).remove();
//     });
// });

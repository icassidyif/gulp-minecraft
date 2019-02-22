var $ = require("jquery");

$('a').on('click', function(e){
  // e.preventDefault();
  // e.stopPropagation();
  console.log(e, this);
});
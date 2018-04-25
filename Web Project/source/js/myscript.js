
	var container = $('.grid').isotope({
		itemSelector: '.col-xs-12',
		getSortData: {
			name: '.name',
			price: '.price parseInt',
			count: '.countsp parseInt',
			view: '.countview parseInt',
			date: function (itemElem) {
                return Date.parse($(itemElem).find('.date').text());
            }
		}
	})
	$('.alphSort').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'name'});
	});
	$('.clickview').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'view', sortAscending: false});
	});
	$('.clickcount').on('click', function(e){
		e.preventDefault();
		container.isotope({ sortBy: 'count', sortAscending: false});
	});
	$('.clicknew').on('click',function(e){
		e.preventDefault();
		container.isotope({sortBy:'date',sortAscending: false});
	});
	$('.prcBtnO').on('click',function(e){
		e.preventDefault();
		container.isotope({sortBy:'original-order'});
	});

$('#btnRM').click(function(){
    $('#readmore').animate({height:'322px'}, 500);
});
$('#btnRL').click(function(){
	$('#readmore').animate({height:'0px'}, 500);
});
$('#btnRM2').click(function(){
    $('#readmore2').animate({height:'322px'}, 500);
});
$('#btnRL2').click(function(){
	$('#readmore2').animate({height:'0px'}, 500);
});

	$(function () {
  $("#mydd a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu1").html($(this).html() + ' <span class="downicon"></span>');
  });
});

$(function () {
  $("#mydd2 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu2").html($(this).html() + ' <span class="downicon"></span>');
  });
});
$(function () {
  $("#mydd3 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu3").html($(this).html() + ' <span class="downicon"></span>');
  });
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



///////////////
///////////////
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
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
$('.alphSort').on('click', function (e) {
    e.preventDefault();
    container.isotope({
        sortBy: 'name'
    });
});
$('.clickview').on('click', function (e) {
    e.preventDefault();
    container.isotope({
        sortBy: 'view',
        sortAscending: false
    });
});
$('.clickcount').on('click', function (e) {
    e.preventDefault();
    container.isotope({
        sortBy: 'count',
        sortAscending: false
    });
});
$('.clicknew').on('click', function (e) {
    e.preventDefault();
    container.isotope({
        sortBy: 'date',
        sortAscending: false
    });
});
$('.prcBtnO').on('click', function (e) {
    e.preventDefault();
    container.isotope({
        sortBy: 'original-order'
    });
});

$('#btnRM').click(function () {
    $('#readmore').animate({
        height: '322px'
    }, 500);
});
$('#btnRL').click(function () {
    $('#readmore').animate({
        height: '0px'
    }, 500);
});
$('#btnRM2').click(function () {
    $('#readmore2').animate({
        height: '322px'
    }, 500);
});
$('#btnRL2').click(function () {
    $('#readmore2').animate({
        height: '0px'
    }, 500);
});

$(function () {
    $("#mydd a").on('click', function (e) {
        e.preventDefault();
        $("#dropdownMenu1").html($(this).html() + ' <span class="downicon"></span>');
    });
});

$(function () {
    $("#mydd2 a").on('click', function (e) {
        e.preventDefault();
        $("#dropdownMenu2").html($(this).html() + ' <span class="downicon"></span>');
    });
});
$(function () {
    $("#mydd3 a").on('click', function (e) {
        e.preventDefault();
        $("#dropdownMenu3").html($(this).html() + ' <span class="downicon"></span>');
    });
});

window.onscroll = function () {
    myFunction()
};

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
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Delete row
function leteRow(r) {
    document.getElementById('b1');
    swal({
        title: "Bạn chắc chắn muốn bỏ sản phẩm này?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Có',
        cancelButtonText: 'Không',
        closeOnConfirm: false,
    },
        function () {
            swal("Xóa thành công", "Sản phẩm của bạn đã được xóa khỏi giỏ hàng", "success");
            var i = r.parentNode.parentNode.rowIndex;
            document.getElementById("myTable").deleteRow(i);
        });
};


var flag = 0;

///Login
var CORRECT_USER = 'user';
var CORRECT_PASS = 'user';
var CORRECT_ADMIN = 'admin';
var CORRECT_PASSADMIN = 'admin';

var inputUsername = document.getElementById('username');
var inputPassWord = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if (formLogin.attachEvent)
    formLogin.attachEvent('submit', onFormSubmit);
else
    formLogin.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    var username = inputUsername.value;
    var password = inputPassWord.value;
    if (username == CORRECT_USER && password == CORRECT_PASS) {
        flag = 1;
        window.open('../Web Project/user.html');
    }
    else if (username == CORRECT_ADMIN && password == CORRECT_PASSADMIN)
        window.open('../Web Project/admin.html');
    else alert('Bạn chưa có tài khoản :)');
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 10.8009003, lng: 106.7316933},
    zoom: 8
  });
}

var map = "";
var image = "web/img/Pin.png";
var popupContent = "CREATIVE DIGITAL";
var marker = "";
var markerPosition = {lat: 48.920175, lng: 24.707773};
var mapCenter = {lat: 48.919700, lng: 24.707773};
var infowindow = "";
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15, 
        center: mapCenter
    });

  marker = new google.maps.Marker({
      position: markerPosition, 
      map: map,
      icon: image
    });

  infowindow.open(map, marker);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
//Center Map on resize
  google.maps.event.addDomListener(window, 'resize', function(){
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(mapCenter);
  });
};


$('.nav-item').click(() => {
    $( ".navbar-collapse" ).removeClass("show");
});


$('.head__scroll').click(() => {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 1000);
});
$('.butScrol').click(() => {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 1000);
});
$('.nav-item--1').click(() => {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 1000);
});

$('.nav-item--2').click(() => {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 1000);
});
$('.nav-item--3').click(() => {
    $('html, body').animate({
        scrollTop: $('#services').offset().top
    }, 1000);
});
$('.nav-item--4').click(() => {
    $('html, body').animate({
        scrollTop: $('#gallery').offset().top
    }, 1000);
});
$('.nav-item--6').click(() => {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000);
});
$('.nav-item--5').click(() => {
    $('html, body').animate({
        scrollTop: $('#blog').offset().top
    }, 1000);
});


 $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 700,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 700,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 700,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 700,
      }
    }
  ]
});

 $(window).scroll(function(){
            var bo = $(this).scrollTop();
             
      if ( bo >= 800) {
        $("#updown").stop().animate({'opacity':'1'}, 500);
      };

          if ( bo < 800) {
            $("#updown").stop().animate({'opacity':'0'}, 500);
          };
    });

 var lastId,
 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight()+1,
 menuItems = topMenu.find("a"),
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });


menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

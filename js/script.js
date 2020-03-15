var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 100) {
    document.getElementById("navbar").className = 'navbar navbar-expand-lg navbar-light fixed-top';
  } else {
    document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-light fixed-top scrolled";
  }
}

$(document).ready(function () {
  $('.modal a').click(function () {
    setTimeout(function () {
      $('.modal').modal('hide')
    }, 300);

  })

})

$(document).ready(function () {
  $('.gallery').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


$(document).ready(function () {
  $('.reviews-box').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },{
        breakpoint: 1284,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(function () {
  $("#phone").mask("+380 (99) 999 99 99");
});
$(function () {
  $("#phone1").mask("+380 (99) 999 99 99");
});



jQuery(document).ready(function ($) {

  $("#form").submit(function () {
    var str = $(this).serialize();
    dataLayer.push({'event': 'lead-form'});
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: str,
      success: function () {
        console.log('1');
        $('#sps').modal('show')
      }
    });
    return false;
  });
});
jQuery(document).ready(function ($) {

  $("#form1").submit(function () {
    var str = $(this).serialize();
    dataLayer.push({'event': 'lead-form'});
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: str,
      success: function () {
        $('#question').modal('hide')

        $('#sps').modal('show')
      }
    });
    return false;
  });
});
jQuery(document).ready(function ($) {

  $("#form2").submit(function () {
    var str = $(this).serialize();
    dataLayer.push({'event': 'price-list'});
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: str,
      success: function () {
        $('#price').modal('hide')

        $('#sps1').modal('show')
      }
    });
    return false;
  });
});

$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){
    	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
             "</div>"); 
             
    $(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	});
	
});
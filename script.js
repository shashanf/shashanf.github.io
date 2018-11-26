//smooyh scroliing
$(document).ready(function(){
      $("a").on('click', function(event) {
        if (this.hash !== "") {       
            event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top 
          }, 1200, function(){
            window.location.hash = hash;
          });
        }
      });
    });

//parallax
$(window).scroll(function() {

 	var wScroll = $(this).scrollTop();

 	//jumbroton
 	$('.jumbotron img').css({
 		'transform' : 'translate(0px, '+ wScroll/4 +'% )'
 	});

 	$('.jumbotron h1').css({
 		'transform' : 'translate(0px, '+ wScroll/2 +'% )'
 	});

 	$('.jumbotron h3').css({
 		'transform' : 'translate(0px, '+ wScroll/1.2 +'% )'
 	});

 	//portofolio
 	 if ( wScroll > $('.portofolio').offset().top - 250) {
 	 	$('.portofolio .thumbnail').each(function(i) {
 	 		setTimeout(function(){
 	 			$('.portofolio .thumbnail').eq(i).addClass('muncul');
 	 		}, 300 * (i+1) );
 	 	});
 	 	
 	 }

 	 //about
 	 $('.pKiri').addClass('pMuncul');
 	 $('.pKanan').addClass('pMuncul');

 	 //artikel
 	 $('.satu').addClass('pMuncul');
 	 $('.dua').addClass('pMuncul');
 	 $('.tiga').addClass('pMuncul');

});












 
// $('.page-scroll').on('click', function (e) {
	
// 	//ambil isi href
// 	var tujuan = $(this).attr('href');
// 	//tangkap elemen
// 	var elemenTujuan = $(tujuan);

// 	//pindahkan scroll
// 	$('html, body').animate({
// 		scrollTop: elemenTujuan.offset().top - 50
// 	});

// 	e.preventDefault();
// });
$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    // Check elements with class "servicesimg" visibility on scroll
    $('.cardanim,.imgleft, .textleft, .zoom').css('opacity',1);

    $(window).on('scroll load', function() {
        $('.zoom').each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('scaled')) {
                $(this).addClass('scaled'); 
                $(this).css("transform", "scale(1.2)");

                setTimeout(function(element) {
                    $(element).css("transform", "scale(1)");
                }, 200, this);
            }
            setTimeout(function () {
                $('.zoom').css('opacity',1);
            }, 400);
        });
        $('.imgleft, .textleft').each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('scaled')) {
                $(this).addClass('scaled'); 
                $(this).addClass('leftanim'); 

                setTimeout(function(element) {
                    $(this).removeClass('leftanim'); 
                }, 200, this);
               
            }
            setTimeout(function () {
                $('.imgleft, .textleft').css('opacity',1);
            }, 400);
        });
        $('.cardanim').each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('scaled')) {
                
                $(this).addClass('card-img-top');
                $(this).addClass('scaled');
                
                let $element = $(this);
                
                setTimeout(function () {
                    $element.removeClass('card-img-top');
                }, 400);
            
            }
            setTimeout(function () {
            $('.cardanim').css('opacity',);
        }, 400);
        });
        // $('.imgright').each(function() {
        //     if (isElementInViewport(this) && !$(this).hasClass('scaled')) {
        //         $(this).addClass('scaled'); 
        //         $(this).addClass('rightanim'); 

        //         setTimeout(function(element) {
        //             $(this).removeClass('rightanim'); 
        //         }, 400, this);
        //     }
        // });
    });

    $('#navServices').parent().hover(
        () => $('.dropdown-menu').addClass('show'),
        () => $('.dropdown-menu').removeClass('show')
    );
   
    $('body').append('<button id="scrolltop"><i class="fa-solid fa-angle-up"></i></button>');
    var $scrollButton = $('#scrolltop');
    $(window).scroll(function() {
     ($(this).scrollTop() > 50)? $scrollButton.fadeIn() : $scrollButton.fadeOut();
    });

    $scrollButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    const imageSrcArray = [
        'clientImg/Coca-Cola_logo.svg.png',
        'clientImg/Amazon_Prime.svg',
        'clientImg/lionClub.jpg',
        'clientImg/mineral.png'
    ];
    let combinedHtml = '';
    for (let i = 0; i < 30; i++) {
        const src = imageSrcArray[i % imageSrcArray.length];
        combinedHtml += `<div class="col-12 col-md-2"><img src="${src}" class="img-fluid cardanim"></div>`;
    }

    $('#clients').html(combinedHtml);


    // let combinedHtml = '';
    // imageSrcArray.forEach(function(src) {

    //     for (let i = 0; i < 20; i++) {
    //         combinedHtml += `<div class="col-12 col-md-2"><img src="${src}" class="img-fluid"></div>`;
    //     }
    // });

    // $('#clients').html(combinedHtml);
//     const clientHtml = `
//     <div class="col-12 col-md-2"><img src="clientImg/Amazon_Prime.svg" class="img-fluid"></div>
//     <div class="col-12 col-md-2"><img src="clientImg/Coca-Cola_logo.svg.png" class="img-fluid"></div>
//     <div class="col-12 col-md-2"><img src="clientImg/mineral.png" class="img-fluid"></div>
// `;

// let combinedHtml = '';
//     for (let i = 0; i < 20; i++) {
//         combinedHtml += clientHtml;
//     }
    
//     $('#clients').html(combinedHtml);
$(window).scroll(function() {
    if ($(window).scrollTop()) {

        
        $(".ix-nav").addClass("ix-fixed");
        $(".ix-nav").removeClass("ix-moved");
    } else {
        $(".ix-nav").addClass("ix-moved");
        $(".ix-nav").removeClass("ix-fixed");
    }
});
 });
 
 

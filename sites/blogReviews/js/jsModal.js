$(document).ready(function(){
$('.modalDialog').hide();
    // Activate Carousel
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
	
	  $(".item5").click(function(){
        $("#myCarousel").carousel(4);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
	
	$(".viewImg").click(function(e) {
		$('.modalDialog').toggle();		
	});
	
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".left, .right, .carousel-inner, .parent_block").length) {
			$('.modalDialog').hide();
		}
	e.stopPropagation();
	});
	
	
	
	
	$('.modalDialogText').hide();
    // Activate Carousel
    $("#myCarouselText").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarouselText").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarouselText").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarouselText").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarouselText").carousel(3);
    });
	
	  $(".item5").click(function(){
        $("#myCarouselText").carousel(4);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarouselText").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarouselText").carousel("next");
    });
	
	$(".viewText").click(function(e) {
		$('.modalDialogText').toggle();		
	});
	
	$(document).on('click', function(e) {
		if (!$(e.target).closest(".left, .right, .carousel-inner, .parent_block").length) {
			$('.modalDialogText').hide();
		}
	e.stopPropagation();
	});
	
	

});

$(document).ready(function() {

	$('section#social .anim01').waypoint(function() {
		$('section#social .anim01').addClass('animated fadeInRight');
	}, {
		offset: '95%'
	});

	$('section#social .anim01').waypoint(function() {
		$('section#social .anim01').addClass('animated fadeInDown');
	}, {
		offset: '95%'
	});

	$('section#social .anim03').waypoint(function() {
		$('section#social .anim03').addClass('animated fadeInLeft');
	}, {
		offset: '95%'
	});


	$('section#society .anima1').waypoint(function() {
		$(this.element).addClass('animated fadeInLeft');
		// $('section#society .anima1').addClass('animated fadeInLeft');

	}, {
		offset: '60%'
	});

	$('section#society .anima2').waypoint(function() {
		$(this.element).addClass('animated fadeInRight');		
	}, {
		offset: '60%'
	});


    $('#players .col-sm-2').click(function(e) {  
    	var imgSrc = $(this).find('img').attr('src');
    	var hVal =  $(this).find('h1').text();
		if ($(this).find('img').attr('alt')=='stemma'){return;}

		$('#aboutModal .modal-header').find('h3').text("About " + hVal);
    	$('#aboutModal img').attr("src",imgSrc);
		$('#aboutModal .tab-content').find('h3').text(hVal);
    	$('#aboutModal').modal('show');
    	
    });

    $('#tabInfoContainer button').click(function(e) {  
		var plan = $(this).attr('data-plan');
   		plan = "Subscribe " + plan;
		$('#contactMem .panel-title').text(plan);
     	$('#contactMem').modal('show');
    	
    });


    // mansory

    // non on extra small device
    
    var $container = $('.masonry-container');
	var mq = window.matchMedia( "(min-width: 544px)");
	if (mq.matches) { 
   		// var $container = $('.masonry-container');
		$container.imagesLoaded( function () {
			$container.masonry({
				columnWidth: '.item',
				itemSelector: '.item'
			});});

	//Reinitialize masonry inside each panel after the relative tab link is clicked - 
	
		$('a[data-toggle=tab]').each(function () {
  			var $this = $(this);

  			$this.on('shown.bs.tab', function () {
    			$container.imagesLoaded( function () {
      			$container.masonry({
        		columnWidth: '.item',
        			itemSelector: '.item'
      				});   
    			});  
  			});
		});
	}

 	$('#expandInfo button').click(function(e) {  
 		 $('#tabInfoContainer a[href="#Clubs"]').tab('show');
    });  

});

smoothScroll.init({
        speed:1900,
        easing:'easeInOutCubic',
        updateURL:false,
        offset:50        
});

$('#ulTables').tabCollapse();
$('#ulInfo').tabCollapse();


$(document).on("click", ".open-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     $(".modal-body #bookId").val( myBookId );
});






$(document).ready(function() {
            $('.zoom').stop().zoomy('mouseover',
        {
            clickable: false,
            attr: 'rel'  
        }
    );   
			$('body').mousewheel(function(e, delta) {
                $("*").stop().animate();
				this.scrollLeft -= (delta * 40);
				e.preventDefault();
			});
            
            $("ul li a").on("click", function(){
                var strAncla=$(this).attr('href'); 
                var linksel=$(this).attr('class'); 
		$("*").stop(true,false).animate({ scrollLeft : $(strAncla).offset().left-150}, 2000 ); 
          });  
                
                 $("li").on("click", function(){
                $("li").removeClass();
              $(this).addClass("active");
//    transform:scale(1.1) ;
//	font-weight: bold;
	}); 
		});

function nocorreo(){
  alert("Correo desabilitado temporalmente, \n Intente por otra via..");  
};
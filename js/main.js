
$( document ).ready(function() {

	$( "#aniTextOne" ).delay(4000).fadeOut( 1000, function() {
		$( "#aniTextTwo" ).fadeIn( 1000, function() {
			$( "#aniTextTwo" ).delay(6000).fadeOut(1000);
			$( "#aniTextThree" ).delay(6000).fadeIn(4000);
		});
  });
  

  
});

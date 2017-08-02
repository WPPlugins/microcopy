var $j = jQuery.noConflict();

$j(document).ready(function() {
	inputKeyDown();
});

function inputKeyDown(){
	$j('input').keydown(function(e) {
		var $input = $j(this);
		var $value = $input.val();
		var c = String.fromCharCode(e.keyCode);
		var isWordcharacter = c.match(/\w/);
		
		addPrefix( $value, $input );
		
		if ( ( isWordcharacter == null && e.keyCode != 8 ) || ( e.keyCode == 8 && $value.length <= '6' ) ) return false;
	});
}

function addPrefix( $value, $input ){
	if ( $value.length <= '6') {
		$input.val('am_mc_');
	}
}

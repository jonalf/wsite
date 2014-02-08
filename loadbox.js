var NUMPICS = 3;


var makeIt = function( type ) {

    return document.createElement( type );
}

var loadWelcome = function() {

    var i = makeIt( 'img' );    
    i.setAttribute( 'src', 'pics/front.jpg' );
    i.classList.add( 'img-rounded', 'img-responsive' );

    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = '';
    j.appendChild( i );
}

var loadStory = function() {

    s = "<center>We met, it was pretty cool, now we're getting married!</center>"

    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = s;
}

var loadPics = function() {

    var div1 = makeIt( 'div' );
    var indicators = makeIt( 'ol' );
    var div2 = makeIt( 'div' );
    var left = makeIt( 'a' );
    var right = makeIt( 'a' );
    var leftIcon = makeIt( 'span' );
    var rightIcon = makeIt( 'span' );

    div1.setAttribute( 'id', 'carousel-example-generic' );
    div1.setAttribute( 'data-ride', 'carousel' );
    div1.classList.add( 'carousel', 'slide' );
    
    indicators.classList.add( 'carousel-indicators' );
    
    div2.classList.add( 'carousel-inner' );

    left.setAttribute( 'href', '#carousel-example-generic' );
    left.setAttribute( 'data-slide', 'previous' );
    left.classList.add( 'left', 'carousel-control' );

    right.setAttribute( 'href', '#carousel-example-generic' );
    right.setAttribute( 'data-slide', 'next' );
    right.classList.add( 'right', 'carousel-control' );

    leftIcon.classList.add( 'glyphicon', 'glyphicon-chevron-left' );
    rightIcon.classList.add( 'glyphicon', 'glyphicon-chevron-right' );

    left.appendChild( leftIcon );
    right.appendChild( rightIcon);
    
    for (var i=0; i < NUMPICS; i++) {
	
	var indicator = makeIt( 'li' );
	var item = makeIt( 'div' );
	var image = makeIt( 'img' );

	indicator.setAttribute( 'data-target', '#carousel-example-generic' );
	indicator.setAttribute( 'data-slide-to', i.toString() );
	if ( i== 0 )
	    indicator.classList.add( 'active' );
	indicators.appendChild( indicator );

	item.classList.add( 'item' );
	if ( i == 0 )
	    item.classList.add( 'active' );
	image.setAttribute( 'src', 'pics/' + i + '.jpg' );
	item.appendChild( image );
	div2.appendChild( item );			
    }

    div1.appendChild( indicators );
    div1.appendChild( div2 );
    div1.appendChild( left );
    div1.appendChild( right );    

    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = '';
    j.appendChild( div1 );
}

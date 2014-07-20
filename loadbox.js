var NUMPICS = 21;


var makeIt = function( type ) {

    return document.createElement( type );
}

var loadWelcome = function() {
    var s = "<center><h2>JonAlf and Jamie's toally awesome wedding website!<br><br>Please join us on:</h2><h1>November 15, 2014</h1>for an emotional display of tears and promises of eternal love, followed by the signing of some boring legal documents, finished off with some food, booze and the dance party of the century!<br></center>";
    
    var i = makeIt( 'img' );    
    i.setAttribute( 'src', 'pics/front.jpg' );
    i.classList.add( 'img-rounded', 'img-responsive', 'center-block' );
    
    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = s;
    j.appendChild( i );
}

var loadStory = function() {

//    s = "<center>We met, it was pretty cool, now we're getting married!</center>";

    var met = "Alf and Jamie met back in November 2011 through the magic of online dating. The two spent their first date getting drinks at a bar downtown, followed by late night burgers at a diner. Alf was immediately smitten. Unfortunately for Alf, Jamie informed him that they could not date because she was about to leave town to perform a show, and therefore couldn't be tied down. But even though Jamie made it clear that the pair had an uncertain future, she couldn't help from calling him every day while she was away. For six weeks while Jamie was out of town, the two spoke everyday and developed a deep friendship. At the end of the six weeks, as Jamie boarded a plane back to New York, Jamie knew she was helplessly in love with Alf. Though she refused to admit it to him for another few months. The two have been inseparable ever since, and are excited to celebrate their union this November, three years to the day from their first date.<br>";

    var prop = "One day in October, Alf suggested to Jamie that they have a date night that Saturday. He would make her a delicious fish dinner and they'd open the good bottle of red wine. Jamie was immediately suspicious. Jamie spent the week trying not to anticipate an impending proposal, and playing it cool. As she left for work on Saturday, she noticed the apartment was a mess. She decided that if the apartment was clean when she returned that evening, it meant he was likely to propose. Upon returning from work she noticed the apartment was still messy, signaling to her that there would be no proposal tonight. As the evening progressed the two enjoyed their relaxing night in of fish and red wine and <i>Family Guy</i>. And just as Jamie was getting absorbed in the current episode of <i>Family Guy</i>, suddenly Alf was on one knee asking her to marry him. Jamie screamed and cried, wiped her snot all over his shirt, and said yes. They then preceded to spend the next two hours in separate rooms as they called everyone they know to announce their upcoming nuptials.";

    var i1 = makeIt( 'img' );    
    i1.setAttribute( 'src', 'pics/meet.jpg' );
    i1.setAttribute( 'align', 'left');
    i1.style.marginRight = "10px";
    i1.classList.add( 'img-rounded', 'img-responsive');

    var i2 = makeIt( 'img' );    
    i2.setAttribute( 'src', 'pics/prop.jpg' );
    i2.setAttribute( 'align', 'right');
    i2.style.marginLeft = "10px";
    i2.classList.add( 'img-rounded', 'img-responsive');

    
    var s = "<center><h2>The Meeting:</h2></center>";
    s+= i1.outerHTML;
    s+= met;
    s+= "<hr>";
    s+= "<center><h2>The Proposal:</h2></center>";
    s+= i2.outerHTML;
    s+= prop;
    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = s;
}

var loadRegistry = function() {

    //s = "<center>Stuff! We want some, will you give it to us?</center>";
    s = '<center>We have created a registery at Bed, Bath & Beyond.<br>Follow the link below to access it:<br><a href="http://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&registryId=541370494&pwsurl=">Bed, Bath & Beyond</a><hr>We would also graciously accept contributions towrds our honeymoon and a few items that we felt were too expensive to ask for individually.</center>'
    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = s;
}

var loadInfo = function() {
    
    var coralMapDiv = makeIt('div');
    coralMapDiv.setAttribute('id', 'coralmapdiv');
    coralMapDiv.style.height = '400px';

    var hotelMapDiv = makeIt('div');
    hotelMapDiv.setAttribute('id', 'hotelmapdiv');
    hotelMapDiv.style.height = '400px';
    
    var coralInfoDiv = makeIt('div');
    coralInfoText = '<center>The ceremony and reception will be held at:<br>';
    coralInfoText+= '<a target="_blank" href="http://www.google.com/maps/place/Coral+House/@40.651724,-73.604099,17z/data=!3m1!4b1!4m2!3m1!1s0x89c27b7fef1177cd:0xf6d9ad7cc7bbe47">';
    coralInfoText+= 'The Coral House</a><br>70 Mulburn Ave<br>Baldwin, NY 11510</center>';
    coralInfoDiv.classList.add('info');
    coralInfoDiv.innerHTML = coralInfoText;
    

    var hotelInfoDiv = makeIt('div');
    var hlink = makeIt('a');
    hotelText = '<hr><center>We have reserverd a block of rooms at:<br>';
    hotelText+= '<a target="_blank" href="http://www.google.com/maps/place/Ramada+Rockville+Centre/@40.656536,-73.623273,17z/data=!3m1!4b1!4m2!3m1!1s0x89c27b65cd264ee9:0x95c9f465562eb230">';
    hotelText+= 'Ramada Rockville Centre</a><br>1000 Sunrise Highway<br>Rockville Centre, NY 11570<br>(516) 678-1100</center>';
    hotelInfoDiv.classList.add('info');
    hotelInfoDiv.innerHTML = hotelText;

    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = '';
    j.appendChild( coralInfoDiv );
    j.appendChild( coralMapDiv );
    j.appendChild( hotelInfoDiv );
    j.appendChild( hotelMapDiv );

    loadMaps();
    console.log( j );
}

var loadMaps = function() {
    var cMapOptions = {
        center: new google.maps.LatLng(40.6543124, -73.6064379),
        zoom: 16
    };
    var cMap = new google.maps.Map(document.getElementById("coralmapdiv"), cMapOptions);
    var cMarker = new google.maps.Marker({
	position: new google.maps.LatLng(40.651724,-73.604099),
	map: cMap,
	title:"Coral House"
    });

    var hMapOptions = {
        center: new google.maps.LatLng(40.656536,-73.623273),
        zoom: 16
    };
    var hMap = new google.maps.Map(document.getElementById("hotelmapdiv"), hMapOptions);
    var hMarker = new google.maps.Marker({
	position: new google.maps.LatLng(40.656536,-73.623273),
	map: hMap,
	title:"Ramada Rockville Centre"
    });
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
    div1.setAttribute( 'data-ride', 'carousel', 'containter' );
    div1.classList.add( 'carousel', 'slide' );
    
    indicators.classList.add( 'carousel-indicators' );
    
    div2.classList.add( 'carousel-inner' );

    left.setAttribute( 'href', '#carousel-example-generic' );
    left.setAttribute( 'data-slide', 'prev' );
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
	image.classList.add( 'img-rounded', 'img-responsive' ); 
	item.appendChild( image );
	div2.appendChild( item );			
    }

//    div1.appendChild( indicators );
    div1.appendChild( div2 );
    div1.appendChild( left );
    div1.appendChild( right );    

    j = document.querySelectorAll( '.jumbotron' )[0];
    j.innerHTML = "<center><h2>It's Us!</h2></center>";
    j.appendChild( div1 );
}

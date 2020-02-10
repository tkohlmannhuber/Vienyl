// SLIDER 

var index = 0;

var autoSlide = function(){ // funktion für die auto slide function erstellen 
    next(); // next aufrufen um die autoslide function durchzuführen
}

var autoSlideInterval = setInterval(autoSlide,3000) // Intervall für die autoslidefunktion in eine variable speichern



//li's der ol selektieren und in eine variable speichern
var lis = document.querySelectorAll('.slider > li');

//ol selektieren und in ein variable speichern
var ol = document.querySelector('.slider');

// ol breite festlegen , anzahl der li's in der ol * 100% somit ist es egal ob ein li weg oder dazu kommt 
ol.style.width  = (lis.length * 100) + "%";

var next = function(){ // variable next als function deklarieren

    ol.classList.add('slider--transition-on'); // transition klasse hinzufügen damit der slide animiert wird
    ol.style.left = "-100%"; // ol um -100% mittels left verschieben  

    var after_transition = function(){  // function erstellen für wenn die transition vorbei ist 
        ol.classList.remove('slider--transition-on'); // "slider--transition-on" wieder entfernen
        ol.style.left = 0; // left wieder auf 0 setzen damit wieder der erste slide sichtbar ist 
        var first = document.querySelector('.slider > li:first-child'); // erstes li selektieren
        ol.appendChild(first); // erstes li hinten anhängen somit ist das nächste li das erste li
        ol.removeEventListener('transitionend', after_transition); // der ol den transitionend eventhandler entfernen 
        index++;// bei jedem slide den index um 1 erhöhen
        changeText() // die funktion change text nach jedem slide ausführen
    };
    ol.addEventListener('transitionend', after_transition); // ol den eventhandler hinzufügen 



};
document.querySelector('.next_btn').addEventListener('click', function() {
    clearInterval(autoSlideInterval) // Das autoplay intervall wird nach dem klick auf einen der Vor und Zurück button gestopt
    next();

});						



// PREV SLIDE


var prev = function(){ //variable prev als function deklarieren
    
    var last_li = document.querySelector('.slider > li:last-child'); // letztes li selektieren und in eine variable speichern
    ol.insertBefore(last_li, document.querySelector('.slider > li:first-child')); // das letzte li vor das erste li hängen 
    ol.classList.remove('slider--transition-on'); // die klasse "slider--transition-on" entfernen
    ol.style.left = "-100%"; // ol -100% mittels left verschieben
    
    setTimeout(function(){ // timeout function erstellen um sicher zu gehen das mindestens ein frame gerendert in dem das left auf -100% gesetzt wird
        ol.classList.add('slider--transition-on');  // transition klasse hinzufügen damit der slide animiert wird
        ol.style.left = 0; // ol left wieder auf 0 setzen um den slide hereinzuanimieren 
        index--;// damit es in die andere richtung auch funktioniert wird nach jedem slide der index um eins verringert 
        changeText();// Die funktion change text nach jedem slide ausführen
    }, 100);
};
document.querySelector('.prev_btn').addEventListener('click', function() {
    clearInterval(autoSlideInterval) // Das autoplay intervall wird nach dem klick auf einen der Vor und Zurück button gestopt
    prev();
});	// den next button selektieren und diesem einen klick eventhandler geben mit der next function						



var changeText = function() {  // funktion für das wechseln des Textes zum richtigen slide 
    if (index === lis.length) {  // damit der index nicht höher als die anzahl der lis wird 
        index = 0; // wird der index nachdem er alle lis durchhat wieder auf null gesetzt
    }

    if (index < 0) {  // falls der index kleiner als null ist (bei klick auf den prev button) 
        index = lis.length - 1; //soll der index zum letzten li (index ) springen
    }

    document.querySelector('.album_content--show').classList.remove('album_content--show') // allen lis die klasse "album_content--show" entfernen
    var activeText = document.querySelectorAll('.album_text')[index]; // Alle lis mit dem dazugehörigen index in eine variable speichern
    activeText.classList.add('album_content--show') // die klasse "album_content--show" hinzufügen
};













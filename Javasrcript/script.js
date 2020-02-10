//BURGER NAV

// Die klasse burger selektieren 
var burger = document.querySelector('.burger')
burger.addEventListener('click',function(e_){ // Klick eventhandler an den Menübutton hängen
    e_.preventDefault(); // verhindern das der link ausgeführt wird 

    var burger_icon = document.querySelector('.burger_icon'); // Burger icon selektieren 
    var close_icon = document.querySelector('.close_icon'); // Close icon selektieren
    var mainnav = document.querySelector('.mainnav') // Die mainnav selektieren

    if(mainnav.style.display === 'none'){  // Falls das Display der mainnav vor dem klick "none" ist 
        mainnav.style.display = 'flex'; // soll die mainnav beim klicken des Menübuttons zu display "flex werden"
        burger_icon.style.display = 'none'; // das burger icon soll ausgeblendet werden
        close_icon.style.display = 'inline' // das close icon soll  eingeblendet der 
    }else { // falls das Display nicht " none" ist also "flex"
        mainnav.style.display = 'none' // soll das display auf "none" gesetzt werden 
        burger_icon.style.display = 'inline'; // das burger icon eingeblendet 
        close_icon.style.display = 'none' // und das close icon ausgeblendet werden
    }

})




// STICKY NAV

window.onscroll = function() {sticky_nav()};

// Navigation selektieren 
var nav = document.querySelector("nav");

// Das offset top der nav in sticky speichern
var sticky = nav.offsetTop;


function sticky_nav() {
  if (window.pageYOffset >= sticky) {   // wenn die windowposition die offset position erreicht 
    nav.classList.add("sticky");  //soll der nav die sticky klasse hinzugefügt werden 
  } else {
    nav.classList.remove("sticky"); // wenn die windowposition ganz oben ist soll die klasse entfernt werden 
  }


}


// BACK TO TOP BUTTON

// Back to top Button selektieren und einen Klick eventhandler hinzufügen 
document.querySelector('.back-btn').addEventListener('click', function() {
    document.documentElement.scrollTop = 0; // bei klick soll die seite wieder ganz nach oben springen 

});








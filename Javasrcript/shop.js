

//GALLERY 


//Alle thumbnail bilder in eine variable speichern
var lis = document.querySelectorAll('.shop-list > li img');

//Tracklist container selektieren 
var overlay = document.querySelector('.tracklist-container');
// tracklist stage div selektieren in welches das große bild kommt
var stage = document.querySelector('.tracklist-stage');
//Close button selektieren
var close = document.querySelector('.tracklist-close');
// Div selektieren welches dafür da ist um bei klick auf den whitespace das overlay zu schließen 
var close_on_black = document.querySelector('.tracklist--close_on_black');

//eventhandler zum schließen des overlays
close.addEventListener('click', function(){
    overlay.style.display = "none";
});

// Eventhandler für das schließen des overlays bei click in den whitespace 
close_on_black.addEventListener('click', function(){
    overlay.style.display = "none";
});



// Schleife um alle li durchzugehen
for(var i = 0; i < lis.length; i++) {
    //Allen thumbnails den eventhandler anhängen
    lis[i].addEventListener('click', function(_e){
        //Verhindern das der link nicht ausgführt wird 
        _e.preventDefault();
        //Overlay einblenden
        overlay.style.display = "flex";
        //Neues element für das große Img erstellen
        var img = document.createElement('img');
        //src für das große bild aus dem a tag auslesen
        img.setAttribute('src', _e.target.parentNode.getAttribute('href'));
        //Stage clearen falls ein bild drin ist 
        stage.innerHTML = "";
        //Das Bild in die stage einhängen
        stage.appendChild(img);



            
    });
}

// DROP DOWN - SHOP JS


// alle lis in einen variable speichern
var filter_list_lis = document.querySelectorAll('.filter-list > li');
// mit einer schleife alle lis durchgehen
for(var i = 0; i < filter_list_lis.length; i++) {
    //jedem li einen Mouseenter eventhandler hinzufügen welcher beim hineinfahren der maus das menü öffnet 
    filter_list_lis[i].addEventListener('mouseenter', function(_e){
        _e.target.querySelector('ol').classList.add('mainnav--open');
    });

    //jedem li einen Mouseleave eventhandler hinzufügen welcher beim hinausfahren der maus das menü wieder schließt 
    filter_list_lis[i].addEventListener('mouseleave', function(_e){
        _e.target.querySelector('ol').classList.remove('mainnav--open');
    });

    //jedem li einen klick eventhandler hinzufügen damit das ganze auch auf mobilen geräten funktioniert  
    filter_list_lis[i].addEventListener('click', function(e_){
        _e.target.querySelector('ol').classList.add('mainnav--open');
    })
};


// EMAIL NEWSLETTER 


//Formular selektieren und in eine Variable speichern
var form = document.querySelector('.j-form');
//Eventlistener hinzufügen der vor dem abschicken abgefragt wird
form.addEventListener('submit',function(event){
    
    var isValid = true;  // Variable die sagt das alle Felder richtig ausgefüllt sind


    var isValidEmail = function(val_e){  
    if(val_e.indexOf('@') === -1){   // steht das @ an der letzten stelle
            return false;
        }

        // @ Nicht an erster oder letzter stelle
        if(val_e.charAt(0) === '@' || val_e.charAt(email.length -1) === "@"){ // Ein @ an der (0) also ersten Stelle oder an der letzten Stelle (email.length -1)
            return false;
        }

        //maximal ein @ Zeichen
        var first_at = email.indexOf('@'); 
        if(email.indexOf('@',first_at +1 )  !== -1){ // Keine zweites @ vorhanden
            return false;
        }

        return true;

    };

    var email_input = document.querySelector('#email');
    var email = email_input.value;     // ist die eingabe falsch wird eine Fehlermeldung ausgegeben.
    if(!(isValidEmail(email) || email === ' ')) {  //ist die eingabe invalid oder es wurde nichts eingegeben    
        document.querySelector('.error-email').textContent = 'There is only one @ allowed and this should not be on first position';  // fehlertext wird ausgegeben
        email_input.value = ''; //eingabe feld wird geleert
        isValid = false
    }else{
        document.querySelector('.error-email').textContent = '';  //wenn eingabe korrekt wird das fehler div entleert
    }

    // ist das Formular nicht Valid wird es nicht abgeschickt
    if(!isValid){
        event.preventDefault();
    }

});

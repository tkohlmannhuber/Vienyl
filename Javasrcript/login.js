// FORM VALIDIERUNG


//Formular selektieren und in eine Variable speichern
var form = document.querySelector('.j-form');
//Eventlistener hinzufügen der vor dem abschicken abgefragt wird
form.addEventListener('submit',function(event){
    
    var isValid = true;  // Variable die sagt das alle Felder richtig ausgefüllt sind



// EINGABEFELD LEER FUNKTION 


    // Variable mit Function die kontrolliert ob die Felder leer sind 
    var isEmpty = function(empty){
        if(empty && empty.trim().length >0){   //Kontrolliert ob vor und nach dem whitespace noch was übrig 
            return false;
        }else{
            return true;
        }
        
    };



    // EMAIL FUNKTION 

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

    

    //TEL FUNKTION 


    var isValidTel = function(tel){
        var erlaubt = '+1234567890'; // String mit allen erlaubten Zeichen

        for(var i = 0; i < tel.length;i++){ // Mit der Schleife wird das eingabefeld durchgegagen
            var a = tel.charAt(i); // Hier werden alle Zeichen aus der Schleife in die Variable a gespeichert
            if(erlaubt.indexOf(a) === -1){  // Wenn ein unerlaubtes zeichen dabei ist - return false
                return false
            }
        }
        // Suche nach einem + nach der ersten (0) Stelle also (1) 
        if(tel.indexOf('+', 1) !== -1){ // Überprüfung ob das + an erster stelle ist.
            return false; // Ist das + nicht an erster stelle - return False
        }

        return true;
    };




    //PASSWORT FUNKTION 

    var isValidPw = function(){ // function für passwort validierung erstellen 
        if(val_firstpw === val_secondpw){ // wenn die value vom einem Passwort mit dem anderen übereinstimmt 
            return true; // passwort korrekt 
        }

        if(val_firstpw.length < 8 || val_secondpw.length < 8){ // wenn eines der beiden passwörter kürzer als 8 zeichen ist 
            return false; // passwort falsch 
        }

        return true

        
    }




    var firstname_input = document.querySelector('#firstname');
    var val_firstname = firstname_input.value;
    if(isEmpty(val_firstname)){   // ist die eingabe falsch wird eine Fehlermeldung ausgegeben.
        document.querySelector('.error-firstname').textContent = "Enter your firstname";
        isValid = false;
    }else{
        document.querySelector('.error-firstname').textContent = "";
    }

    var lastname_input = document.querySelector('#lastname');
    var val_lastname = lastname_input.value;
    if(isEmpty(val_lastname)){   // ist die eingabe falsch wird eine Fehlermeldung ausgegeben.
        document.querySelector('.error-lastname').textContent = "Enter your lastname";
        isValid = false;
    }else{
        document.querySelector('.error-lastname').textContent = "";
    }

    var email_input = document.querySelector('#email');
    var email = email_input.value;     // ist die eingabe falsch wird eine Fehlermeldung ausgegeben.
    if(!(isValidEmail(email) || email === ' ')) {  //ist die eingabe invalid oder es wurde nichts eingegeben    
        document.querySelector('.error-email').textContent = 'There is only one @ allowed and this should not be on first position';  // fehlertext wird ausgegeben
        email_input.value = ''; //eingabe feld wird geleert
        isValid = false
    }else{
        document.querySelector('.error-email').textContent = '';  //wenn eingabe korrekt wird das fehler div entleert
    }

    
    var tel_input = document.querySelector('#tel');
    var tel = tel_input.value;
    if((!isValidTel(tel) || tel === ' ')){  // ist die eingabe falsch wird eine Fehlermeldung ausgegeben.
        document.querySelector('.error-tel').textContent = 'There are only numbers from 0 - 9 and only one + on the first Position allowed';
        tel_input.value = '';
        isValid = false;
    }else{
        document.querySelector('.error-tel').textContent = '';
    }

    var first_password = document.querySelector('#password'); // Passwort selektieren 
    var val_firstpw = first_password.value; // Value des inputfeldes holen 
    var second_password = document.querySelector('#password-confirm'); // Zweites Passwort selektieren 
    var val_secondpw = second_password.value; // Value des inputfeldes holen 

    if(!isValidPw() === true || (val_firstpw === "" || val_secondpw === "")){ // Wenn die Passwort kontrollfunktion nicht true ist oder nichts im inputfeld steht 
        document.querySelector('.error-password').textContent = " Password is not the same "; // wird eine Fehlermeldung ausgegeben
        document.querySelector('.error-password-confirm').textContent = " Password is not the same"; // wird eine Fehlermeldung ausgegeben
        isValid = false
    }else{
        document.querySelector('.error-password').textContent = "";
        document.querySelector('.error-password-confirm').textContent = "";
    }

    


    var agb = document.querySelector('#agbs');
    if(!agb.checked){   //wurden die agbs nicht angekreuzt wird eine fehlermeldung ausgegeben
        document.querySelector('.error-agbs').textContent = 'You need to check the AGB\'s';
        isValid = false;
    }else{
        document.querySelector('.error-agbs').textContent = '';

    }

    

    // ist das Formular nicht Valid wird es nicht abgeschickt
    if(!isValid){
        event.preventDefault();
    }

});



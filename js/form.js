const elForm = document.getElementById('formWrite');
const elEmail = document.getElementById('email');
const elDestinationSubject = document.getElementById('destinationSubject');
const elOutput = document.getElementById('output');


function emailSending(event){
    // Använd value när man hämtar från input i formuläret
    const Email = elEmail.value;
    const TheConfession = elDestinationSubject.value;

    console.log("Textfält i funktion " + Email +""+ TheConfession);

    elOutput.textContent = "Thank you we will get back to ASAP to "+Email +"!!";


    // Submittar inte formuläret
    event.preventDefault(); //
}

elForm.addEventListener('submit', emailSending);
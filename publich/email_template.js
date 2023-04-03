window.addEventListener("load",function(){
const contentPlaceholder = document.getElementById('content-placeholder');
const sendEmailButton = document.getElementById('send-email-button');
let html;
// Lade den Inhalt der email_template.html Datei
fetch('email_template.html')
.then(response => response.text())
.then(data => {
//  Skript zum Senden der E-Mail
contentPlaceholder.innerHTML = data;
html= data;
})
.catch(error => console.error(error));

  sendEmailButton.addEventListener('click', (e) => {
    fetch('/send-email', {
      method: 'POST',

    })
      .then(response => {

        if (response.ok) {
          console.log('E-Mail wurde erfolgreich gesendet');
        }  else if (response.status == 500){
          console.error('Fehler beim Senden der E-Mail, Status:',response.status);
        }
        else  {
          console.error('Fehler beim Senden der E-Mail:', response.statusText);
        }
      })
      .catch(error => console.error('Fehler beim Senden der E-Mail:', error));

  });


})






    
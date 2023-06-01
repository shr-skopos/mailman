// Hier können Sie den Swal-Code verwenden, um benutzerdefinierte Benachrichtigungen zu erstellen
window.addEventListener("load", function () {
  const contentPlaceholder = document.getElementById("content-placeholder");
  const sendEmailButton    = document.getElementById("send-email-button");

  let html;
  
  // Lade den Inhalt der email_template.html Datei
  fetch("email_template.html")
    .then((response) => response.text())
    .then((data) => {
      //  Skript zum Senden der E-Mail
      contentPlaceholder.innerHTML = data;
      html = data;
    })
    .catch((error) => console.error(error));

  sendEmailButton.addEventListener("click", (e) => {
    fetch("/send-email", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          console.log("E-Mail wurde erfolgreich gesendet");
          Swal.fire({
            title: "Erfolgreich !",
            text: "E-Mail wurde erfolgreich gesendet.",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else if (response.status == 500) {
          console.error("Fehler beim Senden der E-Mail, Status:",response.status);
          Swal.fire({
            title: `Fehler beim Senden der E-Mail. Status: 500`,
            text: "Bitte versuchen Sie es später erneut.",
            icon: "error",
          });
        } else {
          console.error("Fehler beim Senden der E-Mail:", response.statusText);
          Swal.fire({
            title: `Fehler beim Senden der E-Mail.`,
            text: "Bitte versuchen Sie es später erneut.",
            icon: "error",
          });
        }
      })
      .catch((error) => console.error("Fehler beim Senden der E-Mail:", error));
  });
});

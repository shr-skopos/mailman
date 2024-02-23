const contentCleverReachPlaceholder = document.getElementById("content-cleverreach-placeholder");
const contentQualtricsPlaceholder = document.getElementById("content-qualtrics-placeholder");
const sendEmailButton = document.getElementById("send-email-button");
const cleverreach = document.getElementById("cleverreach");
const qualtrics = document.getElementById("qualtrics");

const getCleverReachTemplate = () => {
    fetch("cleverreach_template/cleverreach_template.html")
        .then((response) => response.text())
        .then((data) => {
            contentCleverReachPlaceholder.innerHTML = data;
            sendEmailButton.setAttribute("data-template", "cleverreach"); // Setzen Sie den Wert für das Datenattribut
        })
        .catch((error) => console.error(error));
};

const getQualtricsTemplate = () => {
    fetch("qualtrics_template/qualtrics_template.html")
        .then((response) => response.text())
        .then((data) => {
            contentQualtricsPlaceholder.innerHTML = data;
            sendEmailButton.setAttribute("data-template", "qualtrics"); // Setzen Sie den Wert für das Datenattribut
        })
        .catch((error) => console.error(error));
};

cleverreach.onclick = () => {
    getCleverReachTemplate();
};

qualtrics.onclick = () => {
    getQualtricsTemplate();
};

sendEmailButton.addEventListener("click", (e) => {
    const template = sendEmailButton.getAttribute("data-template"); // Abrufen des Werts des Datenattributs
    if (!template) {
        console.error("Template nicht ausgewählt");
        return;
    }

    fetch("/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ template: template })
    })
    .then((response) => {
        if (response.ok) {
            Swal.fire({
                title: "Erfolgreich!",
                text: "E-Mail wurde erfolgreich gesendet.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } else {
            Swal.fire({
                title: "Fehler beim Senden der E-Mail. Status: " + response.status,
                text: "Bitte versuchen Sie es später erneut.",
                icon: "error",
            });
        }
    })
    .catch((error) => {
        console.error("Fehler beim Senden der E-Mail:", error);
    });
});

const sendEmailButton = document.getElementById("send-email-button");
const contentCleverReachPlaceholder = document.getElementById("content-cleverreach-placeholder");
const contentQualtricsPlaceholder = document.getElementById("content-qualtrics-placeholder");
const cleverreach = document.getElementById("cleverreach");
const qualtrics = document.getElementById("qualtrics");
const h1 = document.getElementById("h1");

let elementId = '';
const defaultButtonText = sendEmailButton.innerText;

// Funktion zum Aktivieren des Buttons
const enableSendButton = () => {
    sendEmailButton.disabled = false;
    sendEmailButton.innerText = defaultButtonText;
};

// Funktion zum Deaktivieren des Buttons
const disableSendButton = () => {
    sendEmailButton.disabled = true;
    sendEmailButton.innerText = "Please select a template";
};

disableSendButton(); // Button standardmäßig deaktivieren

const getTemplate = (elem, attr) => {
    fetch(elem)
        .then((response) => response.text())
        .then((data) => {
            h1.innerHTML = "";
            contentCleverReachPlaceholder.innerHTML = data;
            contentQualtricsPlaceholder.innerHTML = '';
            sendEmailButton.setAttribute("data-template", attr);
            enableSendButton(); // Template ausgewählt, Button aktivieren
        })
        .catch((error) => console.error(error));
};

// Event-Listener für den Klick auf cleverreach
cleverreach.onclick = (elem) => {
    const textContent = elem.target.textContent.trim();
    const itemsArray = textContent.split(/\s*[\r\n]+\s*/);
    const itemsTextArray = itemsArray[0].trim().toLowerCase();

    if (cleverreach.id === 'cleverreach' && itemsTextArray !== 'cleverreach') {
        getTemplate(cleverreach.id + "/" + itemsTextArray + ".html", itemsTextArray);
        elementId = cleverreach.id;
    }
};

// Event-Listener für den Klick auf qualtrics
qualtrics.onclick = (elem) => {
    const textContent = elem.target.textContent.trim();
    const itemsArray = textContent.split(/\s*[\r\n]+\s*/);
    const itemsTextArray = itemsArray[0].trim().toLowerCase();

    if (qualtrics.id === 'qualtrics' && itemsTextArray !== 'qualtrics') {
        getTemplate(qualtrics.id + "/" + itemsTextArray + ".html", itemsTextArray);
        elementId = qualtrics.id;
    }
};

// Event-Listener für den Klick auf "Send Email" Button
sendEmailButton.addEventListener("click", (e) => {
    const template = sendEmailButton.getAttribute("data-template");
    const id = elementId;

    if (!template || !id) {
        console.error("Template or element ID not selected");
        return;
    }

    fetch("/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ template: template, id: id }),
    })
        .then((response) => {
            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Email sent successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            } else {
                Swal.fire({
                    title: "Error sending email. Status: " + response.status,
                    text: "Please try again later.",
                    icon: "error",
                });
            }
        })
        .catch((error) => {
            console.error("Error sending email:", error);
        });
});

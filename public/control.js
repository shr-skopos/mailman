const contentCleverReachPlaceholder = document.getElementById("content-cleverreach-placeholder");
const contentQualtricsPlaceholder = document.getElementById("content-qualtrics-placeholder");
const sendEmailButton = document.getElementById("send-email-button");
const cleverreach = document.getElementById("cleverreach");
const qualtrics = document.getElementById("qualtrics");
const h1 = document.getElementById("h1");

const getCleverReachTemplate = () => {
    fetch("cleverreach_template/cleverreach_template.html")
        .then((response) => response.text())
        .then((data) => {
            h1.innerHTML = "CleverReach";
            contentCleverReachPlaceholder.innerHTML = data;
            contentQualtricsPlaceholder.innerHTML = '';
            sendEmailButton.setAttribute("data-template", "cleverreach");
        })
        .catch((error) => console.error(error));
};

const getQualtricsTemplate = () => {
    fetch("qualtrics_template/qualtrics_template.html")
        .then((response) => response.text())
        .then((data) => {
            contentQualtricsPlaceholder.innerHTML = data;
            contentCleverReachPlaceholder.innerHTML = '';
            sendEmailButton.setAttribute("data-template", "qualtrics");
            h1.innerHTML = "Qualtrics";
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
    const template = sendEmailButton.getAttribute("data-template");
    if (!template) {
        console.error("Template not selected");
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

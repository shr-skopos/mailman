# Mailman 
- Mailman is a local development tool that makes it easy to make changes to HTML files and send the content to multiple users simultaneously, making it a useful tool for team collaboration.

# Structure:
public/ - directory containing the public files of the application, including the HTML email template and the CSS styles

config/ - directory containing the configuration files for the application

config/config.env - configuration file containing environment variables for SMTP settings, email sender and recipient

package.json - file containing the project dependencies and scripts

server.js - main server file for the application, contains the server setup and routing logic

``` 
mailman/
├── config/
│ └── config.env
├── public/
│ ├── email_template.html
│ ├── email_template.js
│ ├── style.css
│ └── index.html
├── node_modules/
│ ├── dotenv-extended/
│ ├── nodemailer/
│ └── express/
├── server.js
├── package-lock.json
└── package.json
```

#


## Instructions for Installation

1. Clone the repository to your local machine using the command: `git clone <repository-url>`.

2. Navigate to the cloned directory using the command: `cd mailman`.

3. Install the required dependencies using the command: `npm install`.

4. Start the MailHog server to act as the local mail server. You can download and run MailHog by following the instructions in the [MailHog GitHub repository](https://github.com/mailhog/MailHog) OR (https://www.npmjs.com/package/mailhog).

5. Create a `.env` file in the `config` folder and set the following environment variables:
   - `SMTP_HOST`: the SMTP host of your local MailHog server (e.g., `localhost`).
   - `SMTP_PORT`: the SMTP port number of your local MailHog server (e.g., `1025`).
   - `MAIL_FROM`: the email address that the email will be sent from.
   - `COMMA_SEPARATED_LIST_OF_EMAILS`: a comma-separated list of email addresses that the email will be sent to.
   - `MAIL_SUBJECT`: the subject of the email.
   - `SERVER_PORT` (optional): the port number for the server. If not set, the server will use port 3000.

6. Start the server using the command: `npm start` or `node server.js`.

7. Open a web browser and go to `http://localhost:3000`.

8. Click on the "Send Email" button to send an email. The email will be intercepted and displayed by the MailHog server.

## Dependencies

- [dotenv-extended](https://www.npmjs.com/package/dotenv-extended)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [express](https://www.npmjs.com/package/express)
- [MailHog](https://github.com/mailhog/MailHog)

That's it! You should now be able to use Mailman to send emails locally using the MailHog server to intercept and display the emails.

# Credits

This project was created by [Saied Hr.].


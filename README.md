# Mailman 
- Mailman is a local development tool that makes it easy to make changes to HTML files and send the content to multiple users simultaneously, making it a useful tool for team collaboration.

# Structure:
public/ - directory containing the public files of the application, including the HTML email template and the CSS styles

config/ - directory containing the configuration files for the application

config/config.env - configuration file containing environment variables for SMTP settings, email sender and recipient

package.json - file containing the project dependencies and scripts

server.js - main server file for the application, contains the server setup and routing logic

#

``` 
mailman/
│
├── config/
│ └── config.env
├── public/
│ ├── email_template.html
│ ├── email_template.js
│ ├── style.css
│ └── index.html
├── node_modules/
│ ├── dotenv-extended/
│ ├── express/
│ ├── mailhog/
│ ├── nodemailer/
│ └── sweetalert2/
├── server.js
├── package-lock.json
└── package.json
```

#

## Instructions for Installation

1. Clone the repository to your local machine using the command: `git clone <repository-url>`.

2. Navigate to the cloned directory using the command: `cd mailman`.

3. Install the required dependencies using the command: `npm install`.

4. Start the MailHog server to act as the local mail server. You have two options to install MailHog:

  - Manually install MailHog by following the instructions in the MailHog GitHub repository https://github.com/mailhog/MailHog OR https://www.npmjs.com/package/mailhog.
   
   - Alternatively, you can install MailHog using npm by running the command: `npm install -g mailhog`. Once installed, you can start MailHog by running the command: `MailHog`.

5. Create a `.env` file in the `config` folder and set the following environment variables:
   - `SMTP_HOST`: the SMTP host of your local MailHog server (e.g., `localhost`).
   - `SMTP_PORT`: the SMTP port number of your local MailHog server (e.g., `1025`).
   - `MAIL_FROM`: the email address that the email will be sent from.
   - `MAIL_TO`: a comma-separated list of email addresses that the email will be sent to.
   - `MAIL_CC`: a comma-separated list of email addresses that will be included in the CC field of the email.
   - `MAIL_SUBJECT`: the subject of the email.
   - `SERVER_PORT` (optional): the port number for the server. If not set, the server will use port 3000.

6. Starting MailHog. To start MailHog, follow these steps:
- Open a terminal or command prompt.
- Use the following command to locate the "MailHog" directory on your system:
  - Mac - Open the terminal and run the following command: [find / -type d -name "MailHog" 2>/dev/null](https://gist.github.com/onerinas/d5e777ceb9cf861aaa6a425d2ba6e952)
  - Windows - Open the Command Prompt and run the following command: [dir /s /b "MailHog"](https://github.com/mailhog/MailHog-MTA/blob/master/config/config.go)
- Navigate to the "MailHog" directory using the cd command.
   - Check if there is an executable file named "MailHog" or "MailHog.exe" in the directory.
   - Start MailHog based on your operating system:
   - Mac and Linux: Run the following command in the terminal: [./MailHog](https://github.com/mailhog/MailHog)
   - Windows: Run the following command in the command prompt: [MailHog.exe](https://github.com/mailhog/MailHog)
 - Once MailHog is running, you can access the web interface by opening your web browser and visiting http://localhost:8025. This interface allows you to view and inspect incoming emails.

7. Start the server using the command: `npm run start` or `node server.js`.

8. Open a web browser and go to http://localhost:3000.

9. Click on the "Send Email" button to send an email. The email will be intercepted and displayed by the MailHog server.

## Dependencies

- [dotenv-extended](https://www.npmjs.com/package/dotenv-extended)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [express](https://www.npmjs.com/package/express)
- [MailHog](https://github.com/mailhog/MailHog)

That's it! You should now be able to use Mailman to send emails locally using the MailHog server to intercept and display the emails.

#

<img src="./public/images/readme.webp" alt="Alt-Text" width="600" height="400">


# Credits

This project was created by [Saied Hr.](https://github.com/shr-skopos/mailman).

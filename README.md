# Mailman 
- Mailman is a local development tool that makes it easy to make changes to HTML files and send the content to multiple users simultaneously, making it a useful tool for team collaboration.

# Structure:
publich/ - directory containing the public files of the application, including the HTML email template and the CSS styles

config/ - directory containing the configuration files for the application

config/config.env - configuration file containing environment variables for SMTP settings, email sender and recipient

package.json - file containing the project dependencies and scripts

server.js - main server file for the application, contains the server setup and routing logic

``` 
mailman/
├── config/
│   └── config.env
├── publich/
│   ├── email_template.html
│   ├── email_template.js
│   ├── style.css
│   └── index.html
├── node_modules/
│   ├── dotenv-extended/
│   ├── nodemailer/
│   └── express/
├── server.js
├── package-lock.json
└── package.json
```

#

## **Instruction for installation:**

1- Clone the repository to your local machine using the command: git clone 

2- Navigate to the cloned directory using the command: cd mailman.

3- Install the required dependencies using the command: npm install.

4- Create a .env file in the root directory of the project and set the following environment variables:
- SMTP_HOST: the SMTP host of your email provider.
- SMTP_USER: the email address used to send emails.
- SMTP_PASS: the password for the email address used to send emails.
- MAIL_FROM: the email address that the email will be sent from.
- MAIL_TO: the email address that the email will be sent to.
- SERVER_PORT (optional): the port number for the server. If not set, the server will use port 3000.
- SMTP_PORT (optional): the SMTP port number for your email provider. If not set, the server will use port 587 or 443 or 465 or 25.

5- Start the server using the command: npm server.js.

6- Open a web browser and go to http://localhost:3000.

7- Click on the "Send Email" button to send an email.

# installation:
- [dotenv-extended](https://www.npmjs.com/package/dotenv-extended/)

- [nodemailer](https://www.npmjs.com/package/nodemailer/)

- [express](https://www.npmjs.com/package/express/)

# 

That's it! You should now be able to use Mailman to send emails locally.


![Alt-Text](https://res.cloudinary.com/practicaldev/image/fetch/s--67HezzSk--/c_imagga_scale,f_auto,fl_progressive,h_900,q_66,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c03rjpxrkj8yo87pbn3d.gif)






import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';

dotenv.config({ path: './config/config.env' });

const APP = express();
const IP = '127.0.0.1';
const PORT = process.env.SERVER_PORT || 3000;
const SMTP_PORT = process.env.SMTP_PORT || 1025; // Update the default SMTP port

APP.use(express.static('public'));

APP.post('/send-email', async (req, res) => {
  try {
    const emailContent = await fs.readFile('public/email_template.html', 'utf8');
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Update the SMTP host
      port: SMTP_PORT,
      ignoreTLS: true, // TLS deaktivieren
    });

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.COMMA_SEPARATED_LIST_OF_EMAILS.split(','), // Use split() to convert the comma-separated string to an array
      subject: process.env.MAIL_SUBJECT,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    res.send('E-Mail gesendet!');
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    res.status(500).send('Fehler beim Senden der E-Mail!');
  }
});

APP.listen(PORT, IP, () => console.log(`http://${IP}:${PORT}`));





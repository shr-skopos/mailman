import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';

dotenv.config({ path: './config/config.env' });

// express() = Aufruf der Hauptfunktion des Frameworks
const APP = express();
const IP = "127.0.0.1";
const PORT = process.env.SERVER_PORT || 3000;
const smtpPort = process.env.SMTP_PORT || 443 || 465 || 25;

// Verzeichnis für statische Dateien
APP.use(express.static('public'));

// Endpunkt zum Senden der E-Mail
APP.post('/send-email', async (req, res) => {
    try {
        // Lade den Inhalt der email_template.html-Datei
        const emailContent = await fs.readFile('public/email_template.html', 'utf8');
        
        // Konfiguration für den Mail-Transport
        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_HOST || 'gmail',
            port:smtpPort,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Konfiguriere die E-Mail-Optionen
        const mailOptions = {
            from:  process.env.MAIL_FROM,
            to: process.env.COMMA_SEPARATED_LIST_OF_EMAILS.slice(","),
            subject: 'Ein Beispielprojekt, das Mailmann von Saied Hr :)',
            html: emailContent,
        };

        // // Versende die E-Mail
        await transporter.sendMail(mailOptions);

        // Senden Sie eine Bestätigungsantwort an den Client
        res.send('E-Mail gesendet!');

    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        res.status(500).send('Fehler beim Senden der E-Mail!');
    }
});

// Server starten
APP.listen(PORT, IP, () => console.log(`http://${IP}:${PORT}`))



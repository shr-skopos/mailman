import express from 'express';
import dotenv from 'dotenv';
import { promises as fs } from 'fs';

dotenv.config({ path: './config/config.env' });

// express() = Aufruf der Hauptfunktion des Frameworks
const APP = express();
const IP = "127.0.0.1";
const PORT = process.env.SERVER_PORT || 8000;
const smtpPort = process.env.SMTP_PORT || 443 || 465 || 25;

// Verzeichnis für statische Dateien
APP.use(express.static('publich'));

// Endpunkt zum Senden der E-Mail
APP.post('/send-email', async (req, res) => {
    try {
        // Lade den Inhalt der email_template.html-Datei
        const emailContent = await fs.readFile('publich/email_template.html', 'utf8');
        res.send(emailContent);

    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
    }
});

// Server starten
APP.listen(PORT, IP, () => console.log(`http://${IP}:${PORT}`))
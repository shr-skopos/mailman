import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

// express() = Aufruf der Hauptfunktion des Frameworks
const APP = express();
const IP = "127.0.0.1";
const PORT = process.env.SERVER_PORT || 8000;
const smtpPort = process.env.SMTP_PORT || 443 || 465 || 25;

console.log(smtpPort)

// Server starten
APP.listen(PORT, IP, () => console.log(`http://${IP}:${PORT}`))
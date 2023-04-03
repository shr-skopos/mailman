import express from 'express';

// express() = Aufruf der Hauptfunktion des Frameworks
const APP = express();
const IP = "127.0.0.1";
const PORT = 8000;
console.log("Hi my Teams")

// Server starten
APP.listen(PORT, IP, () => console.log(`http://${IP}:${PORT}`))
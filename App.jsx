import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Twoja skonfigurowana baza danych
const firebaseConfig = {
  apiKey: "AIzaSyDeQJ43kDvwmqCDUFcJUCiKb3YMQOz0rhE",
  authDomain: "pandyhub-cafbf.firebaseapp.com",
  projectId: "pandyhub-cafbf",
  storageBucket: "pandyhub-cafbf.firebasestorage.app",
  messagingSenderId: "225685206678",
  appId: "1:225685206678:web:c0d81274e6392979d734b7",
  measurementId: "G-5EQXZ361L7"
};

// Inicjalizacja
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>🐼 PandyHub</h1>
      <p>Witaj w naszej wspólnej aplikacji!</p>
      <div style={{ marginTop: '20px', padding: '20px', background: '#f0f0f0', borderRadius: '15px' }}>
        <h3>Tu wkrótce pojawi się mapa naszej lokalizacji</h3>
        <p>Pracujemy nad tym, żebyśmy zawsze wiedzieli, gdzie jesteśmy!</p>
      </div>
    </div>
  );
}

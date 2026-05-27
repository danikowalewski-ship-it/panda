import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeQJ43kDvwmqCDUFcJUCiKb3YMQOz0rhE",
  authDomain: "pandyhub-cafbf.firebaseapp.com",
  projectId: "pandyhub-cafbf",
  storageBucket: "pandyhub-cafbf.firebasestorage.app",
  messagingSenderId: "225685206678",
  appId: "1:225685206678:web:c0d81274e6392979d734b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const [status, setStatus] = useState("Ładuję dane...");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "koty", "status"), (doc) => {
      if (doc.exists()) {
        setStatus(JSON.stringify(doc.data()));
      } else {
        setStatus("Baza pusta");
      }
    });
    return () => unsub();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🐼 Panda Hub</h1>
      <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '10px' }}>
        <h3>Status w chmurze:</h3>
        <p>{status}</p>
      </div>
    </div>
  );
}

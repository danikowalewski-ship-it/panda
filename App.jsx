import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h1>🐼 PandyHub</h1>
      
      {/* Nawigacja */}
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <button onClick={() => setActiveTab('home')}>🏠</button>
        <button onClick={() => setActiveTab('mapa')}>📍</button>
        <button onClick={() => setActiveTab('zadania')}>✅</button>
        <button onClick={() => setActiveTab('quiz')}>❓</button>
      </div>

      {/* Treść */}
      <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '15px' }}>
        {activeTab === 'home' && <h2>Witaj w PandyHub! Co dziś robimy?</h2>}
        {activeTab === 'mapa' && <h2>Nasza lokalizacja</h2>}
        {activeTab === 'zadania' && <h2>Wspólne zadania</h2>}
        {activeTab === 'quiz' && <h2>Quiz dla zakochanych</h2>}
      </div>
    </div>
  );
}

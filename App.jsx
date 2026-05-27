import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mood, setMood] = useState('Neutralny');
  const [tasks, setTasks] = useState(['Zarezerwować stolik', 'Kupić kwiaty']);
  const [dateIdeas] = useState(['Spacer w parku', 'Wieczór filmowy', 'Wspólne gotowanie']);

  return (
    <div style={{ padding: '15px', fontFamily: 'Segoe UI, sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#ff6b81' }}>🐼 PandyHub</h1>
      
      {/* Nawigacja */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px', background: '#f8f8f8', padding: '10px', borderRadius: '10px' }}>
        <button onClick={() => setActiveTab('home')}>🏠</button>
        <button onClick={() => setActiveTab('mapa')}>📍</button>
        <button onClick={() => setActiveTab('zadania')}>✅</button>
        <button onClick={() => setActiveTab('randki')}>💡</button>
      </div>

      {/* Ekran główny z nastrojem */}
      {activeTab === 'home' && (
        <div style={{ textAlign: 'center' }}>
          <h2>Twój nastrój: {mood}</h2>
          <select onChange={(e) => setMood(e.target.value)}>
            <option>Szczęśliwy</option>
            <option>Kochający</option>
            <option>Neutralny</option>
            <option>Potrzebuję przytulenia</option>
          </select>
        </div>
      )}

      {/* Mapa (Tutaj docelowo wstawimy API Google Maps) */}
      {activeTab === 'mapa' && (
        <div>
          <h2>Lokalizacja</h2>
          <div style={{ height: '300px', background: '#e1e1e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Widok Mapy Google
          </div>
        </div>
      )}

      {/* Zadania */}
      {activeTab === 'zadania' && (
        <div>
          <h2>Wspólne cele</h2>
          {tasks.map((t, i) => <p key={i} style={{ borderBottom: '1px solid #ccc' }}>{t}</p>)}
        </div>
      )}

      {/* Pomysły na randki */}
      {activeTab === 'randki' && (
        <div>
          <h2>Pomysły na randki</h2>
          {dateIdeas.map((idea, i) => <button key={i} style={{ display: 'block', width: '100%', margin: '5px 0' }}>{idea}</button>)}
        </div>
      )}
    </div>
  );
}

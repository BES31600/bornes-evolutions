import React from 'react';

export default function HomePage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Bornes Evolutions Services</h1>
      <p>Mise en relation avec des installateurs IRVE agréés Ze-ready en Haute-Garonne (Occitanie)</p>
      <h2>Nos services</h2>
      <ul>
        <li>Particuliers : bornes à domicile avec aides</li>
        <li>Professionnels : solutions pour flottes et parkings</li>
        <li>Syndics : accompagnement sur mesure</li>
      </ul>
      <h2>Contact</h2>
      <p>Email : contact@bornes-evolutions.fr</p>
    </main>
  );
}

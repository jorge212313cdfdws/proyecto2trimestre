import React from "react";

function RSSPage() {
  return (
    <div>
      <h1>Últimas Noticias de Fitness y Salud</h1>
      <p>Aquí puedes ver noticias actualizadas sobre salud, ejercicio y nutrición.</p>

      <ul>
        <li>
          <a href="https://www.canarias7.es/rss/" target="_blank" rel="noopener noreferrer">
            Noticias Canarias7 (Salud y Deporte)
          </a>
        </li>
        <li>
          <a href="https://www.menshealth.com/es/rss/all.xml" target="_blank" rel="noopener noreferrer">
            Men's Health España (Fitness y Nutrición)
          </a>
        </li>
        <li>
          <a href="https://www.womenshealthmag.com/rss/all.xml" target="_blank" rel="noopener noreferrer">
            Women's Health (Ejercicio y Bienestar)
          </a>
        </li>
        <li>
          <a href="https://www.runnersworld.com/rss/all.xml" target="_blank" rel="noopener noreferrer">
            Runner's World (Running y Entrenamiento)
          </a>
        </li>
        <li>
          <a href="https://www.bodybuilding.com/rss/articles/all" target="_blank" rel="noopener noreferrer">
            Bodybuilding.com (Rutinas y Suplementos)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RSSPage;

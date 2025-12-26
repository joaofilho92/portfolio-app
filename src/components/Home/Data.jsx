import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Joao Batista
      </h1>

      <h3 className="home__subtitle">
        Sviluppatore Delphi
      </h3>

      <p className="home__description">
        Sviluppatore Delphi con esperienza nello sviluppo di
        <strong> sistemi gestionali aziendali</strong>.
        <br />
        Applicazioni desktop e web in <strong>ambiente enterprise</strong>,
        basato a Rieti, Italia. 📍
      </p>

      <a
        href="https://www.linkedin.com/in/joao-batista-sviluppatoredelphi/?locale=it_IT"
        className="button button--flex"
      >
        Linkedin
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ marginLeft: "16px", verticalAlign: "middle", marginTop: "-4px" }}
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16 4 0 4.74 2.63 4.74 6.05V24h-4v-8.63c0-2.06-.04-4.71-2.87-4.71-2.88 0-3.32 2.24-3.32 4.56V24h-4V8z" />
        </svg>

      </a>
    </div>
  );
};

export default Data;

import React from 'react';
import "./About.css";
import CV from "../../assets/Joao_Batista_Lopes_Filho_CV.pdf";
import Test from "../../assets/Teste_Psico_Attitudinale.pdf";


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">La mia introduzione</span>

      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            Mi chiamo Joao Batista e risiedo nella provincia di Rieti, Lazio. Sono uno
            <strong> sviluppatore Delphi</strong> con quasi <strong> 3 anni di esperienza </strong>
            nello sviluppo di <strong>sistemi gestionali aziendali</strong> utilizzati per la
            gestione dei processi interni e dei dati operativi.
            <br /><br />
            Lavoro quotidianamente con <strong>RAD Studio</strong>, sviluppando applicazioni
            <strong> desktop e web</strong> tramite <strong>VCL</strong>,
            <strong> DMVCFramework</strong> e <strong>UniGUI</strong>, in contesti enterprise
            strutturati.
          </p>
          <p className="about__description">
            Ho esperienza nella progettazione e implementazione di
            <strong> reportistica personalizzata</strong> tramite <strong>FastReport</strong>,
            nella gestione di <strong>database relazionali</strong> e
            nell’integrazione di <strong>servizi REST</strong>.
            <br /><br />
            Mi occupo dello sviluppo di nuove funzionalità e della
            <strong> manutenzione evolutiva</strong> di applicazioni esistenti, con particolare
            attenzione a <strong>stabilità</strong>, <strong>affidabilità</strong> e
            <strong> qualità del codice</strong>.
          </p>
          <div className="button__container">
            <a download="" href='https://wa.me/393761155010' className="button button--flex">

              Contattami
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About

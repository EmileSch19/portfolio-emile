// src/components/Home.jsx
import profilImg from "../assets/emile.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-img">
        {/* Mets une image dans public/profil.png ou change le chemin */}
        <img src={profilImg} alt="Photo d'Emile" />
      </div>

      <div className="home-content">
        <h1>
          Salut, c&apos;est <span>Emile</span> DUFOULON
        </h1>

        <h3 className="typing-text">
          Je suis <span></span>
        </h3>

        <p>
           Étudiant en Master 1 Web & Mobile Development à l’ESTIAM Lyon, passionné
 par le développement moderne. Je cherche une alternance
pour contribuer à des projets
 techniques ambitieux, en mettant à profit mes compétences
 en React, Node.js et bases de données.
        </p>

        <div className="social-icons">

  <a href="https://github.com/EmileSch19/" target="_blank">
    <i className="fa-brands fa-github"></i>
  </a>

  <a href="https://www.linkedin.com/in/emile-essomba-dufoulon/">
    <i className="fa-brands fa-linkedin"></i>
  </a>

  <a href="emile.dufoulon@outlook.com">
    <i className="fa-solid fa-envelope"></i>
  </a>

  <a href="tel:+33625734167">
    <i className="fa-solid fa-phone"></i>
  </a>

</div>


        <a
    href="/cv-emile-developpeur.pdf"
    className="btn btn-secondary"
    download
  >
    Télécharger mon CV
  </a>
      </div>
    </section>
  );
}

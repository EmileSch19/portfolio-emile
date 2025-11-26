// src/components/Contact.jsx

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour ton message, je te répondrai dès que possible 🙂");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="contact-subtitle">
        Tu as un projet, une question ou envie d&apos;échanger ? Écris-moi 📩
      </p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ton nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ton.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Parle-moi de ton projet ou de ton besoin…"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn contact-btn">
            Envoyer
          </button>
        </form>

        <div className="contact-info">
          <h3>Infos</h3>
          <p>
            Je suis disponible pour des projets front-end, des collaborations
            et des opportunités d&apos;alternance ou de stage.
          </p>

          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>emile.dufoulon@outlook.com</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Basé en France</span>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/emile-essomba-dufoulon/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
              <a
                href="https://github.com/EmileSch19/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

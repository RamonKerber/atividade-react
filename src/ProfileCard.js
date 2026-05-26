import { useState } from "react";
import "./ProfileCard.css";

function ProfileCard() {
  const [likes, setLikes] = useState(0);

  function curtirPerfil() {
    setLikes(likes + 1);
  }

  return (
    <div className="card">
      <img
        src="https://i.pravatar.cc/250"
        alt="Perfil"
        className="foto"
      />

      <h2>Ramon Lins Kerber</h2>

      <p className="cargo">Web Developer</p>

      <p className="descricao">
        Estudante de ADS apaixonado por tecnologia, React, Java e desenvolvimento web.
      </p>

      <div className="tecnologias">
        <span>React</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>Java</span>
      </div>

      <button onClick={curtirPerfil}>
        ❤️ Curtir Perfil ({likes})
      </button>
    </div>
  );
}

export default ProfileCard;
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);

  const handleChange = (e) => setIsim(e.target.value);
  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("Kullanıcı adı 6 karakterden az olamaz.");
    } else {
      setHataMesaji("");
      setGirisYapildi(true);
    }
  };

  return (
    <div className="App">
      <h1>
        {" "}
        {!girisYapildi
          ? "Conditional Rendering"
          : "React Derslerine Giriş Yaptınız."}{" "}
      </h1>
      {girisYapildi && <p>Giriş Yapıldı</p>}
      {girisYapildi ? (
        <React.Fragment>
          <h2>Hoşgeldiniz {isim} </h2>
          <button onClick={() => setGirisYapildi(false)}>Çıkış Yap</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            name="isim"
            placeholder="Kullanıcı adınızı giriniz."
            value={isim}
            onChange={handleChange}
          />
          <button onClick={() => handleSubmit(isim)}>Giriş</button>
          <br />
          {hataMesaji ? <h4> {hataMesaji} </h4> : <h2>Giriş Yapınız</h2>}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;

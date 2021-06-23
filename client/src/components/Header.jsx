import React from "react";

export default function Header({selectedLang, setLang, languages, getRepos}) {
  return (
    <header>
      <select
        className="selectLang"
        value={selectedLang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="">Escolha uma linguagem</option>
        {languages.map((language) => (
          <option value={language.name}>{language.name}</option>
        ))}
      </select>
      <button onClick={getRepos}>BUSCAR</button>
    </header>
  );
}

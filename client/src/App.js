import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setLang] = useState("");


  const getLanguages = async () => {
    const res = await axios.get("http://localhost:5000/api/languages");
    console.log(res.data);
    setLanguages(res.data);
  };


  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div className="App">
      <select className='selectLang' value={selectedLang} onChange={(e) => setLang(e.target.value)}>
        <option value="">Escolha uma linguagem</option>
        {languages.map((language) => (
          <option value={language.name}>{language.name}</option>
        ))}
      </select>
     
      
    </div>
  );
}

export default App;

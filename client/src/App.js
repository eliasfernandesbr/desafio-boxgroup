import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import RepoCard from "./components/RepoCard";
import { useEffect, useState } from "react";

function App() {
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setLang] = useState("");
  const [repos, setRepos] = useState([]);
  const [totalCount, setTotalCount] = useState(0)

  const getLanguages = async () => {
    const res = await axios.get("http://localhost:5000/api/languages");
    console.log(res.data);
    setLanguages(res.data);
  };

  const getRepos = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/repos/" + selectedLang
    );
    console.log(res.data);
    setRepos(res.data.items);
    setTotalCount(res.data.total_count)
    // setLanguages(res.data);
  };

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div className="App">
      <Header
        selectedLang={selectedLang}
        setLang={setLang}
        languages={languages}
        getRepos={getRepos}
      />
      <div>
        <p>
          Mostrando {repos.length} de {totalCount}
        </p>
        <ul>
          {repos.map((repo) => (
           <RepoCard
           repo={repo}
           />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

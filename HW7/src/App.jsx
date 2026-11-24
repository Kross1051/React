import { useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import LanguageProvider from "./context/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ru" : "en"));
  };

  return (
    <div className="app">
      <LanguageProvider value={{ language, toggleLanguage }}>
        <MainContainer />
      </LanguageProvider>
    </div>
  );
}

export default App;

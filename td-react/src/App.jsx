import { useState,useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

function App() {
  const [day, setDay] = useState(String(now.getDate()).padStart(2, '0'))
  const [mois, setMois] = useState(String(now.getMonth()).padStart(2, '0'))
  const [annee, setAnnee] = useState(String(now.getFullYear()))
  const [hours, setHours] = useState(String(now.getHours()).padStart(2, '0'))
  const [minutes, setMinutes] = useState(String(now.getMinutes()).padStart(2, '0'))
  const [seconds, setSeconds] = useState(String(now.getSeconds()).padStart(2, '0'))
  function updateTime() {
    const now = new Date();
    setDay(String(now.getDate()).padStart(2, '0'));
    setMois(String(now.getMonth()).padStart(2, '0'));
    setAnnee(String(now.getFullYear()));
    setHours(String(now.getHours()).padStart(2, '0'));
    setMinutes(String(now.getMinutes()).padStart(2, '0'));
    setSeconds(String(now.getSeconds()).padStart(2, '0'));
  }

  const name="Ravelomahefa";
  const surname="serge gustave";
  const year=2025;

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime()
      console.log(seconds); 
      // Appelle ici la fonction que tu veux exécuter
    }, 1000); // 1000 ms = 1 seconde

    // Nettoyage de l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, []); 
  
  
    
    // Options pour le formatage de la date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('fr-FR', dateOptions);
    
    // Formatage de l'heure
    const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <>
      <Header />
      <MainContent annee={annee} mois={mois} jour={day} heure={hours} minute={minutes} seconds={seconds}/>
      <Footer nom={name} prenom={surname} Annee={annee}/>
    </>
  )
}

export default App

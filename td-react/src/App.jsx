import { useState,useEffect } from 'react'
import './App.css'
import data from '../../data.json'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

function App() {
  
  const randomIndex = Math.floor(Math.random() * data.length);
  const [randomItem, setRandomItem] = useState(data[randomIndex]);

  const name="Ravelomahefa";
  const surname="serge gustave";
  const year=2025
    


  return (
    <>
      <Header />
      <MainContent course={randomItem.course}
          student={randomItem.student}
          date={randomItem.date}
          grade={randomItem.grade} />
      <Footer nom={name} prenom={surname} Annee={year}/>
    </>
  )
}

export default App

import './App.css'

function MainContent({jour,mois,annee,heure,minute,seconds}) {
    
    return (
        <div>
            <p>Bonjour, on est le {jour},{mois},{annee} et il est {heure}:{minute}:{seconds}</p>
        </div>
    )
}

export default MainContent

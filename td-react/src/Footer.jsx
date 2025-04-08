
import './App.css'

function Footer({nom,prenom,Annee}) {
  return (
    <>
      <div>
        <p>© {Annee} - {prenom}.{nom}, Tous droits réservés.</p>
      </div>
    </>
  )
}

export default Footer

import '../App.css'

function MainContent({ course, student, date, grade }) {
    
    return (
        <div className="student-card">
            <h3>{course}</h3>
            <p><strong>Nom :</strong> {student.firstname} {student.lastname}</p>
            <p><strong>ID Étudiant :</strong> {student.id}</p>
            <p><strong>Date :</strong> {date}</p>
            <p><strong>Note :</strong> {grade}</p>
        </div>
    )
}
function Menu() {
    const handleMenuClick = (item) => {
      alert(`Vous avez cliqué sur: ${item}`);
    };
  
    return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Menu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#" onClick={() => handleMenuClick('Notes')}>
                    <i className="bi bi-journal-text me-2"></i>
                    Notes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleMenuClick('Etudiants')}>
                    <i className="bi bi-people-fill me-2"></i>
                    Étudiants
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleMenuClick('Matières')}>
                    <i className="bi bi-book-half me-2"></i>
                    Matières
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleMenuClick('A propos')}>
                    <i className="bi bi-info-circle me-2"></i>
                    À propos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  

export {MainContent,Menu}

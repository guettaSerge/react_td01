import './App.css'

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

export default MainContent

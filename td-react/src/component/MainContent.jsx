import '../App.css'
import { useState,useEffect, act } from 'react'
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
function ActiveItem({activeItem}) {
    
    return (
        <div className="student-card">
           <p>Élément actuellement sélectionné : {activeItem}</p>
        </div>
    )
}

function NavItem({ element, activeItem, setActiveItem }) {
    const isActive = activeItem === element;
    
    const handleClick = () => {
      setActiveItem(element);
     
      alert(`Vous avez cliqué sur: ${element}`);
    };
  
    return (
      <li className="nav-item">
        <a 
          className={`nav-link ${isActive ? 'active badge text-bg-light' : ''}`} 
          href="#" 
          onClick={handleClick}
        >
          {element}
        </a>
      </li>
    );
  }
function Menu({activeItem,setActiveItem}) {
    
    const menuItems = ["Notes", "Étudiants", "Matières", "À propos"];
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Menu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex justify-content-center align-items-center">
              {menuItems.map(item => (
                <NavItem 
                  key={item}
                  element={item}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  

export {MainContent,Menu,ActiveItem}

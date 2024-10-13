import React from 'react';
import './Navbar.css'; // Certifique-se de que o arquivo CSS existe

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="navbar-brand">Meu Site</a>
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'

const SideMenu = () => {
    return (
        <div className="list-group list-group-flush">
            <Link to="/bl" className="list-group-item list-group-item-action active">
                Bons de livraison
            </Link>
            <Link to="/products" className="list-group-item list-group-item-action">Produits</Link>
            <Link to="/clients" className="list-group-item list-group-item-action">Clients</Link>
            <Link to="/settings" className="list-group-item list-group-item-action">Paramètres</Link>
            <Link to="/logout" className="list-group-item list-group-item-action">Déconnexion</Link>
        </div>
    );
}

export default SideMenu;
import React, { Component } from 'react';
import logo from "./emi.png";
import authentificationService from '../Service/AuthentificationService'
class HeaderComponent extends Component {
    render() {
        return (
            <div className='sticky-top'>
                <br></br>
                <div className="container ">
                <img  src={logo} id="logo" className="rounded-circle shadow-lg img-thumbnail"  alt="emi.png"/>
                </div>
                <br></br>
                <nav className="shadow-lg navbar navbar-expand-sm bg-primary navbar-dark ">
                    <span className="fa fa-home" aria-hidden="true">
                    <a className="navbar-brand" href="/Home">Home</a>
                    </span>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="/AllApprenant">Apprenants </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/AllCours">Cours</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/AllEnseignant">Enseignant</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto ">
                            <li>
                                <a className="nav-link"   href="/logout" >
                                <i class="fa fa-sign-out" aria-hidden="true">{authentificationService.isUserLoggedIn()? authentificationService.getLoggedInUserName():''}</i>
                                </a>
                            </li>
                    
                         
                        </ul>
                    </div>
               
           
         
                </nav>
            </div>
        )
            ;
    }
}

export default HeaderComponent;
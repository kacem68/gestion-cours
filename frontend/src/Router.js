import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from './component/Header';
import ApprenantComponent from "./component/Apprenant/Apprennant";
import CoursComponent from './component/Cours/Cours';
import EnseignantComponent from './component/Enseignant/Enseignant';
import HomeComponent from './component/Home'
import FoterComponent from './component/foter';
import EditCoursComponent from './component/Cours/EditCoursComponent';
import EditApprenantComponent from './component/Apprenant/EditApprenantComponent';
import EditEnseignantComponent from './component/Enseignant/EditEnseignantComponent';
import CreatCoursComponent from './component/Cours/CreateCoursComponent';
import DeleteCoursComponent from './component/Cours/DeletCoursComponent';
import DeleteEnseignantComponent from './component/Enseignant/DeleteEnseignant';
import CreatEnseignantComponent from './component/Enseignant/CreatEnseignantComponent';
import CreateApprenantComponent from './component/Apprenant/CreatApprenantComponent';
import affectationCoursComponent from './component/adhésion_cours/affectaionCoursCompoment';
import cour_to_apprenant from './component/adhésion_cours/cours_to_apprenant';
import login from './component/loginComponent/login'
import logout from './component/loginComponent/logout'

import DeleteApprenantComponent from './component/Apprenant/DeleteApprenantComponent';
import ProtectedRoute from './component/loginComponent/ProtectedRouter';
import authentificationService from './Service/AuthentificationService'

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <>
                {
                    authentificationService.isUserLoggedIn() && <HeaderComponent></HeaderComponent>
                }
                    <br></br>
                    <Switch>
                        <ProtectedRoute exact path="/Home"  component={HomeComponent} />
                        
                        <ProtectedRoute exact  path="/AllApprenant"   component={ApprenantComponent} />
                        <ProtectedRoute  exact path="/AllCours"   component={CoursComponent} />
                        <ProtectedRoute exact path="/AllEnseignant"  component={EnseignantComponent} />
                        
                        <ProtectedRoute exact path="/EditCour/:id"  component={EditCoursComponent} />
                        <ProtectedRoute exact  path="/EditApprenant/:id" component={EditApprenantComponent} />
                        <ProtectedRoute exact path="/EditEnseignant/:id" component={EditEnseignantComponent}></ProtectedRoute>

                        <ProtectedRoute exact  path="/CreateApprenant" component={CreateApprenantComponent} />
                        <ProtectedRoute exact path="/CreateCours" component={CreatCoursComponent}></ProtectedRoute>
                        <ProtectedRoute exact path="/CreateEnseignant" component={CreatEnseignantComponent}></ProtectedRoute>
                        
                        <ProtectedRoute  exact path="/deleteEnseignant/:id" component={DeleteEnseignantComponent}></ProtectedRoute>
                        <ProtectedRoute  exact path="/deleteCour/:id" component={DeleteCoursComponent}></ProtectedRoute>
                        <ProtectedRoute  exact path="/deleteApprenant/:id" component={DeleteApprenantComponent}></ProtectedRoute>

                        <Route  exact path="/" component={login}></Route>
                        <Route  exact path="/login" component={login}></Route>
                        <ProtectedRoute exact path="/logout" component={logout}></ProtectedRoute>

                        <ProtectedRoute  exact path="/Apprenant/:id/Cours" component={affectationCoursComponent}></ProtectedRoute>
                        <ProtectedRoute  exact path="/Apprenant/:id/affectaionCours" component={cour_to_apprenant}></ProtectedRoute>

                    </Switch>
                    <br></br>
                    {

authentificationService.isUserLoggedIn() &&  <FoterComponent></FoterComponent>
}
                   
                </>
            </Router>
        )
    }
}

export default RouterComponent;
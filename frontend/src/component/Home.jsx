import React, { Component } from 'react';

class HomeComponent extends Component {
    render() {
        return (
            <>
            <div className="shadow-lg card">
        
                <div className="card-header bg-light text-dark">
                    <h1>                    Gestion de Cours
</h1>
                </div>
                <div className="card-body">
                    <dl>
                        <dt className="font-weight-bold "><h5>Cette application s'inscrit dans le cadre du génie logiciel.Elle permet de :</h5></dt>
                        <dd id="margin">
                            <span className="fa fa-thumb-tack font-weight-bold   " aria-hidden="false">&nbsp;&nbsp;&nbsp;Gérer les Cours;</span >
                            <br></br>
                            <span  className="fa fa-thumb-tack font-weight-bold" aria-hidden="true">&nbsp;&nbsp;&nbsp;Gérer les enseignants;</span >
                            <br></br>
                            <span  className="fa fa-thumb-tack font-weight-bold" aria-hidden="true">&nbsp;&nbsp;&nbsp;Gérer les Apprenants.</span >
                        </dd>

                    </dl>
                </div>
            </div>
            <br></br>
                   
            </>
        )
    }
}
export default HomeComponent;
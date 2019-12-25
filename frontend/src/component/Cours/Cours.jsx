import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import CoursDataService from '../../Service/CoursDataService';
import Moment from 'moment';

class CoursComponent extends Component {
    
    constructor(props)
    {
        super(props);
        this.state={
            Cours:[],
            message:null
        }
        this.getCours=this.getCours.bind(this);
        this.updateCours=this.updateCours.bind(this);
        this.creatCours=this.creatCours.bind(this);
        this.deleteCour=this.deleteCour.bind(this);

    }

    componentDidMount(){
        this.getCours();
    }
    getCours(){
        CoursDataService.getAllCours().then(
            response=>{
                this.setState({Cours:response.data});
            }
            
        )
    }

    updateCours(id)
    {
        this.props.history.push(`/EditCour/${id}`);
    }
    deleteCour(id)
    {
        this.props.history.push(`/deleteCour/${id}`);
    }

    creatCours()
    {
        this.props.history.push('/CreateCours');
    }

    render() {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'ID',
                    sort: 'asc'
                },
                {
                    label: 'Intitulé',
                    field: 'Intitulé',
                    sort: 'asc'
                },
                {
                    label: 'Module',
                    field: 'Module',
                    sort: 'asc'
                },
                {
                    label: 'Date_Debut',
                    field: 'Date_Debut',
                    sort: 'asc'
                },
                {
                    label: 'Date_Fin',
                    field: 'Date_Fin',
                    sort: 'asc'
                },
                {
                    label: 'Etat',
                    field: 'Etat',
                    sort: 'asc'
                },
                {
                    label: 'Enseignant',
                    field: 'Enseignant',
                    sort: 'asc'
                },
                {
                    label: 'Action',
                    field: 'Action',
                    sort: 'asc'
                }
            ],
            rows: this.state.Cours.map(cour=>{
                return{
                    ID:cour.id_cours,
                    Intitulé:cour.nom,
                    Module:cour.module,
                    Date_Debut:cour.date_Debut===null ? " ":cour.date_Debut,
                    Date_Fin:cour.date_fin===null ? " ":cour.date_fin,
                    Etat:cour.date_fin>Moment(Date.now()).format('YYYY-MM-DD')?<p className="font-weight-bold text-success">En cours</p>:<p className="font-weight-bold text-warning">Expiré</p>,
                    Enseignant:cour.enseignant===null ? " ":cour.enseignant.nom,
                    Action:[ cour.date_fin>Moment(Date.now()).format('YYYY-MM-DD')?<button type="button" onClick={()=>this.updateCours(cour.id_cours)} className="btn btn-primary" aria-label="Left Align">
                    <span className="fa fa-edit" aria-hidden="true"></span>
                  </button>:<button type="button" disabled onClick={()=>this.updateCours(cour.id_cours)} className="btn btn-primary" aria-label="Left Align">
                    <span className="fa fa-edit" aria-hidden="true"></span>
                  </button>,
                  cour.date_fin>Moment(Date.now()).format('YYYY-MM-DD')?
                  <button type="button" className="btn btn-danger " disabled="disabled" onClick={()=>this.deleteCour(cour.id_cours)} aria-label="Left Align">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>:   <button type="button" className="btn btn-danger "  onClick={()=>this.deleteCour(cour.id_cours)} aria-label="Left Align">
                  <i className="fa fa-trash" aria-hidden="true" ></i></button>
                    ]   

                }
            })
        };
        return (

            <div className="card text-black ">
                <div className="card-header bg-primary text-white ">
                    Liste des cours
        </div>
                <div className="card-body">
                <button type="button" className="btn btn-success" onClick={()=>this.creatCours()} aria-label="Left Align">
            <span className="fa fa-plus" aria-hidden="true"></span>
          </button>
                    <MDBDataTable
                                    striped
                                    hover
                                    data={data}
                                    paginationLabel={["Précédent", "Suivant"]} 
                                    infoLabel={["Affichage de", "à", "à partir de", "entrés"]}
                                    entriesLabel="Nombre des Entrés" 
                                    searchLabel="Chercher"
                                    
                    />
                </div>
            </div>

        );
    }


}
export default CoursComponent;
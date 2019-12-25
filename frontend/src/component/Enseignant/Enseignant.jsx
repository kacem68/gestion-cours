import React, { Component } from 'react';
import { MDBDataTable  } from 'mdbreact';
import  EnseignantDataService from '../../Service/EnseignantDataService'



class EnseignantComponent extends Component {
    
    
    constructor(props)
    {
        super(props);
        this.state={
            Enseignants:[],
            message:null
        }
        this.getEnseignant=this.getEnseignant.bind(this);
        this.updateEnseignant=this.updateEnseignant.bind(this);
        this.creatEnseignant=this.creatEnseignant.bind(this);
        this.deleteEnseignant=this.deleteEnseignant.bind(this);
    }

    componentDidMount(){
        this.getEnseignant();
    }

    updateEnseignant(id)
    {
        this.props.history.push(`/EditEnseignant/${id}`);
    }
    deleteEnseignant(id)
    {
        this.props.history.push(`/deleteEnseignant/${id}`);
    }
  
    creatEnseignant()
    {
        this.props.history.push('/CreateEnseignant');
    }
    getEnseignant(){
        EnseignantDataService.getAllEnseignants().then(
            response=>{
                this.setState({Enseignants:response.data});
            }
            
        )
    }
    
    render() {
        
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'ID',
                    sort: 'asc',
                    iskey:true
                },
                {
                    label: 'Nom',
                    field: 'Nom',
                    sort: 'asc'
                },
                {
                    label: 'Prénom',
                    field: 'Prénom',
                    sort: 'asc'
                },
                {
                    label: 'Télè',
                    field: 'Télè',
                    sort: 'asc'
        
                },
                {
                    label: 'Email',
                    field: 'Email',
                    sort: 'asc'
        
                },
                {
                    label: 'Action',
                    field: 'Action',
                    sort: 'asc'
                }
            ],
            rows: this.state.Enseignants.map(E=> {
                return {
                    ID: E.id_enseignant,
                    Nom: E.nom,  
                    Prénom: E.prenom,
                    Télè: E.tele,
                    Email:E.email,
                    Action:[<button type="button" onClick={()=>this.updateEnseignant(E.id_enseignant)} className="btn btn-primary" aria-label="Left Align">
                    <span className="fa fa-edit" aria-hidden="true"></span>
                  </button>,
                  <button type="button" onClick={()=>this.deleteEnseignant(E.id_enseignant)} className="btn btn-danger" aria-label="Left Align">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                    ]
                }
            }
            ),
            keys:this.state.Enseignants.map(E=>{
                return{
                    key:E.id_enseignant
                }
            })
        };
        return (
            <div className="card text-black ">
                <div className="card-header bg-primary text-white">
                    Liste des enseignants
        </div>
                <div className="card-body">
                <button type="button" onClick={()=>this.creatEnseignant()} className="btn btn-success" aria-label="Left Align">
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
export default EnseignantComponent;
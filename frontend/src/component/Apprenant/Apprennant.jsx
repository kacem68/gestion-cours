import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import ApprenantDataService from '../../Service/ApprenantDataService'
class ApprenantComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Apprenants: [],
      message: null
    }
    this.getApprenants = this.getApprenants.bind(this);
    this.updteApprenant=this.updteApprenant.bind(this);
    this.deleteApprenant=this.deleteApprenant.bind(this);
    this.creatApprenant=this.creatApprenant.bind(this);
    this.listerCours=this.listerCours.bind(this);
  }

  updteApprenant(id)
  {
    this.props.history.push(`/EditApprenant/${id}`);
  }
  deleteApprenant(id)
  {
      this.props.history.push(`/deleteApprenant/${id}`);
  }

  creatApprenant()
  {
      this.props.history.push('/CreateApprenant');
  }
  componentDidMount() {
    this.getApprenants();
  }
  listerCours(id)
  {
      this.props.history.push(`/Apprenant/${id}/Cours`);
  }

  getApprenants() {
    ApprenantDataService.getAllApprenant().then(
      response => {
        this.setState({ Apprenants: response.data });
      }

    )
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
          label: 'Email',
          field: 'Email',
          sort: 'asc'
        },
        {
          label: 'Télè',
          field: 'Télè',
          sort: 'asc'
        },
        {
          label: 'Cours',
          field: 'Cours',
          sort: 'asc'
        },   
        {
          label: 'Action',
          field: 'Action',
          sort: 'asc'
        }
      ],
      rows: this.state.Apprenants.map(apprenant => {
        return {
          ID: apprenant.id_apprenant,
          Nom: apprenant.nom,
          Prénom: apprenant.prenom,
          Email: apprenant.email,
          Télè: apprenant.numTele,
          Cours:<button type="button" onClick={()=>this.listerCours(apprenant.id_apprenant)} className="btn btn-primary" aria-label="Left Align">
          liste Cours
        </button>,
          Action: [<button type="button" onClick={()=>this.updteApprenant(apprenant.id_apprenant)} className="btn btn-primary" aria-label="Left Align">
          <span className="fa fa-edit" aria-hidden="true"></span>
        </button>,
        <button type="button" onClick={()=>this.deleteApprenant(apprenant.id_apprenant)} className="btn btn-danger" aria-label="Left Align">
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
          ]

        }
      }
      )
    };



    return (
      <div className="card text-black ">
        <div className="card-header bg-primary text-white">
          Liste des Apprenants
</div>
        <div className="card-body">
          <button type="button" onClick={()=>this.creatApprenant()} className="btn btn-success" aria-label="Left Align">
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
                         scrollY 
          />
        </div>
      </div>
    );
  }
}
export default ApprenantComponent;
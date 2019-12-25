import React , {Component} from 'react';
import apprenantDataSErvice from '../../Service/ApprenantDataService';
import { MDBDataTable } from 'mdbreact';

class affectationCoursComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id: this.props.match.params.id,
            nom:'',
            prenom:'',
            Cours:[]
        }
        this.Affecter=this.Affecter.bind(this);
        this.Back=this.Back.bind(this);
    }
    Back() {
        this.props.history.push('/AllApprenant');
    }
    Affecter(id)
    {
        this.props.history.push(`/Apprenant/${id}/affectaionCours`)
    }
    componentDidMount()
    {
        this.findone();
    }
    findone()
    {
        apprenantDataSErvice.getApprenant(this.state.id).then(response=>{
            this.setState({Cours:response.data.cours});
            this.setState({nom:response.data.nom});
            this.setState({prenom:response.data.prenom})
        })
    }

    render()
    {
        const data = {
            columns: [
                {
                    label: 'ID_cours',
                    field: 'ID_cours',
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
                }
            ],
            rows: this.state.Cours.map(cour=>{
                return{
                    ID:cour.id_cours,
                    Intitulé:cour.nom,
                    Module:cour.module
                }
            })
        };
        return(
            <div className="card text-black ">
            <div className="card-header bg-primary text-white ">
                Liste des cours de <b>{this.state.nom+"\t"+this.state.prenom}</b>
    </div>
            <div className="card-body">
            <button type="button" className="btn btn-success" onClick={()=>this.Affecter(this.state.id)} aria-label="Left Align">
        <span className="fa fa-plus" aria-hidden="true"></span>
      </button>
                <MDBDataTable
                    striped
                    hover
                    data={data}
                />
                        <button type="button" className="btn btn-info" onClick={()=>this.Back()}>
                                                        <i className="fa fa-arrow-left" aria-hidden="true">Back</i>
                                                    </button>
            </div>
        </div>
        )
    }
    
}
export default affectationCoursComponent;
import CoursDataService from '../../Service/CoursDataService';
import { Formik, Form, Field } from 'formik';
import  EnseignantDataService from '../../Service/EnseignantDataService'
import React, { Component } from 'react';
class EditCoursComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nom: '',
            module: '',
            nom_enseignant: '',
            id_enseignant: '',
            date_Debut:'',
            date_fin:'',
            Enseignants:[]
        }
        this.Back = this.Back.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        this.findone();
        this.ListEnseignant();
    }

    onSubmit(values) {
        let id_enseignant=values.id_enseignant; 
        let cours ={
            id_cours:values.id,
            nom:values.nom,
            module:values.module,
            date_Debut:values.date_Debut,
            date_fin:values.date_fin,
            enseignant:{}
        }
        console.log(cours)
        CoursDataService.updatCour(cours,id_enseignant).then(()=>this.Back());
    }

    Back() {
        this.props.history.push('/AllCours');
    }

    ListEnseignant()
    {
        EnseignantDataService.getAllEnseignants().then(response=>
            {this.setState({Enseignants:response.data})})
    }
    findone() {
        CoursDataService.getCour(this.state.id).then(
            response => {
                this.setState({ nom: response.data.nom });
                this.setState({ nom_enseignant:response.data.enseignant!=null? response.data.enseignant.nom:"" });
                this.setState({ module: response.data.module });
                this.setState({date_Debut:response.data.date_Debut});
                this.setState({date_fin:response.data.date_fin});
                this.setState({ id_enseignant:response.data.enseignant!=null?response.data.enseignant.id_enseignant:"" });
            }
        )

    }

    render() {

        return (

            <Formik
                initialValues={
                    this.state
                }
                enableReinitialize
                onSubmit={this.onSubmit}
            >
                {
                    ({ values }) => (

                        <Form>
                            <div className="card">
                                <div className="card-header bg-primary text-white ">
                                    Modifier cours
        </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>ID</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td >     <Field type="number" disabled className="form-control" name='id' value={values.id||''} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Intitulé</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name='nom' value={values.nom||''} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Module</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name="module" value={values.module||''} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Date Début</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='date' className="form-control" name="date_Debut" value={values.date_Debut} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Date Fin</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='date' className="form-control" name="date_fin" value={values.date_fin} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Enseignant</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                    
                                                     <Field component="select" value={values.id_enseignant} name="id_enseignant"  className="form-control selectpicker ">
                                                         {                    
                                                             this.state.Enseignants.map(e=>
                                                                <option  value={e.id_enseignant}>{e.nom}</option>
                                                             )
                                                            }
                                                     </Field>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <button type="button" className="btn btn-info" onClick={()=>this.Back()}>
                                                        <i className="fa fa-arrow-left" aria-hidden="true">Back</i>
                                                    </button>

                                                </td>
                                                <td></td>
                                                <td>
                                                    <button  type="submit"  className="btn btn-success float-right">Enregistrer</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>






                        </Form>
                    )



                }





            </Formik>
        )

    }

}
export default EditCoursComponent;
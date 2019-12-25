import React, {Component} from 'react';
import  EnseignantDataService from '../../Service/EnseignantDataService'
import { Formik, Form, Field } from 'formik';

class CreatEnseignantComponent extends Component{

    constructor(props) {
        super(props);
        this.Back = this.Back.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(values) {

        let enseignant = {
            nom: values.nom,
            prenom: values.prenom,
            email: values.email,
            tele: values.tele,
        }
       
        EnseignantDataService.createEnseignant(enseignant).then(() => this.Back());
    }

    Back() {
        this.props.history.push('/AllEnseignant');
    }


    render() {

        return (

            <Formik
                initialValues={

                    {
                        id: '',
                        nom: '',
                        prenom: '',
                        email: '',
                        tele: ''
                    }

                }
                enableReinitialize
                onSubmit={this.onSubmit}
            >
                {
                    ({ values }) => (

                        <Form>
                            <div className="card">
                                <div className="card-header bg-primary text-white ">
                                    Ajouter Enseignant
        </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody>
                         
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Nom</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name='nom' value={values.nom || ''} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Prénom</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name="prenom" value={values.prenom || ''} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Email</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name="email" value={values.email || ''} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Télé</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name="tele" value={values.tele || ''} />
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <button type="button" className="btn btn-info" onClick={() => this.Back()}>
                                                        <i className="fa fa-arrow-left" aria-hidden="true">Back</i>
                                                    </button>

                                                </td>
                                                <td></td>
                                                <td>
                                                    <button type="submit" className="btn btn-success float-right">Enregistrer</button>
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
export default CreatEnseignantComponent;
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

import ApprenantDataService from '../../Service/ApprenantDataService';

class EditApprenantComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            email: '',
            tele: ''
        }
        this.Back = this.Back.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {   
        this.findone();
    }

    onSubmit(values){
        
        let apprenant = {
            id_apprenant: values.id,
            nom: values.nom,
            prenom: values.prenom,
            email: values.email,
            numTele: values.tele,
        }
        ApprenantDataService.updatApprenant(apprenant).then(() => this.Back());
    }

    Back() {
        this.props.history.push('/AllApprenant');
    }

    findone() {
        ApprenantDataService.getApprenant(this.state.id).then(
            response => {
                this.setState({ nom: response.data.nom });
                this.setState({ prenom: response.data.prenom });
                this.setState({ email: response.data.email });
                this.setState({ tele: response.data.numTele});
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
                                                <td >     <Field type="number" disabled className="form-control" name='id' value={values.id || ''} />
                                                </td>
                                            </tr>
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
export default EditApprenantComponent;
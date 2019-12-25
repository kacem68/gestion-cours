import CoursDataService from '../../Service/CoursDataService';
import { Formik, Form } from 'formik';

import React, { Component } from 'react';
class DeleteCoursComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nom: '',
            module: '',
            nom_enseignant: '',
            id_enseignant: ''
        }
        this.Back = this.Back.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        this.findone();
    }

    onSubmit(values) {
        let id=values.id; 

        CoursDataService.deletecour(id).then(()=>this.Back());
    }

    Back() {
        this.props.history.push('/AllCours');
    }

    findone() {
        CoursDataService.getCour(this.state.id).then(
            response => {
                this.setState({ nom: response.data.nom });
                this.setState({ nom_enseignant:response.data.enseignant===null?"": response.data.enseignant.nom });
                this.setState({ module: response.data.module });
                this.setState({ id_enseignant: response.data.enseignant===null?"":response.data.enseignant.id_enseignant });
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
                                    Supprimer cours
        </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>ID</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td >     
                                                {values.id}
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Intitulé</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                {values.nom}
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Module</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td >
                                                {values.module}
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Enseignant</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                {values.id_enseignant}
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
                                                    <button  type="submit"  className="btn btn-success float-right">Comfirmer</button>
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
export default DeleteCoursComponent;
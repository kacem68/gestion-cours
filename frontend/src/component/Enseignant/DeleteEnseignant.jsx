import React, {Component} from 'react';
import  EnseignantDataService from '../../Service/EnseignantDataService'
import { Formik, Form } from 'formik';

class DeleteEnseignantComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            email: '',
            tele: '',

        }
        this.Back = this.Back.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {   
        this.findone();
    }

    onSubmit(values) {
        
        EnseignantDataService.deleteEnseignant(values.id).then(() => this.Back());
    }

    Back() {
        this.props.history.push('/AllEnseignant');
    }

    findone() {
        EnseignantDataService.getEnseignant(this.state.id).then(
            response => {
                this.setState({ nom: response.data.nom });
                this.setState({ prenom: response.data.prenom });
                this.setState({ email: response.data.email });
                this.setState({ tele: response.data.tele});
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
                                    Suppruimer Enseignant
        </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>ID</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td >     
                                                {values.id || ''}
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Nom</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                {values.nom || ''}
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Prénom</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                {values.prenom || ''}
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Email</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                {values.email || ''}
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Télé</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                {values.tele || ''}
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
                                                    <button type="submit" className="btn btn-success float-right">Comfirmer</button>
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
export default DeleteEnseignantComponent;
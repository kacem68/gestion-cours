import React  ,{Component} from 'react';
import { Formik, Form, Field } from 'formik';
import CoursDataService from '../../Service/CoursDataService';
import  apprenantDataService from '../../Service/ApprenantDataService'
class AppranantCoursComponent extends Component{



    constructor(props) {
        super(props);
        this.state = {
            Cours:[],
            id:this.props.match.params.id
        }
        this.Back = this.Back.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        this.ListCours();
    }
    ListCours()
    {
        CoursDataService.getAllCours().then(response=>
            {this.setState({Cours:response.data})})
    }



    onSubmit(values) {
        let id_apprenant = values.id_apprenant;
        let id_cours=values.id_cours
        console.log(id_apprenant+"_"+id_cours);
        apprenantDataService.AffecterCours(id_apprenant,id_cours).then(()=>this.Back());
    }

    Back() {
        this.props.history.push(`/Apprenant/${this.state.id}/Cours`);
    }


    render()
    {
        return(
            <Formik
            initialValues={{
                id_cours:'',
                id_apprenant :this.state.id
            }}
            onSubmit={this.onSubmit}
            >
                {
                ({values})=>(
                 <Form>
                            <div className="card">
                                <div className="card-header bg-primary text-white ">
                                    Affecter cours
        </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Id_apprenant</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" disabled name='id_apprenant' value={values.id_apprenant} />
                                                </td>
                                            </tr>
                                        
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Cours</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > 
                                                     <Field component="select" name="id_cours" className="form-control selectpicker ">
                                                        <option value="selectionner un cours" >selectionner un cours</option>
                                                         {                    
                                                             this.state.Cours.map(c=>
                                                                <option value={c.id_cours}>{c.nom}</option>
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
                        </Form>)
                }
            </Formik>
        )
    }
}
export default AppranantCoursComponent;
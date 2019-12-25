import React  ,{Component} from 'react';
import { Formik, Form, Field } from 'formik';
import CoursDataService from '../../Service/CoursDataService';
import  EnseignantDataService from '../../Service/EnseignantDataService'
class CreatCoursComponent extends Component{



    constructor(props) {
        super(props);
        this.state = {
            Enseignants:[]
        }
        this.Back = this.Back.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.ListEnseignant();
    }
    ListEnseignant()
    {
        EnseignantDataService.getAllEnseignants().then(response=>
            {this.setState({Enseignants:response.data})})
    }



    onSubmit(values) {
        let id = values.id_enseignant;
        let cours ={
            nom:values.nom,
            module:values.module,
            date_Debut:values.date_Debut,
            date_fin:values.date_fin,
            enseignant:{}
        }
        CoursDataService.createCour(cours,id).then(()=>this.Back())
    }

    Back() {
        this.props.history.push('/AllCours');
    }


    render()
    {
        return(
            <Formik
            initialValues={{
                id:'',
                nom:'',
                module:'',
                date_Debut:'',
                date_fin:'',
                id_enseignant:1,
            }}
            onSubmit={this.onSubmit}
            >
                {
                ({values})=>(
                 <Form>
                            <div className="card">
                                <div className="card-header bg-primary text-white ">
                                    Ajouter cours
        </div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Intitulé</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name='nom' value={values.nom} />
                                                </td>
                                            </tr>
                                            <tr className='col-lg-3'>
                                                <td className='font-weight-bold'>Module</td>
                                                <td className='font-weight-bold'>:</td>
                                                <td > <Field type='text' className="form-control" name="module" value={values.module} />
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
                                                     <Field component="select"  name="id_enseignant"  className="form-control selectpicker ">
                                                         {                    
                                                             this.state.Enseignants.map(e=>
                                                                <option value={e.id_enseignant}>{e.nom}</option>
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
export default CreatCoursComponent;
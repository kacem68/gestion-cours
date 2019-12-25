import axios from 'axios';
import serviceAuthentification from '../Service/AuthentificationService';
const url='http://localhost:8082';
class CoursDataService{
    getAllCours(){
        return axios.get(`${url}/AllCours`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } });
    }
    
    getCour(id)
    {
        return axios.get(`${url}/ChercherCours/${id}`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } });
    }
    updatCour(cours,id_enseignant)
    {
        return axios.put(`${url}/UpdateCours/${id_enseignant}`,cours,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
    createCour(cours,id)
    {
        return axios.post(`${url}/CreateCours/${id}`,cours,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
    deletecour(id)
    {
        return axios.delete(`${url}/DeleteCours/${id}`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
}
export default new CoursDataService();
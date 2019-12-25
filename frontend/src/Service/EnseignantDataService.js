import axios from 'axios';
import serviceAuthentification from '../Service/AuthentificationService';

const url='http://localhost:8082';


class EnseignantDataService{
    getAllEnseignants(name){
        return axios.get(`${url}/AllEnseignant`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } });
    }
    getEnseignant(id)
    {
        return axios.get(`${url}/ChercherEnseignant/${id}`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } });
    }
    updatEnseignant(enseignant)
    {   
        return axios.put(`${url}/UpdateEnseignant`,enseignant,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
    createEnseignant(enseignant)
    {
        return axios.post(`${url}/CreateEnseignant`,enseignant,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
    deleteEnseignant(id)
    {
        return axios.delete(`${url}/DeleteEnseignant/${id}`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
}
export default new EnseignantDataService();
import axios from 'axios';
import serviceAuthentification from '../Service/AuthentificationService';
const url='http://localhost:8082';
class ApprenantDataService{
    getAllApprenant(name){
        return axios.get(`${url}/AllApprenant`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } });
    }

    getApprenant(id)
    {
        return axios.get(`${url}/ChercherApprenant/${id}`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } });
    }
    updatApprenant(apprenant)
    {   
        return axios.put(`${url}/UpdateApprenant`,apprenant,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
    createApprenant(apprenant)
    {
        return axios.post(`${url}/CreateApprenant`,apprenant,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
    deleteApprenant(id)
    {
        return axios.delete(`${url}/DeleteApprenant/${id}`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } })
    }
    AffecterCours(idApprenant,idCours)
    {
        return axios.post(`${url}/inscription/${idApprenant}/${idCours}`,{ headers: { authorization: serviceAuthentification.createBasicAuthToken() } });
    }
}
export default new ApprenantDataService();
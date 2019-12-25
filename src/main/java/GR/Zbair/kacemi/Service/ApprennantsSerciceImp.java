package GR.Zbair.kacemi.Service;

import GR.Zbair.kacemi.entities.Apprenant;
import GR.Zbair.kacemi.entities.Cours;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Collection;

@Repository
@Transactional
@Service
public class ApprennantsSerciceImp implements ApprennantService {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Collection<Apprenant> getApprennats() {
        return entityManager.createQuery("from Apprenant").getResultList();
    }

    @Override
    public void creerApprennant(Apprenant apprenant) {
        entityManager.persist(apprenant);
    }

    @Override
    public void supprimerApprenant(long id) {
        Apprenant apprenant = entityManager.find(Apprenant.class,id);
        if(entityManager.contains(apprenant))
        {
            entityManager.remove(apprenant);
        }
    }

    @Override
    public void modifierApprennant(Apprenant apprenant) {
        Apprenant a = entityManager.find(Apprenant.class,apprenant.getId_apprenant());
            a.setEmail(apprenant.getEmail());
            a.setNom(apprenant.getNom());
            //a.setCours(apprenant.getCours());
            a.setPrenom(apprenant.getPrenom());
            a.setNumTele(apprenant.getNumTele());
            entityManager.flush();

    }

    @Override
    public void AjouterCours(Apprenant apprenant, Cours cours) {

            apprenant.getCours().add(cours);
            entityManager.persist(apprenant);


    }

    @Override
    public Apprenant Findone(Long id) {
        return entityManager.find(Apprenant.class,id);
    }
}

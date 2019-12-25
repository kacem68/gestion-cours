package GR.Zbair.kacemi.Service;

import GR.Zbair.kacemi.entities.Enseignant;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Repository
@Transactional
@Service
public class EnseignantServiceImpl implements EnseignantService {
    @PersistenceContext
    EntityManager em;

    @Override
    public void creerEnseignant(Enseignant enseignant) {
        em.persist(enseignant);
    }

    @Override
    public void modifierEnseignant(Enseignant enseignant) {
        Enseignant enseignant1 = em.find(Enseignant.class,enseignant.getId_enseignant());
        enseignant1.setEmail(enseignant.getEmail());
        enseignant1.setNom(enseignant.getNom());
        enseignant1.setPrenom(enseignant.getPrenom());
        enseignant1.setTele(enseignant.getTele());
        em.flush();
    }

    @Override
    public void supprimerEnseignant(long id) {
        Enseignant enseignant1 = em.find(Enseignant.class,id);
        if(em.contains(enseignant1))
        {
            em.remove(enseignant1);
        }
    }
    @Override
    public Enseignant Findone(Long id) {
        return em.find(Enseignant.class,id);
    }
    @Override
    @JsonIgnore
    public List<Enseignant> getEnseignants() {
        return em.createQuery("SELECT E from Enseignant E",Enseignant.class).getResultList();
    }
}

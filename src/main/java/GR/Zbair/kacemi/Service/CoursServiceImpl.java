package GR.Zbair.kacemi.Service;

import GR.Zbair.kacemi.entities.Cours;
import GR.Zbair.kacemi.entities.Enseignant;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Service
@Transactional
public class CoursServiceImpl implements CoursService {
    @PersistenceContext
    EntityManager em;
    @Override
    public List<Cours> getCours() {
        List<Cours> cours= em.createQuery("from Cours",Cours.class).getResultList();
        return cours;
    }

    @Override
    public void creerCours(Cours cours) {
        em.persist(cours);
    }

    @Override
    public void supprimerCours(Long id) {
        Cours c = em.find(Cours.class,id);
        if(em.contains(c))
        {
            em.remove(c);
        }
    }

    @Override
    public void modifierCours(Cours cours) {
        Cours c = em.find(Cours.class,cours.getId_cours());
        c.setModule(cours.getModule());
        c.setNom(cours.getNom());
        c.setEnseignant(cours.getEnseignant());
        em.flush();
    }

    @Override
    public Cours Findone(Long id) {
        return em.find(Cours.class,id);
    }
}

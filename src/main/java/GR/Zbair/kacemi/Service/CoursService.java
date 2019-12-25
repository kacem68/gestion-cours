package GR.Zbair.kacemi.Service;

import GR.Zbair.kacemi.entities.Cours;
import GR.Zbair.kacemi.entities.Enseignant;

import java.util.Collection;

public interface CoursService {

    public  abstract  void creerCours(Cours cours);
    public abstract void supprimerCours(Long id);
    public abstract void modifierCours(Cours cours);
    public abstract Collection<Cours> getCours();
    public  abstract Cours Findone(Long id);
}

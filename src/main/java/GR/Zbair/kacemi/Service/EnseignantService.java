package GR.Zbair.kacemi.Service;

import GR.Zbair.kacemi.entities.Enseignant;

import java.util.Collection;

public interface EnseignantService {
    public abstract void creerEnseignant(Enseignant enseignant);
    public abstract void modifierEnseignant(Enseignant enseignant);
    public  abstract void supprimerEnseignant(long id);
    public abstract Collection<Enseignant> getEnseignants();
    public abstract Enseignant Findone(Long id);
}

package GR.Zbair.kacemi.Service;

import GR.Zbair.kacemi.entities.Apprenant;
import GR.Zbair.kacemi.entities.Cours;

import java.util.Collection;

public interface ApprennantService {
    public abstract void creerApprennant(Apprenant apprenant);
    public abstract void modifierApprennant( Apprenant apprenant);
    public  abstract  void supprimerApprenant(long id);
    public abstract Collection<Apprenant> getApprennats();
    public  abstract void AjouterCours(Apprenant apprenant, Cours cours);
    public abstract Apprenant Findone(Long id);

}

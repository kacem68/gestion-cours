package GR.Zbair.kacemi.controllers;

import GR.Zbair.kacemi.Service.EnseignantServiceImpl;
import GR.Zbair.kacemi.entities.Apprenant;
import GR.Zbair.kacemi.entities.Cours;
import GR.Zbair.kacemi.entities.Enseignant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200"})
@RestController
public class EnseignantController {
    @Autowired
    EnseignantServiceImpl enseignantService;


    @RequestMapping(value = "/CreateEnseignant",method = RequestMethod.POST)
    public String create(@RequestBody Enseignant enseignant){
        enseignantService.creerEnseignant(enseignant);
        return "ajout avec succes";
    }

    @RequestMapping(value = "/DeleteEnseignant/{id}",method =RequestMethod.DELETE )
    public String delete(@PathVariable  int id)
    {
        enseignantService.supprimerEnseignant(id);
        return "enseignant suprimé";
    }
    @RequestMapping(value = "/UpdateEnseignant", method = RequestMethod.PUT)
    public String modifier(@RequestBody  Enseignant enseignant)
    {
        enseignantService.modifierEnseignant(enseignant);
        return "enseignant Modifié";
    }


    @RequestMapping(value = "/ChercherEnseignant/{id}",method = RequestMethod.GET)
    public Enseignant find(@PathVariable Long id)
    {
        return enseignantService.Findone(id);
    }

    @RequestMapping(value = "/AllEnseignant",method = RequestMethod.GET)
    public Collection<Enseignant> ReadAll()
    {
        return  enseignantService.getEnseignants();
    }
}

package GR.Zbair.kacemi.controllers;

import GR.Zbair.kacemi.Service.CoursServiceImpl;
import GR.Zbair.kacemi.Service.EnseignantServiceImpl;
import GR.Zbair.kacemi.entities.Apprenant;
import GR.Zbair.kacemi.entities.Cours;
import GR.Zbair.kacemi.entities.Enseignant;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200"})
@RestController
public class CoursController {

    @Autowired
    CoursServiceImpl coursService;
    @Autowired
    EnseignantServiceImpl enseignantService;
    @RequestMapping(value = "/CreateCours/{id}",method = RequestMethod.POST)
            public String create(@RequestBody Cours cours, @PathVariable Long id){
        Enseignant enseignant1=enseignantService.Findone(id);
        cours.setEnseignant(enseignant1);
        coursService.creerCours(cours);
        return "ajout avec succes";
    }

    @RequestMapping(value = "/DeleteCours/{id}",method =RequestMethod.DELETE )
    public String delete( @PathVariable Long id)
    {
        coursService.supprimerCours(id);
        return "cours suprimé";
    }
    @RequestMapping(value = "/UpdateCours/{id_enseignant}", method = RequestMethod.PUT)
    public void modifier(@RequestBody  Cours cours,@PathVariable Long id_enseignant)
    {
        Enseignant enseignant1=enseignantService.Findone(id_enseignant);
        cours.setEnseignant(enseignant1);
        coursService.modifierCours(cours);

    }
    @RequestMapping(value = "/AllCours",method = RequestMethod.GET)
    public Collection<Cours> ReadAll()
    {
        return  coursService.getCours();
    }

    @RequestMapping(value = "/ChercherCours/{id}",method = RequestMethod.GET)
            public Cours find(@PathVariable Long id)
    {
        return coursService.Findone(id);
    }

}

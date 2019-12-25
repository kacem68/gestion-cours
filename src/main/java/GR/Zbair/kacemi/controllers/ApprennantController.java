package GR.Zbair.kacemi.controllers;

import GR.Zbair.kacemi.Service.ApprennantsSerciceImp;
import GR.Zbair.kacemi.Service.CoursServiceImpl;
import GR.Zbair.kacemi.entities.Apprenant;
import GR.Zbair.kacemi.entities.Cours;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200"})
@RestController
public class ApprennantController {

    @Autowired
    ApprennantsSerciceImp apprennantsSerciceImp;
    @Autowired
    CoursServiceImpl coursService;

    @RequestMapping(value = "/CreateApprenant",method = RequestMethod.POST)
    public String create(@RequestBody Apprenant apprenant){
        apprennantsSerciceImp.creerApprennant(apprenant);
        return "ajout avec succes";
    }

    @RequestMapping(value = "/DeleteApprenant/{id}",method =RequestMethod.DELETE )
    public String delete(@PathVariable  int id)
    {
        apprennantsSerciceImp.supprimerApprenant(id);
        return "apprenant suprimé";
    }
    @RequestMapping(value = "/UpdateApprenant", method = RequestMethod.PUT)
    public String modifier(@RequestBody Apprenant apprenant)
    {
        apprennantsSerciceImp.modifierApprennant(apprenant);
        return "apprenant Modifié";
    }

    @RequestMapping(value = "/AllApprenant",method = RequestMethod.GET)
    public Collection<Apprenant> ReadAll()
    {
        return  apprennantsSerciceImp.getApprennats();
    }

    @RequestMapping(value = "/inscription/{idApprenant}/{idCours}",method = RequestMethod.POST)
    public String inscrire( @PathVariable  Long idApprenant,@PathVariable Long idCours)
    {
        Cours cours=coursService.Findone(idCours);
        Apprenant apprenant=apprennantsSerciceImp.Findone(idApprenant);
        if(cours!=null && apprenant!=null)
        {
            apprennantsSerciceImp.AjouterCours(apprenant,cours);
            return "Cours affecté";
        }
        return "affectaion non réussi";
    }

    @RequestMapping(value = "/ChercherApprenant/{id}",method = RequestMethod.GET)
    public Apprenant find(@PathVariable long id)
    {
        return  apprennantsSerciceImp.Findone(id);
    }
}

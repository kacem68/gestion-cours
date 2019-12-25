package GR.Zbair.kacemi.entities;



import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "Cours")
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_cours;
    private String nom;
    private String Module;
    private Date date_Debut;

    public Date getDate_Debut() {
        return date_Debut;
    }

    public void setDate_Debut(Date date_Debut) {
        this.date_Debut = date_Debut;
    }

    public Date getDate_fin() {
        return date_fin;
    }

    public void setDate_fin(Date date_fin) {
        this.date_fin = date_fin;
    }

    private Date date_fin;

    @ManyToOne
    @JoinColumn(name = "Id_Enseignant")
    private Enseignant enseignant;

    @ManyToMany(mappedBy = "cours")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private List<Apprenant> apprenants;

    public List<Apprenant> getApprenants() {
        return apprenants;
    }

    public void setApprenants(List<Apprenant> apprenants) {
        this.apprenants = apprenants;
    }

    public Enseignant getEnseignant() {
        return enseignant;
    }

    public void setEnseignant(Enseignant enseignant) {
        this.enseignant = enseignant;
    }

    public long getId_cours() {
        return id_cours;
    }

    public String getNom() {
        return nom;
    }

    public String getModule() {
        return Module;
    }

    public void setId_cours(long id_cours) {
        this.id_cours = id_cours;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setModule(String module) {
        Module = module;
    }

    public Cours(String nom, String module, Date date_Debut, Date date_fin) {
        this.nom = nom;
        Module = module;
        this.date_Debut = date_Debut;
        this.date_fin = date_fin;
    }

    public Cours() {
        super();
    }
}

package GR.Zbair.kacemi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Enseignant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_enseignant;
    private String nom;
    private  String prenom;
    private String email;
    private String tele;
    @OneToMany(mappedBy = "enseignant")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private List<Cours> cours = new ArrayList<>();

    public List<Cours> getCours() {
        return cours;
    }

    public void setCours(List<Cours> cours) {
        this.cours = cours;
    }
    public long getId_enseignant() {
        return id_enseignant;
    }
    public void setId_enseignant(long id_enseignant) {
        this.id_enseignant = id_enseignant;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTele() {
        return tele;
    }

    public void setTele(String tele) {
        this.tele = tele;
    }

    public Enseignant(String nom, String prenom, String email, String tele) {
        super();
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tele = tele;
    }


    public Enseignant() {
        super();
    }
}

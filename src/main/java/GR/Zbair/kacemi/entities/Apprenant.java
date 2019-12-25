package GR.Zbair.kacemi.entities;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

@Entity
public class Apprenant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_apprenant;
    private String nom;
    private String prenom;
    private String email;
    private String numTele;

    @ManyToMany
    @JoinTable(
            name = "Cours_Apprenant",
            joinColumns = @JoinColumn(name = "id_apprennant"),
            inverseJoinColumns = @JoinColumn(name = "id_cours")
    )
    private List<Cours> cours;

    public List<Cours> getCours() {
        return cours;
    }

    public void setCours(List<Cours> cours) {
        this.cours = cours;
    }

    public long getId_apprenant() {
        return id_apprenant;
    }

    public void setId_apprenant(long id_apprenant) {
        this.id_apprenant = id_apprenant;
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

    public String getNumTele() {
        return numTele;
    }

    public void setNumTele(String numTele) {
        this.numTele = numTele;
    }

    public Apprenant(String nom, String prenom, String email, String numTele) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.numTele = numTele;
    }

    public Apprenant() {
        super();
    }
}

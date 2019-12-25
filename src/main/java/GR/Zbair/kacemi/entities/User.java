package GR.Zbair.kacemi.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User implements Serializable {


    /**
     *
     */
    private static final long serialVersionUID = 4413917456197021461L;
    @Id
    private String username;
    private String password;
    private boolean actived;




    public boolean isActived() {
        return actived;
    }

    public void setActived(boolean actived) {
        this.actived = actived;
    }

    @ManyToOne
    @JoinColumn(name = "role")
    private Roles role;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    public User(String password) {
        super();
        this.password = password;
    }

    public User() {
        super();
        // TODO Auto-generated constructor stub
    }


}

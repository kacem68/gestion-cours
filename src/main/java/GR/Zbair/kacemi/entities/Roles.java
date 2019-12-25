package GR.Zbair.kacemi.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Roles implements Serializable {


    /**
     *
     */
    private static final long serialVersionUID = 2009955108926794288L;
    @Id
    private String role;
    private String Description;

    @OneToMany(mappedBy = "role")
    private List<User> users;



    public List<User> getUsers() {
        return users;
    }
    public void setUsers(List<User> users) {
        this.users = users;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getDescription() {
        return Description;
    }
    public void setDescription(String description) {
        Description = description;
    }
    public Roles() {
        super();
        // TODO Auto-generated constructor stub
    }
    public Roles(String description) {
        super();
        Description = description;
    }



}

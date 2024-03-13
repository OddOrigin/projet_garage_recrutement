package fr.oddorigin.projet_garage_stage.model.garage;
import fr.oddorigin.projet_garage_stage.model.cars.Cars;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "garages")
public class Garage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    private String name;

    public Garage() {

    }

    public Garage(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Garage{" +
                "id=" + id +
                ", name=\"" + name + "\"" +
                '}';
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(long id) {
        this.id = id;
    }
}

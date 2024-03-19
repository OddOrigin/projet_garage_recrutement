package fr.oddorigin.projet_garage_stage.model.garage;

import fr.oddorigin.projet_garage_stage.model.cars.Car;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Garage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    //I want garage_id in cars to be deleted when a garage is deleted but not the cars themselves

    @OneToMany(cascade = CascadeType.DETACH)
    @JoinColumn(name = "garage_id")
    private List<Car> cars;

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Car> getCars() {
        return cars;
    }

    public Garage setName(String name) {
        this.name = name;
        return this;
    }

    public Garage setCars(List<Car> cars) {
        this.cars = cars;
        return this;
    }

    @Override
    public String toString() {
        return "Garage{" +
                "id=" + id +
                ", name=\"" + name + "\"" +
                '}';
    }
}

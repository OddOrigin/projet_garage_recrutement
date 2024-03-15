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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
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

    public Garage addCar(Car car) {
        cars.add(car);
        return this;
    }

    public Garage removeCar(Car car) {
        cars.remove(car);
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

package fr.oddorigin.projet_garage_stage.model.cars;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String brand;
    private String model;
    private String color;
    private String registration;

    public long getId() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String getColor() {
        return color;
    }

    public String getRegistration() {
        return registration;
    }

    public Car setBrand(String brand) {
        this.brand = brand;
        return this;
    }

    public Car setModel(String model) {
        this.model = model;
        return this;
    }

    public Car setColor(String color) {
        this.color = color;
        return this;
    }

    public Car setRegistration(String registration) {
        this.registration = registration;
        return this;
    }

    @Override
    public String toString() {
        return "Cars{" +
                "id=" + id +
                ", brand=\"" + brand + "\"" +
                ", model=\"" + model + "\"" +
                ", color=\"" + color + "\"" +
                ", registration=\"" + registration + "\"" +
                '}';
    }


}

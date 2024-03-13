package fr.oddorigin.projet_garage_stage.model.cars;
import jakarta.persistence.*;

@Entity
@Table(name = "cars")
public class Cars {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String brand;
    private String model;
    private String color;
    private String registration;

    public Cars() {
    }

    public Cars(String brand, String model, String color, String registration) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.registration = registration;
    }

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

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
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

    public void setId(long id) {
        this.id = id;
    }



}

package fr.oddorigin.projet_garage_stage.model.cars;


import fr.oddorigin.projet_garage_stage.model.garage.Garage;
import fr.oddorigin.projet_garage_stage.model.garage.GarageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {

    private final CarRepository repository;
    private final GarageRepository garageRepository;

    public CarController(CarRepository repository, GarageRepository garageRepository) {
        this.repository = repository;
        this.garageRepository = garageRepository;
    }

    @GetMapping("/cars")
    public List<Car> getCars() {
        return repository.findAll();
    }

    @GetMapping("/cars/{id}")
    public Car getCar(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @PostMapping("/cars")
    public Car addCar(@RequestParam(required = false) Long garageId, @RequestBody Car car) {
        repository.save(car);
        if (garageId != null) assignGarage(garageId, car.getId());
        return car;
    }

    @PatchMapping("/cars")
    public Car assignGarage(@RequestParam Long garageId, @RequestParam Long carId) {
        final Garage garage = garageRepository.findById(garageId).orElseThrow();
        final Car car = repository.findById(carId).orElseThrow();
        garage.getCars().add(car);
        garageRepository.save(garage);
        return car;
    }


    @PatchMapping("/cars/{id}")
    public Car updateCar(@PathVariable Long id, @RequestBody Car car) {
        final Car carToUpdate = repository.findById(id).orElseThrow();
        carToUpdate.setBrand(car.getBrand());
        carToUpdate.setModel(car.getModel());
        carToUpdate.setColor(car.getColor());
        carToUpdate.setRegistration(car.getRegistration());
        repository.save(carToUpdate);
        return carToUpdate;
    }

    @DeleteMapping("/cars/{id}")
    public void deleteCar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}


package fr.oddorigin.projet_garage_stage.model.cars;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarsController {

    private final CarsRepository repository;

    public CarsController(CarsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cars")
    public List<Cars> getCars() {
        return repository.findAll();
    }

    @PostMapping("/cars")
    public Cars addCar(@RequestBody Cars car) {
        return repository.save(car);
    }

    @DeleteMapping("/cars/{id}")
    public void deleteCar(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PostMapping("/cars/{id}")
    public Cars updateCar(@RequestBody Cars newCar, @PathVariable Long id) {
        newCar.setId(id);
        return repository.save(newCar);
    }
}
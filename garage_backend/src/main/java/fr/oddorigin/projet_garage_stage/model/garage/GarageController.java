package fr.oddorigin.projet_garage_stage.model.garage;

import fr.oddorigin.projet_garage_stage.model.cars.Car;
import fr.oddorigin.projet_garage_stage.model.cars.CarRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class GarageController {
    private final GarageRepository repository;

    private final CarRepository carRepository;

    public GarageController(GarageRepository repository, CarRepository carRepository) {

        this.repository = repository;
        this.carRepository = carRepository;
    }

    @GetMapping("/garages")
    public List<Garage> getGarages() {
        return repository.findAll();
    }

    @PostMapping("/garages")
    public Garage addGarage(@RequestBody Garage garage) {
        return repository.save(garage);
    }

    @DeleteMapping("/garages/{id}")
    public void deleteGarage(@PathVariable long id) {
        repository.deleteById(id);
    }



}

package fr.oddorigin.projet_garage_stage.model.garage;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GarageController {
    private final GarageRepository repository;

    public GarageController(GarageRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/garages")
    public List<Garage> getGarages() {
        return repository.findAll();
    }

    @PostMapping("/garages")
    public Garage addGarage(@RequestBody Garage garage) {
        return repository.save(garage);
    }
}

package fr.oddorigin.projet_garage_stage.model.cars;

import fr.oddorigin.projet_garage_stage.model.garage.Garage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
public interface CarRepository extends JpaRepository<Car, Long>{
}



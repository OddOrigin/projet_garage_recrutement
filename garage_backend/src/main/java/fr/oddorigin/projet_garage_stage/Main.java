package fr.oddorigin.projet_garage_stage;

import fr.oddorigin.projet_garage_stage.model.User;
import fr.oddorigin.projet_garage_stage.model.UserRepository;
import fr.oddorigin.projet_garage_stage.model.garage.Garage;
import fr.oddorigin.projet_garage_stage.model.garage.GarageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.stream.Stream;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

  /*  @Bean
    CommandLineRunner init(GarageRepository garageRepository) {
        return args -> {
            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                Garage garage = new Garage(name);
                garageRepository.save(garage);
            });
            garageRepository.findAll().forEach(System.out::println);
        };
    }*/

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedMethods("*")
                        .allowedHeaders("*");
            }
        };
    }
}
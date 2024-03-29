package fr.oddorigin.projet_garage_stage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

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

    /*@Bean
    CommandLineRunner init(CarsRepository carsRepository){
        return args ->{
            Stream.of("Peugeot", "Renault", "Citroen", "Fiat", "Ford").forEach(brand -> {
                Cars car = new Cars(brand, "208", "Red", "AB-123-CD");
                carsRepository.save(car);
            });
            carsRepository.findAll().forEach(System.out::println);
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
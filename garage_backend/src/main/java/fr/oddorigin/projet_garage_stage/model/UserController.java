package fr.oddorigin.projet_garage_stage.model;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return repository.findAll();
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return repository.save(user);
    }
}

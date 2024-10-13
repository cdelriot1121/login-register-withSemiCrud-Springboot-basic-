package exercise.login_register_funcional.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import exercise.login_register_funcional.model.PersonaModel;

@Controller
public class SingsLoginRegisterController {

    private List<PersonaModel> usuarios = new ArrayList<>();
    @PostMapping("/register")
    public String register(@RequestParam("nombre") String nombre, 
                           @RequestParam("email") String email, 
                           @RequestParam("contrasenia") String contrasenia, 
                           Model model) {
        
        PersonaModel nuevoUsuario = new PersonaModel(nombre, email, contrasenia);
        
        usuarios.add(nuevoUsuario);
        
        model.addAttribute("mensaje", "Registro exitoso. Ahora puede iniciar sesión.");
        
        return "sign_in_up";
    }

    @PostMapping("/login")
    public String login(@RequestParam("email") String email, 
                    @RequestParam("contrasenia") String contrasenia, 
                    Model model) {
    
    for (PersonaModel usuario : usuarios) {
        if (usuario.getEmail().equals(email) && usuario.getContrasenia().equals(contrasenia)) {
            return "redirect:/interfaz";
        }
    }

    model.addAttribute("error", "Credenciales inválidas. Intente de nuevo.");
    
    return "sign_in_up";
    }

}

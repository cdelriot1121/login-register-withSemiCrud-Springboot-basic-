package exercise.login_register_funcional.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MappingPages {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/acerca")
    public String acerca() {
        return "acerca";
    }

    @GetMapping("/contacto")
    public String contacto() {
        return "contacto";
    }

    @GetMapping("/sign_in_up")
    public String sign_in_up() {
        return "sign_in_up";
    }

    @GetMapping("/interfaz")
    public String interfaz() {
        return "interfaz";
    }


}

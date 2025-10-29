import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Guilherme Abtibol</h3>
            <p className="text-foreground/70 text-sm">
              Especialista em Java, Spring Boot, Docker e React. Apaixonado por criar soluções escaláveis e de alta qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Guilhermeabtibol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:seu-email@example.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/50 text-sm">
            © {currentYear} Portfólio Profissional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GitHubProjects from "@/components/GitHubProjects";
import { ArrowRight, Code2, Database, Container, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  // Substitua com seu GitHub username
  const GITHUB_USERNAME = "seu-username";

  const skills = [
    {
      icon: Code2,
      title: "Backend",
      description: "Java, Spring Boot, REST APIs",
      technologies: ["Java", "Spring Boot", "Spring Data", "Spring Security"],
    },
    {
      icon: Code2,
      title: "Frontend",
      description: "React, TypeScript, Tailwind CSS",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "PostgreSQL, Design de Schemas",
      technologies: ["PostgreSQL", "SQL", "Migrations", "Indexing"],
    },
    {
      icon: Container,
      title: "DevOps",
      description: "Docker, Containerização",
      technologies: ["Docker", "Docker Compose", "CI/CD"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                Bem-vindo ao meu portfólio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </h1>

            <p className="text-xl text-foreground/70 mb-8 max-w-2xl">
              Especialista em Java, Spring Boot, Docker e React. Criando soluções escaláveis e de alta qualidade para problemas complexos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Ver Meus Projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/80 mb-6">
                Sou um desenvolvedor apaixonado por criar aplicações web modernas e escaláveis. Com experiência em todo o stack de desenvolvimento, desde o backend robusto com Java e Spring Boot até interfaces intuitivas com React.
              </p>

              <p className="text-lg text-foreground/80 mb-6">
                Minha especialidade inclui arquitetura de microsserviços, containerização com Docker, e otimização de bancos de dados PostgreSQL. Sempre buscando as melhores práticas e tecnologias mais recentes.
              </p>

              <p className="text-lg text-foreground/80">
                Quando não estou codificando, estou estudando novas tecnologias, contribuindo para projetos open source ou compartilhando conhecimento com a comunidade.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-500">5+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">Anos de Experiência</p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-3xl text-purple-500">20+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">Projetos Completados</p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-3xl text-pink-500">100%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">Satisfação do Cliente</p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-3xl text-green-500">10+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">Tecnologias Dominadas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Habilidades & Tecnologias</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-blue-500 mb-2" />
                    <CardTitle>{skill.title}</CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Meus Projetos</h2>

          <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-foreground/70">
              💡 Para ver seus projetos do GitHub, substitua <code className="bg-background px-2 py-1 rounded">{`GITHUB_USERNAME`}</code> no código com seu username do GitHub.
            </p>
          </div>

          <GitHubProjects username={GITHUB_USERNAME} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>

            <p className="text-lg text-foreground/70 mb-12">
              Tenho interesse em oportunidades de trabalho freelance e posições em tempo integral. Se você tem um projeto interessante ou quer conversar, entre em contato!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:seu-email@example.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Enviar Email
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

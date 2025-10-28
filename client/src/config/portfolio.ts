/**
 * Configuração do Portfólio
 * Edite este arquivo para personalizar seu portfólio
 */

export const portfolioConfig = {
  // Informações Pessoais
  name: "Seu Nome",
  title: "Desenvolvedor Full Stack",
  description: "Especialista em Java, Spring Boot, Docker e React. Criando soluções escaláveis e de alta qualidade.",
  
  // GitHub
  github: {
    username: "seu-username", // Substitua com seu GitHub username
    url: "https://github.com/seu-username",
  },
  
  // LinkedIn
  linkedin: {
    url: "https://linkedin.com/in/seu-perfil",
  },
  
  // Email
  email: "seu-email@example.com",
  
  // Estatísticas
  stats: {
    yearsOfExperience: 5,
    projectsCompleted: 20,
    clientSatisfaction: 100,
    technologiesMastered: 10,
  },
  
  // Habilidades
  skills: [
    {
      category: "Backend",
      description: "Java, Spring Boot, REST APIs",
      technologies: ["Java", "Spring Boot", "Spring Data", "Spring Security"],
    },
    {
      category: "Frontend",
      description: "React, TypeScript, Tailwind CSS",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      category: "Banco de Dados",
      description: "PostgreSQL, Design de Schemas",
      technologies: ["PostgreSQL", "SQL", "Migrations", "Indexing"],
    },
    {
      category: "DevOps",
      description: "Docker, Containerização",
      technologies: ["Docker", "Docker Compose", "CI/CD"],
    },
  ],
};

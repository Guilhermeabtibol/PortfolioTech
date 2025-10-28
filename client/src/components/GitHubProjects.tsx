import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
}

interface GitHubProjectsProps {
  username: string;
}

export default function GitHubProjects({ username }: GitHubProjectsProps) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=12&type=owner`
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar repositórios do GitHub");
        }

        const data = await response.json();

        const formattedRepos: Repository[] = data
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "Sem descrição",
            url: repo.html_url,
            language: repo.language || "Não especificado",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            topics: repo.topics || [],
          }));

        setRepos(formattedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-64 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <p className="text-foreground/70">
          Verifique se o nome de usuário do GitHub está correto.
        </p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-foreground/70">Nenhum repositório encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <Card key={repo.id} className="flex flex-col hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-lg line-clamp-2">{repo.name}</CardTitle>
                <CardDescription className="mt-1 text-xs">
                  {repo.language}
                </CardDescription>
              </div>
              <Github className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col">
            <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
              {repo.description}
            </p>

            {repo.topics.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4 mt-auto">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="h-4 w-4" />
                <span>{repo.forks}</span>
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full"
            >
              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

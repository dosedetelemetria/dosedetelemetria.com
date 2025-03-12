
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-center overflow-hidden bg-telemetria-darker">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-telemetria-dark">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.1),transparent_70%)]"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-telemetria-yellow/30 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-telemetria-yellow">Blog</span> Dose de Telemetria
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Artigos, tutoriais e novidades sobre OpenTelemetry e observabilidade
              </p>
              <div className="max-w-md mx-auto mt-8 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar artigos..."
                    className="pl-10 bg-background border-white/10 focus-visible:ring-telemetria-yellow"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">Nenhum artigo encontrado</h3>
              <p className="text-muted-foreground">
                Não encontramos artigos correspondentes à sua busca. Tente outros termos.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  image={post.image}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-telemetria-dark">
        <div className="container-custom max-w-4xl">
          <div className="glass-morphism rounded-xl p-8 md:p-12">
            <SectionHeading
              title="Inscreva-se na nossa newsletter"
              subtitle="Receba conteúdo exclusivo sobre OpenTelemetry diretamente no seu e-mail"
              centered
            />
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="bg-black/20 border-white/10 focus-visible:ring-telemetria-yellow"
                />
                <button className="bg-telemetria-yellow hover:bg-telemetria-yellow/90 text-telemetria-dark font-medium py-2 px-4 rounded-md transition-colors">
                  Inscrever-se
                </button>
              </div>
              <p className="text-xs text-white/60 mt-3 text-center">
                Ao se inscrever, você concorda com nossa política de privacidade.
                Nunca enviaremos spam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

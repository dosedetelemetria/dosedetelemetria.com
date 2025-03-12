
import { Link } from "react-router-dom";
import { ArrowRight, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import VideoEmbed from "@/components/VideoEmbed";
import { blogPosts } from "@/data/blog-posts";

const Index = () => {
  // Obtem os dois posts mais recentes
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-telemetria-darker">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-telemetria-dark">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.1),transparent_70%)]"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-telemetria-yellow/30 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 pt-16 md:pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4">
                <img 
                  src="/lovable-uploads/680a09b6-29f2-4dee-8b6a-c9b075517152.png" 
                  alt="Dose de Telemetria Logo" 
                  className="h-24 w-24 animate-pulse-subtle"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Domine <span className="text-telemetria-yellow">OpenTelemetry</span> e transforme sua carreira
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Aprenda com especialistas como implementar observabilidade de forma eficiente em seus projetos e sistemas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-telemetria-yellow text-telemetria-dark hover:bg-telemetria-yellow/90"
                >
                  <Link to="/produtos">
                    Conheça nossos cursos
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 hover:bg-white/5"
                >
                  <Link to="/blog">
                    Explorar conteúdos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#produtos" className="text-white/50 hover:text-white transition-colors">
            <ArrowRight className="h-6 w-6 rotate-90" />
          </a>
        </div>
      </section>

      {/* Produtos em destaque */}
      <section id="produtos" className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Nossos Produtos"
            subtitle="Cursos e especializações projetados para profissionais que desejam dominar OpenTelemetry"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-morphism rounded-xl p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Especialização em OTel</h3>
              <div className="inline-block ml-0 mb-4 px-3 py-1 bg-telemetria-yellow/10 border border-telemetria-yellow/20 text-xs rounded-full text-telemetria-yellow">
                Próxima turma em breve
              </div>
              <p className="text-white/80 mb-6">
                Formação intensiva com turmas fechadas, mentorias ao vivo e projetos práticos. Desenvolva 
                habilidades avançadas em OpenTelemetry com acompanhamento especializado.
              </p>
              <div className="mt-auto">
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-telemetria-yellow/30 text-telemetria-yellow hover:bg-telemetria-yellow/10"
                >
                  <Link to="/produtos#especializacao">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="glass-morphism rounded-xl p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Trilha OTel</h3>
              <div className="inline-block ml-0 mb-4 px-3 py-1 bg-telemetria-yellow/20 border border-telemetria-yellow/30 text-xs rounded-full text-telemetria-yellow">
                Disponível agora
              </div>
              <p className="text-white/80 mb-6">
                Curso completo disponível no seu ritmo, com aulas gravadas, exercícios práticos e acesso vitalício. 
                Do básico ao avançado em observabilidade e instrumentação.
              </p>
              <div className="mt-auto">
                <Button 
                  asChild
                  className="w-full bg-telemetria-yellow text-telemetria-dark hover:bg-telemetria-yellow/90"
                >
                  <Link to="/produtos#trilha">
                    Conhecer curso <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canal YouTube */}
      <section className="section-padding bg-telemetria-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="animate-fade-in-right">
                <SectionHeading
                  title="Nosso Canal no YouTube"
                  subtitle="Conteúdo gratuito e dicas sobre OpenTelemetry, observabilidade e monitoramento"
                />
                <div className="space-y-6">
                  <p className="text-white/80">
                    Inscreva-se em nosso canal e receba notificações de novos vídeos sobre implementação 
                    de OpenTelemetry, boas práticas e tutoriais passo a passo.
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      asChild
                      className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white"
                    >
                      <a href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2 h-5 w-5" /> Inscrever-se
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <VideoEmbed 
                videoId="dQw4w9WgXcQ" 
                title="Introdução ao OpenTelemetry" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading
              title="Últimas do Blog"
              subtitle="Artigos, tutoriais e novidades sobre OpenTelemetry"
              className="mb-0"
            />
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm font-medium text-telemetria-yellow hover:underline mt-4 md:mt-0"
            >
              Ver todos os artigos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
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
        </div>
      </section>

      {/* LinkedIn */}
      <section className="section-padding bg-telemetria-darker border-t border-white/5">
        <div className="container-custom text-center">
          <SectionHeading
            title="Conecte-se Conosco"
            subtitle="Siga-nos no LinkedIn para atualizações, dicas e oportunidades"
            centered
          />
          <Button 
            asChild
            size="lg" 
            className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white"
          >
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Linkedin className="mr-2 h-5 w-5" /> Seguir no LinkedIn
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { useEffect } from "react";
import { blogPosts } from "@/data/blog-posts";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  // Obter posts relacionados, excluindo o atual
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 2);

  useEffect(() => {
    if (!post) {
      console.error(`Blog post with slug "${slug}" not found`);
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="section-padding bg-background flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Artigo não encontrado</h2>
        <p className="text-muted-foreground mb-8">O artigo que você está procurando não existe ou foi removido.</p>
        <Button asChild variant="outline">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-telemetria-darker">
        <div className="absolute inset-0 z-0">
          {post.image && (
            <>
              <img 
                src={post.image} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-telemetria-darker/60 via-telemetria-darker/80 to-telemetria-darker"></div>
            </>
          )}
        </div>

        <div className="container-custom relative z-10 py-20">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-white/70 hover:text-telemetria-yellow mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o blog
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-4 w-4 text-telemetria-yellow" />
                <span className="text-sm text-white/70">{post.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                {post.excerpt}
              </p>
              
              <div className="border-t border-white/10 pt-6 mt-6 flex justify-between items-center">
                <div></div>
                <button className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-telemetria-yellow transition-colors">
                  <Share2 className="h-4 w-4" /> Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-invert prose-yellow">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-telemetria-dark">
        <div className="container-custom">
          <SectionHeading
            title="Artigos relacionados"
            subtitle="Continue aprendendo com outros conteúdos do blog"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((post) => (
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
    </div>
  );
};

export default BlogPost;

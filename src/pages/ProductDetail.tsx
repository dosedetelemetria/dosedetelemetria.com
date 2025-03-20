
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Testimonial from "@/components/Testimonial";
import { useEffect, useState } from "react";
import { productData } from "@/data/product-data";
import { getProductTestimonials } from "@/data/testimonial-data";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  
  useEffect(() => {
    const foundProduct = productData.find(p => p.slug === slug);
    setProduct(foundProduct);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Button asChild variant="outline">
          <Link to="/produtos">Voltar para produtos</Link>
        </Button>
      </div>
    );
  }

  // Obtém três depoimentos específicos para este produto
  const testimonials = getProductTestimonials(product.id, 3);

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

        <div className="container-custom relative z-10 py-16 md:py-20">
          <Link 
            to="/produtos" 
            className="inline-flex items-center text-white/70 hover:text-telemetria-yellow transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para produtos
          </Link>

          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {product.title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6 max-w-3xl">
                {product.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="text-3xl font-bold">{product.price}</div>
                {product.available ? (
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-telemetria-yellow text-telemetria-dark hover:bg-telemetria-yellow/90 font-medium"
                  >
                    <a href={product.ctaLink} target="_blank" rel="noopener noreferrer">
                      {product.ctaText}
                    </a>
                  </Button>
                ) : (
                  <Button 
                    size="lg" 
                    className="bg-white/20 text-white hover:bg-telemetria-yellow/90 hover:text-telemetria-dark font-medium"
                    disabled={false}
                  >
                    {product.ctaText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="O que você vai aprender"
            subtitle="Conheça o conteúdo completo do curso e as habilidades que você vai desenvolver"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.detailedFeatures?.map((feature: any, index: number) => (
              <div key={index} className="bg-telemetria-dark/50 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form (only for unavailable products) */}
      {!product.available && (
        <section className="section-padding bg-telemetria-darker">
          <div className="container-custom">
            <div className="max-w-lg mx-auto">
              <LeadCaptureForm productId={product.id} productName={product.title} />
            </div>
          </div>
        </section>
      )}

      {/* Depoimentos */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="O que dizem nossos alunos"
            subtitle="Experiências reais de quem já aprendeu com a gente"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-telemetria-dark">
        <div className="container-custom">
          <SectionHeading
            title="Módulos do curso"
            subtitle="Conteúdo organizado de forma progressiva para facilitar seu aprendizado"
            centered
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {product.curriculum?.map((module: any, index: number) => (
              <div key={index} className="bg-telemetria-darker/70 rounded-lg border border-white/10 overflow-hidden">
                <div className="p-5 border-b border-white/10">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-telemetria-yellow/20 text-telemetria-yellow mr-3 text-sm">
                      {index + 1}
                    </span>
                    {module.title}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {module.lessons.map((lesson: any, idx: number) => (
                    <div key={idx} className="flex items-start">
                      <span className="mr-3 w-6 h-6 flex-shrink-0 bg-secondary/50 rounded-full flex items-center justify-center text-xs">
                        {idx + 1}
                      </span>
                      <span className="text-white/80">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar sua jornada em <span className="text-telemetria-yellow">OpenTelemetry</span>?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Domine observabilidade e OpenTelemetry e destaque-se no mercado com habilidades que estão em alta demanda.
            </p>
            {product.available ? (
              <Button 
                asChild
                size="lg" 
                className="bg-telemetria-yellow text-telemetria-dark hover:bg-telemetria-yellow/90 font-medium"
              >
                <a href={product.ctaLink} target="_blank" rel="noopener noreferrer">
                  {product.ctaText}
                </a>
              </Button>
            ) : (
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-white/20 text-white hover:bg-telemetria-yellow/90 hover:text-telemetria-dark font-medium"
                  disabled={false}
                  onClick={() => {
                    const waitlistSection = document.querySelector('.section-padding.bg-telemetria-darker');
                    if (waitlistSection) {
                      waitlistSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {product.ctaText}
                </Button>
                {!product.available && (
                  <div className="pt-2">
                    <p className="text-sm text-white/70">
                      Este curso ainda não está disponível para compra. Inscreva-se na lista de espera acima para ser notificado quando abrirmos novas vagas.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

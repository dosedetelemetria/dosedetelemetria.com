
export interface ProductFeature {
  text: string;
}

export interface DetailedFeature {
  title: string;
  description: string;
}

export interface CurriculumModule {
  title: string;
  lessons: string[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  features: ProductFeature[];
  detailedFeatures: DetailedFeature[];
  curriculum: CurriculumModule[];
  price: string;
  ctaText: string;
  ctaLink: string;
  available: boolean;
  popular?: boolean;
}

export const productData: Product[] = [
  {
    id: "especializacao",
    slug: "especializacao-otel",
    title: "Especialização em OTel",
    description: "Formação intensiva com mentorias ao vivo e projetos práticos",
    fullDescription: "Nossa especialização em OpenTelemetry é um programa imersivo de 8 semanas com mentorias ao vivo, projetos práticos e feedback personalizado dos melhores especialistas do mercado.",
    features: [
      { text: "Turmas com vagas limitadas" },
      { text: "Mentorias ao vivo com especialistas" },
      { text: "Projetos práticos e feedback personalizado" },
      { text: "Certificado de conclusão" },
      { text: "Acesso ao grupo privado de alunos" },
      { text: "Material complementar exclusivo" }
    ],
    detailedFeatures: [
      {
        title: "Mentorias ao vivo",
        description: "Sessões semanais com especialistas onde você pode tirar dúvidas e receber orientação personalizada."
      },
      {
        title: "Projetos práticos",
        description: "Desenvolva projetos reais que simulam ambientes de produção e receba feedback detalhado."
      },
      {
        title: "Comunidade exclusiva",
        description: "Acesso a um grupo privado onde você pode interagir com outros alunos e trocar experiências."
      },
      {
        title: "Certificado reconhecido",
        description: "Ao completar o curso, você recebe um certificado que atesta suas habilidades em OpenTelemetry."
      },
      {
        title: "Material exclusivo",
        description: "Acesso a conteúdos, artigos e recursos que não estão disponíveis em nenhum outro lugar."
      },
      {
        title: "Suporte prioritário",
        description: "Canal direto com os instrutores para resolver dúvidas técnicas durante todo o programa."
      }
    ],
    curriculum: [
      {
        title: "Fundamentos de Observabilidade",
        lessons: [
          "Introdução aos conceitos de observabilidade",
          "Os três pilares: logs, métricas e traces",
          "Evolução da observabilidade e o papel do OpenTelemetry",
          "Arquitetura distribuída e desafios de observabilidade"
        ]
      },
      {
        title: "Introdução ao OpenTelemetry",
        lessons: [
          "História e evolução do OpenTelemetry",
          "Arquitetura e componentes principais",
          "Comparação com outras soluções de observabilidade",
          "Configuração do ambiente de desenvolvimento"
        ]
      },
      {
        title: "Instrumentação com OpenTelemetry",
        lessons: [
          "Instrumentação automática vs manual",
          "Implementação de traces em aplicações",
          "Coleta e exportação de métricas",
          "Integração com diferentes linguagens de programação"
        ]
      },
      {
        title: "OpenTelemetry em Produção",
        lessons: [
          "Deployment em ambientes Kubernetes",
          "Configuração de coletores",
          "Estratégias de sampling",
          "Performance tuning e otimização"
        ]
      }
    ],
    price: "€997",
    ctaText: "Lista de espera",
    ctaLink: "/waiting-list",
    available: false
  },
  {
    id: "trilha",
    slug: "trilha-otel",
    title: "Trilha OTel",
    description: "Curso completo para aprender no seu ritmo",
    fullDescription: "A Trilha OTel é um curso completo e autoguiado que permite você dominar OpenTelemetry no seu próprio ritmo, com conteúdo prático e projetos que simulam cenários reais.",
    features: [
      { text: "Acesso vitalício às aulas" },
      { text: "Certificado de conclusão" },
      { text: "Projetos práticos guiados" },
      { text: "Suporte via comunidade" },
      { text: "Atualizações do conteúdo" },
      { text: "30 dias de garantia" }
    ],
    detailedFeatures: [
      {
        title: "Aprenda no seu ritmo",
        description: "Estude quando e onde quiser, com acesso vitalício a todo o conteúdo do curso."
      },
      {
        title: "Conteúdo prático",
        description: "Mais de 40 aulas com exemplos práticos e código que você pode aplicar imediatamente."
      },
      {
        title: "Projetos reais",
        description: "Desenvolva projetos que simulam ambientes reais de produção com diferentes tecnologias."
      },
      {
        title: "Comunidade de suporte",
        description: "Acesso a uma comunidade ativa onde você pode tirar dúvidas e compartilhar experiências."
      },
      {
        title: "Certificado digital",
        description: "Ao completar o curso, você recebe um certificado que pode adicionar ao seu currículo e LinkedIn."
      },
      {
        title: "Atualizações constantes",
        description: "O curso é atualizado regularmente para acompanhar as novidades do OpenTelemetry."
      }
    ],
    curriculum: [
      {
        title: "Fundamentos de Observabilidade",
        lessons: [
          "Introdução aos conceitos de observabilidade",
          "Os três pilares: logs, métricas e traces",
          "Evolução da observabilidade e o papel do OpenTelemetry",
          "Arquitetura distribuída e desafios de observabilidade"
        ]
      },
      {
        title: "Introdução ao OpenTelemetry",
        lessons: [
          "História e evolução do OpenTelemetry",
          "Arquitetura e componentes principais",
          "Comparação com outras soluções de observabilidade",
          "Configuração do ambiente de desenvolvimento"
        ]
      },
      {
        title: "Instrumentação com OpenTelemetry",
        lessons: [
          "Instrumentação automática vs manual",
          "Implementação de traces em aplicações",
          "Coleta e exportação de métricas",
          "Integração com diferentes linguagens de programação"
        ]
      },
      {
        title: "OpenTelemetry em Produção",
        lessons: [
          "Deployment em ambientes Kubernetes",
          "Configuração de coletores",
          "Estratégias de sampling",
          "Performance tuning e otimização"
        ]
      }
    ],
    price: "€397",
    ctaText: "Comprar agora",
    ctaLink: "https://mn.dosedetelemetria.com/users/onboarding/choose_plan?plan_id=1764302&bundle_token=f055362f994c50af8e95a84c787cc1fb&utm_source=manual",
    available: true,
    popular: true
  }
];

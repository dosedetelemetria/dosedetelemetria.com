
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  productIds?: string[]; // Para vincular depoimentos a produtos específicos
}

export const testimonialData: Testimonial[] = [
  {
    id: "t1",
    quote: "O curso Trilha OTel me permitiu implementar observabilidade na minha aplicação em menos de uma semana. O conteúdo é extremamente prático e bem estruturado.",
    author: "Carlos Silva",
    role: "Engenheiro de Software",
    company: "TechBrasil",
    productIds: ["trilha", "especializacao"]
  },
  {
    id: "t2",
    quote: "Depois de fazer a Especialização em OTel, consegui reduzir o tempo de resolução de problemas em 70%. O investimento compensou em todos os sentidos.",
    author: "Mariana Santos",
    role: "DevOps Engineer",
    company: "CloudSolutions",
    productIds: ["especializacao"]
  },
  {
    id: "t3",
    quote: "A clareza das explicações e a qualidade dos projetos práticos fazem deste curso o melhor investimento que fiz na minha carreira este ano.",
    author: "Rafael Oliveira",
    role: "Arquiteto de Software",
    company: "FinTech SA",
    productIds: ["trilha", "especializacao"]
  },
  {
    id: "t4",
    quote: "Nunca imaginei que implementar OpenTelemetry poderia ser tão acessível. Os instrutores tornam conceitos complexos fáceis de entender.",
    author: "Amanda Costa",
    role: "Backend Developer",
    company: "E-commerce Brasil",
    productIds: ["trilha"]
  },
  {
    id: "t5",
    quote: "As mentorias ao vivo da especialização fizeram toda a diferença para solucionar problemas específicos do meu ambiente de trabalho.",
    author: "Lucas Mendes",
    role: "SRE",
    company: "BankTech",
    productIds: ["especializacao"]
  }
];

// Funções auxiliares para obter depoimentos
export const getProductTestimonials = (productId: string, limit?: number): Testimonial[] => {
  const filtered = testimonialData.filter(t => !t.productIds || t.productIds.includes(productId));
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getRandomTestimonials = (limit: number): Testimonial[] => {
  const shuffled = [...testimonialData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};

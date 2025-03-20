
import React from "react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/SectionHeading";

const TermsOfUse = () => {
  return (
    <div className="bg-telemetria-dark min-h-screen">
      <div className="container-custom py-16 md:py-24 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Termos de Uso</h1>
        <Separator className="bg-telemetria-yellow/30 mb-8" />

        <div className="bg-telemetria-darker border border-white/5 rounded-xl p-6 md:p-8 max-w-4xl">
          <div className="space-y-10">
            <section>
              <SectionHeading 
                title="1. Aceitação dos Termos" 
                className="mb-4"
              />
              <p className="text-white/80">
                Ao acessar e utilizar os serviços da Dose de Telemetria, incluindo o website, cursos, materiais didáticos e outros produtos oferecidos, você concorda em cumprir e ficar vinculado aos presentes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nossos serviços.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="2. Descrição dos Serviços" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                A Dose de Telemetria oferece cursos, treinamentos e materiais educativos relacionados a OpenTelemetry (OTel) e tecnologias de observabilidade. Nossos serviços incluem, mas não se limitam a:
              </p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Cursos online sobre OpenTelemetry</li>
                <li>Materiais didáticos e guias técnicos</li>
                <li>Consultorias especializadas</li>
                <li>Conteúdo gratuito em nosso blog e canais de mídia</li>
              </ul>
            </section>

            <section>
              <SectionHeading 
                title="3. Contas de Usuário" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                Para acessar determinados serviços, pode ser necessário criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrem em sua conta. Você concorda em notificar imediatamente a Dose de Telemetria sobre qualquer uso não autorizado de sua conta.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="4. Propriedade Intelectual" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                Todo o conteúdo disponibilizado através de nossos serviços, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da Dose de Telemetria ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.
              </p>
              <p className="text-white/80">
                É estritamente proibida a reprodução, distribuição, exibição, transmissão, comercialização ou qualquer outro uso do conteúdo sem autorização prévia por escrito da Dose de Telemetria.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="5. Limitação de Responsabilidade" 
                className="mb-4"
              />
              <p className="text-white/80">
                A Dose de Telemetria não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar nossos serviços, mesmo que tenhamos sido informados da possibilidade de tais danos.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="6. Política de Reembolso" 
                className="mb-4"
              />
              <p className="text-white/80">
                Para cursos e produtos digitais, oferecemos uma garantia de satisfação de 7 dias. Se você não estiver satisfeito com o curso ou produto adquirido, entre em contato conosco dentro deste prazo para solicitar um reembolso integral.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="7. Alterações nos Termos" 
                className="mb-4"
              />
              <p className="text-white/80">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação dos termos revisados. Recomendamos que você revise periodicamente estes termos para se manter informado sobre quaisquer atualizações.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="8. Lei Aplicável" 
                className="mb-4"
              />
              <p className="text-white/80">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais da cidade de São Paulo, SP.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="9. Contato" 
                className="mb-4"
              />
              <p className="text-white/80">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: contato@dosedetelemetria.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

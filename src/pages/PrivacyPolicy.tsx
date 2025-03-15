
import React from "react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/SectionHeading";

const PrivacyPolicy = () => {
  return (
    <div className="bg-telemetria-dark min-h-screen">
      <div className="container-custom py-16 md:py-24 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Privacidade</h1>
        <Separator className="bg-telemetria-yellow/30 mb-8" />

        <div className="bg-telemetria-darker border border-white/5 rounded-xl p-6 md:p-8 max-w-4xl">
          <p className="text-white/80 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-10">
            <section>
              <SectionHeading 
                title="1. Introdução" 
                className="mb-4"
              />
              <p className="text-white/80">
                A Dose de Telemetria está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nossos serviços, incluindo nosso website e produtos digitais.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="2. Informações que Coletamos" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li><strong>Informações de identificação pessoal:</strong> Nome, endereço de e-mail, número de telefone, informações de pagamento e endereço.</li>
                <li><strong>Informações de uso:</strong> Como você interage com nosso site, produtos e serviços.</li>
                <li><strong>Informações do dispositivo:</strong> Tipo de navegador, endereço IP, sistema operacional e outras tecnologias em dispositivos que você usa para acessar nosso site.</li>
                <li><strong>Cookies e tecnologias similares:</strong> Utilizamos cookies e tecnologias similares para coletar informações sobre sua navegação em nosso site.</li>
              </ul>
            </section>

            <section>
              <SectionHeading 
                title="3. Como Utilizamos Suas Informações" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar transações e enviar notificações relacionadas</li>
                <li>Enviar comunicações de marketing, quando permitido</li>
                <li>Personalizar sua experiência em nosso site</li>
                <li>Proteger contra, identificar e prevenir fraudes e outras atividades ilegais</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <SectionHeading 
                title="4. Compartilhamento de Informações" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                Podemos compartilhar suas informações pessoais com:
              </p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li><strong>Prestadores de serviços:</strong> Terceiros que nos ajudam a operar nosso negócio e fornecer serviços (processadores de pagamento, serviços de hospedagem, etc.).</li>
                <li><strong>Parceiros comerciais:</strong> Empresas com as quais colaboramos para oferecer produtos ou serviços.</li>
                <li><strong>Cumprimento legal:</strong> Quando necessário para cumprir com uma obrigação legal, processo judicial ou solicitação governamental.</li>
              </ul>
              <p className="text-white/80 mt-4">
                Não vendemos seus dados pessoais a terceiros.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="5. Segurança de Dados" 
                className="mb-4"
              />
              <p className="text-white/80">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, perda acidental ou destruição. No entanto, nenhuma transmissão de dados pela Internet ou sistema de armazenamento pode garantir segurança 100%.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="6. Seus Direitos" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD) e outras leis aplicáveis, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Acesso às suas informações pessoais</li>
                <li>Correção de dados imprecisos ou incompletos</li>
                <li>Exclusão de seus dados pessoais</li>
                <li>Restrição ou oposição ao processamento de seus dados</li>
                <li>Portabilidade de dados</li>
                <li>Retirada de consentimento a qualquer momento</li>
              </ul>
              <p className="text-white/80 mt-4">
                Para exercer esses direitos, entre em contato conosco através do e-mail: contato@dosedetelemetria.com
              </p>
            </section>

            <section>
              <SectionHeading 
                title="7. Retenção de Dados" 
                className="mb-4"
              />
              <p className="text-white/80">
                Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="8. Atualizações desta Política" 
                className="mb-4"
              />
              <p className="text-white/80">
                Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível em nosso site, com a data da última atualização. Recomendamos que você revise esta política regularmente.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="9. Contato" 
                className="mb-4"
              />
              <p className="text-white/80">
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco pelo e-mail: contato@dosedetelemetria.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

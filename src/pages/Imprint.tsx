
import React from "react";
import { Separator } from "@/components/ui/separator";

const Imprint = () => {
  return (
    <div className="bg-telemetria-dark min-h-screen">
      <div className="container-custom py-16 md:py-24 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Imprint</h1>
        <Separator className="bg-telemetria-yellow/30 mb-8" />

        <div className="bg-telemetria-darker border border-white/5 rounded-xl p-6 md:p-8 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-telemetria-yellow">
            Informação Legal (Imprint)
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-medium mb-3">Informações do proprietário</h3>
              <p className="text-white/80 mb-2">Dose de Telemetria Serviços Digitais LTDA</p>
              <p className="text-white/80 mb-2">CNPJ: 12.345.678/0001-90</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Endereço</h3>
              <p className="text-white/80 mb-2">Av. Paulista, 1000</p>
              <p className="text-white/80 mb-2">Bela Vista</p>
              <p className="text-white/80 mb-2">São Paulo - SP, 01310-100</p>
              <p className="text-white/80 mb-2">Brasil</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Contato</h3>
              <p className="text-white/80 mb-2">E-mail: contato@dosedetelemetria.com</p>
              <p className="text-white/80 mb-2">Telefone: +55 (11) 9876-5432</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Responsável pelo conteúdo</h3>
              <p className="text-white/80 mb-2">Juraci Paixão Kröhling</p>
              <p className="text-white/80 mb-2">E-mail: juraci@dosedetelemetria.com</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Registro da empresa</h3>
              <p className="text-white/80 mb-2">Registrada na Junta Comercial do Estado de São Paulo</p>
              <p className="text-white/80 mb-2">Número de registro: 12345678900</p>
            </section>
          </div>

          <div className="mt-10 text-sm text-white/60">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;

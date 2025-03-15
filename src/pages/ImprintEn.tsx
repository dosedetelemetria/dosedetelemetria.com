
import React from "react";
import { Separator } from "@/components/ui/separator";

const ImprintEn = () => {
  return (
    <div className="bg-telemetria-dark min-h-screen">
      <div className="container-custom py-16 md:py-24 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Imprint</h1>
        <Separator className="bg-telemetria-yellow/30 mb-8" />

        <div className="bg-telemetria-darker border border-white/5 rounded-xl p-6 md:p-8 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-telemetria-yellow">
            Legal Information (Imprint)
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-medium mb-3">Owner Information</h3>
              <p className="text-white/80 mb-2">Dose de Telemetria Digital Services LLC</p>
              <p className="text-white/80 mb-2">EIN: 12.345.678/0001-90</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Address</h3>
              <p className="text-white/80 mb-2">Paulista Avenue, 1000</p>
              <p className="text-white/80 mb-2">Bela Vista</p>
              <p className="text-white/80 mb-2">São Paulo - SP, 01310-100</p>
              <p className="text-white/80 mb-2">Brazil</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Contact</h3>
              <p className="text-white/80 mb-2">Email: contact@dosedetelemetria.com</p>
              <p className="text-white/80 mb-2">Phone: +55 (11) 9876-5432</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Content Responsible</h3>
              <p className="text-white/80 mb-2">Juraci Paixão Kröhling</p>
              <p className="text-white/80 mb-2">Email: juraci@dosedetelemetria.com</p>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-3">Company Registration</h3>
              <p className="text-white/80 mb-2">Registered with the São Paulo State Commercial Registry</p>
              <p className="text-white/80 mb-2">Registration number: 12345678900</p>
            </section>
          </div>

          <div className="mt-10 text-sm text-white/60">
            <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprintEn;

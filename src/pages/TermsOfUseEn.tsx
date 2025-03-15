
import React from "react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/SectionHeading";

const TermsOfUseEn = () => {
  return (
    <div className="bg-telemetria-dark min-h-screen">
      <div className="container-custom py-16 md:py-24 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Use</h1>
        <Separator className="bg-telemetria-yellow/30 mb-8" />

        <div className="bg-telemetria-darker border border-white/5 rounded-xl p-6 md:p-8 max-w-4xl">
          <p className="text-white/80 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>

          <div className="space-y-10">
            <section>
              <SectionHeading 
                title="1. Acceptance of Terms" 
                className="mb-4"
              />
              <p className="text-white/80">
                By accessing and using Dose de Telemetria's services, including the website, courses, educational materials, and other offered products, you agree to comply with and be bound by these Terms of Use. If you do not agree to any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="2. Description of Services" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                Dose de Telemetria offers courses, training, and educational materials related to OpenTelemetry (OTel) and observability technologies. Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-5 text-white/80 space-y-2">
                <li>Online courses about OpenTelemetry</li>
                <li>Educational materials and technical guides</li>
                <li>Specialized consultancy</li>
                <li>Free content on our blog and media channels</li>
              </ul>
            </section>

            <section>
              <SectionHeading 
                title="3. User Accounts" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                To access certain services, you may need to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify Dose de Telemetria immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="4. Intellectual Property" 
                className="mb-4"
              />
              <p className="text-white/80 mb-4">
                All content provided through our services, including text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Dose de Telemetria or its content suppliers and is protected by Brazilian and international copyright laws.
              </p>
              <p className="text-white/80">
                Reproduction, distribution, display, transmission, commercialization, or any other use of the content without prior written authorization from Dose de Telemetria is strictly prohibited.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="5. Limitation of Liability" 
                className="mb-4"
              />
              <p className="text-white/80">
                Dose de Telemetria will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been informed of the possibility of such damages.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="6. Refund Policy" 
                className="mb-4"
              />
              <p className="text-white/80">
                For courses and digital products, we offer a 7-day satisfaction guarantee. If you are not satisfied with the purchased course or product, please contact us within this timeframe to request a full refund.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="7. Changes to Terms" 
                className="mb-4"
              />
              <p className="text-white/80">
                We reserve the right to modify these Terms of Use at any time. Changes will take effect immediately upon posting the revised terms. We recommend that you periodically review these terms to stay informed of any updates.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="8. Applicable Law" 
                className="mb-4"
              />
              <p className="text-white/80">
                These Terms of Use shall be governed by and construed in accordance with the laws of the Federative Republic of Brazil. Any dispute arising from these terms will be submitted to the exclusive jurisdiction of the courts of the city of São Paulo, SP.
              </p>
            </section>

            <section>
              <SectionHeading 
                title="9. Contact" 
                className="mb-4"
              />
              <p className="text-white/80">
                If you have questions about these Terms of Use, please contact us at: contact@dosedetelemetria.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseEn;

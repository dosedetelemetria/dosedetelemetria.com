
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, User, Check } from "lucide-react";

interface LeadCaptureFormProps {
  productId: string;
  productName: string;
}

const LeadCaptureForm = ({ productId, productName }: LeadCaptureFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Obrigado pelo seu interesse. Entraremos em contato em breve.",
      });
      
      // Could send data to a real API here
      console.log("Lead captured:", { ...formData, productId });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-telemetria-dark/50 p-8 border border-white/10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Inscrição realizada!</h3>
        <p className="text-white/80 mb-4">
          Obrigado por demonstrar interesse em {productName}. Entraremos em contato assim que novas vagas estiverem disponíveis.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-telemetria-dark/50 p-8 border border-white/10">
      <h3 className="text-xl font-semibold mb-2">Entre para a lista de espera</h3>
      <p className="text-white/80 mb-6">
        Preencha seus dados abaixo para ser notificado quando abrirmos novas vagas para este curso.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
              className="pl-10"
            />
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu melhor email"
              required
              className="pl-10"
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-telemetria-yellow text-telemetria-dark hover:bg-telemetria-yellow/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Entrar para lista de espera"}
        </Button>
        
        <p className="text-xs text-white/60 text-center mt-4">
          Ao se inscrever, você concorda em receber emails sobre este curso e outras ofertas relacionadas. Você pode cancelar a inscrição a qualquer momento.
        </p>
      </form>
    </div>
  );
};

export default LeadCaptureForm;

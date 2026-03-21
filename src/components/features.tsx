"use client";

import {
  LayoutTemplate,
  Settings,
  Sparkles,
  Send,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const steps = [
  {
    step: "01",
    icon: LayoutTemplate,
    title: "Escolha um template",
    description:
      "6 templates profissionais por nicho: Proposta Comercial, Desenvolvimento Web, Design & Branding, Marketing Digital, Consultoria e Manutenção & Suporte.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Personalize com seus dados",
    description:
      "No onboarding, preencha os dados da sua empresa — serviços, termos e metodologia. Tudo é reutilizado automaticamente em cada proposta.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Gere com IA ou edite manualmente",
    description:
      "A IA preenche cada seção baseada no contexto da sua empresa e do projeto. Prefere editar na mão? Seções dinâmicas com total liberdade.",
  },
  {
    step: "04",
    icon: Send,
    title: "Envie e acompanhe",
    description:
      "Compartilhe via link, acompanhe quando o cliente visualizou e saiba o status em tempo real: rascunho, enviada, visualizada, aceita ou rejeitada.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Da ideia à proposta enviada em 4 passos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simples, rápido e profissional. Sem complicação.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.step}>
                <div className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary/50 uppercase tracking-widest">
                        Passo {s.step}
                      </span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

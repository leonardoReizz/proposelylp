"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const plans = [
  {
    name: "Gratuito",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Para quem está começando e quer testar a plataforma.",
    features: [
      "3 propostas por mês",
      "Templates básicos",
      "Link de compartilhamento",
      "Download em PDF",
    ],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "Para freelancers e profissionais que querem crescer.",
    features: [
      "Propostas ilimitadas",
      "Todos os templates",
      "Criação de templates custom",
      "3 estilos de visualização",
      "Domínio personalizado",
      "Analytics de visualização",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    highlighted: true,
    badge: "Mais popular",
  },
  {
    name: "Business",
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: "Para agências e equipes que precisam de mais.",
    features: [
      "Tudo do Pro",
      "Geração de propostas com IA",
      "Equipe ilimitada",
      "API de integração",
      "Onboarding personalizado",
      "Suporte dedicado",
    ],
    cta: "Assinar Business",
    highlighted: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Preços
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comece grátis e faça upgrade quando precisar. Sem surpresas.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full bg-muted border border-border">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                !yearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              Mensal
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                yearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              Anual
              <span className="ml-1.5 text-xs font-bold text-primary">
                -20%
              </span>
            </button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <StaggerItem key={plan.name}>
                <div
                  className={cn(
                    "relative rounded-2xl border p-8 flex flex-col h-full",
                    plan.highlighted
                      ? "border-primary bg-card shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                      : "border-border bg-card"
                  )}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold">
                      {price === 0 ? "Grátis" : `R$ ${price}`}
                    </span>
                    {price > 0 && (
                      <span className="text-sm text-muted-foreground">
                        /mês
                      </span>
                    )}
                  </div>

                  <a
                    href="#"
                    className={cn(
                      "inline-flex items-center justify-center gap-2 h-11 rounded-xl font-semibold text-sm transition-all mb-8",
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="size-3.5" />
                  </a>

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

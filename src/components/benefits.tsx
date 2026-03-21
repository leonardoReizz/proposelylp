"use client";

import {
  Palette,
  Sparkles,
  Download,
  LayoutTemplate,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const benefits = [
  {
    icon: Palette,
    title: "3 estilos de visualização",
    description:
      "Moderno, Clássico e Minimalista. Escolha o visual ideal para cada cliente e projeto antes de enviar.",
  },
  {
    icon: Sparkles,
    title: "Geração com IA",
    description:
      "A inteligência artificial preenche cada seção automaticamente, usando o contexto da sua empresa e do projeto.",
  },
  {
    icon: Download,
    title: "PDF profissional",
    description:
      "Exporte propostas em PDF com 1 clique. Layout otimizado para impressão e envio por email.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates por nicho",
    description:
      "Desenvolvimento, design, marketing, consultoria e mais. Comece com estrutura pronta e economize horas.",
  },
  {
    icon: BarChart3,
    title: "Analytics em tempo real",
    description:
      "Saiba exatamente quando seu cliente abriu a proposta. Acompanhe visualizações e status de aceitação.",
  },
  {
    icon: ShieldCheck,
    title: "Validação inteligente",
    description:
      "Formulários com validação automática garantem que nenhuma informação importante fique faltando.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Diferenciais
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Tudo que você precisa para fechar mais negócios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas pensadas para freelancers, agências e empresas que
            querem profissionalizar suas propostas.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <StaggerItem key={b.title}>
                <div className="rounded-2xl border border-border bg-card p-7 h-full">
                  <div className="flex items-center justify-center size-11 rounded-xl bg-primary/10 text-primary mb-5">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

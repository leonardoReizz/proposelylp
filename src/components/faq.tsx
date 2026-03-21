"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const faqs = [
  {
    question: "O que é o Proposely?",
    answer:
      "O Proposely é uma plataforma para criação e gestão de propostas comerciais. Com templates profissionais, múltiplos estilos de visualização e geração com inteligência artificial, você cria propostas impressionantes em minutos.",
  },
  {
    question: "Preciso de cartão de crédito para começar?",
    answer:
      "Não! O plano gratuito não exige cartão de crédito. Você pode criar até 3 propostas por mês sem nenhum custo. Só precisará adicionar um método de pagamento se decidir fazer upgrade.",
  },
  {
    question: "Como funciona a geração com IA?",
    answer:
      "No plano Business, a IA preenche automaticamente cada seção da proposta com base no contexto da sua empresa (que você configura no onboarding) e nos detalhes do projeto. Você pode editar tudo depois — a IA é um ponto de partida inteligente.",
  },
  {
    question: "Posso personalizar os templates?",
    answer:
      "Sim! Nos planos Pro e Business, além de usar os templates prontos, você pode criar seus próprios templates com seções personalizadas. Cada proposta também pode ser editada livremente.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "O plano Gratuito permite 3 propostas/mês com templates básicos. O Pro libera propostas ilimitadas, todos os templates, analytics e suporte prioritário. O Business inclui tudo do Pro mais geração com IA, equipe ilimitada e API de integração.",
  },
  {
    question: "Como meu cliente recebe a proposta?",
    answer:
      "Você pode compartilhar um link único da proposta ou exportar em PDF. Quando o cliente abre o link, você recebe uma notificação e acompanha o status em tempo real no dashboard.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, sem multas ou burocracia. Você pode cancelar sua assinatura a qualquer momento pelo portal de faturamento. O acesso ao plano pago continua até o final do período já pago.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-[15px] font-medium pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Perguntas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Tire suas dúvidas
          </h2>
        </FadeIn>

        <StaggerContainer>
          <StaggerItem>
            <div className="rounded-2xl border border-border bg-card px-7">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

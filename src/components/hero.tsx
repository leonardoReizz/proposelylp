"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, CreditCard } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="size-3.5" />
            Agora com geração por inteligência artificial
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Propostas comerciais{" "}
            <span className="text-primary">profissionais</span> em minutos
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Templates prontos, múltiplos estilos de visualização e IA que gera
            o conteúdo por você. Crie, envie e acompanhe suas propostas em um
            só lugar.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Começar grátis
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-muted text-foreground font-semibold text-base hover:bg-muted/80 transition-colors border border-border"
            >
              Ver como funciona
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
          >
            <CreditCard className="size-3.5" />
            Sem cartão de crédito necessário
          </motion.p>
        </div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-muted/50">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-400/60" />
                <div className="size-3 rounded-full bg-yellow-400/60" />
                <div className="size-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="h-6 w-64 rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground">
                  app.proposely.com.br
                </div>
              </div>
            </div>

            {/* Mockup content */}
            <div className="p-6 sm:p-10 bg-gradient-to-b from-card to-muted/30">
              {/* Fake dashboard */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="col-span-1 bg-muted rounded-xl p-4 h-24">
                  <div className="h-2.5 w-16 bg-muted-foreground/15 rounded mb-3" />
                  <div className="h-6 w-12 bg-primary/20 rounded" />
                </div>
                <div className="col-span-1 bg-muted rounded-xl p-4 h-24">
                  <div className="h-2.5 w-20 bg-muted-foreground/15 rounded mb-3" />
                  <div className="h-6 w-10 bg-green-500/20 rounded" />
                </div>
                <div className="col-span-1 bg-muted rounded-xl p-4 h-24">
                  <div className="h-2.5 w-14 bg-muted-foreground/15 rounded mb-3" />
                  <div className="h-6 w-16 bg-amber-500/20 rounded" />
                </div>
              </div>

              {/* Fake proposal card */}
              <div className="bg-background rounded-xl border border-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="h-3 w-48 bg-foreground/10 rounded mb-2" />
                    <div className="h-2.5 w-32 bg-muted-foreground/10 rounded" />
                  </div>
                  <div className="h-7 w-20 bg-primary/15 rounded-lg" />
                </div>
                <div className="space-y-2.5">
                  <div className="h-2 w-full bg-muted rounded" />
                  <div className="h-2 w-4/5 bg-muted rounded" />
                  <div className="h-2 w-3/5 bg-muted rounded" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

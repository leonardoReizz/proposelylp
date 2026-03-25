import { ArrowRight } from "lucide-react";
import { FadeIn } from "./motion-wrapper";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px]" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-4">
                Pronto para criar propostas que convertem?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Sem compromisso. Comece com 3 propostas grátis e descubra como
                o Proposely pode transformar seu processo comercial.
              </p>
              <a
                href="https://proposely.leonardo-reis.com"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-white text-primary font-semibold text-base hover:bg-white/90 transition-colors shadow-lg"
              >
                Começar grátis agora
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

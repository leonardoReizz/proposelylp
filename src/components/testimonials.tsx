import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Santos",
    role: "Designer Freelancer",
    company: "Studio MS",
    avatar: "MS",
    text: "Antes eu levava horas montando propostas no Google Docs. Com o Proposely, em 10 minutos tenho uma proposta profissional pronta. Meus clientes ficam impressionados com a qualidade.",
    stars: 5,
  },
  {
    name: "Ricardo Oliveira",
    role: "CEO",
    company: "DevHouse Agência",
    avatar: "RO",
    text: "A geração com IA é incrível. Preenche as seções com textos que realmente fazem sentido pro nosso negócio. O analytics de visualização é um game changer para o follow-up.",
    stars: 5,
  },
  {
    name: "Camila Ferreira",
    role: "Consultora de Marketing",
    company: "CF Consultoria",
    avatar: "CF",
    text: "Os diferentes estilos de visualização me permitem personalizar a proposta para cada tipo de cliente. O plano Pro se pagou no primeiro mês com o tempo que economizei.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Quem usa, recomenda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que freelancers e agências estão dizendo sobre o Proposely.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="rounded-2xl border border-border bg-card p-7 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-center size-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

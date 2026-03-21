import { FadeIn } from "./motion-wrapper";

const stats = [
  { value: "2.500+", label: "Propostas criadas" },
  { value: "850+", label: "Profissionais ativos" },
  { value: "R$ 12M+", label: "Em propostas enviadas" },
  { value: "94%", label: "Taxa de satisfação" },
];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

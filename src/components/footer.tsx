export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-brand text-2xl font-bold text-primary">
              Proposely
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Crie propostas comerciais profissionais em minutos com templates
              prontos e inteligência artificial.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Produto</h4>
            <ul className="space-y-2.5">
              {["Funcionalidades", "Templates", "Preços", "Changelog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="https://proposely.leonardo-reis.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {["Sobre", "Blog", "Contato", "Carreiras"].map((item) => (
                <li key={item}>
                  <a
                    href="https://proposely.leonardo-reis.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                "Termos de uso",
                "Política de privacidade",
                "Cookies",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="https://proposely.leonardo-reis.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Proposely. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-5">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="https://proposely.leonardo-reis.com"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

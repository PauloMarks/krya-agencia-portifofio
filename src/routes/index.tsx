import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";

import liraCapital from "@/assets/portfolio/liracapital.webp.asset.json";
import fatimaNoivas from "@/assets/portfolio/fatimanoivas.webp.asset.json";
import mauroStanichesk from "@/assets/portfolio/maurostanichesk.webp.asset.json";
import primisown from "@/assets/portfolio/primisown.webp.asset.json";
import pabloScopel from "@/assets/portfolio/pabloscopel.webp.asset.json";
import idalecioOliveira from "@/assets/portfolio/idaleciooliveira.webp.asset.json";

const WHATSAPP_NUMERO = "5567981221585";
const WHATSAPP_EXIBICAO = "(67) 98122-1585";
const PORTFOLIO_URL = "https://khonefabrica.web.app/portfolio";

const whatsapp = (texto: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

const obras = [
  { nome: "Lira Capital", src: liraCapital.url },
  { nome: "Fátima Noivas", src: fatimaNoivas.url },
  { nome: "Mauro Stanichesk", src: mauroStanichesk.url },
  { nome: "Residência no Morumbi", src: primisown.url },
  { nome: "Pablo Scopel", src: pabloScopel.url },
  { nome: "Idalecio Oliveira", src: idalecioOliveira.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krya | Tecnologia que impulsiona o futuro" },
      {
        name: "description",
        content:
          "Tech house em Campo Grande/MS: IA, sites, sistemas, CRMs, SaaS e automação. Fale com a Krya pelo WhatsApp e veja o portfólio.",
      },
      { property: "og:title", content: "Krya | Tecnologia que impulsiona o futuro" },
      { property: "og:description", content: "Fale com a Krya pelo WhatsApp e veja o portfólio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KryaLinks,
});

function Seta() {
  return (
    <svg
      className="seta"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function Marca() {
  return (
    <h1 className="marca sobe" style={{ "--d": ".08s" } as CSSProperties}>
      <span className="sr">Krya</span>
      <svg className="aneis" viewBox="-500 -500 1000 1000" aria-hidden="true" focusable="false">
        <circle r="96" strokeOpacity=".34" />
        <circle r="150" strokeOpacity=".24" />
        <circle r="214" strokeOpacity=".16" />
        <circle r="288" strokeOpacity=".10" />
        <circle r="372" strokeOpacity=".06" />
        <circle r="466" strokeOpacity=".035" />
        <circle className="onda" r="300" strokeOpacity=".7" />
      </svg>
      <svg className="kr" viewBox="0 0 392 132" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="kr-ouro" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--ouro-claro)" />
            <stop offset=".5" stopColor="var(--ouro)" />
            <stop offset="1" stopColor="var(--ouro-escuro)" />
          </linearGradient>
          <linearGradient id="kr-ouro-a" gradientUnits="userSpaceOnUse" x1="276" y1="0" x2="356" y2="104">
            <stop offset="0" stopColor="var(--ouro-claro)" />
            <stop offset=".5" stopColor="var(--ouro)" />
            <stop offset="1" stopColor="var(--ouro-escuro)" />
          </linearGradient>
          <clipPath id="kr-corte">
            <rect x="-20" y="0" width="420" height="100" />
          </clipPath>
        </defs>
        <g transform="translate(16,16)">
          {/* K */}
          <g className="tinta" strokeWidth="0">
            <rect x="0" y="0" width="14" height="100" />
            <path d="M4.56 44.59L65.56 -5.41L74.44 5.41L13.44 55.41Z" />
          </g>
          <path fill="url(#kr-ouro)" d="M13.44 44.59L74.44 94.59L65.56 105.41L4.56 55.41Z" />
          <g clipPath="url(#kr-corte)" fill="none" strokeWidth="14">
            {/* R */}
            <g className="tinta" fill="none" style={{ fill: "none" }}>
              <path d="M100 0V100" />
              <path d="M93 7H128A21.5 21.5 0 0 1 128 50H100" />
              <path d="M124 50L158 100" />
            </g>
            {/* Y */}
            <g className="tinta" style={{ fill: "none" }}>
              <path d="M184 0L220 52" strokeLinejoin="round" />
              <path d="M256 0L220 52" />
              <path d="M220 48V100" />
            </g>
            {/* A */}
            <g stroke="url(#kr-ouro-a)">
              <path d="M276 104L316 2L356 104" strokeLinejoin="miter" />
              <path d="M294 70H338" />
            </g>
          </g>
        </g>
      </svg>
    </h1>
  );
}

function KryaLinks() {
  return (
    <div className="pagina">
      <header className="topo coluna">
        <p className="selo sobe">
          <i aria-hidden="true" />
          Tech House · Campo Grande/MS
        </p>
        <Marca />
        <p className="frase sobe" style={{ "--d": ".16s" } as CSSProperties}>
          Tecnologia que impulsiona <span className="ouro">o futuro</span>
        </p>
        <p className="areas sobe" style={{ "--d": ".22s" } as CSSProperties}>
          <span>
            IA<i> · </i>Sites<i> · </i>Sistemas
          </span>
          <span className="sep" aria-hidden="true">
            <i> · </i>
          </span>
          <span>
            CRMs<i> · </i>SaaS<i> · </i>Automação
          </span>
        </p>
      </header>

      <nav className="links coluna" aria-label="Links da Krya">
        <a
          className="link sobe"
          style={{ "--d": ".3s" } as CSSProperties}
          href={whatsapp("Olá! Vim pelo Instagram da Krya.")}
        >
          <span className="ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.25 11.6a8.25 8.25 0 0 1-12.13 7.28L3.75 20.25l1.4-4.1A8.25 8.25 0 1 1 20.25 11.6Z" />
              <path d="M8.6 10.1h6.8M8.6 13.3h4.4" />
            </svg>
          </span>
          <span className="txt">
            <span className="t">Falar com a Krya no WhatsApp</span>
            <span className="s">{WHATSAPP_EXIBICAO}</span>
          </span>
          <Seta />
        </a>
        <a className="link sobe" style={{ "--d": ".36s" } as CSSProperties} href={PORTFOLIO_URL}>
          <span className="ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.75" y="3.75" width="7" height="7" rx="1.6" />
              <rect x="13.25" y="3.75" width="7" height="7" rx="1.6" />
              <rect x="3.75" y="13.25" width="7" height="7" rx="1.6" />
              <rect x="13.25" y="13.25" width="7" height="7" rx="1.6" />
            </svg>
          </span>
          <span className="txt">
            <span className="t">Ver o portfólio</span>
            <span className="s">Projetos no ar, por setor</span>
          </span>
          <Seta />
        </a>
        <a
          className="link sobe"
          style={{ "--d": ".42s" } as CSSProperties}
          href={whatsapp("Olá! Vim pelo Instagram e quero uma landing page pro meu negócio")}
        >
          <span className="ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.25" y="4.25" width="17.5" height="15.5" rx="2.2" />
              <path d="M3.25 8.6h17.5M7.2 12.4h6.4M7.2 15.6h3.8" />
              <circle cx="6" cy="6.45" r=".55" fill="currentColor" stroke="none" />
              <circle cx="8" cy="6.45" r=".55" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span className="txt">
            <span className="t">Quero uma landing page pro meu negócio</span>
            <span className="s">Atendimento pelo WhatsApp</span>
          </span>
          <Seta />
        </a>
      </nav>

      <section
        className="prova coluna sobe"
        style={{ "--d": ".56s" } as CSSProperties}
        aria-label="A Krya em números"
      >
        <b className="ouro">+2.550</b>
        <span>empresas ajudadas com a nossa experiência em tecnologia</span>
      </section>

      <section className="obras sobe" style={{ "--d": ".62s" } as CSSProperties} aria-labelledby="obras-t">
        <div className="obras-cab coluna">
          <h2 id="obras-t">Do nosso portfólio</h2>
          <a className="ver" href={PORTFOLIO_URL}>
            Ver tudo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <a
          className="vitrine"
          href={PORTFOLIO_URL}
          aria-label={`Ver o portfólio da Krya: ${obras.map((o) => o.nome).join(", ")}`}
        >
          <div className="trilho">
            {[...obras, ...obras].map((obra, i) => (
              <figure
                key={`${obra.nome}-${i}`}
                className={i >= obras.length ? "obra copia" : "obra"}
                aria-hidden={i >= obras.length ? true : undefined}
              >
                <img src={obra.src} width={400} height={250} alt="" decoding="async" />
                <figcaption>{obra.nome}</figcaption>
              </figure>
            ))}
          </div>
        </a>
      </section>

      <footer className="rodape coluna sobe" style={{ "--d": ".76s" } as CSSProperties}>
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="rod-ouro" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0" stopColor="var(--ouro-claro)" />
              <stop offset=".5" stopColor="var(--ouro)" />
              <stop offset="1" stopColor="var(--ouro-escuro)" />
            </linearGradient>
            <clipPath id="rod-baixo">
              <rect x="0" y="50" width="100" height="50" />
            </clipPath>
          </defs>
          <circle cx="50" cy="50" r="37.97" fill="none" stroke="url(#rod-ouro)" strokeWidth="12.06" />
          <path className="tinta" d="M56.47 31.52L40.76 50L56.47 68.48" fill="none" strokeWidth="7.04" strokeLinecap="square" />
          <g clipPath="url(#rod-baixo)">
            <path d="M56.47 31.52L40.76 50L56.47 68.48" fill="none" stroke="url(#rod-ouro)" strokeWidth="7.04" strokeLinecap="square" />
          </g>
        </svg>
        <p>© 2026 Krya · Campo Grande/MS</p>
      </footer>
    </div>
  );
}

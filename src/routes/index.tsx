import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

const WHATSAPP_NUMERO = "5561993086986";
const WHATSAPP_EXIBICAO = "(61) 99308-6986";
const PORTFOLIO_URL = "https://krya-creative-portfolio.lovable.app";
const EMPRESAS = 1750;

const whatsapp = (texto: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

/* Poeira dourada: posições e tempos derivados do índice, sem random em runtime. */
const FAISCAS = Array.from({ length: 18 }, (_, n) => ({
  "--fx": `${(n * 53 + 7) % 100}%`,
  "--fd": `${(n % 9) * 1.4}s`,
  "--ft": `${11 + (n % 6) * 3}s`,
  "--fs": n % 4 === 0 ? "3px" : n % 3 === 0 ? "2.4px" : "1.6px",
  "--fdx": `${(n % 2 ? 1 : -1) * (16 + (n % 5) * 14)}px`,
})) as CSSProperties[];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Krya | Tecnologia que impulsiona o futuro" },
      {
        name: "description",
        content:
          "Tech house: IA, sites, sistemas, CRMs, SaaS e automação. Fale com a Krya pelo WhatsApp e veja o portfólio.",
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

const i = (n: number) => ({ "--i": n }) as CSSProperties;

function Palavra({ n, children }: { n: number; children: ReactNode }) {
  return (
    <span className="palavra">
      <span style={i(n)}>{children}</span>
    </span>
  );
}

function useMovimento() {
  const raiz = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    document.documentElement.classList.add("js");
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal on scroll + count-up of the real number
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("visto");
          io.unobserve(e.target);
          const num = e.target.querySelector<HTMLElement>("[data-conta]");
          if (num && !reduz) {
            const alvo = Number(num.dataset["conta"]);
            const t0 = performance.now();
            const passo = (t: number) => {
              const p = Math.min(1, (t - t0) / 1600);
              const v = Math.round(alvo * (1 - Math.pow(1 - p, 3)));
              num.textContent = "+" + v.toLocaleString("pt-BR");
              if (p < 1) requestAnimationFrame(passo);
            };
            requestAnimationFrame(passo);
          }
        }
      },
      { threshold: 0.3 },
    );
    el.querySelectorAll(".revela").forEach((n) => io.observe(n));

    const holofote = el.querySelector<HTMLElement>(".holofote");
    let cardAtual: HTMLElement | null = null;
    let rafSpot = 0;

    const solta = (c: HTMLElement | null) => {
      if (!c) return;
      c.style.setProperty("--rx", "0deg");
      c.style.setProperty("--ry", "0deg");
    };

    // Pointer glow + subtle 3D tilt on cards + gold spotlight on the page
    const onMove = (ev: PointerEvent) => {
      const card = (ev.target as HTMLElement).closest<HTMLElement>(".link");
      if (card !== cardAtual) {
        solta(cardAtual);
        cardAtual = card;
      }
      if (card) {
        const r = card.getBoundingClientRect();
        const mx = ev.clientX - r.left;
        const my = ev.clientY - r.top;
        card.style.setProperty("--mx", `${mx}px`);
        card.style.setProperty("--my", `${my}px`);
        if (!reduz && ev.pointerType === "mouse") {
          card.style.setProperty("--rx", `${(0.5 - my / r.height) * 6}deg`);
          card.style.setProperty("--ry", `${(mx / r.width - 0.5) * 7}deg`);
        }
      }
      if (holofote && ev.pointerType === "mouse") {
        if (rafSpot) cancelAnimationFrame(rafSpot);
        rafSpot = requestAnimationFrame(() => {
          rafSpot = 0;
          holofote.style.setProperty("--hx", `${ev.clientX}px`);
          holofote.style.setProperty("--hy", `${ev.clientY}px`);
          holofote.classList.add("ativo");
        });
      }
    };
    el.addEventListener("pointermove", onMove, { passive: true });

    // Subtle logo parallax following the pointer (mouse only)
    const marca = el.querySelector<HTMLElement>(".marca-parallax");
    let raf = 0;
    const onPar = (ev: PointerEvent) => {
      if (reduz || ev.pointerType !== "mouse" || !marca) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (ev.clientX / window.innerWidth - 0.5) * 14;
        const y = (ev.clientY / window.innerHeight - 0.5) * 10;
        marca.style.setProperty("--px", `${x}px`);
        marca.style.setProperty("--py", `${y}px`);
      });
    };
    window.addEventListener("pointermove", onPar, { passive: true });

    // Scroll progress -> gold hairline + header depth
    let rafScroll = 0;
    const onScroll = () => {
      if (rafScroll) return;
      rafScroll = requestAnimationFrame(() => {
        rafScroll = 0;
        const doc = document.documentElement;
        const h = doc.scrollHeight - window.innerHeight;
        const p = h > 4 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
        el.style.setProperty("--prog", String(p));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointermove", onPar);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      if (rafSpot) cancelAnimationFrame(rafSpot);
    };
  }, []);
  return raiz;
}

function KryaLinks() {
  const raiz = useMovimento();
  return (
    <div className="pagina" ref={raiz}>
      <div className="aura" aria-hidden="true" />
      <div className="aura aura-2" aria-hidden="true" />
      <div className="faisca" aria-hidden="true">
        {FAISCAS.map((f, n) => (
          <i key={n} style={f} />
        ))}
      </div>
      <div className="holofote" aria-hidden="true" />
      <div className="scan" aria-hidden="true" />
      <div className="progresso" aria-hidden="true" />

      <header className="topo coluna">
        <div className="marca-parallax">
          <Marca />
        </div>
        <p className="frase sobe" style={{ "--d": ".16s" } as CSSProperties}>
          <Palavra n={0}>Tecnologia</Palavra> <Palavra n={1}>que</Palavra>{" "}
          <Palavra n={2}>impulsiona</Palavra>{" "}
          <Palavra n={3}>
            <span className="ouro">o futuro</span>
          </Palavra>
        </p>
        <p className="areas sobe" style={{ "--d": ".22s" } as CSSProperties}>
          <span style={i(0)}>
            IA<i> · </i>Sites<i> · </i>Sistemas
          </span>
          <span className="sep" aria-hidden="true">
            <i> · </i>
          </span>
          <span style={i(2)}>
            CRMs<i> · </i>SaaS<i> · </i>Automação
          </span>
        </p>
      </header>

      <nav className="links coluna" aria-label="Links da Krya">
        <a
          className="link sobe destaque"
          style={{ "--d": ".3s" } as CSSProperties}
          href={whatsapp("Olá! Vim pelo Instagram da Krya.")}
        >
          <span className="feixe" aria-hidden="true" />
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
          <span className="borda" aria-hidden="true" />
        </a>
        <a className="link sobe" style={{ "--d": ".36s" } as CSSProperties} href={PORTFOLIO_URL}>
          <span className="feixe" aria-hidden="true" />
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
          <span className="borda" aria-hidden="true" />
        </a>
        <a
          className="link sobe"
          style={{ "--d": ".42s" } as CSSProperties}
          href={whatsapp("Olá! Vim pelo Instagram e quero uma landing page pro meu negócio")}
        >
          <span className="feixe" aria-hidden="true" />
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
          <span className="borda" aria-hidden="true" />
        </a>
      </nav>

      <section className="prova coluna revela" aria-label="A Krya em números">
        <b className="ouro" data-conta={EMPRESAS}>
          {"+" + EMPRESAS.toLocaleString("pt-BR")}
        </b>
        <span>empresas ajudadas com a nossa experiência em tecnologia</span>
      </section>

      <footer className="rodape coluna revela">
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
        <p>© 2026 Krya</p>
      </footer>
    </div>
  );
}

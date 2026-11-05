import { describe, expect, it } from "vitest";
import { PORTFOLIO_URL, WHATSAPP_EXIBICAO, whatsapp } from "@/lib/krya-links";

describe("Krya contact destinations", () => {
  it("opens the Krya WhatsApp number with the supplied message", () => {
    const url = new URL(whatsapp("Olá! Quero uma landing page."));
    expect(url.origin + url.pathname).toBe("https://wa.me/5561993086986");
    expect(url.searchParams.get("text")).toBe("Olá! Quero uma landing page.");
    expect(WHATSAPP_EXIBICAO).toBe("(61) 99308-6986");
  });

  it("uses Krya's own portfolio", () => {
    expect(PORTFOLIO_URL).toBe("https://krya-creative-portfolio.lovable.app");
  });
});
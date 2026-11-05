export const WHATSAPP_NUMERO = "5561993086986";
export const WHATSAPP_EXIBICAO = "(61) 99308-6986";
export const PORTFOLIO_URL = "https://krya-creative-portfolio.lovable.app";

export const whatsapp = (texto: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
const whatsappUrl =
  'https://wa.me//5511926472392?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20um%20or%C3%A7amento';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 rounded-full bg-[#12c95b] px-6 py-3 text-white font-semibold shadow-[0_8px_20px_rgba(18,201,91,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0fb351] hover:shadow-[0_14px_28px_rgba(18,201,91,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12c95b]"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0 fill-current"
      >
        <path d="M12.04 2C6.5 2 2 6.4 2 11.82c0 1.73.47 3.41 1.36 4.9L2 22l5.46-1.31a10.2 10.2 0 0 0 4.58 1.09H12c5.54 0 10.04-4.4 10.04-9.82C22.04 6.4 17.54 2 12.04 2Zm0 18.03h-.01a8.4 8.4 0 0 1-4.27-1.16l-.3-.18-3.24.78.87-3.08-.2-.31a7.9 7.9 0 0 1-1.26-4.22c0-4.36 3.73-7.9 8.4-7.9 4.63 0 8.4 3.54 8.4 7.9 0 4.35-3.77 7.9-8.4 7.9Zm4.6-5.9c-.25-.12-1.46-.7-1.68-.77-.23-.08-.39-.12-.56.12-.16.23-.64.76-.78.92-.14.15-.29.18-.54.06-.24-.12-1.03-.37-1.96-1.17-.72-.62-1.2-1.38-1.34-1.61-.14-.23-.01-.36.1-.48.1-.1.24-.27.36-.4.12-.14.16-.23.24-.39.08-.15.04-.29-.02-.4-.06-.12-.56-1.3-.77-1.77-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.42.06-.64.29-.23.23-.86.83-.86 2.02 0 1.19.88 2.34 1 2.5.12.15 1.72 2.69 4.24 3.66.6.23 1.08.37 1.45.48.61.2 1.17.17 1.62.1.5-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
      <span>Fale Conosco</span>
    </a>
  );
}

import { useState } from "react"
import { X } from "lucide-react"

const WA_URL =
  "https://api.whatsapp.com/send/?phone=14844578395&text=Hola%2C+Necesito+información+sobre+La+Formación+IA&type=phone_number&app_absent=0"

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="relative bg-white rounded-xl shadow-lg px-4 py-3 max-w-[220px] animate-fade-up">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-0.5 hover:bg-gray-300 transition-colors"
            aria-label="Cerrar"
          >
            <X size={14} className="text-gray-600" />
          </button>
          <p className="font-outfit text-xs text-gray-700 leading-snug">
            ¿Tienes dudas? Habla ahora con nuestro soporte.
          </p>
        </div>
      )}

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 3.2C9.158 3.2 3.6 8.735 3.6 15.55c0 2.18.576 4.306 1.67 6.18L3.2 28.8l7.27-2.04a12.36 12.36 0 005.534 1.32c6.846 0 12.396-5.535 12.396-12.35S22.85 3.2 16.004 3.2zm0 22.56a10.17 10.17 0 01-5.18-1.414l-.372-.22-3.856 1.082 1.024-3.754-.242-.386A10.11 10.11 0 015.74 15.55c0-5.646 4.6-10.23 10.264-10.23 5.664 0 10.276 4.584 10.276 10.23 0 5.646-4.612 10.21-10.276 10.21zm5.63-7.656c-.308-.154-1.826-.9-2.11-.1-.282.098-.488.154-.694.308-.206.154-.488.514-.598.617-.11.103-.22.117-.406.039s-1.254-.462-2.388-1.474c-.882-.788-1.478-1.76-1.652-2.058-.174-.308-.018-.474.13-.627.134-.138.308-.36.462-.54.154-.18.206-.308.308-.514.102-.206.052-.386-.026-.54-.078-.154-.694-1.672-.95-2.288-.25-.6-.504-.52-.694-.528-.18-.008-.386-.01-.592-.01s-.54.078-.822.386c-.282.308-1.078 1.054-1.078 2.57s1.104 2.98 1.258 3.186c.154.206 2.172 3.316 5.262 4.65.736.318 1.31.508 1.758.65.738.236 1.41.202 1.942.122.592-.088 1.826-.746 2.084-1.466.258-.72.258-1.338.18-1.466-.078-.128-.282-.206-.592-.36z" />
        </svg>
      </a>
    </div>
  )
}

export default WhatsAppButton

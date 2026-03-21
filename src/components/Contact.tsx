import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-400 text-sm font-semibold">ENTRE EM CONTATO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Vamos Transformar Seu Negócio Juntos
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
            <h3 className="text-white font-bold text-2xl mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">E-mail</p>
                  <a
                    href="mailto:contato@amitconsulting.com"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    contato@amitconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Telefone</p>
                  <a
                    href="tel:+5511999999999"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    +55 (11) 9 2647-2392
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-gray-300">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p className="text-cyan-400 font-semibold mt-4">Suporte 24/7 para clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

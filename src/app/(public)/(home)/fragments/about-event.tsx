import { Radio } from 'lucide-react'

function AboutEvent() {
  return (
    <div className="flex-1 space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8">
      <header className="flex justify-between">
        <h2 className="font-heading font-semibold text-gray-200 text-xl">
          Sobre o evento
        </h2>
        <span className="flex items-center gap-2 font-semibold text-purple">
          <Radio className="size-5" />
          <span className="font-semibold text-xs">AO VIVO</span>
        </span>
      </header>

      <p className="text-pretty text-gray-300 text-sm md:text-base">
        Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar
        soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas
        tendências mais recentes em desenvolvimento de software, arquitetura de
        sistemas e tecnologias emergentes, com palestras, workshops e
        hackathons.
      </p>

      <footer className="text-pretty text-gray-300 text-sm md:text-base">
        Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
      </footer>
    </div>
  )
}

export default AboutEvent

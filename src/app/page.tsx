import Image from 'next/image'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'

import { Button, Input } from '@/components'

import logo from '../../public/assets/logo.svg'

export default function Home() {
  return (
    <section className="flex min-h-dvh flex-col justify-center gap-16">
      <div className="flex flex-col items-center gap-8 md:items-start">
        <Image src={logo} alt={'Logo devstage'} width={108.5} height={30} />
        <h1 className="flex flex-col text-center font-heading font-medium text-4xl leading-none md:text-left md:text-7xl">
          <span className="text-blue">Codecraft</span>
          Summit 2025
        </h1>
      </div>

      <div className="flex flex-col items-stretch justify-between gap-5 md:flex-row">
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
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
          </p>

          <footer className="text-pretty text-gray-300 text-sm md:text-base">
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </footer>
        </div>

        <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-gray-600 bg-gray-700 p-8">
          <header>
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>
          </header>

          <form
            id="subscriberForm"
            className="flex h-full flex-col items-center justify-center gap-4"
          >
            <Input.Root>
              <Input.Icon>
                <User className="size-5" />
              </Input.Icon>
              <Input.Field placeholder="Nome Completo" type="text" />
            </Input.Root>

            <Input.Root>
              <Input.Icon>
                <Mail className="size-5" />
              </Input.Icon>
              <Input.Field placeholder="E-mail" type="email" />
            </Input.Root>
          </form>

          <Button form="subscriberForm" type="submit">
            Confirmar
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}

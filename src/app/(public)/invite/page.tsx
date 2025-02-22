import Image from 'next/image'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'

import { IconButton, Input } from '@/components'

import logo from '../../../../public/assets/logo.svg'

function Invite() {
  return (
    <section className="justify-beetwen flex min-h-dvh flex-col items-center gap-16 md:flex-row">
      <div className="flex w-full max-w-[630px] flex-col items-center gap-9 md:items-start">
        <Image src={logo} alt={'Logo devstage'} width={108.5} height={30} />

        <header className="space-y-2">
          <h1 className="font-heading font-semibold text-4xl leading-none md:text-[40px]">
            Inscrição confirmada!
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </header>

        <div className="space-y-5 md:space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
              Inscrição confirmada!
            </h2>

            <p className="text-pretty text-gray-300 text-sm md:text-base">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <Input.Root>
            <Input.Icon>
              <Link className="size-5" />
            </Input.Icon>
            <Input.Field
              defaultValue={'devstage.com/codecraft-summit-2025/1289'}
              placeholder="Link"
              readOnly
            />

            <IconButton className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </Input.Root>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
              <h3 className="font-heading font-semibold text-2xl">942</h3>
              <span className="text-gray-300 text-sm">Acessos ao link</span>
              <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
              <h3 className="font-heading font-semibold text-2xl">875</h3>
              <span className="text-gray-300 text-sm">Inscrições feitas</span>
              <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
              <h3 className="font-heading font-semibold text-2xl">3°</h3>
              <span className="text-gray-300 text-sm">Posição no ranking</span>
              <Medal className="absolute top-3 left-3 size-5 text-purple" />
            </div>
          </div>
        </div>
      </div>

      <div>3</div>
    </section>
  )
}

export default Invite

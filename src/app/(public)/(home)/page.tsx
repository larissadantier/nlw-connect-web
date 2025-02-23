import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components'

import logo from '../../../../public/assets/logo.svg'
import SubscriptionForm from './fragments/subscription-form'
import AboutEvent from './fragments/about-event'

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
        <AboutEvent />

        <div className="flex flex-1 flex-col gap-6 rounded-2xl border border-gray-600 bg-gray-700 p-8">
          <header>
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>
          </header>

          <SubscriptionForm />

          <Button form="subscriberForm" type="submit">
            Confirmar
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}

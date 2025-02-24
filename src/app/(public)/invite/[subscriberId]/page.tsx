import Ranking from './fragments/ranking'
import Header from './fragments/header'
import Stats from './fragments/stats'
import InviteLinkInput from './fragments/invite-link-input'
import { env } from '@/env'

interface IInvitePageProps {
  params: Promise<{
    subscriberId: string
  }>
}

async function Invite({ params }: IInvitePageProps) {
  const { subscriberId } = await params
  const inviteLink = `${env.SERVER_URL}/${subscriberId}`

  return (
    <section className="justify-beetwen flex min-h-dvh flex-col items-center gap-16 md:flex-row">
      <div className="flex w-full max-w-[610px] flex-col items-center gap-9 md:items-start">
        <Header />

        <div className="space-y-5 md:space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
              Indique e Ganhe
            </h2>

            <p className="text-pretty text-gray-300 text-sm md:text-base">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} />
        </div>
      </div>

      <Ranking />
    </section>
  )
}

export default Invite

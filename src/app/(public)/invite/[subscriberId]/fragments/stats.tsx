import {
  getSubscriberIdRankingClicks,
  getSubscriberIdRankingCount,
  getSubscriberIdRankingPosition,
} from '@/http/api'
import { MousePointerClick, BadgeCheck, Medal } from 'lucide-react'

type IStatsProps = {
  subscriberId: string
}

async function Stats({ subscriberId }: IStatsProps) {
  const { count: accessCount } =
    await getSubscriberIdRankingClicks(subscriberId)

  const { count: inviteCount } = await getSubscriberIdRankingCount(subscriberId)

  const { position } = await getSubscriberIdRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
        <h3 className="font-heading font-semibold text-2xl">{accessCount}</h3>
        <span className="text-gray-300 text-sm">Acessos ao link</span>
        <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
        <h3 className="font-heading font-semibold text-2xl">{inviteCount}</h3>
        <span className="text-gray-300 text-sm">Inscrições feitas</span>
        <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
        <h3 className="font-heading font-semibold text-2xl">
          {position ?? '-'}°
        </h3>
        <span className="text-gray-300 text-sm">Posição no ranking</span>
        <Medal className="absolute top-3 left-3 size-5 text-purple" />
      </div>
    </div>
  )
}

export default Stats

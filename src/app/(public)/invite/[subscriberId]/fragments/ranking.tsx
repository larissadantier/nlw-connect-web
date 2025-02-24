import Image from 'next/image'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

import { getRanking } from '@/http/api'

import firstPlace from '../../../../../../public/medal_gold.svg'
import secondPlace from '../../../../../../public/medal_silver.svg'
import thirdPlace from '../../../../../../public/medal_bronze.svg'

const medal: Record<number, { src: string | StaticImport; alt: string }> = {
  1: { src: firstPlace, alt: 'First Place' },
  2: { src: secondPlace, alt: 'Second Place' },
  3: { src: thirdPlace, alt: 'Third Place' },
}

async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full space-y-5 md:max-w-[540px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={item.id}
              className="relative flex flex-1 flex-col items-start justify-center gap-3 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center"
            >
              <span className="text-base text-gray-300">
                <span className="font-bold">{rankingPosition}°</span> |{' '}
                {item.name}
              </span>
              <span className="font-bold font-heading text-2xl">
                {item.score}
              </span>
              <Image
                alt={medal[rankingPosition].alt}
                src={medal[rankingPosition].src}
                width={56}
                height={85.5}
                className="absolute top-0 right-8"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ranking

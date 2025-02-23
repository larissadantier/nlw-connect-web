import Image from 'next/image'

import firstPlace from '../../../../../public/medal_gold.svg'
import secondPlace from '../../../../../public/medal_silver.svg'
import thirdPlace from '../../../../../public/medal_bronze.svg'

function Ranking() {
  return (
    <div className="w-full space-y-5 md:max-w-[540px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative flex flex-1 flex-col items-start justify-center gap-3 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
          <span className="text-base text-gray-300">
            <span className="font-bold">1°</span> | André Souza
          </span>
          <span className="font-bold font-heading text-2xl">1.128</span>
          <Image
            alt="First Place"
            src={firstPlace}
            width={56}
            height={85.5}
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-1 flex-col items-start justify-center gap-3 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
          <span className="text-base text-gray-300">
            <span className="font-bold">2°</span> | Melissa Loures
          </span>
          <span className="font-bold font-heading text-2xl">928</span>
          <Image
            alt="Second Place"
            src={secondPlace}
            width={56}
            height={85.5}
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-1 flex-col items-start justify-center gap-3 rounded-lg border border-gray-600 bg-gray-700 px-6 py-7 text-center">
          <span className="text-base text-gray-300">
            <span className="font-bold">3°</span> | Rodrigo Gonçalves
          </span>

          <div className="flex items-center gap-3">
            <span className="font-bold font-heading text-2xl leading-none">
              875
            </span>
            <div className="rounded-md bg-gray-500 px-3 py-1">
              <span className="font-semibold text-gray-300 text-xs">Você</span>
            </div>
          </div>

          <Image
            alt="Third Place"
            src={thirdPlace}
            width={56}
            height={85.5}
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}

export default Ranking

import Image from 'next/image'

import logo from '../../../../../../public/assets/logo.svg'
function Header() {
  return (
    <>
      <Image src={logo} alt={'Logo devstage'} width={108.5} height={30} />

      <header className="space-y-2">
        <h1 className="font-heading font-semibold text-4xl leading-none md:text-[40px]">
          Inscrição confirmada!
        </h1>

        <p className="text-gray-300 text-sm md:text-base">
          Para entrar no evento, acesse o link enviado para seu e-mail.
        </p>
      </header>
    </>
  )
}

export default Header

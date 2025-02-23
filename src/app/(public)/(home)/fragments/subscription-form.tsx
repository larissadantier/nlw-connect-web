import { User, Mail } from 'lucide-react'
import { Input } from '@/components'

function SubscriptionForm() {
  return (
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
  )
}

export default SubscriptionForm

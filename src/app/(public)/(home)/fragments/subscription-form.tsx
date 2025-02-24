'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { User, Mail } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import { postSubscriptions } from '@/http/api'

import { Input } from '@/components'

const subscriberSchema = z.object({
  name: z.string().min(2, 'Digite o seu nome completo').nonempty(),
  email: z.string().email('Digite um e-mail válido').nonempty(),
})

type SubscriptionSchema = z.infer<typeof subscriberSchema>

function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriberSchema),
  })

  const onSubmit = async ({ name, email }: SubscriptionSchema) => {
    const referrer = searchParams.get('referrer')

    const { subscriberId } = await postSubscriptions({ name, email, referrer })

    router.push(`/invite/${subscriberId}`)
  }

  return (
    <form
      id="subscriberForm"
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col items-center justify-center gap-4"
    >
      <div className="w-full space-y-2">
        <Input.Root error={!!errors.name}>
          <Input.Icon>
            <User className="size-5" />
          </Input.Icon>
          <Input.Field
            placeholder="Nome Completo"
            type="text"
            {...register('name')}
          />
        </Input.Root>

        {errors.name && (
          <p className="ml-1 font-semibold text-danger text-xs">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="w-full space-y-2">
        <Input.Root error={!!errors.email}>
          <Input.Icon>
            <Mail className="size-5" />
          </Input.Icon>
          <Input.Field
            placeholder="E-mail"
            type="email"
            {...register('email')}
          />
        </Input.Root>

        {errors.email && (
          <p className="ml-1 font-semibold text-danger text-xs">
            {errors.email.message}
          </p>
        )}
      </div>
    </form>
  )
}

export default SubscriptionForm

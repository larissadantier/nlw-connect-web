'use client'

import { Copy, Link } from 'lucide-react'
import { IconButton, Input } from '@/components'

interface IInviteLinkInputProps {
  inviteLink: string
}

function InviteLinkInput({ inviteLink }: IInviteLinkInputProps) {
  const handleCopyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <Input.Root>
      <Input.Icon>
        <Link className="size-5" />
      </Input.Icon>
      <Input.Field defaultValue={inviteLink} placeholder="Link" readOnly />

      <IconButton className="-mr-2" onClick={handleCopyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </Input.Root>
  )
}

export default InviteLinkInput

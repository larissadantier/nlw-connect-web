import { Copy, Link } from 'lucide-react'
import { IconButton, Input } from '@/components'

function InviteLinkInput() {
  return (
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
  )
}

export default InviteLinkInput

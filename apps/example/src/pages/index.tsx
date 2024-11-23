import { Safari } from '@/components/safari'
import { useSearchParams } from 'react-router-dom'

export default function () {
  const [search] = useSearchParams()
  const url = search.get('url') ?? `${window.origin}/dapp`

  return (
    <div className="flex-center h-95vh">
      <div className="relative mt-5vh h-[753px] w-[1202px]">
        <Safari url={url} width={1203} height={753} className="absolute" />
        <div className="relative z-100 mb-[2px] size-full pt-[52px] overflow-hidden rounded-b-xl">
          <iframe src={url} className="h-full w-full border-0" />
        </div>
      </div>
    </div>
  )
}

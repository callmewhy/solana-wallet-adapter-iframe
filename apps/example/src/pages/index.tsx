import { Safari } from '@/components/safari'

export default function () {
  return (
    <div className="flex-center h-95vh">
      <div className="relative mt-5vh h-[753px] w-[1202px]">
        <Safari url={`${window.origin}/dapp`} width={1203} height={753} className="absolute" />
        <div className="relative z-100 mb-[2px] size-full pt-[52px] overflow-hidden rounded-b-xl">
          <iframe src="/dapp" className="h-full w-full border-0" />
        </div>
      </div>
    </div>
  )
}

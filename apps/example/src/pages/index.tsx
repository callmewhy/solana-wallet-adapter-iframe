import { Safari } from '@/components/safari'

export default function () {
  return (
    <div className="relative mx-auto mt-5vh h-90vh max-w-7xl flex-center">
      <Safari url={`${window.origin}/dapp`} width={1203} height={753} className="absolute size-full" />
      <div className="z-100 mb-[2px] h-[708px] w-[1215px] self-end overflow-hidden rounded-b-xl">
        <iframe src="/dapp" className="h-full w-full border-0" />
      </div>
    </div>
  )
}

import Image from 'next/image'
import clsx from 'clsx'

export function BackgroundImage({
  className,
}: {
  className?: string
}) {
  return (
    <div className={clsx('inset-0 overflow-hidden bg-fuchsia-50', className)}>
      <Image
        className={clsx('hidden sm:block absolute top-0 left-0 w-full h-full object-cover')}
        src="/images/geral.jpg"
        alt=""
        width={1920}
        height={720}
        priority
        unoptimized
      />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent" />
    </div>
  )
}

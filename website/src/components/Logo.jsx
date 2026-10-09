import clsx from 'clsx'
import Image from 'next/image'

export function Logomark({
  className,
  invert = false,
  filled = false,
  ...props
}) {
  return (
    <Image
      src="/trokic.tech_logo_no_text.svg?v=20212d"
      alt=""
      width={64}
      height={64}
      className={clsx(
        'w-auto shrink-0 transition-opacity',
        invert && 'rounded bg-white p-1',
        filled && 'opacity-80',
        className,
      )}
      {...props}
    />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <span className={className} {...props}>
      <Image
        src={
          invert
            ? '/trokic.tech_logo_with_text_light.svg?v=wordmark-20261008'
            : '/trokic.tech_logo_with_text.svg?v=wordmark-20261008'
        }
        alt=""
        width={171.53586}
        height={57.400002}
        className={clsx(
          'h-full w-auto transition-opacity',
          filled && 'opacity-80',
          fillOnHover && 'hover:opacity-80',
        )}
      />
    </span>
  )
}

export function HeadingAccent({ children, onGrey = false }) {
  return (
    <span className={onGrey ? 'text-brand-red-deep' : 'text-brand-red'}>
      {children}
    </span>
  )
}

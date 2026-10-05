import { Marquee } from '../ui/Marquee'
import { TOPBAR_MESSAGES, TOPBAR_SHORT } from '../../data/site'

type TopBarProps = {
  variant: 'scroll' | 'static'
}

export function TopBar({ variant }: TopBarProps) {
  if (variant === 'scroll') {
    return (
      <div className="topbar topbar--scroll">
        <Marquee items={TOPBAR_MESSAGES} />
      </div>
    )
  }

  return (
    <div className="topbar topbar--static">
      {TOPBAR_SHORT.map((msg) => (
        <span key={msg}>{msg}</span>
      ))}
    </div>
  )
}

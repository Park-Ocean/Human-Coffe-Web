import type { SVGProps } from 'react'

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.6" cy="10.6" r="6.4" />
      <path d="M15.7 15.7 20.4 20.4" />
    </svg>
  )
}

export function IconAccount(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5.2 20.5a6.8 6.8 0 0 1 13.6 0" />
      <ellipse cx="12" cy="8.4" rx="3.5" ry="4.1" />
      <path d="M12 4.9c1 1 1 2 0 3s-1 2 0 3" />
    </svg>
  )
}

export function IconBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6.3 8.3h11.4l-1 11a1.8 1.8 0 0 1-1.8 1.6H9.1a1.8 1.8 0 0 1-1.8-1.6l-1-11Z" />
      <path d="M9.4 8.3V6.7a2.6 2.6 0 0 1 5.2 0v1.6" />
      <ellipse cx="12" cy="14.9" rx="1.9" ry="2.5" />
      <path d="M12 12.4c.8.85.8 1.7 0 2.55s-.8 1.7 0 2.55" />
    </svg>
  )
}

export function IconMenu() {
  return (
    <svg {...base}>
      <line className="icon-menu__top" x1="4" y1="7.5" x2="20" y2="7.5" />
      <line className="icon-menu__mid" x1="4" y1="12" x2="14.5" y2="12" />
      <line className="icon-menu__bot" x1="4" y1="16.5" x2="17" y2="16.5" />
    </svg>
  )
}

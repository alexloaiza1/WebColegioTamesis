export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface SwiperSlide {
  image: string
  imageMobile?: string
  alt: string
  link?: string
  text?: string
}

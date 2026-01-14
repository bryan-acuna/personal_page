import type { LogoProps } from '../../types'

const Logo = ({ name }: LogoProps) => {
    return (
        <a
            href="#home"
            className="md:text-2xl text-lg sm:text-xl"
            aria-label={`${name} - Back to top`}
        >
            {name}
        </a>
    )
}

export default Logo

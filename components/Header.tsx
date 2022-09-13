import { SearchIcon, BellIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <header className={`${scroll && "bg-[#141414]"}`}>
        {/* Left Side */}
        <div className="flex items-center space-x-2 md:space-x-10">
            <img src="https://rb.gy/ulxxee" width={100} height={100} className="cursor-pointer object-contain" />
            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Accueil</li>
                <li className="headerLink">Séries</li>
                <li className="headerLink">Films</li>
                <li className="headerLink">Nouveautés les plus regardées</li>
                <li className="headerLink">Ma Liste</li>
                <li className="headerLink">Explorer par langue</li>
            </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className="hidden h-6 w-6 sm:inline" />
            <p className="hidden lg:inline">DIRECT</p>
            <p className="hidden lg:inline">Jeunesse</p>
            <BellIcon className="h-6 w-6" />
            <Link href="/account">
                <img src="https://rb.gy/g1pwyx" className="cursor-pointer rounded" alt="" />
            </Link>
        </div>
    </header>
  )
}

export default Header
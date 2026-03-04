import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, UtensilsCrossed } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'Our Story' },
    { to: '/contact', label: 'Find Us' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    const closeMenu = () => setIsOpen(false)

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-cream/95 backdrop-blur-md shadow-warm-sm border-b border-border'
                    : 'bg-transparent'
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-[72px]">
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 rounded-full bg-spice flex items-center justify-center group-hover:bg-spice-dark transition-colors">
                            <UtensilsCrossed className="w-4.5 h-4.5 text-white" size={18} />
                        </div>
                        <div>
                            <span className="font-heading text-xl font-bold text-coffee leading-none block">
                                Enat Guwada
                            </span>
                            <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-golden font-semibold leading-none">
                                Mother's Kitchen
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === '/'}
                                className={({ isActive }) =>
                                    cn(
                                        'font-body text-sm font-semibold tracking-wide relative pb-1 transition-colors duration-200',
                                        'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-golden after:transition-transform after:duration-200',
                                        isActive
                                            ? 'text-spice after:scale-x-100'
                                            : 'text-coffee hover:text-spice after:scale-x-0 hover:after:scale-x-100'
                                    )
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/menu" className="btn-primary text-xs py-2.5 px-5">
                            View Menu
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-coffee hover:bg-coffee/10 transition-colors"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden overflow-hidden bg-cream/98 backdrop-blur-md border-t border-border shadow-warm-md"
                    >
                        <nav className="container-custom py-4 flex flex-col gap-1">
                            {navLinks.map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={to === '/'}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        cn(
                                            'font-body text-base font-semibold px-3 py-3 rounded-lg transition-colors duration-150',
                                            isActive
                                                ? 'bg-spice/10 text-spice'
                                                : 'text-coffee hover:bg-coffee/8 hover:text-spice'
                                        )
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                            <Link
                                to="/menu"
                                onClick={closeMenu}
                                className="btn-primary mt-2 w-full justify-center text-center"
                            >
                                View Menu
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

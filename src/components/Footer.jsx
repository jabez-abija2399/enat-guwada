import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'Our Story' },
    { to: '/contact', label: 'Find Us' },
]

const hours = [
    { day: 'Monday – Thursday', time: '11:00 – 22:00' },
    { day: 'Friday – Saturday', time: '11:00 – 23:00' },
    { day: 'Sunday', time: '12:00 – 21:00' },
]

export default function Footer() {
    return (
        <footer className="bg-coffee-dark text-cream/80">
            {/* Main footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-full bg-spice flex items-center justify-center">
                                <UtensilsCrossed className="text-white" size={18} />
                            </div>
                            <div>
                                <span className="font-heading text-xl font-bold text-cream leading-none block">
                                    Enat Guwada
                                </span>
                                <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-golden font-semibold leading-none">
                                    Mother's Kitchen
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-cream/60 leading-relaxed mt-3">
                            Bringing the warmth of Ethiopian family cooking to Minneapolis. Every dish tells a story of heritage, love, and belonging.
                        </p>
                        <div className="flex gap-3 mt-5">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:bg-spice hover:border-spice hover:text-white transition-all duration-200"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-cream mb-5">Explore</h3>
                        <ul className="space-y-2.5">
                            {footerLinks.map(({ to, label }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className="text-sm text-cream/60 hover:text-golden transition-colors duration-150"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-cream mb-5 flex items-center gap-2">
                            <Clock size={16} className="text-golden" />
                            Hours
                        </h3>
                        <ul className="space-y-3">
                            {hours.map(({ day, time }) => (
                                <li key={day} className="text-sm">
                                    <span className="text-cream/50 block">{day}</span>
                                    <span className="text-cream/80 font-medium">{time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-cream mb-5">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5 text-sm text-cream/60">
                                <MapPin size={15} className="text-golden mt-0.5 shrink-0" />
                                <span>Kera Square<br />Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-sm text-cream/60">
                                <Phone size={15} className="text-golden shrink-0" />
                                <a href="tel:+16125559874" className="hover:text-golden transition-colors">+1 (612) 555-9874</a>
                            </li>
                            <li className="flex items-center gap-2.5 text-sm text-cream/60">
                                <Mail size={15} className="text-golden shrink-0" />
                                <a href="mailto:hello@enatguwada.com" className="hover:text-golden transition-colors">hello@enatguwada.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-cream/10">
                <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
                    <p>© {new Date().getFullYear()} Enat Guwada. All rights reserved.</p>
                    <p className="font-heading italic text-golden/60">"Injera enemetat, fikir ateyatat" — Through injera we gather, through love we stay.</p>
                </div>
            </div>
        </footer>
    )
}

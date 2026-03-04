import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Clock, Star, Coffee, Users } from 'lucide-react'
import { featuredItems, businessInfo } from '../data/menuData'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
}

function DietaryTag({ tag }) {
    const styles = {
        V: 'bg-green-100 text-green-800',
        VE: 'bg-emerald-100 text-emerald-800',
        GF: 'bg-amber-100 text-amber-800',
    }
    return (
        <span className={`tag text-[0.6rem] font-bold px-2 py-0.5 rounded-full ${styles[tag]}`}>
            {tag}
        </span>
    )
}

export default function Home() {
    return (
        <div className="pt-[72px]">

            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/hero.png"
                        alt="Ethiopian communal platter at Enat Guwada"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/85 via-coffee-dark/60 to-coffee-dark/25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative container-custom py-24">
                    <motion.div
                        className="max-w-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.span variants={fadeUp} className="section-eyebrow text-golden">
                            Minneapolis, MN · Est. 2009
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            className="font-heading text-display font-bold text-cream leading-[1.05] mt-2 mb-6"
                        >
                            Enat Guwada
                            <span className="block font-heading italic text-golden text-[0.55em] font-normal mt-1">
                                Mother's Kitchen
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-cream/80 text-lg leading-relaxed mb-10 max-w-lg"
                        >
                            Gather around. Share a platter. Taste traditions passed down through four generations of Ethiopian cooking — served with the warmth only a mother's kitchen can give.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            <Link to="/menu" className="btn-primary">
                                Explore Menu <ArrowRight size={16} />
                            </Link>
                            <Link to="/contact" className="btn-outline">
                                Find Us
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-cream/20">
                            {[
                                { icon: <Star size={16} />, label: '4.9 rating', sub: 'on Google' },
                                { icon: <Users size={16} />, label: '15+ years', sub: 'family-owned' },
                                { icon: <Coffee size={16} />, label: 'Coffee ceremony', sub: 'daily from 5pm' },
                            ].map(({ icon, label, sub }) => (
                                <div key={label} className="flex items-center gap-2.5">
                                    <div className="text-golden">{icon}</div>
                                    <div>
                                        <p className="text-cream text-sm font-semibold leading-none">{label}</p>
                                        <p className="text-cream/50 text-xs mt-0.5">{sub}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-5 h-8 border-2 border-cream/40 rounded-full flex justify-center pt-1.5">
                        <div className="w-1 h-2 bg-golden rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* ===== ABOUT SNIPPET ===== */}
            <section className="section bg-cream-warm">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-warm-xl aspect-[4/3]">
                                <img
                                    src="/assets/interior.png"
                                    alt="Inside Enat Guwada restaurant"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-5 -right-5 bg-spice text-cream rounded-xl p-4 shadow-warm-lg">
                                <p className="font-heading text-3xl font-bold leading-none">15+</p>
                                <p className="font-body text-xs mt-1 text-cream/80 leading-tight">Years of<br />Family Recipes</p>
                            </div>
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="section-eyebrow">Our Story</span>
                            <h2 className="section-title mb-2">
                                Food is how<br />we say <em className="italic text-spice">I love you.</em>
                            </h2>
                            <div className="divider-line mb-6" />
                            <p className="text-coffee-light leading-relaxed mb-4">
                                Enat Guwada started the way the best restaurants always do — with a mother who cooked too much and a family that kept inviting the whole neighbourhood over. Tigist Haile opened her first kitchen in 2009, bringing recipes from Gondar that had never seen a printed menu.
                            </p>
                            <p className="text-coffee-light leading-relaxed mb-8">
                                Today, every dish is still made the slow way. The berbere is ground in-house. The injera ferments for 72 hours. The coffee ceremony runs every evening as it has for a thousand years. This is not a restaurant. It's a front room.
                            </p>
                            <Link to="/about" className="btn-outline-dark">
                                Read Our Full Story <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURED DISHES ===== */}
            <section className="section bg-cream">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">From the Kitchen</span>
                        <h2 className="section-title">Dishes worth the journey</h2>
                        <div className="divider-line mx-auto mt-4 mb-5" />
                        <p className="section-subtitle mx-auto text-center">
                            Every dish starts with generations of memory and ends with an empty plate.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        {featuredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={fadeUp}
                                className="card-hover bg-card rounded-2xl overflow-hidden shadow-warm-sm border border-border group"
                            >
                                {/* Emoji visual */}
                                <div className="h-40 bg-gradient-to-br from-coffee-dark/90 to-spice/80 flex items-center justify-center">
                                    <span className="text-6xl" role="img" aria-label={item.name}>{item.emoji}</span>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <div>
                                            <h3 className="font-heading text-xl font-semibold text-coffee">{item.name}</h3>
                                            <p className="text-golden text-xs font-medium">{item.amharic}</p>
                                        </div>
                                        <span className="font-heading text-xl font-bold text-spice whitespace-nowrap">
                                            ${item.price}
                                        </span>
                                    </div>
                                    <p className="text-coffee-light text-sm leading-relaxed line-clamp-3 mb-3">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.map(t => <DietaryTag key={t} tag={t} />)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-12">
                        <Link to="/menu" className="btn-outline-dark">
                            View Full Menu <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== COFFEE CEREMONY BANNER ===== */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/coffee-ceremony.png"
                        alt="Ethiopian coffee ceremony at Enat Guwada"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-coffee-dark/70" />
                </div>
                <div className="relative container-custom text-center py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">Join Us Every Evening</span>
                        <h2 className="font-heading text-hero font-bold text-cream mb-4">
                            The Coffee Ceremony
                        </h2>
                        <p className="text-cream/75 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                            Ethiopian coffee isn't just a drink — it's a ritual. Three rounds of freshly roasted and brewed Yirgacheffe coffee, with frankincense and popcorn. Starting from 5pm daily. <strong className="text-golden">$8 per guest.</strong>
                        </p>
                        <Link to="/contact" className="btn-primary">
                            Reserve a Spot <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== HOURS & LOCATION ===== */}
            <section className="section-sm bg-cream-warm">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl p-8 shadow-warm-sm border border-border"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center">
                                    <Clock className="text-golden" size={20} />
                                </div>
                                <h3 className="font-heading text-2xl font-semibold">Opening Hours</h3>
                            </div>
                            <ul className="space-y-4">
                                {businessInfo.hours.map(({ day, time }) => (
                                    <li key={day} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                                        <span className="text-coffee-light text-sm">{day}</span>
                                        <span className="font-semibold text-coffee text-sm">{time}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-card rounded-2xl p-8 shadow-warm-sm border border-border"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-spice/10 flex items-center justify-center">
                                    <MapPin className="text-spice" size={20} />
                                </div>
                                <h3 className="font-heading text-2xl font-semibold">Find Us</h3>
                            </div>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="text-golden mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-coffee-light uppercase tracking-wide mb-0.5">Address</p>
                                        <p className="text-coffee font-medium">{businessInfo.address}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone size={16} className="text-golden mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-coffee-light uppercase tracking-wide mb-0.5">Phone</p>
                                        <a href={`tel:${businessInfo.phone}`} className="text-coffee font-medium hover:text-spice transition-colors">
                                            {businessInfo.phone}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            {/* Map placeholder */}
                            <div className="mt-6 rounded-xl overflow-hidden bg-golden/10 border border-golden/20 h-36 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="text-golden mx-auto mb-1" size={24} />
                                    <p className="text-coffee-light text-sm">56 5th Ave NW, Minneapolis</p>
                                    <a
                                        href="https://maps.google.com/?q=56+5th+Ave+NW+Minneapolis"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-spice text-xs font-semibold hover:underline mt-1 inline-block"
                                    >
                                        Open in Google Maps →
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    )
}

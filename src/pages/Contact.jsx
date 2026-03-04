import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { businessInfo } from '../data/menuData'

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', eventType: '', guests: '', date: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1200)
    }

    return (
        <div className="pt-[72px] bg-cream min-h-screen">

            {/* Page Header */}
            <div className="relative bg-coffee-dark text-cream py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-golden rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="relative container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="section-eyebrow text-golden">Come Visit</span>
                        <h1 className="font-heading text-hero font-bold text-cream mt-2 mb-4">Find Us</h1>
                        <p className="text-cream/65 text-base max-w-md mx-auto leading-relaxed">
                            We're always open to a gathering. Walk in or get in touch for group bookings and private events.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container-custom py-16">
                <div className="grid lg:grid-cols-5 gap-12">

                    {/* Left column: Info + Map */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        {/* Contact Info */}
                        <motion.div variants={fadeUp} className="bg-card rounded-2xl p-8 border border-border shadow-warm-sm">
                            <h2 className="font-heading text-2xl font-semibold text-coffee mb-6">Get in Touch</h2>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-spice/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <MapPin size={16} className="text-spice" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-coffee-light uppercase tracking-wide font-semibold mb-0.5">Address</p>
                                        <p className="text-coffee font-medium text-sm">{businessInfo.address}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-golden/15 flex items-center justify-center shrink-0">
                                        <Phone size={16} className="text-golden" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-coffee-light uppercase tracking-wide font-semibold mb-0.5">Phone</p>
                                        <a href={`tel:${businessInfo.phone}`} className="text-coffee font-medium text-sm hover:text-spice transition-colors">
                                            {businessInfo.phone}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-golden/15 flex items-center justify-center shrink-0">
                                        <Mail size={16} className="text-golden" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-coffee-light uppercase tracking-wide font-semibold mb-0.5">Email</p>
                                        <a href={`mailto:${businessInfo.email}`} className="text-coffee font-medium text-sm hover:text-spice transition-colors">
                                            {businessInfo.email}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Hours */}
                        <motion.div variants={fadeUp} className="bg-card rounded-2xl p-8 border border-border shadow-warm-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock size={18} className="text-golden" />
                                <h2 className="font-heading text-2xl font-semibold text-coffee">Opening Hours</h2>
                            </div>
                            <ul className="space-y-3">
                                {businessInfo.hours.map(({ day, time }) => (
                                    <li key={day} className="flex items-center justify-between py-2.5 border-b border-border/60 last:border-0">
                                        <span className="text-coffee-light text-sm">{day}</span>
                                        <span className="font-semibold text-coffee text-sm">{time}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-coffee-light mt-4 italic">
                                Coffee ceremony begins at 5pm daily. Walk-ins welcome; large groups please call ahead.
                            </p>
                        </motion.div>

                        {/* Map placeholder */}
                        <motion.div variants={fadeUp}>
                            <div className="rounded-2xl overflow-hidden border border-border shadow-warm-sm h-56 bg-golden/10 flex items-center justify-center relative">
                                <div className="text-center z-10">
                                    <MapPin className="text-spice mx-auto mb-2" size={28} />
                                    <p className="font-heading text-coffee text-lg font-semibold">56 5th Ave NW</p>
                                    <p className="text-coffee-light text-sm">Minneapolis, MN 55411</p>
                                    <a
                                        href="https://maps.google.com/?q=56+5th+Ave+NW+Minneapolis+MN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 text-spice text-sm font-semibold hover:underline"
                                    >
                                        Open in Google Maps →
                                    </a>
                                </div>
                                {/* Decorative grid */}
                                <div className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage: 'linear-gradient(#C6A75E 1px, transparent 1px), linear-gradient(90deg, #C6A75E 1px, transparent 1px)',
                                        backgroundSize: '30px 30px',
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right column: Enquiry Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-warm-sm">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="text-green-600 mx-auto mb-4" size={52} />
                                    <h3 className="font-heading text-2xl font-semibold text-coffee mb-3">
                                        We've got your message!
                                    </h3>
                                    <p className="text-coffee-light text-sm leading-relaxed max-w-sm mx-auto">
                                        Thank you for getting in touch. We'll respond within 24 hours — usually much sooner. <span className="text-golden font-medium">Egziabher yistilign.</span>
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <h2 className="font-heading text-2xl font-semibold text-coffee mb-2">
                                        Group Bookings & Enquiries
                                    </h2>
                                    <p className="text-coffee-light text-sm mb-8 leading-relaxed">
                                        Planning a private coffee ceremony, group feast, or catering event? Tell us about it and we'll take care of the rest.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-semibold text-coffee uppercase tracking-wide mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Liya Tadesse"
                                                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-coffee bg-cream focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all placeholder:text-coffee-light/40"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-coffee uppercase tracking-wide mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="liya@example.com"
                                                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-coffee bg-cream focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all placeholder:text-coffee-light/40"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-semibold text-coffee uppercase tracking-wide mb-2">
                                                    Phone (optional)
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+1 (612) 555-0000"
                                                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-coffee bg-cream focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all placeholder:text-coffee-light/40"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-coffee uppercase tracking-wide mb-2">
                                                    Number of Guests
                                                </label>
                                                <select
                                                    name="guests"
                                                    value={formData.guests}
                                                    onChange={handleChange}
                                                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-coffee bg-cream focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all"
                                                >
                                                    <option value="">Select...</option>
                                                    <option value="2-4">2–4 guests</option>
                                                    <option value="5-8">5–8 guests</option>
                                                    <option value="9-15">9–15 guests</option>
                                                    <option value="15+">15+ guests</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-semibold text-coffee uppercase tracking-wide mb-2">
                                                    Type of Event
                                                </label>
                                                <select
                                                    name="eventType"
                                                    value={formData.eventType}
                                                    onChange={handleChange}
                                                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-coffee bg-cream focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all"
                                                >
                                                    <option value="">Select...</option>
                                                    <option value="coffee-ceremony">Private Coffee Ceremony</option>
                                                    <option value="group-feast">Group Feast Platter</option>
                                                    <option value="catering">Catering Enquiry</option>
                                                    <option value="birthday">Birthday / Celebration</option>
                                                    <option value="corporate">Corporate Event</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-coffee uppercase tracking-wide mb-2">
                                                    Preferred Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-coffee bg-cream focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-coffee uppercase tracking-wide mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                placeholder="Tell us anything we should know — dietary requirements, special occasions, specific dishes you love..."
                                                className="w-full border border-border rounded-xl px-4 py-3 text-sm text-coffee bg-cream focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all resize-none placeholder:text-coffee-light/40"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-primary w-full justify-center"
                                        >
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <>Send Enquiry <Send size={15} /></>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

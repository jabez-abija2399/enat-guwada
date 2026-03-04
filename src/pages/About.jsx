import { motion } from 'framer-motion'
import { Heart, Leaf, Users } from 'lucide-react'

const values = [
    {
        icon: <Heart size={22} />,
        title: 'Slow cooking, deep flavour',
        description: 'Our berbere is ground fresh each morning. Our stews simmer for six to eight hours. Speed would ruin it. Patience is the recipe.',
    },
    {
        icon: <Leaf size={22} />,
        title: 'Ingredients with origin',
        description: 'We source teff from a Minnesota family farm with Ethiopian heritage. Spices come directly from Addis Ababa. The honey for our tej is local Minnesotan.',
    },
    {
        icon: <Users size={22} />,
        title: 'Community at the centre',
        description: "Ethiopian food was never meant to be eaten alone. Our tables are built for groups. Our platters don't come with individual portions. That's intentional.",
    },
]

const team = [
    {
        name: 'Tigist Haile',
        role: 'Founder & Head Chef',
        bio: 'Born in Gondar, trained in her grandmother\'s kitchen, Tigist moved to Minneapolis in 1998 and spent years cooking for community gatherings before finally opening Enat Guwada in 2009. She still makes the injera batter by hand every morning.',
        image: '/assets/founder.png',
    },
    {
        name: 'Dawit Haile',
        role: 'Sous Chef & Spice Keeper',
        bio: 'Tigist\'s younger brother and guardian of the family spice blends. Dawit handles the berbere and mitmita, recipes he\'s sworn never to fully write down. "If you measure it, you\'ve already lost something," he says.',
        initials: 'DH',
    },
    {
        name: 'Sara Mekonnen',
        role: 'Hospitality & Coffee Ceremony',
        bio: 'Sara grew up performing the coffee ceremony for her family in Jimma. She now leads every evening ceremony at Enat Guwada, and is the reason our coffee smells the way it does—fresh-roasted, every time.',
        initials: 'SM',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
}

export default function About() {
    return (
        <div className="pt-[72px] bg-cream">

            {/* Page Header */}
            <div className="relative bg-coffee-dark text-cream py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-golden rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-spice rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="relative container-custom text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="section-eyebrow text-golden">Since 2009</span>
                        <h1 className="font-heading text-hero font-bold text-cream mt-2 mb-4">Our Story</h1>
                        <p className="text-cream/65 text-base max-w-xl mx-auto leading-relaxed">
                            A family kitchen that outgrew its walls — and found a home on 5th Avenue.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Brand Story */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-warm-xl aspect-[3/4]">
                                <img
                                    src="/assets/founder.png"
                                    alt="Tigist Haile, founder of Enat Guwada"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-5 -left-5 bg-cream rounded-2xl p-4 shadow-warm-lg border border-border max-w-[200px]">
                                <p className="font-heading text-coffee italic text-sm leading-snug">
                                    "Every dish I cook, I cook the way my mother taught me — with all of it."
                                </p>
                                <p className="text-golden text-xs font-semibold mt-2">— Tigist Haile</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="section-eyebrow">The Beginning</span>
                            <h2 className="section-title mb-2">Who we are &<br />where we come from</h2>
                            <div className="divider-line mb-8" />

                            <div className="space-y-5 text-coffee-light leading-relaxed">
                                <p>
                                    Tigist Haile grew up in Gondar in northern Ethiopia, in a home where the kitchen was never empty. Her mother cooked for whoever came — family, neighbours, the priest, strangers. The injera fermented always. The berbere was always fresh.
                                </p>
                                <p>
                                    When Tigist moved to Minneapolis in 1998, she carried those recipes in her hands, not in a notebook. For over a decade, she cooked for community gatherings, church fundraisers, and anyone who knocked on her door around dinner time. By 2009, so many people were asking "when are you opening a restaurant?" that she finally answered them.
                                </p>
                                <p>
                                    Enat Guwada — Mother's Kitchen — opened in a small space on 5th Avenue. It hasn't changed much since. The walls are a little more decorated. The tables are bigger. But the food is exactly the same.
                                </p>
                                <p>
                                    We don't have a test kitchen or a corporate recipe book. We have Tigist, her brother Dawit, and Sara who leads our coffee ceremonies. Three people who have known this food their whole lives and will never stop changing it to make it better.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-cream-warm">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">What drives us</span>
                        <h2 className="section-title">Our Philosophy</h2>
                        <div className="divider-line mx-auto mt-3" />
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        {values.map(({ icon, title, description }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="bg-card rounded-2xl p-8 border border-border hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-golden/15 flex items-center justify-center mx-auto mb-5 text-golden">
                                    {icon}
                                </div>
                                <h3 className="font-heading text-xl font-semibold text-coffee mb-3">{title}</h3>
                                <p className="text-coffee-light text-sm leading-relaxed">{description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">The People</span>
                        <h2 className="section-title">The hands behind the food</h2>
                        <div className="divider-line mx-auto mt-3" />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Photo or initial placeholder */}
                                <div className="h-60 overflow-hidden bg-gradient-to-br from-coffee/20 to-golden/20">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="font-heading text-5xl font-bold text-white/60">{member.initials}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="font-heading text-xl font-semibold text-coffee">{member.name}</h3>
                                    <p className="text-golden text-sm font-semibold mb-3">{member.role}</p>
                                    <p className="text-coffee-light text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

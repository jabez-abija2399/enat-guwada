import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter } from 'lucide-react'
import { menuCategories } from '../data/menuData'

const ALL = 'All'
const dietaryFilters = [ALL, 'V', 'VE', 'GF']

function DietaryTag({ tag }) {
    const styles = {
        V: 'bg-green-100 text-green-800',
        VE: 'bg-emerald-100 text-emerald-800',
        GF: 'bg-amber-100 text-amber-800',
    }
    const labels = { V: 'Vegetarian', VE: 'Vegan', GF: 'Gluten-Free' }
    return (
        <span title={labels[tag]} className={`inline-block text-[0.62rem] font-bold tracking-wide px-2 py-0.5 rounded-full mr-1 ${styles[tag]}`}>
            {tag}
        </span>
    )
}

function MenuItemCard({ item }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300 group"
        >
            {/* Emoji visual */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coffee/10 to-golden/20 flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <h3 className="font-heading text-lg font-semibold text-coffee leading-tight">{item.name}</h3>
                        <p className="text-golden text-xs font-medium mb-1">{item.amharic}</p>
                    </div>
                    <span className="font-heading text-xl font-bold text-spice whitespace-nowrap shrink-0">
                        ${item.price}
                    </span>
                </div>
                <p className="text-coffee-light text-sm leading-relaxed mb-2 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                    {item.tags.map(t => <DietaryTag key={t} tag={t} />)}
                </div>
            </div>
        </motion.div>
    )
}

export default function Menu() {
    const [activeFilter, setActiveFilter] = useState(ALL)

    const getFilteredItems = (items) => {
        if (activeFilter === ALL) return items
        return items.filter(i => i.tags.includes(activeFilter))
    }

    return (
        <div className="pt-[72px] bg-cream min-h-screen">

            {/* Page Header */}
            <div className="bg-coffee-dark text-cream py-20">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-eyebrow text-golden">Habesha Cuisine</span>
                        <h1 className="font-heading text-hero font-bold text-cream mt-2 mb-4">
                            Our Menu
                        </h1>
                        <p className="text-cream/65 text-base max-w-xl mx-auto leading-relaxed">
                            Everything is served with freshly made injera — Ethiopia's sourdough flatbread that's both plate and utensil. Platters are designed for sharing.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Key & Filter Bar */}
            <div className="sticky top-[72px] z-40 bg-cream/95 backdrop-blur-md border-b border-border shadow-warm-sm">
                <div className="container-custom py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {/* Dietary key */}
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="text-coffee-light font-medium flex items-center gap-1.5">
                            <Filter size={13} /> Key:
                        </span>
                        {[
                            { tag: 'V', label: 'Vegetarian', cls: 'bg-green-100 text-green-800' },
                            { tag: 'VE', label: 'Vegan', cls: 'bg-emerald-100 text-emerald-800' },
                            { tag: 'GF', label: 'Gluten-Free', cls: 'bg-amber-100 text-amber-800' },
                        ].map(({ tag, label, cls }) => (
                            <span key={tag} className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full ${cls}`}>
                                {tag} — {label}
                            </span>
                        ))}
                    </div>

                    {/* Filter buttons */}
                    <div className="flex items-center gap-2">
                        {dietaryFilters.map(f => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${activeFilter === f
                                        ? 'bg-spice text-white border-spice'
                                        : 'bg-white text-coffee-light border-border hover:border-spice hover:text-spice'
                                    }`}
                            >
                                {f === ALL ? 'All Items' : f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Categories */}
            <div className="container-custom py-14">
                <div className="space-y-16">
                    {menuCategories.map((category, catIdx) => {
                        const filteredItems = getFilteredItems(category.items)
                        if (filteredItems.length === 0) return null
                        return (
                            <motion.section
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                            >
                                {/* Category header */}
                                <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-8 pb-4 border-b-2 border-golden/30">
                                    <div>
                                        <h2 className="font-heading text-3xl font-bold text-coffee">{category.name}</h2>
                                        <p className="text-golden font-medium text-sm">{category.amharic}</p>
                                    </div>
                                    <p className="text-coffee-light text-sm max-w-md sm:ml-4 sm:pb-1 leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Items */}
                                <AnimatePresence mode="popLayout">
                                    <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-4">
                                        {filteredItems.map(item => (
                                            <MenuItemCard key={item.id} item={item} />
                                        ))}
                                    </div>
                                </AnimatePresence>
                            </motion.section>
                        )
                    })}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-golden/10 border border-golden/20 rounded-2xl p-8"
                >
                    <p className="font-heading text-xl text-coffee mb-2">
                        "When you eat, I eat."
                    </p>
                    <p className="text-coffee-light text-sm">
                        All platters are made for sharing. Ask your server about our group feast platters for 4–8 guests.
                    </p>
                    <p className="text-xs text-coffee-light mt-4 italic">
                        Please inform us of any allergens. Dishes marked GF are gluten-free, but our kitchen handles gluten. Injera contains teff — naturally gluten-free, but ask your server for alternatives if needed.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

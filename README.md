# Enat Guwada – Mother's Kitchen

A warm, authentic Ethiopian restaurant brand website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🥘 Brand Concept
**Enat Guwada** (Mother's Kitchen) is a family-owned Ethiopian eatery based in Minneapolis. The brand focuses on warmth, heritage, and the communal nature of Ethiopian dining. 

- **Personality:** Homey, authentic, and community-focused.
- **Menu Style:** Traditional stews (Wat), sizzling sautés (Tibs), and the essential coffee ceremony.
- **Design Aesthetic:** A warm, earthy palette of Cream, Coffee Brown, Spice Red, and Golden Ochre, unified by elegant serif typography and moody, appetizing photography.

## 🛠 Tech Stack
- **Core:** React 18 + Vite
- **Styling:** Tailwind CSS + Radix UI (shadcn/ui primitives)
- **Animations:** Framer Motion for smooth scroll effects and transitions.
- **Icons:** Lucide React
- **Routing:** React Router v6

## 🚀 Setup Instructions
To run this project locally, follow these steps:

1. **Clone the repository** (if applicable).
2. **Navigate to the project folder:**
   ```bash
   cd "Enat Guwada"
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design Decisions
- **Color Palette & Typography:** 
  - We used `#FDF8F5` (Cream) for a soft, inviting background and `#4B2E2B` (Coffee Brown) for readability. 
  - `#B23A2B` (Spice Red) serves as an energetic accent for CTAs, reflecting the heat of berbere.
  - **Cormorant Garamond** (Serif) was chosen for headings to evoke a sense of heritage and tradition, while **Source Sans 3** (Sans-serif) ensures a modern, clean body text.
- **Responsive Menu:** The menu breaks from a multi-column grid into a single-column stack on mobile, with large touch targets and scannable pricing.
- **Animations:** Subtle `fade-in` and `slide-up` animations are used purely to enhance the experience without distracting from the content.

## 📱 Responsiveness
- **Desktop (1280px+):** Full hero layouts, multi-column grids, side-by-side About sections.
- **Tablet (768px - 1279px):** Balanced grids, simplified navigation.
- **Mobile (<768px):** Single column layouts, touch-safe buttons, stacked elements.

## ⚖ Assumptions & Limitations
- **Images:** All brand imagery was AI-generated specifically for this project to maintain a consistent, high-end "warm" aesthetic.
- **Backend:** This is a frontend-only project. The enquiry form on the Contact page simulates a submission but does not actually send emails.
- **Map:** The map is a stylized placeholder directing users to Google Maps for a real interaction.

---
Built with ❤️ for the Frontend Developer technical assignment.

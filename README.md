# Bario Neal — Ethical Fine Jewelry & Wedding Rings

> A pixel-perfect, responsive web implementation of the **Bario Neal Jewelry** platform based on the Figma design (`node-id=1:2`).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fsoxibs48-eng%2Famaliy16)

---

## 🌟 Overview & Design Philosophy

**Bario Neal** is a pioneer in ethical fine jewelry, committed to human rights, environmental sustainability, and radical supply chain transparency. Handcrafted in Philadelphia, PA, each piece is made using 100% recycled metals, Fairmined gold, and traceable conflict-free diamonds and colored gemstones.

This web application faithfully implements the official Figma design aesthetic:
- **Palette**: Calm, organic luxury tones — Warm Linen Cream (`#FAF7F2`), Sage Green (`#8CA99A`), Soft Sky Blue (`#D5E4E6`), Sandy Taupe (`#ECE6DE`), Muted Peach (`#EBBBA8`), and Deep Charcoal (`#1C1A18`).
- **Typography**: Editorial serif headings (`Cormorant Garamond`), classical display caps (`Cinzel`), and minimalist sans-serif (`Jost`).
- **Layout**: Clean grid-based product showcases on pedestals, organic pebble custom design collages, and responsive fluid layouts.

---

## 🚀 Key Sections & Features

1. **Top Announcement Bar ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L27-L35))**:
   - Shipping incentives, 100% recycled metals pledge, and virtual appointment booking alert.

2. **Sticky Header & Brand Navigation ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L40-L75))**:
   - Glassmorphic backdrop blur on scroll.
   - Primary links: Engagement, Wedding, Fine Jewelry, Custom Design, Ethics & Impact, Love Stories.
   - Interactive search bar, consultation booking shortcut, and dynamic Shopping Bag drawer toggle with live item counter.

3. **Hero Section ("We Find Always In All Ways") ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L80-L108))**:
   - High-resolution editorial campaign portrait of a blonde model adorned with fine gold jewelry.
   - Floating vertical peach ribbon (*"New Heirloom Collection"*).
   - Direct CTA buttons: `Shop Rings` and `Book Appointment`.

4. **Wedding & Engagement Collection ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L113-L195))**:
   - 4 Featured signature pieces on minimalist ivory display pedestals:
     - **Avens Diamond Cluster Ring** ($2,840) — Fairmined Gold
     - **Senna Textured Band Stack** ($1,150) — Recycled 18k Gold
     - **Ray Emerald & Diamond Toi et Moi Ring** ($3,490) — Traceable Zambian Emerald
     - **Burst Halo Diamond Ring** ($4,200) — Ethical Center Stone & Platinum
   - Quick View button overlay with smooth micro-animations.

5. **Split 50/50 "An Ethical Approach" ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L200-L235))**:
   - Left: Jeweler artisan hands shaping and polishing a hand-carved gold ring in workshop.
   - Right: Sage green card detailing conflict-free sourcing, B-Corp standards, and Living Wage certification.
   - `Our Impact Report` modal trigger.

6. **Press & Media Recognition Bar ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L240-L252))**:
   - Editorial press mentions from *Vogue*, *The New York Times*, *Brides*, *Harper's Bazaar*, and *Elle*.

7. **Brand Mission & Statement Banner ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L257-L268))**:
   - Sandy linen backdrop with certified ethical jewelry emblem and central brand quote.

8. **"Our Jewelry" Everyday Collection ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L273-L345))**:
   - Category showcases: Rings, Bracelets (Turquoise Inlay Cuff), Necklaces (Aira Diamond Pendant), and Earrings (Linear Diamond Drops).

9. **Custom Design Experience ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L350-L380))**:
   - Sage green block with bespoke consultation CTAs.
   - Organic pebble photo collage featuring custom ring on hand and loose gemstones in ceramic tray.

10. **Infinite Values Ribbon (Ticker) ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L385-L402))**:
    - Animated continuous ticker highlighting Bario Neal's 6 foundational pillars.

11. **"Love In All Ways" ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L407-L428))**:
    - Romantic portrait of a diverse couple embracing with jewelry.
    - Soft sky blue panel celebrating gender-inclusive rings and authentic love stories.

12. **Instagram & Community Gallery ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L433-L475))**:
    - Grid of customer photography featuring sapphire stacks, wedding moments, and rough gemstones.

13. **Comprehensive Editorial Footer ([index.html](file:///c:/Users/HP%20PC/21/21.10/amaliy16/index.html#L480-L565))**:
    - Newsletter signup form with instant confirmation toast.
    - 5 Distinct navigation columns: Shop, About, Services, Visit, Connect & Legal.

14. **Interactive Modals & Drawers**:
    - **Product Customizer & Quick View Modal**: Choose metal (14k Yellow Gold, Rose Gold, White Gold, Platinum), select ring size (US 5-8.5 + custom), live price calculation, add to bag.
    - **Shopping Bag Slide-Over Drawer**: Quantity counter, remove items, estimated subtotal, free insured shipping threshold meter, simulated checkout.
    - **Appointment Booking Modal**: Philadelphia, New York, or Virtual consultation date and time picker.
    - **Community Love Story Modal**: Detailed story reader with photography.
    - **Toast Notification System**: Non-intrusive floating feedback for cart actions and form submissions.

---

## 🛠️ Tech Stack & Architecture

- **Markup**: Semantic HTML5 with accessibility attributes (`aria-label`, landmarks).
- **Styling**: Vanilla CSS3 with CSS Custom Properties, flexbox, CSS grid, and responsive media queries.
- **Interactivity**: Vanilla JavaScript (ES6+) with reactive state management and event-driven architecture.
- **Hosting**: Configured for instant deployment on [Vercel](https://vercel.com) via `vercel.json`.

---

## 💻 Local Development

To run locally in a web browser:

```bash
# Clone the repository
git clone https://github.com/soxibs48-eng/amaliy16.git

# Navigate to project folder
cd amaliy16

# Open index.html in your default web browser
start index.html
```

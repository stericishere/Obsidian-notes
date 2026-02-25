# AST251 Midterm - Quick Reference Cheat Sheet

> **Use this during study sessions** - Print it out or keep it open while reviewing

---

## 🔴 CRITICAL FORMULAS (Memorize These!)

### Equilibrium Temperature

$$T_{eq} = \left( \frac{(1-A)L}{16\pi\sigma a^2} \right)^{1/4}$$

| Variable | Meaning | Units |
|----------|---------|-------|
| $T_{eq}$ | Equilibrium temperature | Kelvin (K) |
| $A$ | Bond Albedo (reflectivity) | unitless (0-1) |
| $L$ | Stellar luminosity | Watts (W) |
| $\sigma$ | Stefan-Boltzmann constant | $5.670 \times 10^{-8}$ W m⁻² K⁻⁴ |
| $a$ | Orbital distance | meters (m) |

> [!warning] Common Mistake
> Don't forget the **fourth root**! Calculate inside first, then take $\sqrt[4]{}$
> Also: It's $(1-A)$, NOT $(1+A)$ — high albedo = MORE reflection = LOWER temperature

---

### Transit Depth & Planet Radius

$$\text{Depth} = \left( \frac{R_{planet}}{R_{star}} \right)^2$$

$$R_{planet} = R_{star} \times \sqrt{\text{Depth}}$$

> [!tip] Key Insight
> Transit measures **SIZE (radius)**, NOT mass!
> You cannot determine mass from a light curve alone.

---

### Kepler's Third Law

**Simple Form** (Solar units):
$$P^2 = a^3$$
Where: $P$ in **years**, $a$ in **AU**

**Full Form** (SI units):
$$P^2 = \frac{4\pi^2 a^3}{G(M_{star} + m_{planet})}$$

**Solving for distance:**
$$a \approx \left( \frac{GM_{star} P^2}{4\pi^2} \right)^{1/3}$$

> [!warning] Unit Trap
> If using $P^2 = a^3$, you MUST use years and AU!
> If using SI units, convert everything to seconds, meters, kg.

---

### Stefan-Boltzmann Law (Power Output)

$$P_{out} = 4\pi r^2 \sigma T^4$$

For stars: $P_{out} = L$ (Luminosity)

---

## 📚 CONSTANTS (Given on Exam)

| Constant | Symbol | Value |
|----------|--------|-------|
| Solar Luminosity | $L_\odot$ | $3.828 \times 10^{26}$ W |
| Solar Radius | $R_\odot$ | $6.957 \times 10^8$ m |
| Solar Mass | $M_\odot$ | $1.988 \times 10^{30}$ kg |
| Astronomical Unit | 1 AU | $1.496 \times 10^{11}$ m |
| Stefan-Boltzmann | $\sigma$ | $5.670 \times 10^{-8}$ W m⁻² K⁻⁴ |
| Gravitational | $G$ | $6.674 \times 10^{-11}$ m³ s⁻² kg⁻¹ |
| Freezing point of water | | 273.15 K |
| Pi | $\pi$ | 3.14159 |

---

## ⭐ STELLAR CLASSIFICATION (OBAFGKM)

> **Mnemonic:** "**O**verwhelming **B**rilliant **A**stronomers **F**ind **G**alaxies **K**inda **M**esmerizing"

| Type | Temperature (K) | Color | Lifespan | Notes |
|------|-----------------|-------|----------|-------|
| O | >30,000 | Blue | ~10⁷ yr | Hottest, most massive, shortest lived |
| B | 10,000-30,000 | Blue-white | | |
| A | 7,500-10,000 | White | | |
| F | 6,000-7,500 | Yellow-white | | |
| **G** | 5,000-6,000 | Yellow | ~10¹⁰ yr | **Our Sun is a G-type star!** |
| K | 3,500-5,000 | Orange | | |
| M | <3,500 | Red | >10¹¹ yr | Coolest, smallest, longest lived |

> [!danger] Critical Misconception
> **Blue = HOT** (>30,000K), **Red = COOL** (<3,500K)
> NOT the opposite! This catches many students.

> [!warning] Mass vs Lifespan Trap
> Massive stars have MORE fuel but burn it FASTER → die YOUNG
> Small stars sip fuel slowly → live LONGEST

---

## 🌍 HABITABLE ZONE QUICK FACTS

### What It Is
The region around a star where liquid water can exist on a planet's surface.

### Key Distinctions
| Type | Definition |
|------|------------|
| **Conservative HZ** | Stricter limits, higher confidence |
| **Optimistic HZ** | Wider limits, includes greenhouse effects |

### HZ Distance Depends On
1. **Stellar Luminosity** — Brighter star → farther HZ
2. **Albedo** — Higher reflectivity → can be closer
3. **Greenhouse Effect** — Strong atmosphere → can be farther

### Time Evolution
- **Faint Young Sun Paradox**: Sun was ~70% dimmer 4 billion years ago, but Earth had liquid water (greenhouse effect compensated)
- **Rising Luminosity**: In ~1 billion years, Earth will be too hot for complex life
- **Red Giant**: Sun will expand and engulf inner planets

---

## 🔭 TRANSIT METHOD - Key Points

### What You Can Measure
| Observable | Derived Quantity |
|------------|------------------|
| Transit depth | Planet **radius** |
| Time between transits | Orbital **period** |
| Using Kepler's Law | Orbital **distance** (a) |
| Combine with stellar luminosity | **Habitable zone** assessment |

### Detection Biases
| Easier to Detect | Harder to Detect |
|------------------|------------------|
| Large planets (deeper dips) | Small, Earth-sized planets |
| Short periods (frequent transits) | Long periods (rare transits) |
| Close-in orbits | Distant orbits |
| Edge-on alignment | Tilted/face-on orbits |

### Sources of Error
- **Limb darkening**: Makes transit bottom rounded, not flat
- **Starspots**: Can cause dips, but don't repeat periodically like orbits
- **Noise**: Random fluctuations in brightness

> [!important] Minimum for Detection
> Need at least **3 transits** (2 intervals) to confirm a planet
> A single dip is NOT a confirmed detection!

---

## 🧬 CHEMISTRY OF LIFE

### Why Carbon?
| Property | Carbon | Silicon |
|----------|--------|---------|
| Valence electrons | 4 | 4 |
| Bond strength | Strong | Weaker |
| Multiple bonds | ✅ Double/triple bonds | ❌ Limited |
| Waste product | CO₂ (gas) | SiO₂ (solid rock) |
| Chemical complexity | ✅ Long chains/polymers | ❌ Limited |

> [!tip] Key Argument
> Carbon's CO₂ is a gas → easy to exhale/recycle
> Silicon's SiO₂ is quartz/rock → "solid waste problem"

### Why Water?
| Property | Water (H₂O) | Methane (CH₄) |
|----------|-------------|---------------|
| Polarity | ✅ Polar | ❌ Non-polar |
| Temperature range | 273-373K | Much colder (Titan-like) |
| Solid density | Ice floats | Solid sinks |
| Solvent power | Strong | Weaker |

> [!important] Ice Floats!
> Water ice floats → insulates oceans below → life can survive under ice
> Methane solid sinks → lakes could freeze solid from bottom up

---

## 🛸 FERMI PARADOX SOLUTIONS

| Solution | Claim | Key Assumption |
|----------|-------|----------------|
| **Rare Earth** | We are unique/alone | Life evolution is astronomically improbable |
| **Zoo Hypothesis** | Aliens watch from distance | Aliens have non-interference policy |
| **Dark Forest** | Civilizations hide in fear | Survival = destroy others before detected |
| **Great Filter** | Some step blocks most life | One evolutionary step is nearly impossible |

> [!danger] Don't Confuse These!
> **Zoo**: Aliens exist, are benevolent/indifferent, watching us
> **Dark Forest**: Aliens exist, are hostile, hiding and destroying

---

## ✅ EXAM CHECKLIST

- [ ] Can you calculate equilibrium temperature?
- [ ] Can you convert between period and orbital distance?
- [ ] Can you calculate planet radius from transit depth?
- [ ] Do you know OBAFGKM (hottest to coolest)?
- [ ] Can you explain why carbon > silicon for life?
- [ ] Can you explain why water > methane for life?
- [ ] Do you know the difference between Zoo/Dark Forest?
- [ ] Can you identify detection biases in transit method?
- [ ] Do you remember the fourth root for $T_{eq}$?

---

**Last Updated:** February 4, 2026
**Keep this handy during study!**

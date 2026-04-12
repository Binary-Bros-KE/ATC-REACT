"use client"

import { motion } from "framer-motion"

export default function CoffeeLabPage() {
  return (
    <main className="bg-white text-neutral-900 overflow-hidden">

      {/* 1. FULL BLEED HERO VIDEO */}
      <section className="relative h-screen w-full">
        <video
          src="https://res.cloudinary.com/dxybhmfpe/video/upload/v1767195989/Video-1_ggctzo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl px-8"
          >
            <span className="uppercase tracking-[0.4em] text-white/80 text-sm">
              The Arobisca
            </span>
            <h1 className="text-white text-5xl md:text-6xl font-medium mt-6 leading-tight">
              Coffee Laboratory
            </h1>
            <p className="text-white/80 max-w-xl mt-8 text-lg">
              A controlled environment where precision, sensory awareness,
              and professional workflow are mastered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO */}
      <section className="max-w-6xl mx-auto px-8 py-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl leading-relaxed font-light"
        >
          The Coffee Laboratory is not a classroom.  
          It is a professional training space designed to replicate
          real-world specialty cafés — where technique, repetition,
          and feedback refine the craft.
        </motion.p>
      </section>

      {/* 3. SPLIT — IMAGE / VIDEO */}
      <section className="grid md:grid-cols-2">
        <img
          src="https://res.cloudinary.com/dxybhmfpe/image/upload/v1767195956/Arobisca-Laboratory-_lw04ut.jpg"
          className="h-[520px] w-full object-cover"
          alt=""
        />
        <video
          src="https://res.cloudinary.com/dxybhmfpe/video/upload/v1767195989/Video-1_ggctzo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[520px] w-full object-cover"
        />
      </section>

      {/* 4. STATEMENT BLOCK */}
      <section className="max-w-6xl mx-auto px-8 py-32">
        <h2 className="text-5xl md:text-6xl font-medium leading-tight">
          Where <span className="italic">science</span>  
          meets <span className="italic">craft</span>.
        </h2>
        <p className="mt-10 max-w-2xl text-lg text-neutral-600">
          From espresso extraction and milk texturing to sensory calibration
          and cupping protocols, every element is intentional.
        </p>
      </section>

      {/* 5. SPLIT — VIDEO / IMAGE */}
      <section className="grid md:grid-cols-2">
        <video
          src="https://res.cloudinary.com/dxybhmfpe/video/upload/v1767196087/Video-4_i1dtze.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[520px] w-full object-cover"
        />
        <img
          src="https://res.cloudinary.com/dxybhmfpe/image/upload/v1767195954/Arobisca-Laboratory-3_bcwe5i.jpg"
          className="h-[520px] w-full object-cover"
          alt=""
        />
      </section>

      {/* 6. FOUR VIDEO STRIP */}
      <section className="px-4 py-32">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "https://res.cloudinary.com/dxybhmfpe/video/upload/v1767196095/Video-2_v8v9j7.mp4",
            "https://res.cloudinary.com/dxybhmfpe/video/upload/v1767196087/Video-4_i1dtze.mp4",
            "https://res.cloudinary.com/dxybhmfpe/video/upload/v1767196085/Video-3_elajpo.mp4",
            "https://res.cloudinary.com/dxybhmfpe/video/upload/v1767195989/Video-1_ggctzo.mp4",
          ].map((video, i) => (
            <motion.video
              key={i}
              src={video}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-[260px] w-full object-cover rounded-xl"
            />
          ))}
        </div>
      </section>

      {/* 7. CLOSING PHILOSOPHY */}
      <section className="max-w-5xl mx-auto px-8 pb-40">
        <h3 className="text-4xl font-medium">
          Built for mastery.
        </h3>
        <p className="mt-8 text-lg text-neutral-600 max-w-3xl">
          The Arobisca Coffee Laboratory is where students move beyond theory
          and develop confidence through repetition, critique, and real
          service conditions.
        </p>
      </section>

    </main>
  )
}

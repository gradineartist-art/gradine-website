import { motion } from 'framer-motion'
import { Music2, Play, Sparkles, ExternalLink } from 'lucide-react'

export default function GradineWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_45%)]" />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950/70 mb-8 text-zinc-300 text-sm backdrop-blur">
              <Sparkles size={16} />
              cinematic dark pop project
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-[0.25em] leading-none mb-8">
              GRADINE
            </h1>

            <p className="text-2xl md:text-3xl text-zinc-300 italic mb-6 leading-relaxed">
              «Не привыкай ко мне… Я как дым.»
            </p>

            <p className="text-zinc-400 text-lg leading-8 max-w-xl mb-10">
              Emotional cinematic electronic music blending dark pop,
              ambient textures and living vocals that feel like memories
              speaking back.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#releases" className="group px-8 py-4 rounded-2xl bg-white text-black font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl">
                <Play size={18} className="group-hover:translate-x-1 transition" />
                Слушать релизы
              </a>

              <a href="https://www.youtube.com/@gradine_music" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
                YouTube
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/10 to-violet-500/20 blur-3xl rounded-full" />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-[0_0_80px_rgba(255,255,255,0.06)] backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop"
                alt="GRADINE"
                className="w-full h-[700px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
                  <div>
                    <p className="text-zinc-400 text-sm mb-1">Now playing</p>
                    <h3 className="text-2xl font-bold">Как дым</h3>
                  </div>

                  <a href="#releases" className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all duration-300">
                    <Play fill="black" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="releases" className="relative z-10 px-6 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-14">
            <Music2 className="text-zinc-400" />
            <h2 className="text-4xl md:text-5xl font-bold">Релизы</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -6 }}
              className="group bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-zinc-600 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
                  alt="Как дым"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold">Как дым</h3>
                  <span className="text-zinc-500">2026</span>
                </div>

                <p className="text-zinc-400 leading-7 mb-8">
                  Dark cinematic electronic single about emotional distance,
                  memory and transformation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="https://open.spotify.com/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Spotify
                    <ExternalLink size={16} />
                  </a>

                  <a href="https://www.youtube.com/@gradine_music" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
                    YouTube Music
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="group bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-zinc-600 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
                  alt="ИСКРИТ"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold">ИСКРИТ</h3>
                  <span className="text-zinc-500">Upcoming</span>
                </div>

                <p className="text-zinc-400 leading-7 mb-8">
                  Emotional amapiano / melodic EDM release with neon energy,
                  deep bass and awakening tension.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition-all duration-300">
                    Pre-save
                  </a>

                  <a href="#" className="px-5 py-3 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
                    TikTok
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">О проекте</h2>

          <p className="text-zinc-300 text-xl leading-10">
            GRADINE — это музыкальное пространство на стыке cinematic
            electronic, dark pop, ambient textures и эмоционального
            storytelling. Проект исследует темы внутреннего пробуждения,
            памяти, боли, трансформации и моментов, после которых человек
            уже не остаётся прежним.
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-900 px-6 py-12 text-center">
        <p className="text-zinc-500 mb-3">© GRADINE</p>
        <p className="text-zinc-700 text-sm tracking-[0.2em] uppercase">
          cinematic • emotional • electronic
        </p>
      </footer>
    </div>
  )
}

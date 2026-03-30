"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import { MoveRight, ArrowUpRight, BookOpen } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* ── 1. CINEMATIC HERO SECTION ── */}
        <section className="relative w-full h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Safe Real Photography Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
            style={{ backgroundImage: "url('/banner_image/islamic_bull.png')" }} 
          >
            {/* Deep gradient for white navbar and central title visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-[#0c1a12]"></div>
          </div>

          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mt-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-extrabold text-[12px] uppercase tracking-widest mb-6 backdrop-blur-md"
             >
               <BookOpen size={16} />
               Bilgi Dağarcığı
             </motion.div>
   
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className={`${outfit.className} text-[3rem] sm:text-5xl md:text-[5.5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-2xl`}
             >
               Blog & <span className="text-orange-500">Rehber</span>
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.2rem] leading-relaxed max-w-2xl mx-auto font-medium`}>
               Modern kurban hizmetleri, et işleme sanatı ve İstanbul'un en köklü kesim organizasyonu hakkında derinlemesine akademik ve güncel içerikler.
             </motion.p>
          </div>
        </section>

        {/* ── 2. FEATURED POST (With Overlap "Çıkıntı" Effect) ── */}
        <section className="relative z-20 -mt-20 sm:-mt-28 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100/50 overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Sol: Makale Kapağı */}
                <div className="relative aspect-[4/3] lg:aspect-auto h-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${featuredPost.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                  <div className="absolute top-6 left-6 inline-flex px-4 py-1.5 bg-orange-500 text-white font-bold text-[11px] rounded-full uppercase tracking-wider shadow-lg">
                    Editör'ün Seçimi
                  </div>
                </div>

                {/* Sağ: Makale Künyesi */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                  <span className={`${inter.className} text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block`}>
                    Öne Çıkan Makale
                  </span>
                  <h2 className={`${outfit.className} text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-[1.15] mb-6 group-hover:text-orange-500 transition-colors`}>
                    {featuredPost.title}
                  </h2>
                  <p className={`${inter.className} text-gray-600 text-[16px] sm:text-[1.1rem] leading-[1.7] mb-10`}>
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase text-[13px] tracking-wide">
                    Yazıyı İncele <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        </section>

        {/* ── 3. BLOG GRID ── */}
        <section className="py-10 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {otherPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full bg-white rounded-[2rem] border border-gray-100/60 shadow-lg shadow-gray-200/30 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                    
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${post.image}')` }}
                      />
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold text-gray-900 shadow-sm">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                      <span className={`${inter.className} text-gray-400 text-sm font-medium mb-3 block`}>{post.date}</span>
                      <h3 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight`}>
                        {post.title}
                      </h3>
                      <p className={`${inter.className} text-gray-600 text-[15px] leading-relaxed mb-8 flex-1`}>
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                        <span className={`${inter.className} text-[13px] font-bold text-gray-500`}>Çınar Kurban</span>
                        <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-900 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <MoveRight size={18} />
                        </div>
                      </div>
                    </div>

                  </Link>
                </motion.div>
              ))}
           </div>
        </section>

      </main>
  );
}

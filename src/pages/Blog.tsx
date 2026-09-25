import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, ArrowRight, BookOpen, ChevronRight, User } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Design', 'UI/UX Design', 'AI Video & Tech', 'Digital Marketing'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.categoryLabel === selectedCategory);

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-hidden pt-28 pb-20">
      {/* Top Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-4 pb-8 sm:pb-12">
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#60A5FA] text-xs font-poppins font-semibold tracking-[0.25em] uppercase mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>INSIGHTS & PERSPECTIVES</span>
              <span>•</span>
              <span>INNOWIZE DIGITAL</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-barlow text-white tracking-tight uppercase">
              The Digital Journal
            </h1>
          </div>
          <p className="text-white/70 text-xs sm:text-sm md:text-base font-poppins max-w-xl leading-relaxed">
            In-depth perspectives, technical breakdowns, and creative strategies covering web design, UI/UX architecture, generative AI video, and performance marketing.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 mt-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-poppins font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#2563FF] text-white shadow-[0_0_20px_rgba(37,99,255,0.45)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured / Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPosts.map((post: BlogPost, idx: number) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-3xl bg-[#0F1628] border border-white/10 hover:border-[#2563FF]/70 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(37,99,255,0.2)]"
            >
              <div className="p-6 sm:p-8">
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 text-[#60A5FA] text-[10px] font-poppins font-semibold uppercase tracking-wider">
                    {post.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white/50 font-poppins">
                    <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold font-barlow text-white tracking-wide uppercase group-hover:text-[#60A5FA] transition-colors leading-tight mb-3">
                  <Link to={`/blog/${post.category}/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm font-poppins text-white/70 leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              {/* Bottom Author & Action Bar */}
              <div className="px-6 sm:px-8 py-4 sm:py-5 border-t border-white/10 bg-[#090D18] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover border border-white/20"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-xs font-poppins font-medium text-white block">
                      {post.author.name}
                    </span>
                    <span className="text-[10px] font-poppins text-white/40 block">
                      {post.publishDate}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.category}/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-poppins font-bold text-[#2563FF] group-hover:text-[#60A5FA] uppercase tracking-wider transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Topics & Services Cross-Link Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20">
        <div className="rounded-3xl bg-[#0F1628] border border-white/10 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold font-barlow text-white uppercase mb-3">
            Looking for Hands-On Execution?
          </h2>
          <p className="text-xs sm:text-sm font-poppins text-white/60 max-w-lg mx-auto mb-6">
            We don't just write about modern web, AI, and design innovation—our studio builds and delivers high-performance digital products every day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/services/web-design"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#2563FF] text-white text-xs font-poppins font-medium transition-colors border border-white/10"
            >
              Web Design Services
            </Link>
            <Link
              to="/services/ui-ux-design"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#2563FF] text-white text-xs font-poppins font-medium transition-colors border border-white/10"
            >
              UI/UX Design
            </Link>
            <Link
              to="/services/ai-video"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#2563FF] text-white text-xs font-poppins font-medium transition-colors border border-white/10"
            >
              AI Video Production
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-xl bg-[#2563FF] hover:bg-[#1D4ED8] text-white text-xs font-poppins font-semibold transition-colors"
            >
              Talk to Our Team &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

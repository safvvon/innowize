import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, ArrowRight, Sparkles, Share2, Layers } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';
import { servicesData } from '../data/servicesData';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ category?: string; slug?: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#070A12] text-white flex flex-col items-center justify-center px-4 pt-28 pb-20">
        <h1 className="text-3xl sm:text-5xl font-bold font-barlow uppercase mb-4">Article Not Found</h1>
        <p className="text-white/60 font-poppins text-sm mb-6">The journal entry you requested does not exist or has been moved.</p>
        <Link
          to="/blog"
          className="px-6 py-3 rounded-xl bg-[#2563FF] text-white font-poppins text-xs font-semibold uppercase tracking-wider"
        >
          Back to Journal
        </Link>
      </div>
    );
  }

  const relatedService = servicesData.find((s) => s.id === post.relatedServiceId);
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-[#070A12] text-white overflow-hidden pt-24 sm:pt-28 pb-20">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-4">
        <ol className="flex items-center gap-2 text-xs sm:text-sm font-poppins text-white/50">
          <li>
            <Link to="/" className="hover:text-[#60A5FA] transition-colors">Home</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li>
            <Link to="/blog" className="hover:text-[#60A5FA] transition-colors">Journal</Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-[#60A5FA] font-medium truncate" aria-current="page">
            {post.categoryLabel}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-8 sm:pb-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-poppins text-white/60 hover:text-white mb-6 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#2563FF]" />
          <span>Back to All Articles</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 text-[#60A5FA] text-xs font-poppins font-semibold uppercase tracking-wider">
            {post.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-white/50 font-poppins">
            <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-barlow text-white uppercase tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-white/75 font-poppins leading-relaxed mb-8">
          {post.description}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between border-y border-white/10 py-4">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              width={44}
              height={44}
              className="w-11 h-11 rounded-full object-cover border border-white/20"
            />
            <div>
              <span className="text-sm font-poppins font-semibold text-white block">
                {post.author.name}
              </span>
              <span className="text-xs font-poppins text-[#60A5FA] block">
                {post.author.role} • Innowize Digital
              </span>
            </div>
          </div>
          <span className="text-xs font-poppins text-white/40">
            Published {post.publishDate}
          </span>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 font-poppins">
        <div className="space-y-10 sm:space-y-14">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-bold font-barlow text-white uppercase tracking-wide">
                {sec.sectionTitle}
              </h2>
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {para}
                </p>
              ))}
              {sec.keyTakeaway && (
                <aside className="rounded-2xl bg-[#0F1628] border-l-4 border-[#2563FF] p-5 sm:p-6 my-6 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#60A5FA] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#2563FF]" />
                    <span>Strategic Takeaway</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 font-medium italic leading-relaxed">
                    "{sec.keyTakeaway}"
                  </p>
                </aside>
              )}
            </section>
          ))}
        </div>

        {/* Related Service Feature Banner */}
        {relatedService && (
          <aside className="rounded-3xl bg-gradient-to-r from-[#0F1628] to-[#141C30] border border-white/15 p-6 sm:p-10 my-14 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider mb-1 block">
                Innowize Digital Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-barlow text-white uppercase">
                Explore Our {relatedService.title} Services
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-md mt-1">
                {relatedService.desc}
              </p>
            </div>
            <Link
              to={`/services/${relatedService.id}`}
              className="px-6 py-3.5 rounded-xl bg-[#2563FF] hover:bg-[#1D4ED8] text-white text-xs font-poppins font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 shadow-[0_4px_20px_rgba(37,99,255,0.45)] hover:scale-105 flex items-center gap-2"
            >
              <span>Explore Capability</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </aside>
        )}

        {/* Read Next Section */}
        {otherPosts.length > 0 && (
          <footer className="border-t border-white/10 pt-12 mt-12">
            <h3 className="text-lg font-bold font-barlow text-white uppercase tracking-wider mb-6">
              Continue Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((op) => (
                <Link
                  key={op.slug}
                  to={`/blog/${op.category}/${op.slug}`}
                  className="rounded-2xl bg-[#090E1B] border border-white/10 hover:border-[#2563FF] p-5 sm:p-6 transition-colors group block"
                >
                  <span className="text-[10px] font-poppins font-semibold text-[#60A5FA] uppercase tracking-wider block mb-2">
                    {op.categoryLabel}
                  </span>
                  <h4 className="text-base font-bold font-barlow text-white uppercase group-hover:text-[#60A5FA] transition-colors line-clamp-2 mb-2">
                    {op.title}
                  </h4>
                  <span className="text-xs text-[#2563FF] font-semibold flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </footer>
        )}
      </main>
    </article>
  );
};

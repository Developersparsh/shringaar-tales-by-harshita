import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles, Check } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="journal" className="py-16 lg:py-24 bg-[#F4EEE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728]">
            The Bridal Glow Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] font-normal tracking-tight">
            Beauty Tips & Bridal Secrets
          </h2>
          <p className="text-base text-[#5C4F48] leading-relaxed">
            Expert skincare regimens, makeup longevity hacks, and bridal vanity advice by Harshita Tiwari for brides-to-be.
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E9E0D1] hover:border-[#C5A059] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2C2420]">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Clean unboxed metadata with typographic separator */}
                  <div className="flex items-center gap-2 text-xs text-[#7A6A61]">
                    <span>{post.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>By Harshita</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#2C2420] group-hover:text-[#6B1728] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#5C4F48] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-[#F4EEE5] flex items-center justify-between text-xs font-semibold text-[#6B1728] group-hover:text-[#4A0D17]">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E9E0D1] max-h-[90vh] flex flex-col">
            
            {/* Header bar */}
            <div className="p-4 sm:p-6 border-b border-[#E9E0D1] flex items-center justify-between bg-white">
              <div className="flex items-center gap-2 text-xs text-[#7A6A61]">
                <span className="font-semibold text-[#6B1728]">{selectedPost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPost.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>Harshita Tiwari</span>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 text-[#7A6A61] hover:text-[#2C2420] rounded-full hover:bg-[#F4EEE5] transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2420] font-normal leading-tight">
                {selectedPost.title}
              </h2>

              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Prose Content */}
              <div className="text-sm sm:text-base text-[#4A3E39] leading-relaxed whitespace-pre-line space-y-4 font-normal">
                {selectedPost.content}
              </div>

              {/* Actionable Tips Box */}
              <div className="bg-white rounded-2xl p-6 border border-[#E9E0D1] shadow-sm space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#6B1728] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  Key Takeaways From Harshita:
                </h4>
                <ul className="space-y-2 text-xs text-[#5C4F48]">
                  {selectedPost.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-[#E9E0D1] flex items-center justify-between">
              <span className="text-xs text-[#7A6A61]">
                Need personalized skincare consultation? Call +91 8081520570
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 bg-[#6B1728] text-white text-xs font-semibold rounded-lg hover:bg-[#54101E]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

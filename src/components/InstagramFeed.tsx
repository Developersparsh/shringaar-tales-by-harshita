import React from 'react';
import { INSTAGRAM_POSTS } from '../data/mockData';
import { Instagram, Heart, MessageCircle, Play, ExternalLink, Sparkles } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const profileUrl = 'https://www.instagram.com/make_overharshita/';

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Instagram Profile Hook */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6B1728] flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              Social Engagement & Real Brides
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] font-normal tracking-tight">
              Latest Work on Instagram
            </h2>
            <p className="text-base text-[#5C4F48] max-w-xl">
              Behind the scenes, bridal transformations, tear-proof longevity tests, and client stories updated weekly.
            </p>
          </div>

          {/* Follow Button */}
          <div className="shrink-0">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @make_overharshita</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* Instagram Grid (6 Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#2C2420] border border-[#E9E0D1] shadow-sm block cursor-pointer"
            >
              <img
                src={post.thumbnail}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Reel Play Indicator */}
              {post.mediaType === 'reel' && (
                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm p-1.5 rounded-full text-white">
                  <Play className="w-3 h-3 fill-white" />
                </div>
              )}

              {/* Hover Dark Overlay with Engagement Numbers */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between text-white text-xs">
                <p className="text-[11px] line-clamp-3 text-white/90 leading-tight">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono tabular-nums pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#FF4D6D] text-[#FF4D6D]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Handle Banner */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#7A6A61]">
            Tag <span className="font-semibold text-[#6B1728]">#ShringaarTales</span> and <span className="font-semibold text-[#6B1728]">@make_overharshita</span> to get featured on our feed!
          </p>
        </div>

      </div>
    </section>
  );
};

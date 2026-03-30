"use client";

import styles from "./page.module.css";
import { blogPosts, BlogPost } from "@/data/blogData";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { MoveLeft, Calendar, User, Clock, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (totalScroll / windowHeight) * 100;
      setScrollWidth(scrollProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    notFound();
  }

  // Filter 2 other posts randomly for related section
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <article className={styles.articlePage}>
      
      {/* Scroll Progress Bar */}
      <div className={styles.progressBar} style={{ width: `${scrollWidth}%` }}></div>
      
      {/* Article Hero */}
      <section className={styles.hero}>
        <img src={post.image} alt={post.title} className={styles.heroImage} />
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <div className="container">
            <div className={styles.meta}>
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Article Content Area */}
      <div className="container">
        <div className={styles.articleBody}>
          
          <Link href="/blog" className={styles.backBtn}>
            <MoveLeft size={16} /> Blog Ana Sayfası
          </Link>

          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#64748b', alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {post.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <User size={14} /> Çınar Kurban
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <div 
            className={styles.content} 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className={styles.tagsRow}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>

          {/* Related Posts Section */}
          <section className={styles.relatedSection}>
            <h3 className={styles.relatedTitle}>Bunlar da İlginizi Çekebilir</h3>
            <div className={styles.relatedGrid}>
              {relatedPosts.map(rp => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className={styles.relatedCard}>
                  <img src={rp.image} alt={rp.title} className={styles.relatedImg} />
                  <div className={styles.relatedContent}>
                    <p style={{ color: 'var(--color-accent)', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {rp.category}
                    </p>
                    <h4>{rp.title}</h4>
                    <p>{rp.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

    </article>
  );
}

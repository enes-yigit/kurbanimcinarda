import styles from "./page.module.css";
import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MoveLeft, Calendar, User, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.articlePage}>
      
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
            <MoveLeft size={16} /> Tüm Yazılar
          </Link>

          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#64748b' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {post.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <User size={14} /> {post.author}
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

        </div>
      </div>

    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

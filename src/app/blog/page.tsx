import styles from "./page.module.css";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import { MoveRight, Clock, User } from "lucide-react";

export default function BlogPage() {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        
        <header className={styles.header}>
          <h1 className={styles.title}>Blog & Duyurular</h1>
          <p className={styles.description}>
            Kurban ibadeti, İslami kesim kuralları, beslenme ve et dinlendirme teknikleri hakkında merak ettikleriniz.
          </p>
        </header>

        <section className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.image} />
                <span className={styles.categoryTag}>{post.category}</span>
              </div>
              
              <div className={styles.cardBody}>
                <span className={styles.blogDate}>{post.date}</span>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.author}>
                    <User size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {post.author}
                  </div>
                  <div className={styles.readMore}>
                    Detaylı Oku <MoveRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}

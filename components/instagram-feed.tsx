import Image from "next/image";
import { BookmarkSimple, ChatCircle, Heart, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { instagramPosts } from "@/lib/instagram";

export function InstagramFeed() {
  return <div className="instagram-feed">{instagramPosts.map((post) => <a className="instagram-post reveal" href={post.href} target="_blank" rel="noreferrer" key={post.href} aria-label={`Abrir no Instagram: ${post.caption}`}><header><Image src="/images/instagram/profile.jpg" alt="" width={34} height={34} /><span><strong>oliveiraepaim</strong><small>Brasília, DF</small></span><InstagramLogo size={20} /></header><div className="instagram-post-media"><Image src={post.image} alt={post.alt} fill loading="eager" sizes="(max-width: 600px) 82vw, (max-width: 1000px) 44vw, 25vw" /></div><footer><div><Heart /><ChatCircle /><InstagramLogo /></div><BookmarkSimple /><p><strong>oliveiraepaim</strong> {post.caption}</p><span>Ver publicação no Instagram</span></footer></a>)}</div>;
}

import Image from "next/image";
import type { BlogPost } from "@/lib/content";

export function BlogImage({
  post,
  priority = false
}: {
  post: Pick<BlogPost, "image" | "imageAlt" | "title">;
  priority?: boolean;
}) {
  return (
    <figure className="blog-photo">
      <Image
        src={post.image}
        alt={post.imageAlt}
        width={1600}
        height={900}
        priority={priority}
        sizes="(max-width: 1080px) 100vw, 42vw"
      />
      <figcaption>{post.title}</figcaption>
    </figure>
  );
}

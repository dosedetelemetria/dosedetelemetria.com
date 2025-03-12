
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  featured?: boolean;
}

const BlogCard = ({ slug, title, excerpt, date, image, featured }: BlogCardProps) => {
  return (
    <div 
      className={cn(
        "group rounded-xl overflow-hidden bg-card border border-border/40 transition-all duration-300 h-full",
        featured ? "hover:scale-[1.02]" : "hover:scale-[1.01]"
      )}
    >
      <Link to={`/blog/${slug}`} className="flex flex-col h-full">
        {image && (
          <div className="relative overflow-hidden h-52">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-telemetria-darker/90 to-transparent" />
          </div>
        )}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-3">
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className={cn(
            "font-bold tracking-tight mb-3 group-hover:text-telemetria-yellow transition-colors line-clamp-2",
            featured ? "text-2xl" : "text-xl"
          )}>
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{excerpt}</p>
          <div className="mt-auto pt-2 flex items-center text-sm font-medium text-telemetria-yellow">
            <span>Ler mais</span>
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

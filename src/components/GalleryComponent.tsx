import "photoswipe/dist/photoswipe.css";
import classes from "./GalleryComponent.module.css";
import { Gallery } from "react-photoswipe-gallery";
import GalleryItem from "./GalleryItem";

interface GalleryProps {
  images: any;
}

export default function GalleryComponent({ images }: GalleryProps) {
  // Reverse the order of the images (from latests to oldest)
  const reversedImages = [...images].reverse();
  return (
    <div className={classes.gallery}>
      <Gallery>
        {reversedImages.map((image: any, index: number) => (
          <GalleryItem
            key={index}
            index={index}
            optimizedImages={image.frontmatter.optimizedImages}
            type={image.frontmatter.type}
            alt={image.frontmatter.alt}
            dimensions={image.frontmatter.dimensions}
            originalWidth={image.frontmatter.originalWidth}
            originalHeight={image.frontmatter.originalHeight}
            price={image.frontmatter.price}
          />
        ))}
      </Gallery>
    </div>
  );
}

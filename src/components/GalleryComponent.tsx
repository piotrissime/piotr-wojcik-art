import "photoswipe/dist/photoswipe.css";
import classes from "./GalleryComponent.module.css";
import { Gallery } from "react-photoswipe-gallery";
import GalleryItem from "./GalleryItem";
import Filters from "./Filters";
import { useState } from "react";

// TODO: bug found -> Filter to "colors" and swap some images ; some black and white images will show.

interface GalleryProps {
  images: any;
}

export default function GalleryComponent({ images }: GalleryProps) {
  // Reverse the order of the images (from latests to oldest)
  const reversedImages = [...images].reverse();
  const [filter, setFilter] = useState("tous");

  const filteredImages =
    filter === "tous"
      ? reversedImages
      : reversedImages.filter((image) => image.frontmatter.type === filter);

  return (
    <>
      <Filters setFilter={setFilter} filter={filter} />
      <div className={classes.gallery}>
        <Gallery>
          {filteredImages.map((image: any, index: number) => (
            <GalleryItem
              key={index}
              index={index}
              optimizedImagesThumbnail={
                image.frontmatter.optimizedImagesThumbnail
              }
              optimizedImagesFull={image.frontmatter.optimizedImagesFull}
              type={image.frontmatter.type}
              alt={image.frontmatter.alt}
              artWidth={image.frontmatter.artWidth}
              artHeight={image.frontmatter.artHeight}
              unit={image.frontmatter.unit}
              originalWidth={image.frontmatter.originalWidth}
              originalHeight={image.frontmatter.originalHeight}
              price={image.frontmatter.price}
              title={image.frontmatter.title}
              buyLink={image.frontmatter.buyLink}
            />
          ))}
        </Gallery>
      </div>
    </>
  );
}

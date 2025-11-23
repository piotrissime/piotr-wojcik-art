import { Item } from "react-photoswipe-gallery";
import classes from "./GalleryItem.module.css";
import OptimizedPicture from "./OptimizedPicture";

export interface GalleryItemProps {
  alt: string;
  type: string;
  index: number;
  dimensions?: string;
  originalWidth?: string;
  originalHeight?: string;
  price?: number;
  optimizedImages: {
    avif: string;
    webp: string;
    jpeg: string;
  };
}

export default function GalleryItem({
  alt,
  type,
  optimizedImages,
  index,
  dimensions,
  originalWidth,
  originalHeight,
  price,
}: GalleryItemProps) {
  return (
    <article className="gallery__item picture">
      <Item
        original={optimizedImages.jpeg}
        width={originalWidth}
        height={originalHeight}
        cropped
        thumbnail={optimizedImages.jpeg}
      >
        {({ ref, open }) => (
          <div className={classes["image-container"]} ref={ref} onClick={open}>
            <OptimizedPicture
              optimizedImages={optimizedImages}
              alt={alt}
              loading={index > 12 ? "lazy" : "eager"}
              className={type}
            />
          </div>
        )}
      </Item>
      <div className={classes["image-description"]}>
        <p className={classes.dimensions}>{dimensions}</p>
        <p className={classes.price}>{price && price + " €"}</p>
      </div>
    </article>
  );
}

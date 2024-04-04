import { Item } from "react-photoswipe-gallery";
import classes from './GalleryItem.module.css'

export interface GalleryItemProps {
  title?: string;
  imageSrc: any;
  alt: string;
  type: string;
  dimensions?: string;
  material?: string;
  releaseDate?: string;
  originalWidth?: string;
  originalHeight?: string;
  price?: number;
  srcJpegMedium?: string;
  srcAvifMedium?: string;
  srcWebpMedium?: string;
  index: number;
}

export default function GalleryItem({
  alt,
  type,
  srcJpegMedium,
  srcAvifMedium,
  srcWebpMedium,
  index,
  dimensions,
  originalWidth,
  originalHeight,
  price
}: GalleryItemProps) {
  return (
    <article className="gallery__item picture">
      <Item
        original={srcJpegMedium}
        width={originalWidth}
        height={originalHeight}
        cropped
        thumbnail={srcJpegMedium}
      >
        {({ ref, open }) => (
          <div
            className={classes['image-container']}
            ref={ref}
            onClick={open}
          >
            <picture className={type}>
              <source srcSet={srcAvifMedium} type="image/avif" />
              <source srcSet={srcWebpMedium} type="image/webp" />
              <source srcSet={srcJpegMedium} type="image/jpeg" />
              <img src={srcJpegMedium} alt={alt} loading={index > 12 ? "lazy" : "eager"} />
            </picture>
          </div>
        )}
      </Item>
      <div className={classes["image-description"]}>
        <p className={classes.dimensions}>{dimensions}</p>
        <p className={classes.price}>{price && price + " €"}</p>
      </div>
    </article>
  )
}

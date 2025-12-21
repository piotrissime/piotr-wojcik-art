import { Item } from "react-photoswipe-gallery";
import classes from "./GalleryItem.module.css";
import OptimizedPicture from "./OptimizedPicture";

export interface GalleryItemProps {
  alt: string;
  type: string;
  index: number;
  artWidth?: number;
  artHeight?: number;
  unit?: string;
  originalWidth?: string;
  originalHeight?: string;
  price?: number;
  title?: string;
  buyLink?: string;
  optimizedImagesThumbnail: {
    avif: string;
    webp: string;
    jpeg: string;
  };
  optimizedImagesFull: {
    avif: string;
    webp: string;
    jpeg: string;
  };
}

export default function GalleryItem({
  alt,
  type,
  optimizedImagesThumbnail,
  optimizedImagesFull,
  index,
  artWidth,
  artHeight,
  unit,
  originalWidth,
  originalHeight,
  price,
  title,
  buyLink,
}: GalleryItemProps) {
  function formatNumber(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <article className={classes["gallery-item"]}>
      <Item
        original={optimizedImagesFull.jpeg}
        width={originalWidth}
        height={originalHeight}
        cropped
        thumbnail={optimizedImagesThumbnail.jpeg}
      >
        {({ ref, open }) => (
          <div className={classes["image-container"]} ref={ref} onClick={open}>
            <OptimizedPicture
              optimizedImages={optimizedImagesThumbnail}
              alt={alt}
              loading={index > 12 ? "lazy" : "eager"}
              className={type}
            />
          </div>
        )}
      </Item>
      <div className={classes["image-description"]}>
        {title && <h2 className={classes.title}>{title}</h2>}
        <div className={classes["dimensions-price"]}>
          {artWidth && artHeight && (
            <p className={`${classes.dimensions} ${price ? "" : "ml-auto"}`}>
              {artWidth} × {artHeight} {unit}
            </p>
          )}
          {price && (
            <p className={classes.price}>
              {price && formatNumber(price) + " €"}
            </p>
          )}
        </div>

        {buyLink && (
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 w-full"
          >
            Acheter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-external-link ml-2 h-4 w-4"
            >
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

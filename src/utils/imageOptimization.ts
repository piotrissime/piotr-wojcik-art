import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

export async function optimizeImages(images: any[]) {
  const imageModules = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/images/**/*.{jpg,jpeg,png,gif,webp}",
    { eager: true }
  );

  return Promise.all(
    images.map(async (image) => {
      if (!image.frontmatter?.imgSrc) {
        console.warn(`Missing imgSrc for: ${image.file}`);
        return image;
      }

      try {
        const fullPath = `/${image.frontmatter.imgSrc}`;
        const coverImage = imageModules[fullPath]?.default;

        if (!coverImage) {
          console.warn(`Image not found: ${fullPath}`);
          return image;
        }

        // Thumbnail size
        const thumbnailWidth = Math.min(coverImage.width, 600);

        const thumbnailAvif = await getImage({
          src: coverImage,
          format: "avif",
          width: thumbnailWidth,
        });

        const thumbnailWebp = await getImage({
          src: coverImage,
          format: "webp",
          width: thumbnailWidth,
        });

        const thumbnailJpeg = await getImage({
          src: coverImage,
          format: "jpeg",
          width: thumbnailWidth,
        });

        // Full resolution - use original width, or 1600px if larger
        const fullWidth = Math.min(coverImage.width, 1600);

        const fullAvif = await getImage({
          src: coverImage,
          format: "avif",
          width: fullWidth,
        });

        const fullWebp = await getImage({
          src: coverImage,
          format: "webp",
          width: fullWidth,
        });

        const fullJpeg = await getImage({
          src: coverImage,
          format: "jpeg",
          width: fullWidth,
        });

        return {
          ...image,
          frontmatter: {
            ...image.frontmatter,
            optimizedImagesThumbnail: {
              avif: thumbnailAvif.src,
              webp: thumbnailWebp.src,
              jpeg: thumbnailJpeg.src,
            },
            optimizedImagesFull: {
              avif: fullAvif.src,
              webp: fullWebp.src,
              jpeg: fullJpeg.src,
            },
            originalWidth: coverImage.width,
            originalHeight: coverImage.height,
          },
        };
      } catch (err) {
        console.error(
          `Failed to optimize image ${image.frontmatter.imgSrc}:`,
          err
        );
        return image;
      }
    })
  );
}

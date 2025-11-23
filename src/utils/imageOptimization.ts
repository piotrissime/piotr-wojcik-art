// src/utils/imageOptimization.ts
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

        const optimizedAvif = await getImage({
          src: coverImage,
          format: "avif",
          width: 600,
        });

        const optimizedWebp = await getImage({
          src: coverImage,
          format: "webp",
          width: 600,
        });

        const optimizedJpeg = await getImage({
          src: coverImage,
          format: "jpeg",
          width: 600,
        });

        return {
          ...image,
          frontmatter: {
            ...image.frontmatter,
            optimizedImages: {
              avif: optimizedAvif.src,
              webp: optimizedWebp.src,
              jpeg: optimizedJpeg.src,
            },
            // Extract original dimensions from the image metadata
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

interface OptimizedPictureProps {
  optimizedImages: {
    avif: string;
    webp: string;
    jpeg: string;
  };
  alt: string;
  loading?: "lazy" | "eager";
  className?: string;
}

export default function OptimizedPicture({
  optimizedImages,
  alt,
  loading = "lazy",
  className,
}: OptimizedPictureProps) {
  return (
    <picture className={className}>
      <source srcSet={optimizedImages.avif} type="image/avif" />
      <source srcSet={optimizedImages.webp} type="image/webp" />
      <source srcSet={optimizedImages.jpeg} type="image/jpeg" />
      <img src={optimizedImages.jpeg} alt={alt} loading={loading} />
    </picture>
  );
}

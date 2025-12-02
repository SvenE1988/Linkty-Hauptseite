export const optimizeUnsplashUrl = (
  url: string,
  width = 800,
  quality = 60
): string => {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('w', width.toString());
    urlObj.searchParams.set('q', quality.toString());
    urlObj.searchParams.set('auto', 'format');
    urlObj.searchParams.set('fit', 'crop');
    urlObj.searchParams.set('dpr', '2');
    return urlObj.toString();
  } catch (error) {
    console.error('Invalid URL provided to optimizeUnsplashUrl:', url);
    return url;
  }
};

export const getResponsiveImageProps = (
  src: string,
  alt: string,
  eager = false
) => ({
  src: optimizeUnsplashUrl(src),
  alt,
  loading: (eager ? 'eager' : 'lazy') as 'eager' | 'lazy',
  decoding: 'async' as const,
});

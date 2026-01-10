import { useEffect } from 'react';

interface MetaData {
  title: string;
  description?: string;
  ogImage?: string;
}

/**
 * Hook to manage document title and meta tags dynamically.
 * Helps with SEO and social sharing for SPA routes.
 */
export const useMetaData = ({ title, description, ogImage }: MetaData) => {
  useEffect(() => {
    // 1. Update Title
    const previousTitle = document.title;
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const previousDescription = metaDescription.getAttribute('content');
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // 3. Update OG Tags (Basic implementation)
    // In a real production app with SSR/SSG, these should be set on the server.
    // For SPA, this helps with some crawlers that execute JS.
    const updateMetaTag = (property: string, content?: string) => {
      if (!content) return null;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      const prevContent = tag.getAttribute('content');
      tag.setAttribute('content', content);
      return prevContent;
    };

    const prevOgTitle = updateMetaTag('og:title', title);
    const prevOgDesc = updateMetaTag('og:description', description);
    const prevOgImage = updateMetaTag('og:image', ogImage);

    // Cleanup: Restore previous values when component unmounts
    return () => {
      document.title = previousTitle;
      if (previousDescription) metaDescription?.setAttribute('content', previousDescription);
      if (prevOgTitle) updateMetaTag('og:title', prevOgTitle);
      if (prevOgDesc) updateMetaTag('og:description', prevOgDesc);
      if (prevOgImage) updateMetaTag('og:image', prevOgImage);
    };
  }, [title, description, ogImage]);
};
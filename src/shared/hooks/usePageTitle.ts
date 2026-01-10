import { useMetaData } from './useMetaData';

/**
 * @deprecated Use useMetaData for better SEO control (Title + Description)
 */
export const usePageTitle = (title: string) => {
  useMetaData({ title });
};

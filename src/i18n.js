
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'bn', 'hi', 'ar', 'cn'];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
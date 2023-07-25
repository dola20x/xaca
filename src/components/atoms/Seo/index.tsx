import React from 'react';

import { Helmet } from 'react-helmet-async';

import { URL_ENDPOINT, getEndPoint } from '~/utils/enums';
import './index.scss';

interface ISeoProps {
  title?: string;
  description?: string;
  siteName?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

const Seo: React.FC<ISeoProps> = ({
  title,
  description,
  siteName,
  canonical,
  ogImage,
  ogType,
  twitterHandle
}) => {
  return (
    <Helmet>
      <title key='title'>{`${title} – ${siteName}`}</title>
      <meta name='description' content={description} />
      <meta key='og_type' property='og:type' content={ogType} />
      <meta key='og_title' property='og:title' content={title} />
      <meta key='og_description' property='og:description' content={description} />
      <meta key='og_locale' property='og:locale' content='en_IE' />
      <meta key='og_site_name' property='og:site_name' content={siteName} />
      <meta key='og_url' property='og:url' content={canonical} />
      <meta key='og_site_name' property='og:site_name' content={siteName} />
      <meta key='og_image' property='og:image' content={ogImage} />
      <meta key='og_image:alt' property='og:image:alt' content={`${title} | ${siteName}`} />
      <meta key='og_image:width' property='og:image:width' content='1200' />
      <meta key='og_image:height' property='og:image:height' content='630' />
      <meta name='robots' content='index,follow' />
      <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
      <meta key='twitter:site' name='twitter:site' content={twitterHandle} />
      <meta key='twitter:creator' name='twitter:creator' content={twitterHandle} />
      <meta key='twitter:title' property='twitter:title' content={title} />
      <meta key='twitter:description' property='twitter:description' content={description} />
      <link rel='canonical' href={canonical} />
      <link rel='shortcut icon' href='/favicon.ico' />
    </Helmet>
  );
};

Seo.defaultProps = {
  title: 'Example React title',
  description: 'Example React description',
  siteName: 'Example React',
  canonical: getEndPoint(URL_ENDPOINT.CLIENT),
  ogImage: getEndPoint(URL_ENDPOINT.SERVER),
  ogType: 'website',
  twitterHandle: '@d__raptis'
};

export default Seo;

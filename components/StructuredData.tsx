/**
 * 结构化数据组件 - 用于 SEO 优化
 * 支持 Article、Product、AggregateRating 等 Schema.org 标准
 */

interface ArticleSchema {
  type: 'article';
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
  imageUrl?: string;
}

interface ProductSchema {
  type: 'product';
  name: string;
  description: string;
  brand?: string;
  price?: number;
  priceCurrency?: string;
  ratingValue?: number;
  reviewCount?: number;
  url: string;
}

type StructuredDataProps = ArticleSchema | ProductSchema;

export default function StructuredData(props: StructuredDataProps) {
  let schema: any;

  if (props.type === 'article') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.title,
      description: props.description,
      author: {
        '@type': 'Person',
        name: props.author,
      },
      datePublished: props.datePublished,
      dateModified: props.dateModified,
      url: props.url,
      publisher: {
        '@type': 'Organization',
        name: 'OUTSIDEWEB',
        logo: {
          '@type': 'ImageObject',
          url: 'https://outsideweb.net/logo.png',
        },
      },
    };

    if (props.imageUrl) {
      schema.image = props.imageUrl;
    }
  } else if (props.type === 'product') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: props.name,
      description: props.description,
      url: props.url,
    };

    if (props.brand) {
      schema.brand = {
        '@type': 'Brand',
        name: props.brand,
      };
    }

    if (props.price && props.priceCurrency) {
      schema.offers = {
        '@type': 'Offer',
        price: props.price,
        priceCurrency: props.priceCurrency,
        availability: 'https://schema.org/InStock',
      };
    }

    if (props.ratingValue && props.reviewCount) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: props.ratingValue,
        reviewCount: props.reviewCount,
        bestRating: 10,
        worstRating: 0,
      };
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

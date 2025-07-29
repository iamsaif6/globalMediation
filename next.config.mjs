/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'complete-addition-236de36f0b.media.strapiapp.com', 'lovable-fireworks-b08e821c72.media.strapiapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/business',
        destination: '/services/Business-and-Commercial-Mediation',
        permanent: true,
      },
      {
        source: '/service_categories/business',
        destination: '/services/Business-and-Commercial-Mediation',
        permanent: true,
      },
      {
        source: '/family',
        destination: '/services/family-mediation',
        permanent: true,
      },
      {
        source: '/service_categories/family',
        destination: '/services/family-mediation',
        permanent: true,
      },
      {
        source: '/commercial',
        destination: '/services/Business-and-Commercial-Mediation',
        permanent: true,
      },
      {
        source: '/service_categories/commercial',
        destination: '/services/Business-and-Commercial-Mediation',
        permanent: true,
      },
      {
        source: '/civil',
        destination: '/services/Civil-and-Legal-Dispute-Mediation',
        permanent: true,
      },
      {
        source: '/service_categories/civil',
        destination: '/services/Civil-and-Legal-Dispute-Mediation',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/privacy-statement',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/dars-csq',
        destination: '/dars',
        permanent: true,
      },
      {
        source: '/csq',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/what-is-mediation',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/blog-news',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/category/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/category/news',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/trainner/samihah-riaz',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/adrian-wilson',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/rebecca-hayward',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/laurence-cobb',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/karen-heenan',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/emma-gersch',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/prof-irvine-gersch',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/polly-walker',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/martha-monday',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/trainner/jeremy-connell',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/service/dars',
        destination: '/dars',
        permanent: true,
      },
      {
        source: '/complaints-comments-compliments-policy',
        destination: '/complaints-comments-compliments-policy-2015',
        permanent: true,
      },
      {
        source: '/sendtrainingcourse',
        destination: '/training',
        permanent: true,
      },
      {
        source: '/service/family-divorce',
        destination: '/services/family-mediation',
        permanent: true,
      },
      {
        source: '/service/business-commercial-contracts',
        destination: '/services/Business-and-Commercial-Mediation',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

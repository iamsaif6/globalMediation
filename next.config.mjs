/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'complete-addition-236de36f0b.media.strapiapp.com', 'lovable-fireworks-b08e821c72.media.strapiapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/service_categories/property',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service_categories/other-areas',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service_categories/family',
        destination: '/family-mediation',
        permanent: true,
      },
      {
        source: '/service_categories/education',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service_categories/commercial',
        destination: '/business',
        permanent: true,
      },
      {
        source: '/service_categories/civil',
        destination: '/services/Civil-and-Legal-Dispute-Mediation',
        permanent: true,
      },
      {
        source: '/service_categories/business',
        destination: '/business',
        permanent: true,
      },
      {
        source: '/category/news',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/category/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/service/special-educational-needs-disability',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/mediation-information-assessment-meeting-miam',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/miam',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/dars',
        destination: '/dars',
        permanent: true,
      },
      {
        source: '/service/building-construction',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/property',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/health-safety',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/family-divorce',
        destination: '/family-mediation',
        permanent: true,
      },
      {
        source: '/service/public-sector-local-authorities',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/restorative-justice',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/boundary-disputes',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/fraud-money-laundering',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/defamation',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/copyright',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/insolvency',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/intellectual-property',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/it-data-protection',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/partnership-shareholder',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/actions-against-police',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/consumer-issues',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/clinical-negligence',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/discrimination',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/goods-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/judicial-review',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/personal-injury',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/professional-negligence',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/business-commercial-contracts',
        destination: '/business',
        permanent: true,
      },
      {
        source: '/service/finance-banking-hmrc',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/insurance-reinsurance',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/tax-trusts',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/education',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/landlord-tenant',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/charity-third-sector',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/environmental',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/faith-communities',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service/international',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/trainner/:slug',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/2020/01/can-my-child-have-a-voice-in-family-mediation',
        destination: '/blogs/blog/can-my-child-have-a-voice-in-family-mediation',
        permanent: true,
      },
      {
        source: '/2020/01/family-mediation-conversations-worth-having',
        destination: '/blogs/blog/family-mediation-conversations-worth-having',
        permanent: true,
      },
      {
        source: '/2018/09/using-mediation-to-resolve-clinical-negligence',
        destination: '/blogs/blog/using-mediation-to-resolve-clinical-negligence',
        permanent: true,
      },
      {
        source: '/2013/07/government-withdraws-statutory-guidance-home-school-transport',
        destination: '/blogs/blog/government-withdraws-statutory-guidance-home-school-transport',
        permanent: true,
      },
      {
        source: '/2017/04/saving-costs',
        destination: '/blogs/blog/saving-costs',
        permanent: true,
      },
      {
        source: '/2013/10/prepare-present-case-mediation-session',
        destination: '/blogs/blog/prepare-present-case-mediation-session',
        permanent: true,
      },
      {
        source: '/2013/06/802',
        destination: '/blogs/blog/802',
        permanent: true,
      },
      {
        source: '/2013/03/fun-facts-global-mediation',
        destination: '/blogs/blog/fun-facts-global-mediation',
        permanent: true,
      },
      {
        source: '/2012/10/the-power-of-apology',
        destination: '/blogs/blog/the-power-of-apology',
        permanent: true,
      },
      {
        source: '/2013/05/wish-second-chance-say-mean',
        destination: '/blogs/blog/wish-second-chance-say-mean',
        permanent: true,
      },
      {
        source: '/2013/10/bullying-in-the-workplace',
        destination: '/blogs/blog/bullying-in-the-workplace',
        permanent: true,
      },
      {
        source: '/2013/11/court-appeal-confirms-mediation-flexible-process',
        destination: '/blogs/blog/court-appeal-confirms-mediation-flexible-process',
        permanent: true,
      },
      {
        source: '/2014/01/cuts-legal-aid-family-mediation',
        destination: '/blogs/blog/cuts-legal-aid-family-mediation',
        permanent: true,
      },
      {
        source: '/2014/01/barristers-strike',
        destination: '/blogs/blog/barristers-strike',
        permanent: true,
      },
      {
        source: '/2014/02/importance-authority-settle-mediation',
        destination: '/blogs/blog/importance-authority-settle-mediation',
        permanent: true,
      },
      {
        source: '/2014/02/family-law-crisis-call-mediator',
        destination: '/blogs/blog/family-law-crisis-call-mediator',
        permanent: true,
      },
      {
        source: '/2014/03/mediation-case-documents-never-accept-originals',
        destination: '/blogs/blog/mediation-case-documents-never-accept-originals',
        permanent: true,
      },
      {
        source: '/2014/03/changes-legal-aid-affect-families-undergoing-separation',
        destination: '/blogs/blog/changes-legal-aid-affect-families-undergoing-separation',
        permanent: true,
      },
      {
        source: '/2014/04/mediation-is-a-science',
        destination: '/blogs/blog/mediation-is-a-science',
        permanent: true,
      },
      {
        source: '/2014/04/mediation-market-place',
        destination: '/blogs/blog/mediation-market-place',
        permanent: true,
      },
      {
        source: '/2014/05/unlocking-deadlocks-mediation',
        destination: '/blogs/blog/unlocking-deadlocks-mediation',
        permanent: true,
      },
      {
        source: '/2014/06/why-i-became-a-mediator',
        destination: '/blogs/blog/why-i-became-a-mediator',
        permanent: true,
      },
      {
        source: '/2014/07/special-educational-needs-mediation',
        destination: '/blogs/blog/special-educational-needs-mediation',
        permanent: true,
      },
      {
        source: '/2014/07/a-year-on',
        destination: '/blogs/blog/a-year-on',
        permanent: true,
      },
      {
        source: '/2014/09/wheres-magic-mediation',
        destination: '/blogs/blog/wheres-magic-mediation',
        permanent: true,
      },
      {
        source: '/2015/08/top-ten-tips-people-attending-mediations',
        destination: '/blogs/blog/top-ten-tips-people-attending-mediations',
        permanent: true,
      },
      {
        source: '/2011/10/kenneth-clarke-uk-lawyer-adviser-world',
        destination: '/blogs/blog/kenneth-clarke-uk-lawyer-adviser-world',
        permanent: true,
      },
      {
        source: '/2015/10/negotiation',
        destination: '/blogs/blog/negotiation',
        permanent: true,
      },
      {
        source: '/2015/11/setting-them-up-to-fail',
        destination: '/blogs/blog/setting-them-up-to-fail',
        permanent: true,
      },
      {
        source: '/2015/11/try-shoes-not-digital-profile',
        destination: '/blogs/blog/try-shoes-not-digital-profile',
        permanent: true,
      },
      {
        source: '/2014/04/say-youve-said-hello',
        destination: "/blogs/blog/say-you've-said-hello",
        permanent: true,
      },
      {
        source: '/2016/07/active-listening',
        destination: '/blogs/blog/active-listening',
        permanent: true,
      },
      {
        source: '/2016/08/building-bridges',
        destination: '/blogs/blog/building-bridges',
        permanent: true,
      },
      {
        source: '/2016/12/can-mediators-dress-success',
        destination: '/blogs/blog/can-mediators-dress-success',
        permanent: true,
      },
      {
        source: '/2017/03/mediation-refreshes-parts',
        destination: '/blogs/blog/mediation-refreshes-parts',
        permanent: true,
      },
      {
        source: '/2017/03/pre-emptive-strike',
        destination: '/blogs/blog/pre-emptive-strike',
        permanent: true,
      },
      {
        source: '/blog-news',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/mediationfoundationcourse',
        destination: '/training',
        permanent: true,
      },
      {
        source: '/sendtrainingcourse',
        destination: '/training',
        permanent: true,
      },
      {
        source: '/complaints-comments-compliments-policy',
        destination: '/complaints-comments-compliments-policy-2015',
        permanent: true,
      },
      {
        source: '/general-mediation-professional-practice',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/mediation-observation-package',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/send-mediation-professional-practice-area',
        destination: '/services/send-mediation',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/opportunities-with-global-mediation',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/service-special-educational-needs-disability',
        destination: '/services/send-mediation',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/send-training-course-eval-form',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/dars-facilitator-evaluation-form',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/mediator-evaluation-form',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/diversity-mon-form',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/dars-csq',
        destination: '/dars',
        permanent: true,
      },
      {
        source: '/data-protection-policy',
        destination: '/data-protection-policy',
        permanent: true,
      },
      {
        source: '/privacy-statement',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/why-choose-mediation',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/csq',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/online-booking',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/what-is-mediation',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/work-for-us',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/civil',
        destination: '/services/Civil-and-Legal-Dispute-Mediation',
        permanent: true,
      },
      {
        source: '/commercial-mediation',
        destination: '/business',
        permanent: true,
      },
      {
        source: '/commercial',
        destination: '/business',
        permanent: true,
      },
      {
        source: '/family',
        destination: '/family-mediation',
        permanent: true,
      },
      {
        source: '/business',
        destination: '/business',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

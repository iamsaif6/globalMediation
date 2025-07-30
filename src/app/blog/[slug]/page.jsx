import Header from '@/components/shared/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import CTA from '@/components/shared/CTA';
import { fetchArticleBySlug, fetchArticles, fetchAuthors } from '@/utils/api';
import { notFound } from 'next/navigation';
import BLockWrapper from '@/components/blocks/BlockWrapper';
import CopyButton from '@/components/blog/CopyButton';
import LinkedinBtn from '@/components/blog/LinkedinBtn';
import TwitterBtn from '@/components/blog/TwitterBtn';
import FacebookBtn from '@/components/blog/FacebookBtn';

export async function generateMetadata({ params }) {
  const article = await fetchArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article?.title,
    description: article?.description,
  };
}

const articles = await fetchArticles();
const articleData = articles?.data?.slice(0, 3) || [];

const SingleBlogPost = async ({ params }) => {
  const article = await fetchArticleBySlug(params.slug);
  const authors = await fetchAuthors();
  const authorsPhoto = authors?.data?.find(item => item.email == article?.author?.email)?.avatar?.url;
  if (!article) {
    notFound();
  }

  return (
    <div>
      <Header
        title={'Can my child have a voice in Family Mediation'}
        subTitle={'Direct users to reach out for consultations or general inquiries'}
      />

      <section className="py-16 px-5 md:py-[80px] md:px-[144px]">
        <div className="flex flex-col md:flex-row mb-[68px] gap-6 md:items-center justify-between">
          <div className=" text-base font-normal flex items-center gap-2">
            <Link className="text-secondary" href={'/blog'}>
              Blogs
            </Link>
            {article?.category?.name && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#43006A" strokeWidth="1.5" />
              </svg>
            )}
            {article?.category?.name && <span>{article?.category?.name}</span>}
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <CopyButton />
            </li>
            <li>
              <LinkedinBtn />
            </li>
            <li>
              <TwitterBtn />
            </li>
            <li>
              <FacebookBtn />
            </li>
          </ul>
        </div>
        <article className="md:text-lg text-base leading-[150%]">
          <h2 className="md:text-[40px] text-4xl font-medium md:font-semibold mb-5 md:mb-8">{article.title}</h2>
          <p>{article?.description}</p>
          {article.cover && (
            <figure className="h-[370px] rounded-xl md:h-[630px] py-10 mb-10 ">
              {(article?.cover?.formats?.large?.url && (
                <Image
                  width={article?.cover.width}
                  height={article?.cover.height}
                  className="w-full rounded-xl h-full max-h-[630px] object-cover"
                  alt={article?.cover?.alternativeText}
                  src={`${article?.cover?.formats?.large?.url || article?.cover?.formats?.medium?.url}`}
                />
              )) ||
                (article?.cover?.formats?.medium?.url && (
                  <Image
                    width={article?.cover.width}
                    height={article?.cover.height}
                    className="w-full rounded-xl h-full max-h-[630px] object-cover"
                    alt={article?.cover?.alternativeText}
                    src={`${article?.cover?.formats?.medium?.url}`}
                  />
                )) ||
                (article?.cover?.formats?.small?.url && (
                  <Image
                    width={article?.cover.width}
                    height={article?.cover.height}
                    className="w-full rounded-xl h-full max-h-[630px] object-cover"
                    alt={article?.cover?.alternativeText}
                    src={`${article?.cover?.formats?.small?.url}`}
                  />
                ))}
              {article?.cover?.caption && <figcaption className="mt-4 text-sm pl-2 border-l-2">{article?.cover?.caption}</figcaption>}
            </figure>
          )}
          <BLockWrapper article={article} />
          <div className="flex pb-8 border-b-[0.5px] border-secondary mb-8 items-center flex-col mt-8">
            <p className="font-semibold text-lg mb-4">Share this post</p>

            <ul className="flex items-center gap-2">
              <li title="Copy">
                <CopyButton />
              </li>
              <li>
                <LinkedinBtn />
              </li>
              <li>
                <TwitterBtn />
              </li>
              <li>
                <FacebookBtn />
              </li>
            </ul>
            <ul className=" text-secondary flex items-center gap-2 text-sm  font-normal">
              {article?.tags?.map(item => (
                <li key={item.id} className="px-3 py-1 bg-[#F3F1FF] rounded-xl">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center flex-col">
            {authorsPhoto ? (
              <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <Image width={100} height={100} alt="user name" className="w-full h-full object-cover" src={authorsPhoto} />
              </div>
            ) : (
              <div className="w-12 flex items-center justify-center font-bold text-2xl text-gray-600 h-12 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <p>{article?.author?.name[0]}</p>
              </div>
            )}
            <p className="text-sm font-semibold">{article?.author?.name || 'Unknown'}</p>
            <p className="text-sm ">
              {article?.author?.job_title}
              {article?.author?.company && ','} {article?.author?.company}
            </p>
          </div>
        </article>
      </section>
      {/* Related Post */}
      <section className="py-16 px-5 md:py-[30px] md:px-[64px]">
        <SectionHeading center={true} title={'Related Posts'} subTitle={''} />
        <div className="grid my-12 md:my-[80px] grid-cols-3 gap-8">
          {articleData?.map(item => (
            <div key={item} className="col-span-4  lg:col-span-1 mb-[48px] md:mb-[60px]">
              <div className="w-full min-h-[300px] overflow-hidden max-h-[290px] bg-gray-600 rounded-xl">
                {item?.cover?.formats?.small?.url && (
                  <Image
                    className="h-full w-full object-cover"
                    alt={item.title}
                    width={400}
                    height={400}
                    src={`${item?.cover?.formats?.small?.url}`}
                  />
                )}
              </div>
              <h3 className={`text-black leading-[140%] mt-6 md:mt-6 mb-4 text-lg md:text-[24px] font-semibold `}>{item?.title}</h3>
              <Link
                href={`/blog/${item?.slug || item.id}`}
                className="flex w-max pb-1 border-b border-secondary  gap-1 items-center text-secondary font-medium text-sm"
              >
                <span>Read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12.646 6.64604C12.6924 6.59948 12.7476 6.56253 12.8084 6.53733C12.8691 6.51212 12.9342 6.49915 13 6.49915C13.0658 6.49915 13.1309 6.51212 13.1916 6.53733C13.2524 6.56253 13.3076 6.59948 13.354 6.64604L18.354 11.646C18.4006 11.6925 18.4375 11.7477 18.4627 11.8084C18.4879 11.8692 18.5009 11.9343 18.5009 12C18.5009 12.0658 18.4879 12.1309 18.4627 12.1917C18.4375 12.2524 18.4006 12.3076 18.354 12.354L13.354 17.354C13.2601 17.4479 13.1328 17.5007 13 17.5007C12.8672 17.5007 12.7399 17.4479 12.646 17.354C12.5521 17.2602 12.4994 17.1328 12.4994 17C12.4994 16.8673 12.5521 16.7399 12.646 16.646L16.793 12.5H6C5.86739 12.5 5.74021 12.4474 5.64645 12.3536C5.55268 12.2598 5.5 12.1326 5.5 12C5.5 11.8674 5.55268 11.7403 5.64645 11.6465C5.74021 11.5527 5.86739 11.5 6 11.5H16.793L12.646 7.35404C12.5994 7.30759 12.5625 7.25242 12.5373 7.19167C12.5121 7.13093 12.4991 7.06581 12.4991 7.00004C12.4991 6.93427 12.5121 6.86915 12.5373 6.80841C12.5625 6.74766 12.5994 6.69248 12.646 6.64604Z"
                    fill="#43006A"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'/contact'}
        Button1Text={'Enrol in a mediation training program today'}
        Button2Link={'/contact'}
        Button2Text={'Contact us for upcoming course dates'}
      />
    </div>
  );
};

export default SingleBlogPost;

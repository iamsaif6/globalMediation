import Header from '@/components/shared/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import demoImg from '/public/Placeholder Image.png';
import user from '/public/Placeholder Image 2.png';
import SectionHeading from '@/components/shared/SectionHeading';
import Button from '@/components/shared/Button';
import CTA from '@/components/shared/CTA';

const SingleBlogPost = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <Header
        title={'Can my child have a voice in Family Mediation'}
        subTitle={'Direct users to reach out for consultations or general inquiries'}
      />
      {/* Top bar */}
      <section className="py-16 px-5 md:py-[80px] md:px-[144px]">
        <div className="flex flex-col md:flex-row mb-[68px] gap-6 md:items-center justify-between">
          <div className=" text-base font-normal flex items-center gap-2">
            <Link className="text-secondary" href={'/blog'}>
              Blog
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="#43006A" strokeWidth="1.5" />
            </svg>
            <span>Category</span>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.22172 19.778C4.68559 20.2425 5.23669 20.6108 5.84334 20.8617C6.44999 21.1126 7.10023 21.2411 7.75672 21.24C8.41335 21.2411 9.06374 21.1125 9.67054 20.8617C10.2774 20.6108 10.8286 20.2425 11.2927 19.778L14.1207 16.949L12.7067 15.535L9.87872 18.364C9.31519 18.925 8.55239 19.2399 7.75722 19.2399C6.96205 19.2399 6.19925 18.925 5.63572 18.364C5.07422 17.8007 4.75892 17.0378 4.75892 16.2425C4.75892 15.4471 5.07422 14.6842 5.63572 14.121L8.46472 11.293L7.05072 9.87896L4.22172 12.707C3.28552 13.6454 2.75977 14.9169 2.75977 16.2425C2.75977 17.568 3.28552 18.8395 4.22172 19.778ZM19.7777 11.293C20.7134 10.3542 21.2388 9.08288 21.2388 7.75746C21.2388 6.43204 20.7134 5.16068 19.7777 4.22196C18.8393 3.28577 17.5678 2.76001 16.2422 2.76001C14.9166 2.76001 13.6452 3.28577 12.7067 4.22196L9.87872 7.05096L11.2927 8.46496L14.1207 5.63596C14.6842 5.07495 15.447 4.75999 16.2422 4.75999C17.0374 4.75999 17.8002 5.07495 18.3637 5.63596C18.9252 6.19923 19.2405 6.96213 19.2405 7.75746C19.2405 8.55279 18.9252 9.31569 18.3637 9.87896L15.5347 12.707L16.9487 14.121L19.7777 11.293Z"
                    fill="#43006A"
                  />
                  <path d="M8.46371 16.95L7.04871 15.536L15.5357 7.05005L16.9497 8.46505L8.46371 16.95Z" fill="#43006A" />
                </svg>
              </button>
            </li>
            <li>
              <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                    fill="#43006A"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
                    fill="#43006A"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                    fill="#43006A"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <article className="md:text-lg text-base leading-[150%]">
          <h1 className="md:text-[40px] text-4xl font-medium md:font-semibold mb-5 md:mb-8">Introduction</h1>
          <p>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. <br className="mb-4" />
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
            arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
            molestie aliquet sodales id est ac volutpat.
          </p>
          <figure className="h-[370px] rounded-xl md:h-[630px] py-10 ">
            <Image className="w-full rounded-xl h-full max-h-[630px] object-cover" alt="Demo Image" src={demoImg}></Image>
            <figcaption className="mt-4 text-sm pl-2 border-l-2">Image caption goes here</figcaption>
          </figure>
          <p className="text-lg leading-[140%]  mt-5">
            <strong className="text-base md:text-[20px] block mb-4">
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
            </strong>
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
            dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
            congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam
            lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
          </p>
          <blockquote className="py-[36px] my-4 px-3 leading-[150%] md:px-8 italic text-[20px] bg-[#F3F1FF] text-secondary">
            <span className="block pl-5 border-l-3 border-secondary">
              "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
            </span>
          </blockquote>
          <p>
            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat
            elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus
            elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
          </p>
          <div>
            <h3 className="text-[32px] mt-10 font-semibold mb-5">Conclusion</h3>
            <p>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo
              nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.{' '}
              <br className="mb-4" />
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed
              duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
              <br className="mb-4" />
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque
              et, nunc tortor.Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
            </p>
          </div>
          <div className="flex pb-12 border-b-[0.5px] border-secondary mb-12 items-center flex-col mt-16">
            <p className="font-semibold text-lg mb-4">Share this post</p>
            <ul className="flex mb-12 items-center gap-2">
              <li>
                <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.22172 19.778C4.68559 20.2425 5.23669 20.6108 5.84334 20.8617C6.44999 21.1126 7.10023 21.2411 7.75672 21.24C8.41335 21.2411 9.06374 21.1125 9.67054 20.8617C10.2774 20.6108 10.8286 20.2425 11.2927 19.778L14.1207 16.949L12.7067 15.535L9.87872 18.364C9.31519 18.925 8.55239 19.2399 7.75722 19.2399C6.96205 19.2399 6.19925 18.925 5.63572 18.364C5.07422 17.8007 4.75892 17.0378 4.75892 16.2425C4.75892 15.4471 5.07422 14.6842 5.63572 14.121L8.46472 11.293L7.05072 9.87896L4.22172 12.707C3.28552 13.6454 2.75977 14.9169 2.75977 16.2425C2.75977 17.568 3.28552 18.8395 4.22172 19.778ZM19.7777 11.293C20.7134 10.3542 21.2388 9.08288 21.2388 7.75746C21.2388 6.43204 20.7134 5.16068 19.7777 4.22196C18.8393 3.28577 17.5678 2.76001 16.2422 2.76001C14.9166 2.76001 13.6452 3.28577 12.7067 4.22196L9.87872 7.05096L11.2927 8.46496L14.1207 5.63596C14.6842 5.07495 15.447 4.75999 16.2422 4.75999C17.0374 4.75999 17.8002 5.07495 18.3637 5.63596C18.9252 6.19923 19.2405 6.96213 19.2405 7.75746C19.2405 8.55279 18.9252 9.31569 18.3637 9.87896L15.5347 12.707L16.9487 14.121L19.7777 11.293Z"
                      fill="#43006A"
                    />
                    <path d="M8.46371 16.95L7.04871 15.536L15.5357 7.05005L16.9497 8.46505L8.46371 16.95Z" fill="#43006A" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                      fill="#43006A"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
                      fill="#43006A"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="w-[32px] flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                      fill="#43006A"
                    />
                  </svg>
                </button>
              </li>
            </ul>

            <ul className=" text-secondary flex items-center gap-2 text-sm  font-normal">
              <li className="px-3 py-1 bg-[#F3F1FF] rounded-xl">Tag one</li>
              <li className="px-3 py-1 bg-[#F3F1FF] rounded-xl">Tag one</li>
              <li className="px-3 py-1 bg-[#F3F1FF] rounded-xl">Tag one</li>
              <li className="px-3 py-1 bg-[#F3F1FF] rounded-xl">Tag one</li>
            </ul>
          </div>
          <div className="flex items-center flex-col">
            <div className="w-12 h-12 rounded-full mb-4 overflow-hidden">
              <Image alt="user name" className="w-full h-full object-cover" src={user} />
            </div>
            <p className="text-sm font-semibold">John Doe</p>
            <p className="font-sm">Job title, Company name</p>
          </div>
        </article>
      </section>
      {/* Related Post */}
      <section className="py-16 px-5 md:py-[80px] md:px-[64px]">
        <SectionHeading center={true} title={'Related Posts'} subTitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '} />
        <div className="grid my-12 md:my-[80px] grid-cols-3 gap-8">
          {[1, 2, 3].map(item => (
            <div key={item} className="col-span-4 md:col-span-2 lg:col-span-1 mb-[48px] md:mb-[60px]">
              <div className="w-full min-h-[300px] max-h-[290px] bg-gray-600 rounded-xl"></div>
              <h3 className={`text-black leading-[140%] mt-6 md:mt-6 mb-4 text-lg md:text-[24px] font-semibold `}>
                Can my child have a voice in Family Mediation
              </h3>
              <p className={`text-[#667085] leading-[150%] mb-6 text-lg font-normal`}>
                Can my child have a voice in Family Mediation? Whether your child has the opportunity to have their say in…
              </p>
              <Link href={'#'} className="flex w-max pb-1 border-b border-secondary  gap-1 items-center text-secondary font-medium text-sm">
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
        <div className="flex justify-center">
          <Button title={'View All'} href="#" />
        </div>
      </section>
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'#'}
        Button1Text={'Enrol in a Mediation Training Program Today'}
        Button2Link={'#'}
        Button2Text={'Contact Us for Upcoming Course Dates'}
      />
    </div>
  );
};

export default SingleBlogPost;

import Header from '@/components/shared/Header';
import React from 'react';
import header from '/public/privary-policy.jpg';

const PrivacyPolicy = () => {
  return (
    <div>
      <Header title={'Privacy Statement'} cover={header} />
      <div className="py-16 text-[15px]  leading-[190%] font-light px-5 md:py-[80px] md:px-[144px] ">
        <div className="flex  text-[15px] mb-16 items-center justify-end">
          <a
            download={true}
            href="https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/05/08143900/GlobalMediation_Privacy_Statement-25.02.20.pdf"
          >
            PDF version of this policy
          </a>
        </div>
        <div>
          <p className=" text-[15px]">
            Global Mediation (“the Company”) is committed to keeping your personal information safe and being clear about how we collect
            your data, how we store it and what we do with it. This privacy statement applies whether you want information, support or
            training from us, to use our services, or work for us. If you are engaged in mediation, further confidentiality terms will also
            apply. <br /> <br />
            The Company acts as either a data controller or a data processor for different types of mediation services we provide. In
            respect of the SEN mediation work we do, we act as data processor and have a legal obligation to collect, keep and use certain
            personal data in order to enable each contracted local authority to perform its statutory duty and to progress your request for
            mediation or a mediation certificate in accordance with your statutory rights. We use this data in accordance with our contract
            to provide such services and also in accordance with our legitimate business interests. <br /> <br />
            In respect of all our other mediation or consultation services for example, training programmes and marketing of commercial
            mediation services, we act as a data controller and in accordance with our legitimate interests. <br /> <br />
            This privacy notice, along with our website terms and conditions and our cookies policy lets you know how we collect, use and
            keep your personal information safe. <br /> <br />
            If you have any queries about our Privacy Notice, please get in touch with our Data Protection Office at
            adamg@globalmediation.co.uk or call 020 8441 1355 or by post to Data Protection Officer, Global Mediation, 8 Lytton Road, Barnet
            EN5 5BY.
          </p>
        </div>
        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">The information we collect</h3>
            <span className=" text-sm">Information you give to us directly</span>
          </div>
          <div>
            <p className="font-semibold">
              We will collect and store information that you give us when you do the following things on our website or in writing:
            </p>
            <ul className="list-disc pl-6 my-7 space-y-1 capitalize">
              <li>make an enquiry</li>
              <li>register for a workshop, course or training</li>
              <li>give us feedback or make a complaint</li>
              <li>apply for a job or work with us</li>
              <li>enter into a contract with us</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm">Information you give to us directly</p>
            <p>
              We store information about how you navigate our website, although this cannot be used to personally identify you. <br />{' '}
              <br />
              We may also collect and store your personal information if you interact with us on our social media channels: Facebook,
              Twitter and LinkedIn. This will depend on your own privacy settings on these individual channels, so make sure you check these
              first.
              <br /> <br />
              Depending on what you do on our website, we may collect and store the following types of personal information: name, email
              address, date of birth, mobile or telephone number, relationship status, gender, sexual orientation, financial details,
              credit/debit card information, details about your education and career.
              <br /> <br />
              When you visit our website, small text files known as cookies may be downloaded by and stored on your device (phone, laptop,
              tablet, etc.). Cookies are used to help us to provide you with a smooth experience while you browse. We use cookies in the
              following way:
            </p>
            <ul className="list-disc pl-6 my-7 space-y-1 capitalize">
              <li>to make our website work</li>
              <li>to collect anonymous data to gain insight into how visitors use our website</li>
              <li>to help us show advertisements about our services to those people who might be interested in them</li>
              <li>to allow you to share content with social networks like Twitter and Facebook.</li>
              <li>
                You can use your web browser to delete or disable cookies but this may make your use of the website less convenient, for
                example by having to re-enter search terms or form fields or passwords that your device might otherwise remember.
              </li>
            </ul>
            <p>
              We do not use cookies to collect any information that could personally identify you. Neither do we use cookies to pass on any
              personally identifiable information to third parties. <br /> <br />
              Some categories of personal information such as sexual orientation, racial or ethnic origin, religious or political opinion,
              data concerning your health (mental or physical) or your sex life are considered as ‘sensitive’ information, and Global
              Mediation will only collect such information where it informs the provision of the service to you. For example, in order to
              progress a request for mediation or a mediation certificate, it will be necessary for us to collect information about your
              child and the details about their special educational needs, the school or college they attend, as well as information about
              your disagreement. If it is necessary for us to do this, we will state clearly at the time why this information is required.
              <br /> <br />
              If you are a young person under the age of 16 years, you must get the permission of your parent/guardian before providing
              Global Mediation with any personal information.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">Use of personal information</h3>
            <span className=" ">We will use your personal information to do the following:</span>
          </div>
          <ul className="list-disc pl-6 my-7 space-y-1 capitalize">
            <li>provide you with information or services you’ve requested or that we feel might be of interest to you</li>
            <li>respond to direct requests where you contact us with a query</li>
            <li>carry out general administrative tasks like essential record-keeping, as well as complaints and feedback</li>
            <li>
              make our marketing campaigns more targeted but we will only send you marketing information if you have given us specific
              consent to do
            </li>
            <li>transact: we will use your personal information to take payments from you for our services</li>
            <li>keep you safe: in the event that we reasonably think you (or someone else) is at risk of serious harm</li>
            <li>
              conduct polls, surveys and market research: we may invite you to take part so that we can improve our website, services and/or
              strategic development
            </li>
            <li>monitoring and evaluation: we use your personal information to inform and develop our service delivery</li>
            <li>improve your experience of our website, so that we may offer you a more user- friendly navigation of our website</li>
            <li>
              process applications to work at Global Mediation. For example, if you fill in an application form or send us your CV or send
              us information speculatively in respect of possible contract or career opportunities.
            </li>
          </ul>
        </div>
        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold text-4xl mb-2 text-secondary">Retention of personal data</h3>
            <span className="">
              We are committed to retaining your personal information for no longer than necessary in relation to the purpose for which it
              was first collected. This is in line with guidance from the Information Commissioner’s Office(“ICO”).Global Mediation may hold
              some types of data for up to ten years.
            </span>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold text-4xl mb-2 text-secondary">Sharing of information</h3>
            <p className="">
              We will only use your personal information for the purposes for which it was obtained in the first place. We will not share it
              with any third parties and you won’t receive any communications from other organisations as a result of providing data to us.
              <br /> <br />
              There are two ways in which your data might be shared:
              <br /> <br />
              In the event that we use third party suppliers to help deliver our services;
              <br /> <br />
              Where we are legally bound to disclose your personal information, for example, in order to keep you safe if we consider you
              (or someone else) is at risk of serious harm, or in respect of criminal investigation.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold text-4xl mb-2 text-secondary">Keeping personal information safe</h3>
            <p className="">
              We have both digital and operational safeguards to make sure your data is secure. Global Mediation is at all times committed
              to ensuring that it uses the most up to date and appropriate technology in order to keep your data secure. Access to
              information is reviewed on a regular basis and limited to those people who actually need to access it and are assigned the
              permission to do so.
              <br /> <br />
              All online forms we use are protected by secure encryption. Where we pass highly sensitive data over the internet such as
              creditor debit card details,the data is encrypted between the client and our partners.
              <br /> <br />
              Global Mediation is Payment Card Industry (“PCI”) compliant and we only use PCI compliant providers to collect data on our
              behalf. We do not store payment data(for example credit or debit card numbers) on our own systems.
              <br /> <br />
              <span className=" italic">
                There are always inherent risks to passing information over public networks and we cannot guarantee the absolute security of
                data handled in this way.
              </span>
              <br /> <br />
              We only use web servers located in England.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold text-4xl mb-2 text-secondary">Your rights and the management of your data</h3>
            <p className="">
              You have the right to request access to the personal information that we store and process about you. You can ask for
              corrections to be made to the information we hold or for your personal information to be deleted. You can also ask us to
              restrict the processing of your personal information or to object to the processing of it altogether.
              <br /> <br />
              We will not charge you for either considering or complying with a request unless it is deemed to be excessive in nature. We
              will ask you for proof of identity and upon this being successfully verified, you are entitled to obtain the following
              information about the personal data we hold:
            </p>
            <ul className="list-disc pl-6 my-7 space-y-1 capitalize">
              <li>The purposes of the collection, processing, use and storage of your personal data.</li>
              <li>The source(s) of the personal information, if it was not obtained from you.</li>
              <li>The categories of personal data stored about you.</li>
              <li>
                The recipients (or categories of recipients) to whom your personal data has been or may be transmitted, along with the
                location of those recipients.
              </li>
              <li>The envisaged period of storage for your personal data or the rationale for determining the storage period.</li>
            </ul>
            <p>
              If you would like to make a request relating to any of the rights above, please send a request by emailing
              adamg@globalmediation.co.uk. You can also, if you prefer, make the request in writing to: Data Protection Officer, Global
              Mediation, 8 Lytton Road, Barnet EN55BY.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold text-4xl mb-2 text-secondary">How to make a complaint</h3>
            <p className="">
              If you have any questions about this privacy statement or the way in which Global Mediation handles your personal information,
              or if you wish to make a complaint, please follow our complaints procedure available on our website at
              www.globalmediation.co.uk or by emailing feedback@globalmediation.co.uk.
              <br /> <br />
              If you are unhappy with our response, you may then raise your concern directly with the Information Commissioner’s Office:
              Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF or by visiting the ICO website at
              www.ico.org.uk.
              <br /> <br />
              Our Privacy Statement may change from time to time, so please check this page occasionally to see if we have included any
              updates or changes, and that you are happy with them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import Header from '@/components/shared/Header';
import React from 'react';
import header from '/public/privary-policy.jpg';

const ComplimentsPolicy = () => {
  return (
    <div>
      <Header title={'Complaints, Comments & Compliments Policy'} cover={header} />
      <div className="py-16 text-[15px]  leading-[190%] font-light px-5 md:py-[80px] md:px-[144px] ">
        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">Our commitment to customers</h3>
          </div>
          <div>
            <p className="font-semibold">Global Mediation is committed to providing an outstanding level of service.</p>
            <p className="pt-6">We aim to ensure that:-</p>
            <ul className="list-disc pl-6 my-6 space-y-1 capitalize">
              <li>Making a complaint is as simple as possible</li>
              <li>We treat all complaints seriously</li>
              <li>We deal with any complaint promptly, fairly and in confidence</li>
              <li>We learn from complaints and use them to improve our service</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">What is a complaint?</h3>
          </div>
          <div>
            <p className="font-semibold">
              A complaint is when you tell us that you are not happy about the service we provide. It could include:
            </p>
            <ul className="list-disc pl-6 my-6 space-y-1 capitalize">
              <li>If we do not deliver a service on time</li>
              <li>If we give you the wrong information</li>
              <li>If you receive a poor quality service</li>
            </ul>
            <p>
              If the complaint involves an organisation or person outside our control, we will direct you to the relevant point of contact.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">How do we deal with complaints?</h3>
          </div>
          <div>
            <p>
              We try to resolve complaints as soon as they arise. Wherever possible a member of staff will endeavour to resolve any
              complaint, however communicated, as soon as they become aware of it. We recognise however that some issues may arise that are
              incapable of immediate resolution. <br /> <br />
              If a resolution is not achieved by a member of staff, or if it involves a mediator or external supplier the details are
              entered into our Management Information Form. A Director will then take responsibility for resolving the complaint within a
              reasonable amount of time. A Director may wish to investigate the complaint before a decision is made on an appropriate
              resolution.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">Response Times</h3>
          </div>
          <div>
            <p className="">In dealing with any complaint we will:-</p>
            <ul className="list-disc pl-6 my-6 space-y-1 capitalize">
              <li>Acknowledge receipt of your complaint within five working days</li>
              <li>Issue a full response within 21 days.</li>
              <li>
                Where it is not possible to meet the above response time, we will keep you informed and provide an explanation for the
                delay.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">How to make a complaint</h3>
          </div>
          <div>
            <p className="">If you wish to make a complaint you can contact us in any of the ways listed below:-</p>
            <ul className="list-disc pl-6 my-6 space-y-1 capitalize">
              <li>
                By email to <span className="font-semibold">info@globalmediation.co.uk</span>
              </li>
              <li>
                In writing to{' '}
                <span className="font-semibold">Global Mediation Ltd, Molteno House, 302 Regents Park Road, London, N3 2JX</span>
              </li>
              <li>
                By telephone on <span className="font-semibold">0208 411355</span>
              </li>
            </ul>
            <p>
              If for any reason you are not satisfied with the response provided you may contact the{' '}
              <span className="font-semibold">Managing Director</span> by email at{' '}
              <span className="font-semibold">adamg@globalmediation.co.uk</span> or at the above address.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">Further complaints</h3>
          </div>
          <div>
            <p className="">
              If you have exhausted our internal complaints procedure and you are still dissatisfied with the resolution of your complaint
              you may make a further complaint to the Civil Mediation Council (CMC).
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="mb-10">
            <h3 className=" font-semibold mb-2 text-4xl text-secondary">Comments and compliments</h3>
          </div>
          <div>
            <p className="">
              We always welcome any other comments and compliments about our service. Please contact us in any of the ways mentioned above,
              complete an evaluation form where provided or email us via our website at{' '}
              <span className="font-semibold">www.globalmediation.co.uk</span>.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <p className="font-semibold">Last Reviewed June 2018</p>
        </div>
      </div>
    </div>
  );
};

export default ComplimentsPolicy;

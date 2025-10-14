import React from 'react';

const page = () => {
  return (
    <div className="mt-[120px]">
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-700">
        <h1 className="text-2xl lg:text-5xl font-bold mb-5">Cookie Policy</h1>
        <p className="mb-6 leading-[200%] text-sm text-gray-500">
          Effective Date: 30-Jul-2025 <br />
          Last Updated: 30-Jul-2025
        </p>

        <section className="mb-8">
          <h5 className="text-xl font-semibold mb-2">What are cookies?</h5>
          <div className="space-y-3 text-base leading-relaxed">
            <p>
              This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect
              using cookies and how that information is used, and how to manage the cookie settings.
            </p>
            <p>
              Cookies are small text files that are used to store small pieces of information. They are stored on your device when the
              website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide
              better user experience, and understand how the website performs and to analyze what works and where it needs improvement.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h5 className="text-xl font-semibold mb-2">How do we use cookies?</h5>
          <div className="space-y-3 text-base leading-relaxed">
            <p>
              As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies
              are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable
              data.
            </p>
            <p>
              The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our
              website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a
              better and improved user experience and help speed up your future interactions with our website.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h5 className="text-xl font-semibold mb-2">Types of Cookies we use</h5>
          <div className="cky-audit-table-element"></div> {/* This will remain as-is if injected by CookieYes */}
        </section>

        <section className="mb-8">
          <div className="mt-4 space-y-3 text-base leading-relaxed">
            <p>
              You can change your cookie preferences any time by clicking the above button. This will let you revisit the cookie consent
              banner and change your preferences or withdraw your consent right away.
            </p>
            <p>
              In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change
              the settings of your browser to block/delete the cookies. Listed below are the links to the support documents on how to manage
              and delete cookies from the major web browsers.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Chrome:{' '}
                <a
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/accounts/answer/32050"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </li>
              <li>
                Safari:{' '}
                <a
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                >
                  https://support.apple.com/en-in/guide/safari/sfri11471/mac
                </a>
              </li>
              <li>
                Firefox:{' '}
                <a
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
                >
                  https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                </a>
              </li>
              <li>
                Internet Explorer:{' '}
                <a
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                >
                  https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer
                </a>
              </li>
              <li>If you're using any other browser, please check its official support docs.</li>
            </ul>
          </div>
        </section>

        <p className="text-sm text-gray-500">
          Cookie Policy Generated By{' '}
          <a
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW"
          >
            CookieYes - Cookie Policy Generator
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default page;

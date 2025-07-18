import React from 'react';
import FAQ from '@/components/service/FAQ';

const faqData = [
  {
    key: 1,
    question: 'How long does commercial mediation take?',
    answer: 'Most sessions last a full day, depending on the complexity of the dispute. Preparation and follow-up are included.',
  },
  {
    key: 2,
    question: 'Is the outcome legally binding?',
    answer:
      'No — agreements are not automatically legally binding, but they can be formalised into contracts or legal documents if both parties agree.',
  },
  {
    key: 3,
    question: 'Do I need a lawyer to attend mediation?',
    answer: 'No, but legal advisors can be included if you prefer. The process is designed to be flexible, accessible and collaborative.',
  },
  {
    key: 4,
    question: 'What types of disputes can you help with?',
    answer:
      'We support a wide range — including contract, partnership, client-supplier and IP-related disputes. If you’re unsure, we’re happy to advise.',
  },

  {
    key: 5,
    question: 'Is civil mediation legally binding?',
    answer: 'The outcome isn’t automatically binding, but it can be formalised through legal agreement if both parties choose.',
  },
  {
    key: 6,
    question: 'Can I use mediation instead of going to court?',
    answer: 'Yes — mediation is a recognised alternative to litigation in many civil cases.',
  },
  {
    key: 7,
    question: 'Do I need a solicitor to take part?',
    answer: 'No — but you’re welcome to involve legal representation if you prefer.',
  },

  {
    key: 8,
    question: 'Is mediation confidential?',
    answer: 'Yes — what’s said in the session stays private unless everyone agrees to share it.',
  },
  {
    key: 9,
    question: 'Do we have to meet face-to-face?',
    answer: 'No — we offer online, phone, or separate meetings if that’s more comfortable.',
  },
  {
    key: 10,
    question: 'What if the other person won’t take part?',
    answer: 'We’ll reach out and explain the process. Mediation is voluntary, but we encourage everyone to give it a try.',
  },

  {
    key: 11,
    question: 'Is family mediation legally binding?',
    answer: 'No — but written agreements can be made into formal court orders if both parties agree.',
  },
  {
    key: 12,
    question: 'Can children be involved in the mediation?',
    answer: 'Yes — with parental agreement, older children can be consulted as part of the process.',
  },
  {
    key: 13,
    question: 'How many sessions will we need?',
    answer: 'Most disputes are resolved within one to three sessions, depending on complexity.',
  },

  {
    key: 14,
    question: 'Is SEND mediation free?',
    answer: 'Yes, in most cases it is fully funded by the local authority.',
  },
  {
    key: 15,
    question: 'Is it required before a tribunal?',
    answer: 'Yes — you’ll need to consider mediation before progressing to tribunal, though you’re not obligated to take part.',
  },
  {
    key: 16,
    question: 'Can a young person request mediation?',
    answer: 'Yes — anyone aged 16 to 25 can request or attend SEND mediation directly.',
  },
  {
    key: 17,
    question: 'Can parents and young people both be involved?',
    answer: 'Yes — mediation can include both, depending on the issue and who the dispute involves.',
  },

  {
    key: 18,
    question: 'How long does workplace mediation take?',
    answer: 'Typically a one-day process, including preparation and follow-up. Some more complex issues may take longer.',
  },
  {
    key: 19,
    question: 'Is workplace mediation legally binding?',
    answer: 'Agreements are not legally binding but can be formalised internally. The focus is on practical, mutual outcomes.',
  },
  {
    key: 20,
    question: 'What types of conflicts are best suited?',
    answer: 'Interpersonal issues, communication breakdowns, and early-stage grievances are well suited to mediation.',
  },
];

const page = () => {
  return (
    <div className="pt-[120px] bg-[#F9F8FF]">
      <FAQ title={'FAQs About Global Mediation'} buttonText={'Contact Us'} buttonLink={'/contact-us'} faqData={faqData} />
    </div>
  );
};

export default page;

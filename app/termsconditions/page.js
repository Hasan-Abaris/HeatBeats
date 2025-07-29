export const termsData = [
    {
      title: "1. About The Company",
      sections: [
        {
          number: "1.1",
          content:
            'www.SLA.co (the "Site"), the courses available from the Site (the "Courses"), and the training materials, available on or through the Site and the software (the "Services"), are owned, operated, and maintained, as applicable, by Brain4ce Education Solutions Private Limited (hereinafter referred to as "we", "our", "us", or the "Company", as the case may be). The Site, Courses, and Services, are collectively referred to as the "Company Products." By (a) using or accessing the Company Products, including, but not limited to streaming, accessing or using the software; or (b) paying, either for itself or for someone else to use or access the Company Products, you agree to the terms and conditions set forth in these terms of use (the "Terms").',
        },
        {
          number: "1.2",
          content:
            'THESE TERMS, UNLESS THE SAME HAS BEEN SPECIFICALLY EXCLUDED BY ANY OTHER INSTRUMENT TO WHICH THE COMPANY AND/OR AN USER ARE SUBJECT TO, INCLUDING THIS INTRODUCTORY SECTION, CREATE A BINDING LEGAL CONTRACT BETWEEN YOU AND THE COMPANY...',
        },
        {
          number: "1.3",
          content:
            'For the purposes of the Terms, the term "User(s)"/"you" shall mean and include all persons, natural or artificial, that visit the Site...',
        },
        {
          number: "1.4",
          content:
            'If you are using or opening an account to use the Company Products on behalf of a company, entity or organization (each a "Subscribing Entity"), then you represent and warrant that you...',
        },
        {
          number: "1.5",
          content:
            'Users must ensure that the information provided during registration is accurate and updated. The Company is not liable for any misrepresentation or consequences arising from outdated or incorrect information provided by the user.',
        },
      ],
    },
    {
      title: "2. Privacy",
      sections: [
        {
          number: "2.1",
          content:
            'Any personal information submitted in connection with your use of the Site is subject to our Privacy Policy available at https://www.SLA.co/privacy-policy...',
        },
        {
          number: "2.2",
          content:
            'The User may obtain certain confidential information, including without limitation, technical, contractual, product, pricing and other valuable information that should reasonably be understood as confidential...',
        },
        {
          number: "2.3",
          content:
            'We take reasonable steps to protect the personal data of our users. However, we cannot guarantee the security of any information transmitted to or from the Site and are not responsible for the actions of third parties.',
        },
        {
          number: "2.4",
          content:
            'Users agree to notify the Company immediately of any unauthorized use of their account or any other breach of security. The Company will not be liable for any loss or damage arising from the user’s failure to comply.',
        },
      ],
    },
    {
      title: "3. General",
      sections: [
        {
          number: "3.1",
          content:
            'The Company Products enable the Users to learn via live and recorded instruction, tutoring, and learning services...',
        },
        {
          number: "3.2",
          content:
            'You understand and agree that these Terms are agreed to in consideration of your use of the Company Products...',
        },
        {
          number: "3.3",
          content:
            'Changes to these Terms. Company reserves the absolute right to revise these Terms in its sole discretion...',
        },
        {
          number: "3.4",
          content:
            'Evolving Nature of Services. The Company Products are new and constantly subject to change at any time...',
        },
        {
          number: "3.5",
          content:
            'Governing Law: These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Company is registered, without regard to its conflict of law provisions.',
        },
        {
          number: "3.6",
          content:
            'Dispute Resolution: Any disputes arising out of or relating to these Terms shall be resolved through binding arbitration in accordance with the rules of the local arbitration authority.',
        },
      ],
    },
  ];
  
  

 function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-10 text-center">Terms and Conditions</h1>
      {termsData.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.sections.map((sub, idx) => (
            <p key={idx} className="mb-4">
              <strong>{sub.number}</strong> {sub.content}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default page;
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Innovation',
};

type Contact = {
  name: string;
  jobTitle: string;
  languages?: string[];
  phoneNumbers?: {
    country: string;
    number: string;
  }[];
  emailAddress?: string;
};

const contacts = [
  {
    name: "Janne Rekilä",
    jobTitle: "Founder/Consultant/Sales in Spain and Finland",
    languages: ["fi-fluent", "en-fluent", "es-half", "se-half"],
    phoneNumbers: [
      {
        country: "Finland",
        number: "+358440250979",
      },
      {
        country: "Spain",
        number: "+34611817464",
      },
    ],
    emailAddress: "greenfeenixcom@gmail.com",
  },
  {
    name: "Saku Kauppi",
    jobTitle: "Founder/Consultant/Sales in Malta/Mediterranean area",
    languages: ["fi-fluent", "en-fluent"],
    phoneNumbers: [
      {
        country: "Malta",
        number: "+35699146734",
      },
    ],
  },
  {
    name: "Ilona Kauppi",
    jobTitle: "Founder/Consultant/Sales in Finland",
    languages: ["fi-fluent", "en-fluent", "se-fluent"],
    phoneNumbers: [
      {
        country: "Finland",
        number: "+358451452807",
      },
    ],
  },
  {
    name: "Arttu Kauppi",
    jobTitle: "Real Estate/construction works and installations"
  }
];

const spokenLanguageStringToHumanReadable = (langString: string): string => {
  const [countryCode, fluency] = langString.split('-');
  const countryNames: { [key: string]: string } = {
    'fi': 'Finland',
    'en': 'England',
    'es': 'Spain',
    'se': 'Sweden',
  };
  const fluencyNames: { [key: string]: string } = {
    'basic': 'Basic',
    'half': 'Intermediate',
    'fluent': 'Fluent'
  };
  return `${countryNames[countryCode]} (${fluencyNames[fluency]})`;
}

const SpokenLanguagesList = ({ languages }: { languages: string[] }) => {
  return (
    <>
      {languages.map((lang) => {
        const imagePath = `/images/${lang}.png`;
        return (
          <Image
            key={lang}
            src={imagePath}
            alt={spokenLanguageStringToHumanReadable(lang)}
            width={24}
            height={16}
            className="inline mr-1"
          />
        );
      })}
    </>
  );
};

const PhoneNumbersList = ({ phoneNumbers }: { phoneNumbers: { country: string; number: string }[] }) => {
  return (
    <ul>
      {phoneNumbers.map(phone => (
        <li key={phone.country}>
          Tel: <a className='text-green-600 hover:text-orange-500 underline transition-colors duration-20' href="tel:{phone.number}">{phone.number} / {phone.country}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <div className='prose mb-8'>
        <h2>Contact Us</h2>
      </div>
      <div className="flex flex-col gap-4">
        {contacts.map(contact => (
          <div key={contact.name} className="flex items-center gap-4">
            <div>
              <h2 className="text-lg font-semibold ">{contact.name} {contact.languages && <SpokenLanguagesList languages={contact.languages} />}</h2>
              <h3 className="text-md">{contact.jobTitle}</h3>
              {contact.phoneNumbers && <PhoneNumbersList phoneNumbers={contact.phoneNumbers} />}
              {contact.emailAddress && <>Email: <a className='text-green-600 hover:text-orange-500 underline transition-colors duration-200'  href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</a></>}
            </div>
          </div>
        ))}
        <div className='border-t-2 border-gray-200 pt-4 pb-4'>Global consulting and sales/info: <a className='text-green-600 hover:text-orange-500 underline transition-colors duration-200' href="mailto:greenfeenixcom@gmail.com">greenfeenixcom@gmail.com</a></div>
      </div>
    </main>
  );
}

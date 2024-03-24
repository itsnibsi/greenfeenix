import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const ContactCallout = () => (
  <div className="text-lg">
    <a
      href="/contact"
      className="mb-2 mt-8 block border-t-2 border-gray-100 pt-8 text-green-600 transition-colors duration-200 hover:text-orange-500"
    >
      <PaperAirplaneIcon className="mr-2 inline-block h-6 w-6" />
      Contact us for more information
    </a>
  </div>
);

export default ContactCallout;

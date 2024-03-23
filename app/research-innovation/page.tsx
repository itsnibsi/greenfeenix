import ContactCallout from '@/components/ContactCallout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Innovation',
};

export default function Home() {
  return (
    <main className='prose'>
      <h2>Research & Innovation</h2>

      <p>GreenFeenix is committed to lifetime learning. Research is done for developing concrete sustainable actions and creating new sustainable-/green business models. Main focus of research is on marine conservative innovations, plastic waste reduction/plastic circular economy and sustainable construction and real estate works.</p>

      <p>Ongoing/past postgraduate research and -studies: sustainable development (sustainable entrepreneurship and plastic circular economy research/studies). Microplastic studies/doctoral thesis at Turku university/Archipelago Research Institute.</p>
      
      <ContactCallout />
    </main>
  );
}

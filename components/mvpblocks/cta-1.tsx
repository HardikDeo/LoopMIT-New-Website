import { Globe, Mail, Phone,Instagram} from 'lucide-react';
import Link from 'next/link';
import Globe1 from './globe1';



export default function CTA1() {
  return (
    <div className="w-full h-full bg-transparent">
     
      <section className="mx-auto max-w-9xl z-10 px-4 py-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 relative isolate w-full overflow-hidden rounded-2xl">
          
          
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24">
            <p className="w-fit rounded-xl bg-white px-4 py-1 text-center text-base leading-7 font-semibold text-black uppercase lg:text-left">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-md text-4xl font-semibold text-white md:text-6xl">
              How Can You <span className="text-primary-2"> Reach Us</span>?
            </h2>
            <p className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
              If you need to get in touch,contact us.
            </p>
            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
              <a
                className="flex items-center gap-2 text-white"
                href="mailto:subha9.5roy350@gmail.com"
              >
                <Mail className="h-7 w-7 text-red-500" />
                loopmit2019@gmail.com
              </a>
              
            </div>
            
          </div>
          <Globe1/>
        </div>
        </section>
        
    </div>
  );
}

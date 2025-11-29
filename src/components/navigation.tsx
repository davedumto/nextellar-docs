import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: 'Docs', path: '/docs/getting-started/introduction' },
    { name: 'Features', path: '/docs/getting-started/introduction' },
    { name: 'Blog', path: '/docs/getting-started/introduction' },
    { name: 'Contact', path: '/docs/getting-started/introduction' },
  ];

  return (
    <div className="relative flex-1 min-w-56">
      <div className="h-[66px] lg:h-[105px] px-4 py-6 flex lg:px-14 gap-4 lg:gap-7 items-center w-full border border-[#00000099] bg-white dark:bg-black transition-colors duration-300 dark:border-[#FFFFFF99] justify-between lg:justify-normal">
        <div className="flex items-center">
          <Image
            src="/logos/logo-with-text-light.png"
            width={188}
            height={57.8}
            alt="Nextellar logo light"
            className="w-40 dark:hidden md:w-44"
          />
          <Image
            src="/logos/logo-with-text-dark.png"
            width={188}
            height={57.8}
            alt="Nextellar logo dark"
            className="w-40 hidden dark:block md:w-44"
          />
        </div>

        <ul className="hidden lg:flex w-auto flex-1 items-center justify-center gap-16">
          {routes.map(({ name, path }) => (
            <Link href={path} key={name}>
              <span className="text-black dark:text-[#FFFFFFCC] font-medium text-sm cursor-pointer">
                {name}
              </span>
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button className="hidden lg:inline-flex text-sm dark:bg-white bg-black text-white dark:text-black rounded-none font-medium py-3 px-5 hover:text-black">
            Get Started
          </Button>
          <button
            className="inline-flex lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6 text-black dark:text-white" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full border-x border-b border-[#00000099] dark:border-[#FFFFFF99] bg-white dark:bg-black">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {routes.map(({ name, path }) => (
              <Link href={path} key={name} onClick={() => setIsOpen(false)}>
                <span className="block text-black dark:text-[#FFFFFFCC] font-medium text-sm">
                  {name}
                </span>
              </Link>
            ))}
            <Button className="mt-2 w-full text-sm dark:bg-white bg-black text-white dark:text-black rounded-none font-medium py-3 px-5 hover:text-black">
              Get Started
            </Button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;

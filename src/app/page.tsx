'use client';
import {
  Github,
  Star,
  CreditCard,
  Zap,
  Layers,
  Code,
  Wallet,
} from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [themePulse] = useState([0.98, 1.02, 0.99]);

  const features = [
    {
      Icon: Code,
      title: 'One-step CLI',
      desc: 'Scaffold a production-ready app in seconds.',
    },
    {
      Icon: Wallet,
      title: 'Wallets',
      desc: 'Plug-and-play wallet adapters & auth flows.',
    },
    {
      Icon: CreditCard,
      title: 'Payments',
      desc: 'Native Stellar payment hooks and helpers.',
    },
    {
      Icon: Zap,
      title: 'Smart Contracts',
      desc: 'Integrate contracts and transaction flows easily.',
    },
    {
      Icon: Layers,
      title: 'UI Kit',
      desc: 'Prebuilt dApp UI components & patterns.',
    },
    {
      Icon: Star,
      title: 'Best Practices',
      desc: 'Security, testing, and deploy-ready configs.',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white/95 to-slate-50 dark:from-gray-950 dark:via-gray-950/95 dark:to-gray-900 text-gray-900 dark:text-white">
      <style>{`
        @keyframes hueShift { 0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(30deg)}100%{filter:hue-rotate(0deg)}}
        .animated-gradient{background:linear-gradient(120deg, rgba(99,102,241,0.08), rgba(99,102,241,0.02) 30%, rgba(16,185,129,0.04) 60%);animation:hueShift 12s linear infinite}
        .glow{box-shadow:0 8px 30px rgba(99,102,241,0.12)}
        .scanline{background-image: linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%); background-size: 200% 100%; animation: scan 4s linear infinite;}
        @keyframes scan{0%{background-position:200% 0}100%{background-position:-200% 0}}
        .holo{background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(99,102,241,0.06), rgba(16,185,129,0.03)); mix-blend-mode:screen}
        .soft-rotate { transform-origin: center; animation: rotateSlow 18s linear infinite; }
        @keyframes rotateSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-0 animated-gradient" />

      <div className="relative z-10">
        <header className="sticky top-0 z-20 bg-white/40 dark:bg-gray-950/40 backdrop-blur border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-0">
              <div className="  rounded-md overflow-hidden ">
                <Image
                  src="/logos/logo.png"
                  alt="Nextellar"
                  width={100}
                  height={100}
                  className="object-cover dark:invert"
                />
              </div>
              <div className="font-semibold tracking-tight">Nextellar Docs</div>
            </div>

            <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700 dark:text-gray-300">
              <button
                onClick={() =>
                  router.push('/docs/getting-started/introduction')
                }
                className="hover:underline"
              >
                Getting started
              </button>
              <button
                onClick={() => router.push('/docs/guides')}
                className="hover:underline"
              >
                Guides
              </button>
              <button
                onClick={() => router.push('/docs/api')}
                className="hover:underline"
              >
                API
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button
                variant="ghost"
                onClick={() => router.push('https://github.com/nextellar')}
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <motion.h1
                  whileInView={{ y: [8, 0] }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                >
                  Build dApps faster with{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-400 dark:from-indigo-400 dark:to-teal-300">
                    Nextellar
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.12, duration: 0.6 }}
                  className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
                >
                  Nextellar is a one-step CLI toolkit that bootstraps a
                  production-ready <strong>Next.js + TypeScript</strong>{' '}
                  application with built-in{' '}
                  <strong>Stellar blockchain support</strong>. Scaffold a
                  full-stack dApp starter—wallet connection, payment hooks,
                  smart-contract integration, UI components, and deploy-ready
                  defaults—so you can focus on features, not setup.
                </motion.p>

                <motion.div
                  initial={{ scale: 0.995 }}
                  animate={{ scale: themePulse }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="mt-6"
                >
                  <div className="rounded-lg overflow-hidden border dark:border-gray-800 shadow-sm">
                    <div className="px-4 py-3 text-sm flex items-center justify-between bg-gradient-to-r from-slate-100 to-white dark:from-gray-900 dark:to-gray-950">
                      <div className="font-medium">Quick start</div>
                      <div className="text-xs text-gray-500">CLI</div>
                    </div>
                    <pre className="bg-white dark:bg-gray-900 px-4 py-3 text-sm sm:text-[0.95rem] font-mono text-gray-800 dark:text-gray-100">
                      {`npx nextellar init my-dapp
cd my-dapp
npm run dev`}
                    </pre>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18, duration: 0.6 }}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  <Button
                    variant="primary"
                    onClick={() =>
                      router.push('/docs/getting-started/introduction')
                    }
                    className="px-5 py-3 shadow-lg"
                  >
                    Get started
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => router.push('https://github.com/nextellar')}
                    className="px-4 py-3"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button onClick={() => router.push('/docs/guides')}>
                    Guides
                  </Button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.6 }}
                  className="mt-4 text-xs text-gray-500"
                >
                  Includes wallet adapters, Stellar payment helpers, contract
                  utilities, and a production-ready config.
                </motion.p>
              </motion.div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <motion.div
                className="relative w-[340px] h-[340px] flex items-center justify-center"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl holo"
                  style={{
                    background:
                      'radial-gradient(ellipse at 20% 10%, rgba(99,102,241,0.14), transparent 22%), radial-gradient(ellipse at 80% 85%, rgba(16,185,129,0.06), transparent 30%)',
                  }}
                />

                {/* Static Stellar Card */}
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 rounded-2xl p-6 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-2xl glow backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-36 h-36 flex-shrink-0">
                      <Image
                        src="/logos/stellar.png"
                        alt="Stellar logo"
                        width={144}
                        height={144}
                        className="block dark:hidden object-contain"
                      />
                      <Image
                        src="/logos/stellar-dark.png"
                        alt="Stellar logo (dark)"
                        width={144}
                        height={144}
                        className="hidden dark:block object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Stellar-ready</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
                        Built-in Stellar integration — payments, transactions,
                        and helpers included.
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating spark animation */}
                <motion.div
                  initial={{ scale: 0.88, opacity: 0.75 }}
                  animate={{
                    scale: [0.88, 1.06, 0.98],
                    opacity: [0.75, 1, 0.85],
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-8 -right-8"
                >
                  <Star className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
                </motion.div>

                {/* Ambient glowing ring */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.05, 0.15, 0.08] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                >
                  <div
                    style={{
                      border: '1px solid rgba(99,102,241,0.08)',
                      borderRadius: 24,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          <section className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
            >
              {features.map(({ Icon, title, desc }, idx) => (
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 30px rgba(2,6,23,0.12)',
                  }}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * idx, duration: 0.5 }}
                  key={title}
                  className="p-4 rounded-xl border bg-white/60 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 shadow-sm flex gap-3 items-start"
                >
                  <div className="p-2 rounded-md bg-indigo-50 dark:bg-indigo-900/20">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { src: '/logos/next15.png', label: 'Next.js' },
                { src: '/logos/ts.png', label: 'TypeScript' },
                { src: '/logos/tailwindcss-light.png', label: 'Tailwind' },
                // { src: '/logos/contentlayer.png', label: 'Contentlayer' },
              ].map(({ src, label }, i) => (
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  key={label}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0.96 }}
                    animate={{ scale: [0.96, 1.02, 0.98] }}
                    transition={{ repeat: Infinity, duration: 4 + i }}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    <Image
                      src={src}
                      alt={label}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="mt-2 text-xs text-gray-700 dark:text-gray-300">
                    {label}
                  </div>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.06 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  initial={{ scale: 0.98 }}
                  animate={{ scale: [0.98, 1.04, 0.99] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-16 h-16 flex items-center justify-center rounded-md bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700"
                >
                  <Image
                    src="/logos/stellar.png"
                    alt="Stellar"
                    width={64}
                    height={64}
                    className="block dark:hidden object-contain"
                  />
                  <Image
                    src="/logos/stellar-dark.png"
                    alt="Stellar (dark)"
                    width={64}
                    height={64}
                    className="hidden dark:block object-contain"
                  />
                </motion.div>
                <div className="mt-2 text-xs text-gray-700 dark:text-gray-300">
                  Stellar
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="bg-white/60 dark:bg-gray-950/60 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className=" rounded-md overflow-hidden">
                <Image
                  src="/logos/logo.png"
                  alt="Nextellar"
                  width={64}
                  height={64}
                  className="object-cover dark:invert w-[64px]"
                />
              </div>
              <div>
                <div className="text-sm font-semibold">Nextellar</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  One-step dApp bootstrap
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => router.push('/docs/contributing')}>
                Contribute
              </Button>
              <Button onClick={() => router.push('/docs/changelog')}>
                Changelog
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('https://github.com/nextellar')}
              >
                <Github className="mr-2 h-4 w-4" />
                Source
              </Button>
            </div>
          </div>
        </footer>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/4 top-8 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-400/30 to-teal-300/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="absolute right-1/4 bottom-12 w-96 h-96 rounded-full bg-gradient-to-br from-pink-400/25 to-purple-400/12 blur-3xl"
        />
      </div>
    </div>
  );
}

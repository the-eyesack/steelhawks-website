import React, { useEffect } from 'react';
import { sponsorList, sponsorLevels } from './data';
import { motion } from 'framer-motion';

const SponsorPage = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://use.typekit.net/foobar.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className='px-10 pb-10'>
      <h1 className='pageTitle mb-2'>Sponsors</h1>
      <h2 className='mb-10 md:mb-20 text-2xl md:text-3xl md:px-24'>
        Thank you sponsors! We are eternally grateful for your support!
      </h2>
      <section className='grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-1 md:px-2 place-content-center'>
        {sponsorList.map((sponsor, i) => (
          <motion.div
            className='overflow-hidden'
            key={i}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: i * 0.1 },
            }}
            viewport={{ once: true }}
          >
            <h2 className='text-base mb-0 text-center'>{sponsor.name}</h2>
            <div className='overflow-y-hidden h-full flex justify-center items-center pb-10'>
              <a href={sponsor.url}>
                <picture>
                  <source
                    srcSet={
                      '/media/sponsors/avif/' + sponsor.fileName + '.avif'
                    }
                    type='image/avif'
                  />
                  <source
                    srcSet={
                      '/media/sponsors/webp/' + sponsor.fileName + '.webp'
                    }
                    type='image/webp'
                  />
                  <source
                    srcSet={'/media/sponsors/png/' + sponsor.fileName + '.png'}
                    type='image/png'
                  />
                  <img
                    className={
                      'max-w-[420px] max-h-[420px] aspect-auto md:p-2 w-full rounded-md ' +
                      sponsor.style
                    }
                    alt={sponsor.name}
                  />
                </picture>
              </a>
            </div>
          </motion.div>
        ))}
      </section>
      <motion.section
        className=' md:mb-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <div className='md:px-20'>
          <h1 className='pageTitle mb-2 text-3xl md:text-5xl'>
            INTERESTED IN SPONSORING?
          </h1>
          <p>
            We are a non-profit organization, spreading the mission of FIRST and
            promoting STEM to everyone. With your financial support we can
            inspire another child.
          </p>
          <p>
            We spend thousands of dollars building a robot each year, signing up
            for competition, and keeping the team running.
          </p>
        </div>
        <section>
          <h2 className=' md:text-3xl text-2xl underline pt-4 md:pt-10'>
            Sponsorship Degrees
          </h2>
          {sponsorLevels.map((level, i) => (
            <div className='md:mb-10 pb-0' key={i}>
              <div className='flex justify-center'>
                <div className='pt-4 md:pt-0'>
                  <h2 className='text-2xl inline mr-2 text-center'>
                    {level.name}
                  </h2>
                  <h3 className='align-baseline inline'>{level.donation}</h3>
                </div>
              </div>
              {level.description.map((point, i) => (
                <div className='text-center' key={i}>
                  <li className='m-0'>{point}</li>
                </div>
              ))}
            </div>
          ))}
        </section>
      </motion.section>
      <p className='pt-8 md:pt-0'>
        Or, contribute to our <a href='https://gofund.me/34a3dfff'>GoFundMe</a>.
        <br /> Donations of any amount are most appreciated!
      </p>
    </div>
  );
};

export default SponsorPage;

import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { pages } from '../../routes/routes';
import { motion } from 'framer-motion';

const Navigation = (props) => {
  const [toggleNav, setToggleNav] = useState(false); //mobile
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropDown = useRef();

  const doNotDisplay = [
    'Home',
    'Leadership',
    'Mentors',
    'Subteams',
    'Boba',
    'Steelbucks',
  ];

  const useOutsideAlerter = (dropDown) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropDown.current && !dropDown.current.contains(event.target))
          setToggleDropdown(false);
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, [dropDown]);
  };
  useOutsideAlerter(dropDown);

  return (
    <div>
      {/*desktop nav*/}
      <ul className='py-4 px-10 mb-0 text-lg justify-between xl:flex uppercase items-center hidden align-middle h-auto'>
        <li>
          <a href='/'>
            <img
              alt='Steel Hawks Logo'
              className='h-[2.6rem] w-[83.08px]'
              src='media/2601Hawk.svg'
            />
          </a>
        </li>
        <li className='m-0 w-fit' ref={dropDown}>
          <button
            className='navButton'
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            Our Team{' '}
            <FontAwesomeIcon
              icon={solid('caret-down')}
              className={`${toggleDropdown && 'rotate-180'} duration-300`}
            />
          </button>
          <div
            className={`${
              toggleDropdown ? 'absolute' : 'hidden'
            } px-2 text-center rounded-md w-48 translate-x-[-1.75rem] h-fit z-10`}
          >
            {toggleDropdown && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
              >
                <li>
                  <a className='nav-a' href='/mentors'>
                    Mentors
                  </a>
                </li>
                <li>
                  <a className='nav-a' href='/leadership'>
                    Leadership
                  </a>
                </li>
                <li>
                  <a className='nav-a' href='/subteams'>
                    Subteams
                  </a>
                </li>
              </motion.ul>
            )}
          </div>
        </li>
        {pages.map(
          (page, i) =>
            doNotDisplay.indexOf(page.name) === -1 && (
              <li className='navButton' key={i}>
                <a className='nav-a' href={page.path}>
                  {page.name}
                </a>
              </li>
            ),
        )}
      </ul>

      {/*mobile nav*/}
      <div className='xl:hidden flex justify-center align-middle z-30 mt-10 md:mt-0 xl:w-0'>
        <button
          className='z-30 m-2 fixed right-[5%] top-0'
          onClick={() => setToggleNav(!toggleNav)}
        >
          <FontAwesomeIcon
            className='bg-background rounded px-1'
            icon={solid('bars')}
            size='lg'
          />
        </button>
        <ul
          className={`z-20 ease-in-out duration-[400ms] ${
            toggleNav ? 'top-0 right-0 overflow-hidden inline' : 'top-[-280%]'
          } fixed w-screen h-screen`}
        >
          <li className='flex justify-center'>
            <a className='h-fit mx-0 mt-2 inline justify-center' href='/'>
              <img
                alt='Steel Hawks Logo'
                className='h-20 m-4'
                src='media/2601Hawk.svg'
              />
            </a>
          </li>
          {pages.map(
            (page, i) =>
              (doNotDisplay.indexOf(page.name) === -1 ||
                page.name === 'Leadership' ||
                page.name === 'Mentors' ||
                page.name === 'Subteams') && (
                <li
                  className='flex justify-center mb-4 relative navButton'
                  key={i}
                >
                  <a className='nav-a' href={page.path}>
                    {page.name}
                  </a>
                </li>
              ),
          )}
          <div className='flex justify-center'></div>
          <p className='hover:text-white text-[#151515] absolute top-[97%] left-2 bg-transparent text-xs'>
            STEEL! HAWKS!
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

import React from 'react';
import { resourcesData } from './data';

function ResourcesPage() {
  return (
    <div className='grid grid-cols-3 p-10 gap-y-10'>
      {resourcesData.map((section) => (
        <div>
          <h1 className='text-4xl'>{section.title}</h1>
          {section.topics.map((topic) => (
            <div>
              <li className='text-2xl mt-2 ml-6'>{topic.title}</li>
              {topic.resources.map((resources) => (
                <li className='ml-12'>
                  <a
                    className='hover:underline duration-300'
                    href={resources.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {resources.title}
                  </a>
                </li>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ResourcesPage;

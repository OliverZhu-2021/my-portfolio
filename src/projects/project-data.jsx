import projectOne from '../assets/project-1.png';
import projectTwo from '../assets/project-2.png';
import projectThree from '../assets/project-3.png'; 

const projects = {
  1: {
    title: 'SoMe platform',
    image: projectOne,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed dolor
          eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </>
    ),
    github: 'https://github.com',
    demo: 'https://netlify.com',
  },
  2: {
    title: 'Productivity App',
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed dolor
          eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </>
    ),
    github: 'https://github.com',
    demo: 'https://netlify.com',
  },
  1: {
    title: 'Food delivery App',
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed dolor
          eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </>
    ),
    github: 'https://github.com',
    demo: 'https://netlify.com',
  }
}

export default projects
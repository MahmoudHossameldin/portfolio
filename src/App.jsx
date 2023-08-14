import React from 'react';
import './App.css';

const projects = [
  {
    title: 'Product Page Editor',
    githubUrl:
      'https://github.com/MahmoudHossameldin/react-product-editor-of-page-builder',
    liveUrl: 'https://innoloft-task.netlify.app/product/edit',
    description:
      'In this project, I created a simple yet powerful page editor to simulate website and page editors and builders. I used React, TypeScript, Redux Toolkit, Tailwind CSS, React Hook Form, and more.',
  },
  {
    title: 'Todo App',
    githubUrl:
      'https://github.com/MahmoudHossameldin/todoApp-React-Redux-TypeScript-Jest-RTL',
    liveUrl: 'https://todo-ts-redux.netlify.app/',
    description:
      'In this project, I created a simple todo app. I used React, TypeScript, Redux Toolkit, and Jest+React Testing Library for Unit and End to End testing.',
  },
  {
    title: 'E-Commerce Store',
    githubUrl: 'https://github.com/MahmoudHossameldin/E-Commerce-React-Store-',
    liveUrl: 'https://trendyy.netlify.app/',
    description:
      'In this project, I created a powerful e-commerce store. I used React and Context API.',
  },
  // Add more projects here
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Mahmoud's Portfolio</h1>
      </header>
      <main className='App-main'>
        {projects.map((project, index) => (
          <div className='project-container' key={index}>
            <h2>
              Project {index + 1}: {project.title}
            </h2>
            <div className='links'>
              <div>
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub Source Code
                </a>
              </div>
              <div>
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Website
                </a>
              </div>
              <div className='desc'>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
      <footer className='App-footer'>
        <p>&copy; {new Date().getFullYear()} Mahmoud Hossameldin</p>
      </footer>
    </div>
  );
}

export default App;

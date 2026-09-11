
import React, { useEffect, useState } from 'react';
import getData from '../libs/profiledata';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getData();
        setProjectsData(data);
      } catch (error) {
        console.error(error);
        setError('Unable to load projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#080808] text-white px-6 md:px-16 lg:px-24 py-24 font-mono select-none overflow-hidden"
    >
      {/* Background Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <p className="text-[#00FF87] text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-2">
              // SELECTED WORKS
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Featured Projects<span className="text-[#00FF87]">.</span>
            </h2>
          </div>

          <span className="hidden md:inline-block text-xs text-gray-500 tracking-widest">
            ({projectsData.length.toString().padStart(2, '0')} ITEMS)
          </span>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-[#00FF87] text-sm tracking-widest">
            // LOADING PROJECTS...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-red-400 text-sm tracking-widest">
            // {error}
          </div>
        )}

        {/* Projects */}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-12">

            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="group relative border border-zinc-800 bg-[#0d0d0d]/80 hover:border-[#00FF87]/50 p-8 md:p-10 transition-all duration-300"
              >

                {/* Card Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs tracking-widest">

                  <span className="text-gray-500 font-bold">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>

                  <span className="text-[#00FF87] bg-[#00FF87]/10 px-3 py-1 border border-[#00FF87]/20 uppercase">
                    {project.language || 'PROJECT'}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#00FF87] transition-colors duration-200 mb-4">
                  {project.name}
                  <span className="text-[#00FF87]">.</span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-sans text-base md:text-lg leading-relaxed max-w-3xl mb-8 font-light">
                  {project.description || 'No description available for this project.'}
                </p>

                {/* Project Information */}
                <div className="flex flex-wrap gap-2 mb-8">

                  {project.language && (
                    <span className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono">
                      #{project.language}
                    </span>
                  )}

                  <span className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono">
                    #Stars {project.stargazers_count}
                  </span>

                  <span className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 font-mono">
                    #Forks {project.forks_count}
                  </span>

                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 text-xs tracking-widest pt-4 border-t border-zinc-900">

                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00FF87] flex items-center gap-2 transition-colors uppercase font-semibold"
                  >
                    SOURCE CODE
                    <span className="text-sm">↗</span>
                  </a>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;


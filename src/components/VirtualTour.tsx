import React, { useState } from 'react';
import plotdev from '../images/plotdev.avif'
import plotdevel from '../images/plotdevelop.jpg'
import { Play, Pause, Volume2, VolumeX, Maximize, Eye, Camera, Video } from 'lucide-react';

const VirtualTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: '55 Acres - Plot Development',
      location: 'Tosham Road',
      type: '3D Virtual Tour',
      thumbnail: plotdev,
      duration: '5:30',
      views: '2.5K',
      description: 'Experience luxury living with our premium plots featuring world-class amenities and stunning architecture.'
    },
    {
      id: 2,
      title: 'Rajat Vihar - Premium Farmhouses',
      location: 'Tosham Road',
      type: 'Drone View',
      thumbnail: 'https://images.pexels.com/photos/2042161/pexels-photo-2042161.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:45',
      views: '1.8K',
      description: 'Modern office spaces designed for productivity with state-of-the-art infrastructure and connectivity.'
    },
    {
      id: 3,
      title: 'Saraswati Vihar - Plot Development',
      location: 'Mirjapur Road',
      type: 'Site Walkthrough',
      thumbnail: plotdevel,
      duration: '4:20',
      views: '3.2K',
      description: 'RERA approved plots in a gated community with excellent infrastructure and growth potential.'
    }
  ];

  const features = [
    {
      icon: Camera,
      title: '360° Virtual Tours',
      description: 'Immersive 360-degree views of all our properties'
    },
    {
      icon: Video,
      title: 'HD Video Tours',
      description: 'High-definition video walkthroughs with expert commentary'
    },
    {
      icon: Eye,
      title: 'Drone Photography',
      description: 'Aerial views showcasing location advantages and surroundings'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
            Virtual Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Properties from Home
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take immersive virtual tours of our properties with 360° views, HD videos, and drone footage.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-16">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={projects[activeProject].thumbnail}
                alt={projects[activeProject].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 group"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{projects[activeProject].title}</h3>
                  <p className="text-gray-300 text-sm">{projects[activeProject].location}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-300 mt-1">
                  <span>1:45</span>
                  <span>{projects[activeProject].duration}</span>
                </div>
              </div>
            </div>

            {/* Project Type Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {projects[activeProject].type}
              </span>
            </div>

            {/* Views Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {projects[activeProject].views} views
              </span>
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${index === activeProject
                  ? 'ring-2 ring-blue-500 transform scale-105'
                  : 'hover:transform hover:scale-105'
                }`}
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {project.duration}
                </div>
              </div>
              <div className="p-4 bg-gray-800">
                <h4 className="font-semibold mb-1">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{project.location}</p>
                <p className="text-gray-300 text-xs">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Schedule a Live Virtual Tour</h3>
            <p className="text-blue-100 mb-6">
              Get a personalized virtual tour with our property experts and ask questions in real-time.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-medium shadow-lg">
              Book Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
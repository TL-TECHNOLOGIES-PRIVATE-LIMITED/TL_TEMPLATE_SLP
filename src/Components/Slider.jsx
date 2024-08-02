import React, { useEffect, useState } from 'react';

function Slider() {
  const images = [
    "https://i.pinimg.com/564x/b2/ad/3a/b2ad3a7b34902e87b12ea3a45ac29850.jpg",
    // car1,
    "https://i.pinimg.com/564x/fb/6c/3a/fb6c3af24a121c5b7fb6a8a876e50a0b.jpg",
    // car2,
        "https://i.pinimg.com/736x/89/f8/ed/89f8ed64a86a13c64fef2d343f294df1.jpg",
// car3,
    "https://i.pinimg.com/564x/39/4e/79/394e79bb2b970b27ee073828d3f3303c.jpg"
  ];
  const headings = [
    "Digital Marketing",
    "Website Development",
    "Server Monitoring System",
    "Video Editing"
  ];
  
  const paragraphs = [
    "Digital marketing encompasses a wide range of strategies and techniques aimed at promoting products or services online. It leverages platforms such as social media, search engines, and email to reach a broad audience, driving brand awareness and customer engagement.",
    "Website development involves creating and maintaining websites, from simple landing pages to complex web applications. It includes various aspects such as web design, content creation, coding, and database management, ensuring a seamless user experience and effective online presence.",
    "Server monitoring systems are essential for maintaining the health and performance of servers. They track metrics like uptime, resource usage, and response times, alerting administrators to potential issues before they impact users. This proactive approach helps in minimizing downtime and optimizing server efficiency.",
    "Video editing is the process of manipulating and rearranging video shots to create a new work. It involves tasks such as cutting segments, adding transitions, effects, and audio. Video editing is crucial in creating engaging content for various platforms, from social media to professional film production."
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };



  useEffect(() => {
    setChanging(true);
    
    const interval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 8 secondse
    
    setChanging(false);
    return () => clearInterval(interval); // Clear interval on component unmount

  }, []);

  return (
    <div className="relative md:h-[410px] shadow-black bg-black shadow-md lg:h-[550px] transition-all duration-300 ease-in-out  h-[400px] w-full max-w-[500px]   bg-center  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${images[currentIndex]})`
      }}>
      <div className="absolute inset-0 bg-gradient-to-t  from-black to-transparent  flex justify-end items-end">
        <div className="w-full h-[50%] flex flex-col justify-end items-start p-5 rounded-3xl rounded-t-none">
          <div>
             <h1 className={`text-3xl   font-extrabold transition-all duration-300 ease-in-out font-sans ${changing ? 'opacity-0' : 'opacity-100'}`}>
              {headings[currentIndex]}
            </h1> 
                    <div className="text-[14px] leading-tight font-bold text-stone-400">
              {paragraphs[currentIndex].slice(0,300)}
            </div>
           
          </div>
          <div className="h-14 w-full flex justify-center transition-all duration-500 items-center gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${currentIndex === index ? 'w-10 bg-stone-300' : 'w-6 bg-stone-600'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

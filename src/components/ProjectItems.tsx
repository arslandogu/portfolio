import React, { useState } from "react";
import Image from "next/image";
import Image2 from "../assets/images/firstImage.jpg";
import Modal from "./Modal";
function ProjectItems() {
  const data = [
    {
      title: "Project 1",
      image: Image2,
      imageAlt:"Project 1 kısa açıklama",
      description:
        "açıklamasdaaaaaaaaaaaaaaaaaaaaaaaaaa sadsaddsasda sadsasdasdsdsda dsasdasdsda sdasdsda ds ddas dsaad saasdasd lsdakdlksşajdsalkşd lksamdlaskndasklnd lksaddlkasmdaslk",
      url: "http://example.com/project1",
    },
    {
      title: "Project 2",
      image: Image2,
      description: "açıklama",
      imageAlt:"Project 2 kısa açıklama",
      url: "http://example.com/project2",
    },
    {
      title: "Project 3",
      image: Image2,
      description: "açıklama",
      imageAlt:"Project 3 kısa açıklama",
      url: "http://example.com/project3",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);


  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {data.map((item) => (
        <div
          key={item.title}
          className="group relative transform cursor-pointer hover:-translate-y-6 transition-all items-center flex-col-reverse flex duration-200 w-[100%] h-[200px] md:h-[300px]"
          onClick={()=>openModal(item)}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-3xl"
          />
          <div className="absolute bottom-4 left-4 z-10">
            <h1 className="text-[20px] text-white font-primary">
              {item.title}
            </h1>
            <p className="text-[15px] text-white">{item.imageAlt}</p>
          </div>
          <div className="absolute rounded-3xl inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              onClick={()=>openModal(item)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-slate-300 text-[19px] px-4 py-2 rounded-xl"
            >
              İncele
            </a>
          </div>
        </div>
      ))}
      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedProject && (
          <div className="items-center flex justify-center flex-col">
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <div>   {/* Image div  */}
            <Image className="rounded-tl-2xl rounded-tr-2xl" src={selectedProject.image} alt="projectImage"/>
            </div>

            {/* Açıklama Kısmı  */}
            <div className="relative flex-col mb-[10px] items-center flex justify-center border rounded-bl-2xl rounded-br-2xl py-3 px-2">
              <h1 className="font-bold text-xl">Proje Tanımı</h1>
            <p className="flex text-center font-normal text-lg">{selectedProject.description}</p>
            </div>

            {/* Buton Kısmı */}
            <div className=" rounded-3xl inset-0 bg-black flex items-center justify-center transition-opacity duration-300">
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-slate-300 text-[19px] px-4 py-2 rounded-xl"
            >
              Source Code
            </a>
          </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ProjectItems;

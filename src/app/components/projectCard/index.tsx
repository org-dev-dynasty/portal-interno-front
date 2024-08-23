import {
  Alarm,
  Crosshair,
  Desktop,
  DeviceMobile,
  Devices,
  Laptop,
  Storefront,
} from "@phosphor-icons/react";

const projects = [
  {
    title: "Projeto Web",
    type: "Mobile",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "Web",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "Ecomerce",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "multiplataform",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "Mobile",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "Web",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "multiplataform",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "Mobile",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
  {
    title: "Projeto Web",
    type: "Web",
    progress: 50,
    timeRemaining: "Três",
    participants: [
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
      { photo: "https://avatars.githubusercontent.com/u/100361837?v=4" },
      { photo: "https://avatars.githubusercontent.com/u/133998521?v=4" },
      {
        photo:
          "https://avatars.githubusercontent.com/u/137533443?s=400&u=0efea3b4a507cca23808ca58819a66acd8e240aa&v=4",
      },
    ],
    routes: 5,
    design: 4,
  },
];

function chooseIcon(icon: string) {
  switch (icon) {
    case "Mobile":
      return [
        <DeviceMobile className="m-auto" color="white" size={50} />,
        "bg-[#FF5F5F]",
      ];
    case "Web":
      return [
        <Desktop className="m-auto" color="white" size={50} />,
        "bg-[#54ADFF]",
      ];
    case "Ecomerce":
      return [
        <Storefront className="m-auto" color="white" size={50} />,
        "bg-[#2CB039]",
      ];
    case "multiplataform":
      return [
        <Devices className="m-auto" color="white" size={50} />,
        "bg-[#7B0CB0]",
      ];
    default:
      return [
        <Laptop className="m-auto" color="black" size={50} />,
        "bg-[#FFD700]",
      ];
  }
}
export default function ProjectCard() {
  const projectTemplate = (project: {
    title: string;
    type: string;
    progress: number;
    timeRemaining: string;
    participants: { photo: string }[];
    routes: number;
    design: number;
  }) => {
    const maxParticipantsToShow = 3;

    return (
      <>
        <div className="relative pt-1">
          <div className="hover:cursor-pointer bg-BLACK shadow-3xl shadow-white border-2 border-solid rounded-lg w-72 h-64 m-9 p-4">
            <div
              className={`${chooseIcon(project.type)[1]} absolute flex right-5 top-5 w-20 h-20 rounded-full duration-150 hover:scale-[.94]`}
            >
              {chooseIcon(project.type)[0]}
            </div>
            <h2 className="text-white font-sans font-thin text-2xl hover:underline underline-offset-2">
              {project.title}
            </h2>
            <div className="mt-4 mb-4 space-y-1">
              <div className="flex text-white space-x-2">
                <Crosshair size={28} />
                <h2 className="text-white font-sans font-thin text-lg">
                  {" "}
                  Progresso: {project.progress}%
                </h2>
              </div>
              <div className="flex text-white space-x-2">
                <Alarm size={28} />
                <h2 className="text-white font-sans font-thin text-lg">
                  {" "}
                  {project.timeRemaining} semanas restantes
                </h2>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="relative w-48">
                <h2 className="text-white font-sans font-thin text-lg">
                  Participantes:{" "}
                </h2>
                {project.participants
                  .slice(0, maxParticipantsToShow)
                  .map((participant, index) => (
                    <img
                      key={index}
                      src={participant.photo}
                      className="absolute bg-white rounded-full w-12 border-white mt-2"
                      style={{
                        left: `${index * 25}px`,
                        zIndex: maxParticipantsToShow + index,
                      }}
                      width={40}
                      height={40}
                    />
                  ))}
                {project.participants.length > maxParticipantsToShow && (
                  <div
                    className="absolute bg-white rounded-full w-12 h-12 mt-2 flex items-center justify-center border-white text-black"
                    style={{
                      left: `${maxParticipantsToShow * 25}px`,
                      zIndex: maxParticipantsToShow + 2,
                    }}
                  >
                    +{project.participants.length - maxParticipantsToShow}
                  </div>
                )}
              </div>
              <div className="flex space-x-3">
                <div className="">
                  <h2 className="text-white font-sans font-thin text-md">
                    Rotas:{" "}
                  </h2>
                  <h2 className="text-white text-xl bg-ORANGE text-center w-12 h-12 rounded-full content-center mt-2">
                    {project.routes}
                  </h2>
                </div>
                <div>
                  <h2 className="text-white font-sans font-thin text-md">
                    Design:{" "}
                  </h2>
                  <h2 className="text-white text-xl bg-ORANGE text-center w-12 h-12 rounded-full content-center mt-2">
                    {project.design}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-wrap">
      {projects.map((project, index) => (
        <div key={index}>{projectTemplate(project)}</div>
      ))}
    </div>
  );
}

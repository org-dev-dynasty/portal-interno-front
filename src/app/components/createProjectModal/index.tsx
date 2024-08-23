import { Plus, UserCircle, XCircle } from "@phosphor-icons/react";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

type Member = {
  name: string;
};

type CreateProjectModalProps = {
  onClose: () => void;
};

export default function CreateProjectModal({
  onClose,
}: CreateProjectModalProps) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState<Member[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const members = [
    { name: "Tokugi" },
    { name: "Jota" },
    { name: "Merola" },
    { name: "Zoletti" },
    { name: "Yuri" },
  ];

  const addMember = (member: Member) => {
    if (!participants.some((p) => p.name === member.name)) {
      setParticipants([...participants, member]);
    }
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"></div>

      <div className="z-50 fixed inset-0 flex items-center justify-center">
        <div className="relative flex flex-col sm:flex-row w-11/12 sm:w-4/5 lg:w-2/3 lg:h-[471px] bg-BLACK p-6 sm:p-8 lg:p-10 m-auto items-center rounded-3xl border-2">
          <XCircle
            size={32}
            className="absolute hover:text-red-800 text-red-600 top-4 right-4 hover:cursor-pointer"
            onClick={onClose}
          />
          <div className="w-full sm:w-2/3 lg:w-2/3 space-y-6 sm:space-y-8 lg:space-y-10">
            <div>
              <label className="block text-lg sm:text-xl lg:text-xl text-white ml-2 mb-2">
                Name:
              </label>
              <InputText
                onChange={(e) => setName(e.target.value)}
                className="text-white text-xs sm:text-sm lg:text-xl w-full sm:w-11/12 h-8 sm:h-10 lg:h-12 p-2 border-2 shadow-white shadow-sm bg-BLACK rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                value={name}
                placeholder="Project name"
              />
            </div>
            <div>
              <label className="block text-lg sm:text-xl lg:text-xl text-white ml-2 mb-2">
                Project type:
              </label>
              <select className="text-xs sm:text-sm lg:text-xl w-full sm:w-11/12 h-8 sm:h-10 lg:h-12 p-2 border-2 shadow-white shadow-sm bg-BLACK rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-white">
                <option value="" disabled>
                  Select project type
                </option>
                <option value="Web">Web</option>
                <option value="Mobile">Mobile</option>
                <option value="Multiplat">Multiplat</option>
                <option value="eComerce">eComerce</option>
              </select>
            </div>
            <div className="flex flex-row sm:flex-row lg:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm sm:text-xl lg:text-xl text-white ml-2 mb-2">
                  Duration:
                </label>
                <InputText
                  onChange={(e) => setDuration(e.target.value)}
                  className="text-white text-xs sm:text-sm lg:text-xl w-full h-8 sm:h-10 lg:h-12 p-2 border-2 shadow-white shadow-sm bg-BLACK rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={duration}
                  placeholder="Number"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm sm:text-xl lg:text-xl text-white ml-2 mb-2">
                  Duration unit:
                </label>
                <select className="text-2xs sm:text-sm lg:text-xl w-full h-8 sm:h-10 lg:h-12 p-2 border-2 shadow-white shadow-sm bg-BLACK rounded-md drop-shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-white">
                  <option value="" disabled>
                    Weeks/Days/Months...
                  </option>
                  <option value="Days">Days</option>
                  <option value="Weeks">Weeks</option>
                  <option value="Months">Months</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/3 lg:w-1/3 h-full justify-between py-6 sm:py-7 lg:py-10">
            <div className="flex flex-col">
              <p className="flex justify-center mb-3 text-lg sm:text-xl lg:text-xl">
                Participants:
              </p>
              <div className="flex flex-col ml-auto mr-auto space-y-2 rounded-lg h-40 w-full sm:w-48 lg:w-48 p-3 border-2 overflow-y-auto">
                {participants.map((participant, index) => (
                  <div key={index} className="flex items-center">
                    <UserCircle size={32} />
                    <span className="text-white ml-2">{participant.name}</span>
                  </div>
                ))}
              </div>
              <div className="relative mt-4">
                <div className="flex justify-center">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex rounded-full w-10 h-10 bg-ORANGE justify-center items-center hover:bg-LIGHT_ORANGE duration-300"
                  >
                    <Plus size={24} color="white" />
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className="absolute mt-14 h-36 w-40 ml-auto mr-auto inset-0 overflow-y-auto bg-white border rounded shadow-lg">
                    {members.map((member, index) => (
                      <div
                        key={index}
                        onClick={() => addMember(member)}
                        className="cursor-pointer p-2 hover:bg-gray-200 text-black"
                      >
                        {member.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex">
              <button
                className="bg-ORANGE w-full sm:w-30 lg:w-30 h-12 sm:h-16 lg:h-16 rounded-lg mt-10 mx-auto hover:bg-LIGHT_ORANGE"
                onClick={onClose}
              >
                <p className="text-white text-lg sm:text-xl lg:text-xl">
                  Create
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";

interface ProfileCards {
  id: number;
  name: string;
  occupation: string;
  location: string;
  image: string;
}


interface NurseProfile extends ProfileCards {
  messageCount: number;
  atMentionCount: number;
  isSelected: boolean;
}

const MessageIcon = () => {
    return(
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.19047 1.14286C2.73582 1.14286 2.29978 1.32347 1.97829 1.64496C1.6568 1.96645 1.47619 2.40249 1.47619 2.85714V7.42857C1.47619 7.88323 1.6568 8.31926 1.97829 8.64076C2.29978 8.96225 2.73582 9.14286 3.19047 9.14286H4.71428C4.86584 9.14286 5.01118 9.20306 5.11835 9.31023L7 11.1919L8.88165 9.31023C8.98882 9.20306 9.13416 9.14286 9.28571 9.14286H10.8095C11.2642 9.14286 11.7002 8.96225 12.0217 8.64076C12.3432 8.31926 12.5238 7.88323 12.5238 7.42857V2.85714C12.5238 2.40249 12.3432 1.96645 12.0217 1.64496C11.7002 1.32347 11.2642 1.14286 10.8095 1.14286H3.19047ZM1.17017 0.836838C1.70599 0.30102 2.43271 0 3.19047 0H10.8095C11.5673 0 12.294 0.30102 12.8298 0.836838C13.3656 1.37266 13.6667 2.09938 13.6667 2.85714V7.42857C13.6667 8.18633 13.3656 8.91306 12.8298 9.44888C12.294 9.9847 11.5673 10.2857 10.8095 10.2857H9.52241L7.40406 12.4041C7.1809 12.6272 6.81909 12.6272 6.59594 12.4041L4.47759 10.2857H3.19047C2.43271 10.2857 1.70599 9.9847 1.17017 9.44888C0.634352 8.91306 0.333332 8.18633 0.333332 7.42857V2.85714C0.333332 2.09938 0.634352 1.37266 1.17017 0.836838ZM3.38095 3.61905C3.38095 3.30346 3.63679 3.04762 3.95238 3.04762H10.0476C10.3632 3.04762 10.619 3.30346 10.619 3.61905C10.619 3.93464 10.3632 4.19048 10.0476 4.19048H3.95238C3.63679 4.19048 3.38095 3.93464 3.38095 3.61905ZM3.38095 6.66667C3.38095 6.35108 3.63679 6.09524 3.95238 6.09524H8.52381C8.8394 6.09524 9.09524 6.35108 9.09524 6.66667C9.09524 6.98226 8.8394 7.2381 8.52381 7.2381H3.95238C3.63679 7.2381 3.38095 6.98226 3.38095 6.66667Z" fill="#A0AEC0"/>
        </svg>        
    )
   
}

const MoreHorizontalIcon = () => {
    return(
        <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 4C10.1046 4 11 3.10457 11 2C11 0.895431 10.1046 0 9 0C7.89543 0 7 0.895431 7 2C7 3.10457 7.89543 4 9 4Z" fill="#111827"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895432 0 0 0.895431 0 2C0 3.10457 0.895432 4 2 4Z" fill="#111827"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#111827"/>
        </svg>
    )
    

}

const AddIcon = () => {

    return(
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.99999 0.333334C7.46023 0.333334 7.83333 0.70643 7.83333 1.16667V12.8333C7.83333 13.2936 7.46023 13.6667 6.99999 13.6667C6.53976 13.6667 6.16666 13.2936 6.16666 12.8333V1.16667C6.16666 0.70643 6.53976 0.333334 6.99999 0.333334Z" fill="#111827"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.333328 7C0.333328 6.53976 0.706424 6.16667 1.16666 6.16667H12.8333C13.2936 6.16667 13.6667 6.53976 13.6667 7C13.6667 7.46024 13.2936 7.83333 12.8333 7.83333H1.16666C0.706424 7.83333 0.333328 7.46024 0.333328 7Z" fill="#111827"/>
        </svg>

    )
}

const AltIcon = () => {
    return(
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 1.83334C4.59425 1.83334 1.83334 4.59425 1.83334 8.00001C1.83334 11.4058 4.59425 14.1667 8 14.1667C11.4058 14.1667 14.1667 11.4058 14.1667 8.00001C14.1667 4.59425 11.4058 1.83334 8 1.83334ZM0.833336 8.00001C0.833336 4.04197 4.04196 0.833344 8 0.833344C11.958 0.833344 15.1667 4.04197 15.1667 8.00001C15.1667 11.9581 11.958 15.1667 8 15.1667C4.04196 15.1667 0.833336 11.9581 0.833336 8.00001ZM6.43424 5.08532C7.67528 3.85219 9.67769 3.85057 10.9136 5.08645L10.9147 5.08758C12.1478 6.32862 12.1495 8.33101 10.9136 9.56689L9.43355 11.0469C8.71829 11.7622 7.55503 11.7622 6.83977 11.0469C6.1245 10.3316 6.1245 9.16837 6.83977 8.45311L7.77979 7.5131C7.97506 7.31784 8.29164 7.31785 8.4869 7.51311C8.68216 7.70837 8.68216 8.02496 8.48689 8.22022L7.54687 9.16022C7.22214 9.48495 7.22214 10.0151 7.54687 10.3398C7.87161 10.6645 8.4017 10.6645 8.72644 10.3398L10.2065 8.85979C11.0504 8.01585 11.0522 6.64531 10.2059 5.79298C9.36189 4.94961 7.99174 4.94802 7.13961 5.79417L7.13908 5.79468L5.52689 7.40688C4.82882 8.10495 4.82882 9.23504 5.52689 9.93311C5.72215 10.1284 5.72215 10.445 5.52689 10.6402C5.33163 10.8355 5.01505 10.8355 4.81979 10.6402C3.73119 9.55162 3.73119 7.78837 4.81979 6.69977L6.43424 5.08532Z" fill="#A0AEC0"/>
        </svg>
    )
}

const ProfileCard: React.FC<{ nurse: NurseProfile }> = ({ nurse }) => {
  return (
    <div className={`bg-white rounded-xl p-4 border-none ${nurse.isSelected ? 'border-purple-500' : 'border-transparent'} mb-3`}>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-10 h-10 relative overflow-hidden rounded-full">
            <Image 
              src={nurse.image} 
              alt={`${nurse.name}'s profile`} 
              width={40}
              height={40}
              className="object-cover"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-black">{nurse.name}</h3>
            <p className="text-black">{nurse.occupation}, {nurse.location}</p>
          </div>
        </div>
        <button className="text-gray-600">
          <MoreHorizontalIcon/>
        </button>
      </div>
      
      <div className="flex mt-4">
        <div className="flex items-center mr-4">
         <MessageIcon/>
          <span className="text-gray-400">{nurse.messageCount}</span>
        </div>
        <div className="flex items-center">
          <AltIcon/>
          <span className="text-gray-400">{nurse.atMentionCount}</span>
        </div>
      </div>
      
      {!nurse.isSelected && (
        <div className="flex justify-center mt-2">
          <div className="bg-purple-500 text-white text-xs py-1 px-2 rounded-full">
            254 × 117 Hug
          </div>
        </div>
      )}
    </div>
  );
};



const Profile: React.FC = () => {

  const nurses: NurseProfile[] = [
    {
      id: 1,
      name: "Skylar Calzoni",
      occupation: "Nurse",
      location: "Manchester",
      image: "/Skylar.svg",
      messageCount: 3,
      atMentionCount: 1,
      isSelected: true,
    },
    {
      id: 2,
      name: "Alfredo Gouse",
      occupation: "Nurse",
      location: "Watford",
      image: "/Alfredo.svg",
      messageCount: 1,
      atMentionCount: 0,
      isSelected: false,
    },
    {
      id: 3,
      name: "James Carder",
      occupation: "Nurse",
      location: "Milton Keynes",
      image: "/James.svg",
      messageCount: 0,
      atMentionCount: 2,
      isSelected: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="bg-gray-100 rounded-3xl p-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-sm leading-8 font-semibold text-black">Put Forward</h1>
            <div className=" border-2 border-[#27A376] bg-white-500 text-[#27A376] font-semibold rounded-xl w-8 h-8 flex items-center justify-center">
              {nurses.length}
            </div>
          </div>
          <button className="text-2xl font-bold">
            <AddIcon/>
          </button>
        </div>
        
        <div className="space-y-2">
          {nurses.map((nurse) => (
            <ProfileCard key={nurse.id} nurse={nurse} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
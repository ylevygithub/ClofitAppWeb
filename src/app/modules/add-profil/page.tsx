"use client"
import React, { FormEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShirt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';
import { Flex } from '@radix-ui/themes';

export default function AddProfilPage() {
	const router = useRouter();
  // const { profils, setProfils } = useProfil();

  const [profil, setProfil] = useState<string>('');

  useEffect(() => {
    // Récupérer les données depuis localStorage
    const profilsData = localStorage.getItem('profils');
    if (profilsData) {
      const profils = JSON.parse(profilsData);
      setProfil(profils.profil);
    }
  }, []);  


  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">

      <button onClick={() => router.push('/modules')} style={{position: 'absolute', left: '20px', top: '20px'}} className='button_style'>Menu</button>

      <FontAwesomeIcon size='6x' icon={faShirt} fade/>

      <div className="mb-32 grid text-center ">
        <div 
          onClick={() => router.push("/modules/choose-profil")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          style={{cursor: 'pointer'}}
        >
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Ajouter un profil</span>
          {/* <span>{profilsData}</span> */}
          {/* {profils.map((profil: any) => (
            <span>{profil.profil}</span>
          ))} */}
        </div>
        <div 
          onClick={() => {}}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          style={{cursor: 'pointer'}}
        >
          <span>{profil}</span>
        </div>
      </div>

      {/********************** Profils ********************* */}
    </div>
  );
}

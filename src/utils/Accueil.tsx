import React, { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faShirt,
  faHouse,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Text, TextFieldInput } from '@radix-ui/themes';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useUser } from '../../contexts/user';

export default function Accueil() {
  // State to keep track of the user if hes connected or not
  const {userConnected} = useUser();
  const [connexionClicked, setConnexionClicked] = useState<boolean>(false);
  const [inscriptionClicked, setInscriptionClicked] = useState<boolean>(false);
	const router = useRouter();
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

    alert('Ca submit')
		// router.push("/demographics");
	};

  return (
    <div>
      <div className='logocss'>
        <Image
            src="/ClofitWhite.png"
            alt="clofit Logo"
            width={100}
            height={24}
          />
      </div>
      <div className='clofitText'>
        <Text>Clofit</Text>
      </div>

      <hr className="rounded"/>

      <div className='tailleQuiCompte'>
        <Text>Parce que c'est la taille qui compte</Text>
      </div>


      {
        !userConnected ?
          <div className="flex flex-col items-center">
            <button
              className='button_style'
              onClick={() => router.push("/login")} 
            >
              Connexion
            </button>

            <button
              className='button_style'
              onClick={() => router.push("/subscribe")} 
            >
              Inscription
            </button>
          </div>
        :
            <div className="flex flex-col items-center">
              <button
                className='button_style'
                onClick={() => router.push("/modules")} 
              >
                Modules
              </button>
            </div>
      }

    </div>
  );
}

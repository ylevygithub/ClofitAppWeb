"use client"
import React, { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {
  faShirt,
  faHouse,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, Text, TextFieldInput } from '@radix-ui/themes';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

interface UserIconState {
  beat: boolean;
  color: string;
}

export default function AddProfilPage() {
  // State to control the bounce and color change of the user icon
  const [userIconState, setUserIconState] = useState<UserIconState>({
    beat: false,
    color: 'black',
  });

  // State to control the visibility of the popup and buttons
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false);

  // State to keep track of the user if hes connected or not
  const [userConnected, setUserConnected] = useState<boolean>(false);
  const [connexionClicked, setConnexionClicked] = useState<boolean>(false);
  const [inscriptionClicked, setInscriptionClicked] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
	const router = useRouter();

  // Function to handle module clicks
  const handleModuleClick = (): void => {
    setUserIconState({ beat: true, color: 'red' });
    setShowPopup(true);
  };

  // Function to handle user icon click
  const handleUserIconClick = (): void => {
    setShowButtons(!showButtons);
    setUserIconState({ ...userIconState, beat: false });
    setShowPopup(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

    alert('Ca submit')

		// setBasePrefix(
		// 	`${supplier?.prefix}${email}/${
		// 		supplier?.name
		// 	}${getCurrentDateTimeString()}`
		// );

		// router.push("/demographics");
	};
// userId : "rec3fqd8XUuJsZ0r6"
// token:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJyZWMzZnFkOFhVdUpzWjByNiIsInN0YXR1cyI6InVzZXIiLCJpYXQiOjE3MDExOTAxMzMsImV4cCI6MTcwMTE5MzczM30.gLyzwxfUMkFpvMe4WA5bMEcWEpQeetWOzYCpiln6psM"
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">

      <FontAwesomeIcon size='6x' icon={faShirt} fade/>

      <div className="mb-32 grid text-center ">
        <div 
          onClick={() => router.push("/modules/choose-profil")}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          style={{cursor: 'pointer'}}
        >
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Ajouter un profil</span>
        </div>
      </div>

      {/********************** Profils ********************* */}
    </div>
  );
}

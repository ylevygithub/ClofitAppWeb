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

interface UserIconState {
  beat: boolean;
  color: string;
}

export default function Test() {
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button
          variant='ghost'
          size='4'
          color='red'
          style={{ marginTop: '20px' }}
        >
          <FontAwesomeIcon
            icon={faUser}
            // beat
            size="5x"
            className={`cursor-pointer ${userIconState.beat ? 'animate-bounce' : ''}`}
            style={{ color: userIconState.color }}
            onClick={handleUserIconClick}
          />
        </Button>

        <div >
          <Button onClick={() => router.push("/login")} style={{ marginBottom: '10px', marginTop: '20px'}} >Connexion</Button>
          <button className="rounded bg-green-500 px-4 py-2 text-white">Inscription</button>
        </div>

        {/* {connexionClicked === true &&
        <div className="absolute right-0 mt-2 flex flex-col items-end">
          <form onSubmit={handleSubmit}>
            <TextFieldInput type="email" onChange={handleEmailChange} value={email ?? ""} placeholder="m@example.com" required/>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mot de passe" />

            <Button type="submit" className="rounded bg-green-500 px-4 py-2 text-white">Se Connecter</Button><br /><br />
          </form>

        </div>
        }
        
      </div> */}

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/logo.jpg"
              alt="clofit Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Text
          className="relative dark:drop-shadow-[0_0_0.8rem_#ffffff70] dark:invert increase-font-size"
        >
          Clofit
      </Text>
      </div>

      {/********************** MODULES ********************* */}
      <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {/* Wrap each module with a div to handle click events */}
        <div 
          onClick={handleModuleClick}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          {/* ... module 1 ... */}
          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={userConnected === false}
          > */}
            <h2 className={`mb-3 text-2xl font-semibold`}>
            <FontAwesomeIcon size='sm' icon={faShirt} fade/>
            
            {' '}
              <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Que vous soyez un enfant, une femme ou bien un homme, vous pouvez créer votre profil de mensurations.
            </p>
          {/* </a> */}
        </div>
        <div 
          onClick={handleModuleClick}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          {/* ... module 2 ... */}
          {/* <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            <h2 className={`mb-3 text-2xl font-semibold`}>
            <FontAwesomeIcon size='sm' icon={faHouse} bounce/>
              {' '}
              <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Comparez votre profil avec votre vêtement choisi en collant l'url de celui-ci !
            </p>
          {/* </a> */}
        </div>
        <div 
          onClick={handleModuleClick}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          {/* ... module 3 ... */}
          {/* <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            <h2 className={`mb-3 text-2xl font-semibold`}>
            <FontAwesomeIcon size='sm' icon={faGear} spin/>
              {' '}
              <span className="inline-block transition-transform group-hover:translate-x-5 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Vous souhaitez vous déconnecter, changer votre mot de passe ou encore, supprimer votre compte ?
              C'est par ici que ca se passe !
            </p>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

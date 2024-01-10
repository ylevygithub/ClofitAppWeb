"use client"

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Flex } from '@radix-ui/themes';
import { useState } from 'react';
import '../styles/form.css';
import { useUser } from '../../contexts/user';
import { useRouter } from 'next/navigation';
import { ClofitAPI } from './ClofitApi';

const MyFormSubscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  const {setUserConnected, setToken, setUserId} = useUser();
	const router = useRouter();

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log('Email:', email, 'Password:', password);
  //   setUserConnected(true);
  //   router.push('/');
  // };

  const handleInscription = async () => {
    try {
        const response = await ClofitAPI.inscrireUtilisateur({ email, password, name });
        console.log('Inscription réussie:', response);
        if (response.statusMessage === 'email already use') alert('Email already used');
        else {
          setToken(response.token);
          localStorage.setItem('token', response.token);
          setUserId(response.userId);
          localStorage.setItem('userId', response.userId);
          setUserConnected(true);
          router.push('/');
        }
        // Traitez la réponse selon vos besoins
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
    }
  };

  return (
    <Flex gap='3' direction='column' justify='center'>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div style={{textAlign: 'center'}}>
            <button type="submit" className='button_style'>Cliquez ici pour vous inscrire</button>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="overlay-styles"/>
          <br />
          <Dialog.Content className="content-styles" style={{textAlign: 'center', padding: '20px' }}>
            <Dialog.Title style={{ marginBottom: '20px', fontWeight: 'bold'}}>Inscrivez vous</Dialog.Title>
            {/* <form onSubmit={handleSubmit}> */}
              <Flex gap='3' direction='column' justify='center'>
                <div style={{ padding: '20px'}}>
                  <label htmlFor="name">Name </label>
                  <input
                    style={{border: '2px solid #ddd'}}
                    type="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div style={{ padding: '20px'}}>
                  <label htmlFor="email">Email </label>
                  <input
                    style={{border: '2px solid #ddd'}}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div style={{ padding: '20px'}}>
                  <label htmlFor="password">Password </label>
                  <input
                    style={{border: '2px solid #ddd'}}
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* <div style={{ padding: '20px'}}>
                  <label htmlFor="checked">J'ai lu et j'accepte la 
                  <a href="https://clofit.fr/privacy-policy.html">politique de confidentialité</a> </label>
                  <input
                    style={{border: '2px solid #ddd'}}
                    type="checkbox"
                    id="checked"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                </div>
 */}
                <div style={{textAlign: 'center'}}>
                  <button onClick={handleInscription} className='button_style'>S'inscrire</button>
                </div>
              </Flex>
            {/* </form> */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Flex>
  );
}

export default MyFormSubscribe;
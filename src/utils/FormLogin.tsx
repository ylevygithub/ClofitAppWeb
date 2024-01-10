import * as Dialog from '@radix-ui/react-dialog';
import { Flex } from '@radix-ui/themes';
import { useState } from 'react';
import { ClofitAPI } from './ClofitApi';
import { useUser } from '../../contexts/user';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUserConnected, setToken, setUserId} = useUser();
	const router = useRouter();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [messageError, setMessageError] = useState('');
  const [forget, setForget] = useState(false);

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log('Email:', email, 'Password:', password);
  // };
  const handlePasswordChange = async () => {
    if (newPassword !== newPasswordConfirmation) {
      setMessageError('Les mots de passe doivent être identiques.');
      return;
    }
    if (!newPassword.match(/[0-9]/g) || newPassword.length < 8) {
      setMessageError('Le mot de passe doit contenir au moins 8 caractères et inclure un chiffre.');
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      if (!userId) throw new Error("User ID is missing.");
      if (!token) throw new Error("Token is missing.");

      const response = await ClofitAPI.ChangePasswordUtilisateur(token, {
        userId: userId,
        oldPass: oldPassword,
        newPass: newPassword
      });

      if (response.statusMessage === 'Password mismatch') {
        setMessageError("L'ancien mot de passe est incorrect.");
      } else {
        setMessageError('Mot de passe modifié avec succès.');
        // Redirect to home or login page
      }
    } catch (error) {
      console.error('error', error);
      setMessageError("Une erreur est survenue lors de la modification du mot de passe.");
    }
  };

  const handleConnexion = async () => {
    try {
        const response = await ClofitAPI.connexionUtilisateur({ email, password });
        console.log('Connexion :', response);
        if (response.statusMessage === 'Wrong password') alert('Wrong password');
        else if (response.statusMessage === 'User Unkown') alert('User unknown');
        else {
          console.log('Connexion réussie:', response);
          setToken(response.token);
          localStorage.setItem('token', response.token);
          setUserId(response.userId);
          localStorage.setItem('userId', response.userId);
          setUserConnected(true);
          router.push('/');
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild >
        <div style={{textAlign: 'center', padding: '20px'}}>
          <button className='button_style'>Cliquez ici pour vous connecter</button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay-styles"/>
        <br />
        <Dialog.Content className="content-styles" style={{textAlign: 'center', padding: '20px' }}>
          <Dialog.Title style={{ marginBottom: '20px', fontWeight: 'bold'}}>Connectez vous à votre compte</Dialog.Title>
            <Flex gap='3' direction='column' justify='center'>
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

              <div style={{textAlign: 'center'}}>
                <button onClick={handleConnexion} className='button_style'>Se connecter</button>
              </div>

              {/* <div style={{textAlign: 'center'}}>
                <button onClick={() => setForget(true)} className='button_style'>Mot de passe oublié ?</button>
              </div> */}

              <div style={{textAlign: 'center'}}>
                <Dialog.Title style={{ marginTop: '40px' }}>Vous n'avez pas de compte ? Inscrivez vous :D</Dialog.Title>
                <button onClick={() => router.push("/subscribe")} className='button_style'>S'inscrire</button>
              </div>
            </Flex>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginPage;

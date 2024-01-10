"use client"

import React from 'react';
import { NextPage } from 'next';
import styles from '../styles/Settings.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../../contexts/user';
import { useRouter } from 'next/navigation';
import { ClofitAPI } from './ClofitApi';

const Settings: NextPage = () => {
  const {setUserConnected, token, userId, setToken, setUserId} = useUser();
	const router = useRouter();

  const handleLogout = () => {
    // Logic for logging out
    setUserConnected(false);
    router.push('/');
  };

  const handleDeleteAccount = async () => {
    try {
        const response = await ClofitAPI.deleteUtilisateur(token, { userId });
        console.log('Suppression réussie:', response);
        // Traitez la réponse selon vos besoins
    } catch (error) {
        console.error('Erreur lors de la suppression:', error);
    }
    setToken('');
    setUserId('');
    setUserConnected(false);
    router.push('/');
  };

  return (
    <div className={styles.pageContainer}>
      <FontAwesomeIcon size='6x' icon={faGear} spin/>
      <br /><br /><br />

      <button className={styles.logoutButton} onClick={handleLogout}>
        Déconnexion
      </button>
      <button className={styles.deleteButton} onClick={handleDeleteAccount}>
        Suppression
      </button>
    </div>
  );
};

export default Settings;

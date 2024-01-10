"use client"

import React from 'react';
import styles from '../styles/ChooseProfile.module.css'; // Assurez-vous de créer ce fichier CSS
import { faBaby, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const ChooseProfile = () => {
  // Ajoutez ici toute logique supplémentaire si nécessaire
	const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.card} id={styles.man} onClick={() => router.push("/modules/profil-selection")}>
        <span className={styles.cardTitle}>Homme</span>
        <div className={styles.iconContainer}>
          {/* Ici, vous pouvez ajouter votre icône d'homme */}
          <FontAwesomeIcon size='5x' icon={faPerson} />
        </div>
      </div>

      <div className={styles.card} id={styles.woman} onClick={() => router.push("/modules/profil-selection")}>
        <span className={styles.cardTitle}>Femme</span>
        <div className={styles.iconContainer}>
          {/* Ici, vous pouvez ajouter votre icône de femme */}
          <FontAwesomeIcon size='5x' icon={faPersonDress} />
        </div>
      </div>

      <div className={styles.card} id={styles.child} onClick={() => router.push("/modules/profil-selection")}>
        <span className={styles.cardTitle}>Enfant</span>
        <div className={styles.iconContainer}>
          {/* Ici, vous pouvez ajouter votre icône d'enfant */}
          <FontAwesomeIcon size='5x' icon={faBaby} />
        </div>
      </div>
    </div>
  );
};

export default ChooseProfile;

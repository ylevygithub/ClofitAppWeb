"use client"

import React from 'react';
import styles from '../styles/ProfileSelection.module.css'; // Assurez-vous de créer ce fichier CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const ProfileSelection = () => {
	const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.card} id={styles.upperBody} onClick={() => router.push("/modules/measurements-upper_body")}>
        <span className={styles.cardTitle}>Haut du corps</span>
        <div className={styles.iconContainer}>
          {/* Ici, ajoutez l'icône ou l'image pour "Haut du corps" */}
          <FontAwesomeIcon size='5x' icon={faUser} shapeRendering={5} />
        </div>
      </div>

      <div className={styles.card} id={styles.fromTshirt} onClick={() => router.push("/modules/measurements-shirt")}>
        <span className={styles.cardTitle}>À partir d'un t-shirt</span>
        <div className={styles.iconContainer}>
          {/* Ici, ajoutez l'icône ou l'image pour "À partir d'un t-shirt" */}
          <FontAwesomeIcon size='5x' icon={faShirt} shapeRendering={5} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;

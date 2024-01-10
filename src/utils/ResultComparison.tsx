"use client"

import React, { useState } from 'react';
import styles from '../styles/Comparaison.module.css'; // Importez votre module CSS ici
import { Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

const ResultComparison: React.FC = () => {
  const router = useRouter();

  const menuPrincipal = () => {
    // Redirection vers une autre page sur confirmation
    router.push('/modules');
  };

  return (
    <div className={styles.gradientBackground}>
      <div className={styles.inputContainer}>
      <h1 className="text-2xl font-bold text-white mb-6" style={{marginBottom: '30px'}}>Resultat</h1>
        <div style={{marginBottom: '30px'}}>
          <Text highContrast={true} color='ruby' align='center' weight='bold' size='7' >
            Il vous faut du L !!!
          </Text>
        </div>
        <button className={styles.confirmButton} onClick={menuPrincipal}>Retour au menu principal</button>
      </div>
    </div>
  );
};

// Mensuration : Model.copareSize 

// body =

// userSizes : 
// {
// longueur_manche,
// hauteur_totale,
// largeur_poitrine
// }

// item : {size:s, m, l,...} = le s que veut l user

// Vetement : Algo.compare

// le body est le meme mais il y a en plus meta

// meta : {}


export default ResultComparison;

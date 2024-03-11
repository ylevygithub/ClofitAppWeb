"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Comparaison.module.css'; // Importez votre module CSS ici
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Comparaison: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [productInfo, setProductInfo] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();

  const extractProductInfo = (url: string): string => {
    try {
      const path = new URL(url).pathname;
      const productPathSegments = path.split('/').filter(Boolean);
      return productPathSegments[productPathSegments.length - 1].replace(/-/g, ' ');
    } catch (error) {
      console.error('Invalid URL:', error);
      return '';
    }
  };

  const handleConfirm = () => {
    const info = extractProductInfo(inputValue);
    if (info) {
      setProductInfo(info);
      setIsConfirmed(true);
    }
  };

  const handleCancel = () => {
    // Redirection vers une autre page sur annulation
    router.back();
  };

  const getLastWord = (chaine: string): string => {
    const words = chaine.split(" ");
    const lastWord = words[words.length - 1];
    return lastWord;
  }
  
  const handleFinalConfirm = () => {
    localStorage.setItem('itemName', getLastWord(productInfo));
    // Redirection vers une autre page sur confirmation
    router.push('/compare/last-comparison');
  };

  return (
    <div className={styles.gradientBackground}>

      {!isConfirmed ? (
        <div className={styles.inputContainer}>
          <FontAwesomeIcon size='6x' icon={faHouse} bounce/>
          <br /><br /><br />

          <input
            style={{width: "100%"}}
            type="text"
            placeholder="URL du vêtement que tu souhaite comparer"
            className={styles.inputField}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.confirmButton} onClick={handleConfirm}>
            Confirmer
          </button>
        </div>
      ) : (
        <div className={styles.confirmationContainer}>
          <FontAwesomeIcon size='6x' icon={faHouse} bounce/>
          <br /><br /><br />

          <p className={styles.confirmationText}>Est-ce bien ce vêtement que tu veux comparer ?</p>
          <p className={styles.productInfo}>{productInfo}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.cancelButton} onClick={handleCancel}>
              Annuler
            </button>
            <button className={styles.confirmButton} onClick={handleFinalConfirm}>
              Confirmer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comparaison;

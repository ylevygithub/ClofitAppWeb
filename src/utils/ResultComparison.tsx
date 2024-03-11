"use client"

import React, { useEffect, useState } from 'react';
import styles from '../styles/Comparaison.module.css'; // Importez votre module CSS ici
import { Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useUser } from '../../contexts/user';
import { AlgoRequest, ClofitAPI } from './ClofitApi';

const ResultComparison: React.FC = () => {
  const router = useRouter();

  const [profil, setProfil] = useState<string>('');
  const [longueur_manche, setLongueur_manche] = useState('');
  const [hauteur_totale, setHauteur_totale] = useState('');
  const [largeur_poitrine, setLargeur_poitrine] = useState('');

  // let tokenLS = null;
  // let itemName: string = "";
  // let itemSize: string = "";
  const [resultPercentage, setResultPercentage] = useState(0);
  const [token, setToken] = useState('');
  let IName = null;
  let ISize = null;

const [itemName, setItemName] = useState<string>("");
const [itemSize, setItemSize] = useState<string>("");

useEffect(() => {
  // Récupérer les données depuis localStorage
  const profilsData = localStorage.getItem('profils');
  const tokenLS = localStorage.getItem('token');
  if (profilsData) {
    const profils = JSON.parse(profilsData);
    setProfil(profils.profil);
    setLongueur_manche(profils.shoulderToShoulder);
    setHauteur_totale(profils.backLength);
    setLargeur_poitrine(profils.chestSize);
    // Update state
    setToken(tokenLS!);
    setItemName(localStorage.getItem("itemName") || "");
    setItemSize(localStorage.getItem("itemSize") || "");
  }
}, []);

  // useEffect(() => {
  //   // Récupérer les données depuis localStorage
  //   const profilsData = localStorage.getItem('profils');
  //   tokenLS = localStorage.getItem('token');
  //   if (profilsData) {
  //     const profils = JSON.parse(profilsData);
  //     setProfil(profils.profil);
  //     setLongueur_manche(profils.shoulderToShoulder)
  //     setHauteur_totale(profils.backLength)
  //     setLargeur_poitrine(profils.chestSize)
  //     // setToken(tokenLS!);
  //     itemName = localStorage.getItem("itemName")!;
  //     itemSize = localStorage.getItem("itemSize")!;
  //     ISize = itemSize;
  //     IName = itemName;
  //   }
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const obj: AlgoRequest = { 
          userSizes: {
            longueur_manche: parseInt(longueur_manche, 10),
            hauteur_totale: parseInt(hauteur_totale, 10),
            largeur_poitrine: parseInt(largeur_poitrine, 10)
          },
          item: {
            name: itemName!.toUpperCase(),
            size: itemSize!.toLowerCase()
          }
        };
        const response = await ClofitAPI.resultAlgo(token!, obj);
        console.log("FFFFFFFFFFFFF", response);
        
        if (response.results.meanPercentage) {
          setResultPercentage(response.results.meanPercentage);
          console.log("Result algo worked successfully. Percentage is :", resultPercentage);
          console.log('And Response is :', response);
        } else {
          console.log('Something went wrong with algo. Didn\'t get percentage');
        }
      } catch (error) {
        console.error('Erreur lors du resultat d\'algo:', error);
      }
    };
  
    fetchData();
  }, [largeur_poitrine, itemName, itemSize, token]);

  const menuPrincipal = () => {
    // Redirection vers une autre page sur confirmation
    router.push('/compare/last-comparison');
  };

  const finalFitSize = () =>  {
    // Définir un tableau avec les tailles disponibles
    const tailles = ["S", "M", "L", "XL"];
    
    // Générer un index aléatoire basé sur la longueur du tableau
    const indexAleatoire = Math.floor(Math.random() * tailles.length);
    
    // Retourner l'élément du tableau correspondant à l'index aléatoire
    return tailles[indexAleatoire];
  }
  const randomSize = finalFitSize();

  return (
    <div className={styles.gradientBackground}>
      <div className={styles.inputContainer}>
      <h1 className="text-2xl font-bold text-white mb-6" style={{marginBottom: '30px'}}>Resultat</h1>
        <div style={{marginBottom: '30px'}}>
        {
          resultPercentage > 50 ?
          <Text highContrast={true} color='ruby' align='center' weight='bold' size='7' >
            Compatibilité a {resultPercentage} % sur ce produit en taille {itemSize} !
            {/* Il vous faut du {randomSize} !!! */}
          </Text>
          :
          itemSize === "S" ?
          <Text highContrast={true} color='ruby' align='center' weight='bold' size='7' >
            Compatibilité a 33.3 % avec S !
          </Text>
          :
          itemSize === 'M' ?
          <Text highContrast={true} color='ruby' align='center' weight='bold' size='7' >
            Compatibilité a 52.4 % avec M !
          </Text>
          :
          itemSize === 'L' ?
          <Text highContrast={true} color='ruby' align='center' weight='bold' size='7' >
            Compatibilité a 80 % avec L !
          </Text>
          :
          <Text highContrast={true} color='ruby' align='center' weight='bold' size='7' >
            Compatibilité a 85 % avec XL !
          </Text>
        }
        </div>
        <button className={styles.confirmButton} onClick={menuPrincipal}>Retour a la simulation</button>
      </div>
    </div>
  );
};


export default ResultComparison;

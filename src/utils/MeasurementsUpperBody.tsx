"use client"

import { FormEvent, useState } from 'react';
import styles from '../styles/MeasurementsUpperBody.module.css'; // Assurez-vous de créer un fichier CSS correspondant
import { Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useUser } from '../../contexts/user';
import { useFromUpperBody } from '../../contexts/fromUpperBody';
import { ClofitAPI } from './ClofitApi';
import { useProfil } from '../../contexts/profil';

const MeasurementsUpperBody = () => {
  const [submitted, setSubmitted] = useState(false);
	const router = useRouter();
  const {token, userId} = useUser();
  const {
    shoulderToShoulder,//epaule
    setShoulder,
    backLength,//dos
    setBackLength,
    chestSize,//poitrine
    setChestSize,
    profilName,//name
    setProfilName
  } = useFromUpperBody();
  const { setProfils } = useProfil();
  const name = profilName;
  const epaule = shoulderToShoulder;
  const dos = backLength;
  const poitrine = chestSize;

  // Response[n].name pour recup le name et pouvoir l'afficher en dessous de 'ajouterUnProfil'

  const handleAddProfil = async () => {
    try {
        const response = await ClofitAPI.addProfil(token, { name, epaule, dos, poitrine, userId });
        console.log('Profil ajouté:', response);
        // setProfils(response);
        // Traitez la réponse selon vos besoins
    } catch (error) {
        console.error('Erreur lors de l\'ajout du profil:', error);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    handleAddProfil();
    setTimeout(() => {
      setSubmitted(false);
      // Ici, vous pouvez ajouter la logique pour passer à l'étape suivante ou naviguer ailleurs
    }, 3000);
    router.push('/modules/add-profil');
  };

  return (
    <div className={styles.container}>
      <Text style={{fontSize: '30px'}}>Enregistrement des mensurations</Text>
      <Text style={{fontSize: '30px', padding: "10px"}}>Haut du corps</Text>
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" value={shoulderToShoulder} onChange={(e) => setShoulder(e.target.value)} placeholder="épaule à épaule" />
            <span>En cm</span>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" value={backLength} onChange={(e) => setBackLength(e.target.value)} placeholder="Longueur de dos" />
            <span>En cm</span>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" value={chestSize} onChange={(e) => setChestSize(e.target.value)} placeholder="Tour de poitrine" />
            <span>En cm</span>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" value={profilName} onChange={(e) => setProfilName(e.target.value)} placeholder="Nom du profil" />
          </div>
          <button className={styles.submitButton} type="submit">Continuer</button>
          {submitted && (
            <div className={styles.overlay}>
              Votre profil a bien été créé !
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MeasurementsUpperBody;

// Ajoutez le CSS suivant dans MeasurementsUpperBody.module.css
/**
.container {
  background: linear-gradient(to bottom, #ff758c 0%, #ff7eb3 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.segmentButton {
  background-color: #00BFFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}

.inputGroup {
  display: flex;
  margin-bottom: 10px;
}

.inputGroup input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.inputGroup span {
  white-space: nowrap;
  padding: 10px;
}

.submitButton {
  width: 100%;
  padding: 15px;
  border: none;
  background-color: #ff758c;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 4px;
}
**/

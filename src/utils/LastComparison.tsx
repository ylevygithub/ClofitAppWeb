"use client"

import React, { useState } from 'react';
import styles from '../styles/Comparaison.module.css'; // Importez votre module CSS ici
import { useRouter } from 'next/navigation';

const LastComparison: React.FC = () => {
  // State for the selections
  const [size, setSize] = useState<string>('S');
  const [profile, setProfile] = useState<string>('TestProfile'); // You will populate this from profiles
  const [comparisonType, setComparisonType] = useState<string>('Vêtement');
  const router = useRouter();

  // Dummy data - replace with actual data
  const profiles = ['Profile 1', 'Profile 2', 'Profile 3'];
  const comparisonOptions = ['Vêtement', 'Mensurations'];

  // Handle change events for the select elements
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile(e.target.value);
  };

  const handleComparisonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setComparisonType(e.target.value);
  };

  const handleResult = () => {
    // Redirection vers une autre page sur confirmation
    router.push('/compare/last-comparison/result-comparison');
  };

  return (
    <div className={styles.gradientBackground}>
      <div className={styles.inputContainer}>
      <h1 className="text-2xl font-bold text-white mb-6">Comparer à partir d'un vêtement</h1>
      <h1 className="text-2xl font-bold text-white mb-6" style={{marginBottom: '30px'}}>Ou bien à partir de mensurations</h1>
        <div className="mb-4">
          <select id="size-select" value={size} onChange={handleSizeChange} className={styles.inputField}>
          <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="mb-4">
          <select id="profile-select" value={profile} onChange={handleProfileChange} className={styles.inputField}>
          {profiles.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <select id="comparison-select" value={comparisonType} onChange={handleComparisonChange} className={styles.inputField}>
          {comparisonOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <button className={styles.confirmButton} onClick={handleResult}>Comparer</button>
      </div>
    </div>
  );
};

export default LastComparison;

"use client";

import { createContext, useContext, useMemo, useState } from "react";

type FromUpperBodyContext = {
    shoulderToShoulder: string;
    setShoulder: (shoulderToShoulder: string) => void;

    backLength: string;
    setBackLength: (backLength: string) => void;

    chestSize: string;
    setChestSize: (chestSize: string) => void;

    profilName: string;
    setProfilName: (profilName: string) => void;
};

const Context = createContext<FromUpperBodyContext | undefined>(undefined);

export default function UpperBodyProvider({
	children,
}: {
	children: React.ReactNode;
}) {

  const [shoulderToShoulder, setShoulder] = useState<string>('');
  const [backLength, setBackLength] = useState<string>('');
  const [chestSize, setChestSize] = useState<string>('');
  const [profilName, setProfilName] = useState<string>('');

	const value = useMemo(
		() => ({
      shoulderToShoulder,
      setShoulder,
      backLength,
      setBackLength,
      chestSize,
      setChestSize,
      profilName,
      setProfilName
		}),
		[
      shoulderToShoulder,
      setShoulder,
      backLength,
      setBackLength,
      chestSize,
      setChestSize,
      profilName,
      setProfilName
		]
	);

	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useFromUpperBody = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside UpperBodyProvider");
	}

	return context;
};

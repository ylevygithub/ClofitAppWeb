"use client";

import { createContext, useContext, useMemo, useState } from "react";

type FromShirtContext = {
    sleeveLength: string | null;
    setSleeveLength: (sleeveLength: string | null) => void;

    backLength: string | null;
    setBackLength: (backLength: string | null) => void;

    chestSize: string | null;
    setChestSize: (chestSize: string | null) => void;

    profilName: string | null;
    setProfilName: (profilName: string | null) => void;
};

const Context = createContext<FromShirtContext | undefined>(undefined);

export default function ShirtProvider({
	children,
}: {
	children: React.ReactNode;
}) {

  const [sleeveLength, setSleeveLength] = useState<string | null>(null);
  const [backLength, setBackLength] = useState<string | null>(null);
  const [chestSize, setChestSize] = useState<string | null>(null);
  const [profilName, setProfilName] = useState<string | null>(null);

	const value = useMemo(
		() => ({
      sleeveLength,
      setSleeveLength,
      backLength,
      setBackLength,
      chestSize,
      setChestSize,
      profilName,
      setProfilName
		}),
		[
      sleeveLength,
      setSleeveLength,
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

export const useFromShirt = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside ShirtProvider");
	}

	return context;
};

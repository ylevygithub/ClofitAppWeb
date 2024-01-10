"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ProfilContext = {
	profils: Array<Object> | null;
	setProfils: (profils: Array<Object> | null) => void;

	gender: string | null;
	setGender: (gender: string | null) => void;

	chooseUpperBody: boolean;
	setChooseUpperBody: (chooseUpperBody: boolean) => void;

	chooseShirt: boolean;
	setChooseShirt: (chooseShirt: boolean) => void;
};

const Context = createContext<ProfilContext | undefined>(undefined);

export default function ProfilProvider({
	children,
}: {
	children: React.ReactNode;
}) {

	const [profils, setProfils] = useState<Array<Object> | null>(null);
	const [gender, setGender] = useState<string | null>(null);
	const [chooseUpperBody, setChooseUpperBody] = useState<boolean>(false);
	const [chooseShirt, setChooseShirt] = useState<boolean>(false);

	const value = useMemo(
		() => ({
			profils,
			setProfils,
			gender,
			setGender,
			chooseUpperBody,
			setChooseUpperBody,
			chooseShirt,
			setChooseShirt,
		}),
		[
			profils,
			setProfils,
			gender,
			setGender,
			chooseUpperBody,
			setChooseUpperBody,
			chooseShirt,
			setChooseShirt,
		]
	);
	
	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useProfil = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside ProfilProvider");
	}

	return context;
};

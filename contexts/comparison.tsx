"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ComparisonContext = {
	url: string | null;
	setUrl: (url: string | null) => void;

	clothingRetrieved: string | null;
	setClothingRetrieved: (clothingRetrieved: string | null) => void;

	size: string | null;
	setSize: (size: string | null) => void;

	resultAlgo: string | null;
	setResultAlgo: (size: string | null) => void;
};

const Context = createContext<ComparisonContext | undefined>(undefined);

export default function ComparisonProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [url, setUrl] = useState<string | null>(null);
	const [clothingRetrieved, setClothingRetrieved] = useState<string | null>(null);
	const [size, setSize] = useState<string | null>(null);
	const [resultAlgo, setResultAlgo] = useState<string | null>(null);

	const value = useMemo(
		() => ({
			url,
			setUrl,
			clothingRetrieved,
			setClothingRetrieved,
			size,
			setSize,
			resultAlgo,
			setResultAlgo
		}),
		[
			url,
			setUrl,
			clothingRetrieved,
			setClothingRetrieved,
			size,
			setSize,
			resultAlgo,
			setResultAlgo
		]
	);

	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useComparison = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside ComparisonProvider");
	}

	return context;
};

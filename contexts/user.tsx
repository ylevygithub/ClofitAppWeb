"use client";

import { createContext, useContext, useMemo, useState } from "react";

type UserContext = {
	userConnected: boolean;
	setUserConnected: (userConnected: boolean) => void;

	email: string | null;
	setEmail: (email: string | null) => void;

	password: string | null;
	setPassword: (password: string | null) => void;
	
	name: string | null;
	setName: (name: string | null) => void;

	token: string;
	setToken: (token: string) => void;

	userId: string;
	setUserId: (userId: string) => void;
};

const Context = createContext<UserContext | undefined>(undefined);

export default function UserProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [userConnected, setUserConnected] = useState<boolean>(false);
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);
	const [name, setName] = useState<string | null>(null);
	const [token, setToken] = useState<string>('');
	const [userId, setUserId] = useState<string>('');

	const value = useMemo(
		() => ({
			userConnected,
			setUserConnected,
			email,
			setEmail,
			password,
			setPassword,
			name,
			setName,
			token,
			setToken,
			userId,
			setUserId
		}),
		[userConnected, setUserConnected, email, setEmail, password, setPassword, name, setName, token, setToken, userId, setUserId]
	);

	return (
		<Context.Provider value={value}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useUser = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error(" Must be used inside UserProvider");
	}

	return context;
};

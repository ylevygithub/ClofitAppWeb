import { Button, TextFieldInput } from '@radix-ui/themes';
import React, { useState } from 'react';

// Define types for the login form state
interface LoginFormState {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginFormState>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Login form submitted', loginForm);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12">
      <div className="w-full max-w-md px-6">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Connectez-vous
        </h2>
        <div className="bg-white py-8 px-4 shadow rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>


            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                ADRESSE EMAIL
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={loginForm.email}
                  onChange={handleChange}
                  placeholder='exemple@gmail.com'
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                MOT DE PASSE
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={loginForm.password}
                  onChange={handleChange}
                  placeholder='Doit contenir 1 chiffre et 6 caractères minimum'
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

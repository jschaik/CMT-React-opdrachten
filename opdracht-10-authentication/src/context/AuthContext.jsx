// AuthContext - voorbeeld van context opzet
// Maak de rest zelf: AuthProvider met state voor de ingelogde user,
// login/logout/register functies, en localStorage voor persistentie.
import { createContext } from 'react';

export const AuthContext = createContext(null);

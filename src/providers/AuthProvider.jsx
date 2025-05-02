import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import supabase from "../SupaBase/supabase.config";

// Crear contexto
const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Detecta en qué ruta estamos

  useEffect(() => {
    // Verificar sesión inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
      }
    });

    // Escuchar cambios en autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        if (event === "SIGNED_IN") {
          navigate("/user"); // Redirige al perfil tras confirmar el email
        }
      } else {
        setUser(null);
        // Solo redirigir a /login si el usuario intenta acceder a una página protegida
        const rutasProtegidas = ["/user"]; // Ajusta según tu app (se pueden agregar mas esto inpide que si no esta logueado o registrado no pueda aceder a estas paginas)
        if (rutasProtegidas.includes(location.pathname)) {
          navigate("/login");
        }
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, location.pathname]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

// Hook para usar autenticación en cualquier parte de la app
export const useAuth = () => useContext(AuthContext);

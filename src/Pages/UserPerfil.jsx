import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import supabase from '../SupaBase/supabase.config';
import { useAuth } from '../providers/AuthProvider';

const UserPerfil = () => {
  
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verificarSesion = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user); // Guardar usuario en el contexto global

        // Intentar guardar el usuario en la tabla "Datos Personales" si no existe
        const { error } = await supabase
          .from("PersonalData")
          .upsert([{ iduser: session.user.id, email: session.user.email }]);

        if (error) {
          console.error("Error al guardar datos personales:", error.message);
        }
      } else {
        navigate("/login"); // Si no hay sesión, redirigir a login
      }
      setLoading(false);
    };

    verificarSesion();
  }, [navigate, setUser]);

  if (loading) return <p>Cargando...</p>;
  

  return (
    <div>
      <h2>Perfil del usuario</h2>
      {user ? <p>Bienvenido, {user.email}</p> : <p>No has iniciado sesión.</p>}
       <br />
       <br />
       <button type="button" onClick={() => supabase.auth.signOut()}>cerrar sesion </button>
    </div>
  )
}

export default UserPerfil


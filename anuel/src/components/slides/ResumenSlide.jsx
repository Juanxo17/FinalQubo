import { useProfile } from '../../context/ProfileContext';

const ResumenSlide = ({ onNext, onBack }) => {
  const { profile } = useProfile();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Revisa tu información</h2>

      <div className="text-left max-w-md mx-auto space-y-3">
        <p><strong>Nombre:</strong> {profile.nombre || 'No proporcionado'}</p>
        <p><strong>Usuario:</strong> @{profile.nombreUsuario || 'No proporcionado'}</p>
        <p><strong>Biografía:</strong> {profile.biografia || 'No proporcionada'}</p>
        {profile.fotoPerfil && (
          <div className="text-center">
            <p><strong>Foto de perfil:</strong></p>
            <img
              src={profile.fotoPerfil}
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full mx-auto mt-2"
            />
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="bg-gray-300 px-4 py-2 rounded">Atrás</button>
        <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">Confirmar y continuar</button>
      </div>
    </div>
  );
};

export default ResumenSlide;

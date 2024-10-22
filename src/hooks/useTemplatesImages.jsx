// src/hooks/useRenardImages.js
const useRenardImages = () => {
    // Importez toutes les images du dossier renard
    const renardImages = import.meta.glob('/src/assets/renard/*.{png,jpg,jpeg,gif,svg}', { eager: true });
  
    // Convertissez l'objet d'importation en tableau d'URLs
    return Object.values(renardImages).map(module => module.default);
  };
  
  export default useRenardImages;
  
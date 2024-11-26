import React, { useState, useEffect } from 'react';
import styles from './Mapa.module.css';

const API_KEY = 'AIzaSyAhjUACeTCxlHTdy1PCLcFtIMw-klZJ7gY';

const Mapa = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [map, setMap] = useState(null);

  // useEffect para inicializar o mapa assim que o componente for montado
  useEffect(() => {
    // Verifica se a API do Google Maps foi carregada
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Se a API não foi carregada, exibe um alerta
      alert('Google Maps API não carregada corretamente.');
    }
  }, []);

  // Função para inicializar o mapa
  const initMap = () => {
    // Cria o mapa com as configurações iniciais
    const newMap = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -23.5505, lng: -46.6333 }, // São Paulo como exemplo
      zoom: 12,
    });
    setMap(newMap); // Armazena o mapa no estado
  };

  // Função de pesquisa de localização
  const handleSearch = () => {
    if (searchTerm) {
      searchLocation(map, searchTerm);
    } else {
      alert('Digite um local para pesquisar!');
    }
  };

  // Função que realiza a pesquisa de um endereço usando o Geocoder
  const searchLocation = (map, searchTerm) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchTerm }, (results, status) => {
      if (status === 'OK') {
        // Atualiza o mapa com a localização encontrada
        map.setCenter(results[0].geometry.location);
        map.setZoom(14);
        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        alert(`Não foi possível encontrar o local: ${status}`);
      }
    });
  };

  return (
    <div className={styles.mapScreen}>
      <div className={styles.mapContainer}>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          id="search-input"
          placeholder="Buscar local"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="search-button" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Mapa;

import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

// Função para atualizar o mapa quando a localização for alterada
function UpdateMap({ position }) {
  const map = useMap();
  if (position) {
    map.setView(position, 13); // Atualiza a visualização do mapa com a nova posição
  }
  return null;
}

const Mapa = () => {
  const [cep, setCep] = useState("");
  const [location, setLocation] = useState([0, 0]); // Posição inicial padrão
  const [error, setError] = useState("");

  // Estilizando o marcador (ícone)
  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [20, 30],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  // Função para buscar o CEP e atualizar a localização
  const buscarLocalizacao = async () => {
    if (!cep) {
      setError("Por favor, insira um CEP.");
      return;
    }

    try {
      // Usando a API ViaCEP para buscar o endereço
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { lat, lon } = await obterCoordenadas(response.data.logradouro, response.data.localidade);

      if (lat && lon) {
        setLocation([lat, lon]);
        setError(""); // Limpa o erro, se houver
      } else {
        setError("Não foi possível encontrar as coordenadas para este CEP.");
      }
    } catch (error) {
      setError("Erro ao buscar o CEP.");
    }
  };

  // Função para buscar as coordenadas a partir do endereço
  const obterCoordenadas = async (logradouro, cidade) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${logradouro}, ${cidade}`);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      }
      return {};
    } catch (error) {
      return {};
    }
  };

  return (
    <>
    <div className="map-container" style={styles.mapContainer}>
      {/* Campo de CEP */}
      <div className="search-box" style={styles.searchBox}>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Informe seu CEP..."
          style={styles.searchInput}
        />
        <button onClick={buscarLocalizacao} style={styles.searchButton}>
          Buscar
        </button>
        {error && <p className="error-message" style={styles.errorMessage}>{error}</p>}
      </div>

      {/* Mapa */}
      <div className="map" style={styles.map}>
        <MapContainer center={location} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <UpdateMap position={location} />
          <Marker position={location} icon={customIcon}>
            <Popup>Local: {location[0]}, {location[1]}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
    </>
  );
};

export default Mapa;

const styles = {
  mapContainer: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    width: "100vw",
    height: "100vh"
  },
  searchBox: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  searchInput: {
    padding: "10px",
    fontSize: "16px",
    width: "250px",
    borderRadius: "8px",
    border: "2px solid #ff4d4d",
  },
  searchButton: {
    padding: "10px 20px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e04343",
    },
  },
  errorMessage: {
    color: "red",
    marginTop: "10px",
  },
  map: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
};

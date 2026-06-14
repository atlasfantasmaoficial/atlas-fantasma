// Crear el mapa con Leaflet
const mapa = L.map('mapa-mundo', {
  
  maxBounds: [
    [-85, -180],
    [85, 180]
  ],
  maxBoundsViscosity: 0.8
 

}).setView([20, 0], 2);

// Agregar una capa base de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);


// Lista de lugares con id, coordenadas, enlaces y miniaturas
const lugares = [
  {
    id: "beelitz",
    nombre: "Hospital Beelitz",
    coords: [52.2799, 13.0314],
    enlace: "../ruinas/html/HospitalMilitarAlemania.html",
    miniatura: "../ruinas/imagenes/hospital.jpg" // ✅ Tu imagen real
  },
  {
    id: "nara",
    nombre: "Nara Dreamland",
    coords: [34.6838, 135.8324],
    enlace: "../ruinas/html/parquenara.html",
    miniatura: "../ruinas/imagenes/nara.jpg"
  },
  {
    id: "pripiat",
    nombre: "Prípiat",
    coords: [51.3890, 30.0990],
    enlace: "../ruinas/html/pripiat.html",
    miniatura: "../ruinas/imagenes/pripiat.jpg"
  },
  {
    id: "bannerman",
    nombre: "Castillo Bannerman",
    coords: [41.45550157328339, -73.98869216931055],
    enlace: "../ruinas/html/bannerman.html",
    miniatura: "../ruinas/imagenes/bannerman.jpg"
  }
];

// Añadir marcadores personalizados con imágenes clicables
lugares.forEach(lugar => {
  // Crear un icono personalizado con la miniatura del lugar
  const icono = L.icon({
    iconUrl: lugar.miniatura, // ✅ Usa la miniatura que le diste
    iconSize: [25, 25],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  // Crear el marcador con el icono personalizado
  const marcador = L.marker(lugar.coords, { icon: icono }).addTo(mapa);

  // Crear el popup con enlace e imagen más grande
  marcador.bindPopup(`
    <a href="${lugar.enlace}" target="_self">
      <img src="${lugar.miniatura}" width="120" style="border-radius:8px;display:block;margin:auto;">
      <p style="text-align:center;margin-top:5px;"><strong>${lugar.nombre}</strong></p>
    </a>
  `);
});

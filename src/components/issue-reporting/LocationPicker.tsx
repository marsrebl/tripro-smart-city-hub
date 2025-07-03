
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with Webpack
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface LocationPickerProps {
  onLocationSelect: (location: { lat: number; lng: number; address?: string }) => void;
  onClose: () => void;
  currentLocation?: { lat: number; lng: number; address?: string };
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onLocationSelect, onClose, currentLocation }) => {
  const [position, setPosition] = useState<LatLngExpression>([26.4525, 87.2718]); // Biratnagar coordinates
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number; address?: string } | null>(
    currentLocation || null
  );

  useEffect(() => {
    if (currentLocation) {
      setPosition([currentLocation.lat, currentLocation.lng]);
      setSelectedLocation(currentLocation);
    }
  }, [currentLocation]);

  // Component to handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        
        // Try to get address from coordinates (reverse geocoding)
        let address = '';
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          );
          const data = await response.json();
          address = data.display_name || '';
        } catch (error) {
          console.log('Could not fetch address:', error);
        }

        const location = { lat, lng, address };
        setSelectedLocation(location);
        onLocationSelect(location);
      },
    });
    return null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select Location</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Select Location</h3>
          <p className="text-sm text-gray-600">
            Click on the map to select the location of the issue
          </p>
          {selectedLocation && (
            <div className="mt-2 text-sm">
              <p><strong>Selected:</strong> {selectedLocation.lat.toFixed(6)}, {selectedLocation.lng.toFixed(6)}</p>
              {selectedLocation.address && (
                <p className="text-gray-600 truncate">{selectedLocation.address}</p>
              )}
            </div>
          )}
        </div>
        
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler />
          {selectedLocation && (
            <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
              <Popup>
                Selected Location<br />
                {selectedLocation.address && <span>{selectedLocation.address}</span>}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationPicker;

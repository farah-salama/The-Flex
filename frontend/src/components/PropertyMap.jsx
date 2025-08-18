import { useEffect, useRef, useState } from 'react';

const PropertyMap = ({ latitude, longitude, address, listingName }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiLoaded, setApiLoaded] = useState(false);

  // Function to load Google Maps API dynamically
  const loadGoogleMapsAPI = () => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.google && window.google.maps) {
        resolve();
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=maps,marker&v=beta`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        resolve();
      };
      
      script.onerror = () => {
        reject(new Error('Failed to load Google Maps API'));
      };

      // Add script to head
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    // Load Google Maps API
    loadGoogleMapsAPI()
      .then(() => {
        setApiLoaded(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading Google Maps API:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!apiLoaded || !mapRef.current) return;

    try {
      // Create map instance
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
        zoom: 15,
        // Enhanced map options
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        // Custom styles
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      // Create marker using the standard Marker (works without mapId)
      const marker = new window.google.maps.Marker({
        position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
        map: map,
        title: listingName,
        animation: window.google.maps.Animation.DROP
      });

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #1f2937;">${listingName}</h3>
            <p style="margin: 0; font-size: 14px; color: #6b7280;">${address}</p>
          </div>
        `
      });

      // Add click listener to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Store references
      mapInstanceRef.current = map;
      markerRef.current = marker;
    } catch (error) {
      console.error('Error creating Google Map:', error);
      setIsLoading(false);
    }

    // Cleanup function
    return () => {
      if (markerRef.current) {
        window.google.maps.event.clearInstanceListeners(markerRef.current);
      }
    };
  }, [apiLoaded, latitude, longitude, address, listingName]);

  // Loading state
  if (isLoading) {
    return (
      <div className="map-loading">
        <div className="map-loading-content">
          <div className="spinner"></div>
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  // Fallback if Google Maps API is not loaded
  if (!apiLoaded) {
    return (
      <div className="map-fallback">
        <div className="map-placeholder">
          <div className="map-placeholder-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3>Location</h3>
          <p>{address}</p>
          <p className="coordinates">
            {latitude}, {longitude}
          </p>
          <p className="map-error-note">
            <small>
              {!process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
                ? 'Google Maps API key not configured. Please check your .env file.'
                : 'Google Maps failed to load. Showing location details instead.'
              }
            </small>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="property-map-container">
      <div ref={mapRef} className="property-map" />
    </div>
  );
};

export default PropertyMap; 
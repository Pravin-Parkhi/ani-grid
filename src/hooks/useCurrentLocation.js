import { useState, useEffect } from "react";

export const useCurrentLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude
    });
  };

  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    } else {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);

  return { location, error };
};
"use client";

import { useEffect, useState } from "react";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string | null;
}

export default function Home() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching weather forecast...");
      const response = await fetch("/api/weatherforecast", {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Received data:", data);
      setForecasts(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center p-24">
        <div className="text-xl">Loading...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center p-24">
        <div className="text-xl text-red-500">Error: {error}</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Weather Forecast App</h1>
      <button
        onClick={fetchData}
        className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Refresh Forecast
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {forecasts.map((forecast, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <div className="text-xl font-semibold mb-2">{forecast.date}</div>
            <div className="text-gray-600 dark:text-gray-300">
              <p>Temperature (C): {forecast.temperatureC}°</p>
              <p>Temperature (F): {forecast.temperatureF}°</p>
              <p className="mt-2">Summary: {forecast.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

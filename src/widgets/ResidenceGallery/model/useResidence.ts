import type { Residence } from "#entities/Residence";
import { useState, useEffect } from "react";
import { loadResidences } from "../api/loadResidences";

export function useResidence() {
  const [loading, setLoading] = useState<boolean>(false);
  const [residences, setResidences] = useState<Residence[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getResidences() {
      setLoading(true);

      try {
        const data = await loadResidences();
        setResidences(data);
      } catch {
        setError("Не удалось загрузить проекты");
      } finally {
        setLoading(false);
      }
    }
    getResidences();
  }, []);

  return {
    residences,
    loading,
    error,
  };
}

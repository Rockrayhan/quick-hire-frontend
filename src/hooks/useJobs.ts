import { useEffect, useState } from "react";
import { fetchJobs } from "@/api/jobsApi";
import type { Job } from "@/types/job";

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadJobs = async () => {
    try {
      setLoading(true);
      const data = await fetchJobs();
      setJobs(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return {
    jobs,
    loading,
    error,
    refetch: loadJobs,
  };
};
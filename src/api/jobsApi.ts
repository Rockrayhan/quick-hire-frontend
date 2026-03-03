import type { Job } from "@/types/job";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// get all jobs
export const fetchJobs = async (): Promise<Job[]> => {
  const res = await fetch(`${BASE_URL}/jobs`);

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();

  return data.data; 
};


// get single job
export const fetchJobById = async (id: string): Promise<Job> => {
  const res = await fetch(`${BASE_URL}/jobs/${id}`);

  if (!res.ok) {
    throw new Error("Job not found");
  }

  const data = await res.json();

  return data.data;
};

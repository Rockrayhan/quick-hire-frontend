const BASE_URL = import.meta.env.VITE_BASE_URL;

export const applyToJob = async (payload: any) => {
  const res = await fetch(`${BASE_URL}/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Application failed");
  }

  return res.json();
};
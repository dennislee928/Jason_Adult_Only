import { useFetch } from "@nuxt/nitro";

export const useJsonPorn = async (endpoint: string) => {
  const { data, error } = await useFetch(
    `https://json-porn.com/api/${endpoint}`
  );

  if (error.value) {
    throw new Error("Failed to fetch data from JSON Porn API");
  }

  return data.value;
};

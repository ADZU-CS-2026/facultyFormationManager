import axios from "axios";

export default async function fetchCloudflareTurnstile(token) {
  try {
    const res = await axios.post("/api/auth/cloudflare-turnstile", { token });
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

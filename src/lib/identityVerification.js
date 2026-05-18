const IDENTITY_VERIFIED_KEY = "identityVerified";

export function isIdentityVerified() {
  if (typeof window === "undefined") {
    return false;
  }

  return localStorage.getItem(IDENTITY_VERIFIED_KEY) === "true";
}

export function setIdentityVerified() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(IDENTITY_VERIFIED_KEY, "true");
}

export function clearIdentityVerified() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(IDENTITY_VERIFIED_KEY);
}

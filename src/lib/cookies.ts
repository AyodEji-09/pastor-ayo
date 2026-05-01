/**
 * Client-side cookie utilities
 * Use these to read cookies that are set by middleware or other parts of the app
 */

/**
 * Read a cookie value by name
 * @param name - Cookie name to read
 * @returns Cookie value or null if not found
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  
  return null;
}

/**
 * Get the user's detected country from the middleware cookie
 * @returns Country code (e.g., "NG", "US") or "US" as default
 */
export function getCountryFromCookie(): string {
  return getCookie("country") || "US";
}

/**
 * Set a cookie value
 * @param name - Cookie name
 * @param value - Cookie value
 * @param days - Days until expiration (optional)
 */
export function setCookie(name: string, value: string, days?: number): void {
  if (typeof document === "undefined") return;
  
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  
  document.cookie = `${name}=${value}${expires}; path=/`;
}

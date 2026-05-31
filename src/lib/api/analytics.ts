/**
 * Guest Identity and Analytics Manager
 * Manages unique persistent reader identity and active sessions
 */

export interface AnalyticsIdentity {
  readerId: string;
  sessionId: string;
}

/**
 * Gets or creates a highly persistent guest machine ID (readerId) 
 * and a temporary session ID (sessionId)
 */
export function getOrCreateAnalyticsIdentity(): AnalyticsIdentity {
  if (typeof window === 'undefined') {
    return { readerId: '', sessionId: '' };
  }

  // 1. Get or create persistent readerId
  let readerId = localStorage.getItem('vm_reader_id');
  
  if (!readerId) {
    // Fallback: Check 5-year persistent cookie
    const cookies = Object.fromEntries(
      document.cookie.split('; ').map((c) => {
        const parts = c.split('=');
        return [parts[0], parts.slice(1).join('=')];
      })
    );
    readerId = cookies['vm_reader_id'];

    if (!readerId) {
      // Generate cryptographically secure UUID
      readerId = crypto.randomUUID();
      try {
        localStorage.setItem('vm_reader_id', readerId);
      } catch (e) {
        console.warn('[Analytics] Failed to save reader_id to localStorage', e);
      }
      
      // Save cookie with 5-year expiry
      document.cookie = `vm_reader_id=${readerId}; max-age=157680000; path=/; SameSite=Lax`;
    } else {
      // Sync cookie value back to LocalStorage
      try {
        localStorage.setItem('vm_reader_id', readerId);
      } catch (e) {
        // LocalStorage might be full or disabled
      }
    }
  }

  // 2. Get or create short-lived session ID
  let sessionId = sessionStorage.getItem('vm_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    try {
      sessionStorage.setItem('vm_session_id', sessionId);
    } catch (e) {
      console.warn('[Analytics] Failed to save session_id to sessionStorage', e);
    }
  }

  return { readerId, sessionId };
}

/**
 * Gets the persistent reader ID (returns empty string if in SSR)
 */
export function getReaderId(): string {
  return getOrCreateAnalyticsIdentity().readerId;
}

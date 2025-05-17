import { UserProfile } from "@dynamic-labs/sdk-react-core";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAvatarInitials(fullName: string): string {
  if (!fullName) return '';
  const nameParts = fullName.split(/\s+/);

  if (nameParts.length === 0) return '';

  const firstInitial = nameParts[0][0].toUpperCase();

  const lastInitial =
    nameParts.length > 1
      ? nameParts[nameParts.length - 1][0].toUpperCase()
      : '';

  return `${firstInitial}${lastInitial}`;
}

export function getBestFullName(user: UserProfile['verifiedCredentials'][0]): string {
  if (!user) return 'Unknown';

  if (user.oauthDisplayName) return user.oauthDisplayName;
  if (user.email) return user.email;
  if (user.walletName) return user.walletName;

  return user.publicIdentifier ?? 'Unknown';
}

export function serializeBigInt(obj: any): any {
  if (typeof obj === 'bigint') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  }

  if (obj !== null && typeof obj === 'object') {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = serializeBigInt(value);
    }
    return result;
  }

  return obj;
}

// serialize string to bigint iteratively in an object
export function serializeStringToBigInt(obj: any): any {
  if (typeof obj === 'string') {
    return BigInt(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(serializeStringToBigInt);
  }
}
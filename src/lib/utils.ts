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
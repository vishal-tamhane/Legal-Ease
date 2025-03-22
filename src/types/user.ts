
export type UserRole = 'judge' | 'lawyer' | 'litigant' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

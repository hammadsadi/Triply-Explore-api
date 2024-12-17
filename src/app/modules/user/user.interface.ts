// User Name Type
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TUserRole = 'user' | 'admin';
export type TUserStatus = 'active' | 'inactive';
export type TUser = {
  name: TUserName;
  email: string;
  age: number;
  photo?: string;
  role: TUserRole;
  status: TUserStatus;
};

export type Company = {
  id: string;
  name: string;
  slug: string;
};

export type User = {
  id: string;
  company_id: string;
  auth_user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
};

export type Role = {
  id: string;
  company_id: string;
  name: string;
  slug: string;
};

export type Permission = {
  id: string;
  company_id: string;
  name: string;
  slug: string;
};

export interface FormElement {
  value: any;
  error?: string;
}
export interface RootQuery {
  limit: number;
  orderField: string | null;
  orderDirection: string | null;
}

export interface FormError {
  name: string;
  error: string;
}

export interface SignedURLResponse {
  key: string;
  previewUrl: string;
  url: string;
}

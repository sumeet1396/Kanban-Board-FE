export type ApiBaseOptions = {
    url: string;
    params?: unknown;
  };
  
  export type GetType = ApiBaseOptions;
  
  export type RemoveType = ApiBaseOptions;
  
  export type PostType = ApiBaseOptions & {
    body: object;
  };
  
  export type PutType = ApiBaseOptions & {
    body: object;
  };
  
  export type PatchType = ApiBaseOptions & {
    body: object;
  };
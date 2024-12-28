class ApiClient {
    private _baseUrl:string; 

    constructor(BaseUrl:string) {
        this._baseUrl = BaseUrl;
    }

    private async request<T>(endpoint:string,method:string,body?:any,headers?: Record<string, string>): Promise<T>{
        const config: RequestInit = {
            method,
            headers: {
              'Content-Type': 'application/json',
              ...headers,
            },
          };
      
          if (body) {
            config.body = JSON.stringify(body);
          }
      
          try {
            const response = await fetch(`${this._baseUrl}${endpoint}`, config);
      
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || `Error ${response.status}`);
            }
      
            return (await response.json()) as T;
          } catch (error: any) {
            console.error(`API ${method} request failed: ${error.message}`);
            throw error;
          }
    } 

    public get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint,'GET',null,headers);
    }
    
    public post<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint,'POST',body, headers);
    }
    
    public put<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, 'PUT', body, headers);
    }
    
    public patch<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint,'PATCH', body, headers );
    }
    
    public delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint,'DELETE', null,headers);
    } 
}
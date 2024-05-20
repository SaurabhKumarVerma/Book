import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

interface IApiService {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  put<T>(url: string, data: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

class ApiService implements IApiService {
  public api: AxiosInstance;

  constructor() {
    this.createApiInstance();
  }

  private async createApiInstance() {
    this.api = axios.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL,
    });

    axios.defaults.headers.common["key"] = process.env.EXPO_PUBLIC_API_KEY;
    // Add request interceptor
    // this.api.interceptors.request.use(
    //   async (
    //     config:
    //       | InternalAxiosRequestConfig<any>
    //       | Promise<InternalAxiosRequestConfig<any>>
    //   ) => {
    //     config.headers.common["key"] = process.env.EXPO_PUBLIC_API_KEY; // Replace with your actual key
    //     return config;
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );
  }

  public get<T>(url: string): Promise<T> {
    return this.api.get(url).then((response) => response as T);
  }

  public post<T>(url: string, data: any): Promise<T> {
    return this.api.post(url, data).then((response) => response.data as T);
  }

  public put<T>(url: string, data: any): Promise<T> {
    return this.api.put(url, data).then((response) => response.data as T);
  }

  public delete<T>(url: string): Promise<T> {
    return this.api.delete(url).then((response) => response.data as T);
  }
}

const RestApiService = new ApiService();
export default RestApiService;

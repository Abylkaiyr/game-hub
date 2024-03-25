import apiClient from "./api-client"


interface Entity {
      id: number;
}

class HttpService {
      endPoint: string;
      constructor(endPoint: string) {
            this.endPoint = endPoint;
      }


      create<T>(entity: T) {
            return apiClient.post(this.endPoint, entity);
      }

      update<T extends Entity>(entity: T) {
            return apiClient.patch(this.endPoint + `/${entity.id}`, entity);
      }

      getAll<T>() {
      
            const controller = new AbortController();
            const request =  apiClient.get<T[]>(this.endPoint, {
                  signal: controller.signal,
                  });
            return {request, cancel: () => controller.abort()};     
                  
      }

      delete(userId: number) {
            return apiClient.delete(this.endPoint +'/' +  userId);
      }
}

const create = (endPoint: string) => new HttpService(endPoint);

export default create;


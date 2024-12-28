import DogCenterProduct from "../models/DogCenterProduct";

class DogCenterServices {
    private _apiClient: ApiClient; 
    
    constructor() {
        this._apiClient = new ApiClient('');
    }

    public async GetAllDogCenterProducts() : Promise<DogCenterProduct[]> {
        return await this._apiClient.get<DogCenterProduct[]>('');
    }

    public async AddDogCenterProduct(dogCenterProduct:DogCenterProduct) {
        await this._apiClient.post<DogCenterProduct>('',dogCenterProduct);
    }
}

export default DogCenterServices;
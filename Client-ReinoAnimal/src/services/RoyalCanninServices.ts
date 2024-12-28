import RoyalCanninProduct from "../models/RoyalCanninProduct";

class RoyalCanninServices {
    private _apiClient: ApiClient;
    
    constructor() {
        this._apiClient = new ApiClient("");
    }

    public async GetAllRoyalCanninProducts(): Promise<RoyalCanninProduct []>{
        return await this._apiClient.get<RoyalCanninProduct []>('');
    }

    public async AddRoyalCanninProduct(royalCanninProduct: RoyalCanninProduct) {
        await this._apiClient.post<RoyalCanninProduct>('',royalCanninProduct);
    }
}

export default RoyalCanninServices;
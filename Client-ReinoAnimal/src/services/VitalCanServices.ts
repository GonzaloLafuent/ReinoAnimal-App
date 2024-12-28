import VitalCanProduct from "../models/VitalCanProduct";

class VitalCanServices {
    private _apiClient:ApiClient;
    
    constructor() {
        this._apiClient = new ApiClient('');
    }

    public async GetAllVitalCanProducts(): Promise<VitalCanProduct []> {
        return await this._apiClient.get<VitalCanProduct []>('');
    }

    public async AddVitalCanProduct(vitalCanProduct:VitalCanProduct) {
        await this._apiClient.post<VitalCanProduct>('',vitalCanProduct);
    }
}

export default VitalCanServices;
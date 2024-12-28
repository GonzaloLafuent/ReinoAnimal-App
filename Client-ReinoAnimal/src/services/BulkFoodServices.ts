import BulkFood from "../models/BulkFood";

class BulkFoodServices {
    
    private _apiClient: ApiClient; 

    constructor() {
        this._apiClient = new ApiClient(""); 
    }

    public async GetAllBulkFood(): Promise<BulkFood []> {
        return await this._apiClient.get<BulkFood[]>('');
    }

    public async AddBulkFood(bulkFood:BulkFood) {
        await this._apiClient.post<BulkFood>('',bulkFood)
    }
}

export default BulkFoodServices;
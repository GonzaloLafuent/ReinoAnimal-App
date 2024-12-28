import CatPebble from "../models/CatPebble";

class CatPebbleServices {
    private _apiClient: ApiClient;
    
    constructor() {
        this._apiClient = new ApiClient("");
    }

    public async GetAllCatPebbles() : Promise<CatPebble[]> {
        return await this._apiClient.get<CatPebble []>('');
    }

    public async AddCatPebble(catPebble:CatPebble) {
        await this._apiClient.post<CatPebble>('',catPebble);
    }
}

export default CatPebbleServices;
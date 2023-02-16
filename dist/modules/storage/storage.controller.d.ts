import { StorageService } from './storage.service';
export declare class StorageController {
    private readonly storageService;
    constructor(storageService: StorageService);
    getData(id: string, file: {
        img: File;
    }): Promise<import("@google-cloud/storage").UploadResponse>;
}

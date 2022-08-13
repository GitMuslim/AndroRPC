export declare function download(link: string, outPath: string, options?: DownloadOptions): Promise<void>;
declare type DownloadOptions = {
    name?: string;
    skipIfExist?: boolean;
};
export {};

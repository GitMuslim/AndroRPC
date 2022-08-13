declare type SetupOptions = {
    outDir: string;
    id: string;
    downloadLink: string;
    cacheDir?: string;
    force?: boolean;
    displayName?: string;
    skipSetup: () => Promise<boolean>;
};
export declare function setupArtifact(options: SetupOptions): Promise<string>;
export {};

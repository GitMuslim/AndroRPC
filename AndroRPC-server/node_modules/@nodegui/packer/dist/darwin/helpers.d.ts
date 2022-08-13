export declare const deployDirectory: string;
export declare const configFile: string;
export declare const usertemplateDir: string;
export declare const buildDir: string;
export declare function copyQode(dest: string): Promise<void>;
export declare function copyAppDist(distPath: string, resourceDir: string): Promise<void>;
declare type macDeployQtOptions = {
    appName: string;
    buildDir: string;
    resourceDir: string;
};
export declare function runMacDeployQt({ appName, buildDir, resourceDir, }: macDeployQtOptions): Promise<unknown>;
export declare function fixupTemplateApp(config: Config, templateAppPath: string): Promise<void>;
export {};

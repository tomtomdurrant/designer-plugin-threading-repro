// Auto-generated from liveupdate_tester by vite-plugin-designer-python-loader
import { AxiosResponse } from 'axios';
import { PythonApiClient } from '@disguise-one/designer-pythonapi';

export declare const liveupdate_tester: (directorEndpoint: string) => {
client: PythonApiClient;
registration: Promise<AxiosResponse<any>>;
  autocomplete: (objExpr: any, propPath: any) => Promise<any>;
};

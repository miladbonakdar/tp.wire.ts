/* tslint:disable */
/* eslint-disable */
/**
 * TP.Profile.Service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CanBeAssistantRes } from '../models';
import { EmptyResponse } from '../models';
import { ProfileDto } from '../models';
import { UpdateInterestsReq } from '../models';
import { UpdateProfileReq } from '../models';
/**
 * ProfileApi - axios parameter creator
 * @export
 */
export const ProfileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profileCanBeAssistantGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Profile/CanBeAssistant`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profileConvertToAssistantPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Profile/ConvertToAssistant`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profileMeGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Profile/Me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profileProfileIdGet: async (profileId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            if (profileId === null || profileId === undefined) {
                throw new RequiredError('profileId','Required parameter profileId was null or undefined when calling profileProfileIdGet.');
            }
            const localVarPath = `/Profile/{profileId}`
                .replace(`{${"profileId"}}`, encodeURIComponent(String(profileId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateInterestsReq} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profileUpdateInterestsPost: async (body?: UpdateInterestsReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Profile/UpdateInterests`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateProfileReq} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profileUpdateProfilePatch: async (body?: UpdateProfileReq, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Profile/UpdateProfile`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profileUploadAvatarPatchForm: async (file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Profile/UploadAvatar`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfileApi - functional programming interface
 * @export
 */
export const ProfileApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileCanBeAssistantGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CanBeAssistantRes>>> {
            const localVarAxiosArgs = await ProfileApiAxiosParamCreator(configuration).profileCanBeAssistantGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileConvertToAssistantPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EmptyResponse>>> {
            const localVarAxiosArgs = await ProfileApiAxiosParamCreator(configuration).profileConvertToAssistantPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileMeGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfileDto>>> {
            const localVarAxiosArgs = await ProfileApiAxiosParamCreator(configuration).profileMeGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileProfileIdGet(profileId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfileDto>>> {
            const localVarAxiosArgs = await ProfileApiAxiosParamCreator(configuration).profileProfileIdGet(profileId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateInterestsReq} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileUpdateInterestsPost(body?: UpdateInterestsReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfileDto>>> {
            const localVarAxiosArgs = await ProfileApiAxiosParamCreator(configuration).profileUpdateInterestsPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateProfileReq} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileUpdateProfilePatch(body?: UpdateProfileReq, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfileDto>>> {
            const localVarAxiosArgs = await ProfileApiAxiosParamCreator(configuration).profileUpdateProfilePatch(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileUploadAvatarPatchForm(file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfileDto>>> {
            const localVarAxiosArgs = await ProfileApiAxiosParamCreator(configuration).profileUploadAvatarPatchForm(file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProfileApi - factory interface
 * @export
 */
export const ProfileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileCanBeAssistantGet(options?: AxiosRequestConfig): Promise<AxiosResponse<CanBeAssistantRes>> {
            return ProfileApiFp(configuration).profileCanBeAssistantGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileConvertToAssistantPost(options?: AxiosRequestConfig): Promise<AxiosResponse<EmptyResponse>> {
            return ProfileApiFp(configuration).profileConvertToAssistantPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileMeGet(options?: AxiosRequestConfig): Promise<AxiosResponse<ProfileDto>> {
            return ProfileApiFp(configuration).profileMeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} profileId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileProfileIdGet(profileId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ProfileDto>> {
            return ProfileApiFp(configuration).profileProfileIdGet(profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateInterestsReq} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileUpdateInterestsPost(body?: UpdateInterestsReq, options?: AxiosRequestConfig): Promise<AxiosResponse<ProfileDto>> {
            return ProfileApiFp(configuration).profileUpdateInterestsPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateProfileReq} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileUpdateProfilePatch(body?: UpdateProfileReq, options?: AxiosRequestConfig): Promise<AxiosResponse<ProfileDto>> {
            return ProfileApiFp(configuration).profileUpdateProfilePatch(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async profileUploadAvatarPatchForm(file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<ProfileDto>> {
            return ProfileApiFp(configuration).profileUploadAvatarPatchForm(file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfileApi - object-oriented interface
 * @export
 * @class ProfileApi
 * @extends {BaseAPI}
 */
export class ProfileApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public async profileCanBeAssistantGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<CanBeAssistantRes>> {
        return ProfileApiFp(this.configuration).profileCanBeAssistantGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public async profileConvertToAssistantPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<EmptyResponse>> {
        return ProfileApiFp(this.configuration).profileConvertToAssistantPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public async profileMeGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfileDto>> {
        return ProfileApiFp(this.configuration).profileMeGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} profileId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public async profileProfileIdGet(profileId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfileDto>> {
        return ProfileApiFp(this.configuration).profileProfileIdGet(profileId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateInterestsReq} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public async profileUpdateInterestsPost(body?: UpdateInterestsReq, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfileDto>> {
        return ProfileApiFp(this.configuration).profileUpdateInterestsPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateProfileReq} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public async profileUpdateProfilePatch(body?: UpdateProfileReq, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfileDto>> {
        return ProfileApiFp(this.configuration).profileUpdateProfilePatch(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public async profileUploadAvatarPatchForm(file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfileDto>> {
        return ProfileApiFp(this.configuration).profileUploadAvatarPatchForm(file, options).then((request) => request(this.axios, this.basePath));
    }
}

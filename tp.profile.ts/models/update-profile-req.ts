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
import { GenderType } from './gender-type';
/**
 * 
 * @export
 * @interface UpdateProfileReq
 */
export interface UpdateProfileReq {
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileReq
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileReq
     */
    lastname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileReq
     */
    bio?: string | null;
    /**
     * 
     * @type {GenderType}
     * @memberof UpdateProfileReq
     */
    gender?: GenderType;
    /**
     * 
     * @type {number}
     * @memberof UpdateProfileReq
     */
    birthDate?: number | null;
}

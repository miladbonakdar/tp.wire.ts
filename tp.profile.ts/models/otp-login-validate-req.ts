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
/**
 * 
 * @export
 * @interface OtpLoginValidateReq
 */
export interface OtpLoginValidateReq {
    /**
     * 
     * @type {string}
     * @memberof OtpLoginValidateReq
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof OtpLoginValidateReq
     */
    otpToken: string;
}
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
 * @interface ValidateOtpUpdatePasswordReq
 */
export interface ValidateOtpUpdatePasswordReq {
    /**
     * 
     * @type {string}
     * @memberof ValidateOtpUpdatePasswordReq
     */
    otpToken: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateOtpUpdatePasswordReq
     */
    newPassword: string;
}
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
import { InterestDto } from './interest-dto';
import { ProfileSettingDto } from './profile-setting-dto';
import { ProfileType } from './profile-type';
/**
 * 
 * @export
 * @interface ProfileDto
 */
export interface ProfileDto {
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    lastname: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    phone?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileDto
     */
    emailVerified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileDto
     */
    phoneVerified?: boolean;
    /**
     * 
     * @type {ProfileType}
     * @memberof ProfileDto
     */
    type?: ProfileType;
    /**
     * 
     * @type {number}
     * @memberof ProfileDto
     */
    createdAt?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileDto
     */
    updatedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileDto
     */
    birthDate?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    bio?: string | null;
    /**
     * 
     * @type {GenderType}
     * @memberof ProfileDto
     */
    gender?: GenderType;
    /**
     * 
     * @type {Array<InterestDto>}
     * @memberof ProfileDto
     */
    interests?: Array<InterestDto> | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    image?: string | null;
    /**
     * 
     * @type {ProfileSettingDto}
     * @memberof ProfileDto
     */
    setting?: ProfileSettingDto;
}

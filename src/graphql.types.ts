
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateExampleDto {
    name: string;
    body: string;
}

export interface Example {
    id: string;
    name: string;
    body: string;
}

export interface IMutation {
    createExample(dto: CreateExampleDto): Example | Promise<Example>;
}

export interface IQuery {
    examples(): Example[] | Promise<Example[]>;
}

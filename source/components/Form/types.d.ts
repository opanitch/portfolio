import { FunctionComponent } from 'react';

import * as STATUSES from 'CONSTANTS/status';

import { InputProps, TextAreaInputProps } from 'Atoms/Inputs/types';

import FormEmpty from './FormEmpty';
import FormFailure from './FormFailure';
// import FormLoading from './FormLoading';
import FormSuccess from './FormSuccess';

export interface FormConfigType extends FormType {
  FormBody: FunctionComponent<FormStateProps<any>>;
  status: string;
  viewState: FormProps;
}

export interface FormProps {
  actions: {
    onChange: any;
    onSubmit: any;
  };
  description?: string;
  id: string;
  inputs?: Record<string, InputProps | TextAreaInputProps>;
  title?: string;
}

export interface FormStateProps<P = FormProps> {
  status: string;
  viewState: P extends FormProps ? P : never;
}

export interface FormStateSwitcher<P> {
  FormEdit: FunctionComponent<P>;
  FormEmpty?: FunctionComponent<P> | typeof FormEmpty;
  FormFailure?: FunctionComponent<P> | typeof FormFailure;
  // FormLoading?: FunctionComponent<P> | typeof FormLoading;
  FormSuccess?: FunctionComponent<P> | typeof FormSuccess;
}

export type FormStatuses = UnionOf<typeof STATUSES>;

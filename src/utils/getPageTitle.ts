import { PAGE_TITLE } from '../constants';

export const getPageTitle = (pathLocation: string): string => PAGE_TITLE[pathLocation];

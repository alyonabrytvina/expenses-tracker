import { RootState } from '../../store';

export const getUserState = (state: RootState) => state.user.userData;

import { SET_RECORDS } from '../actions/types';
import {IRecord, ISetRecordsAction} from '../types'
import {records} from '../mockData'

export default function rootReducer(state: Array<IRecord> = records, action: ISetRecordsAction): Array<IRecord> {
	switch (action.type) {
		case SET_RECORDS:
			return [
				...action.records,
      ];
		default:
			return state;
	}
}
import { SET_RECORDS } from './types';
import {IRecord, ISetRecordsAction} from '../types'

export function setRecords(records: Array<IRecord>) : ISetRecordsAction {
	return {
		type: SET_RECORDS,
		records
	};
}
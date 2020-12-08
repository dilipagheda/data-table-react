import {Dispatch} from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setRecords} from '../actions'
import {IRecord, ISetRecordsAction, IGridRowUpdateParams} from '../types'

const useRecords = (): [Array<IRecord>, (params:IGridRowUpdateParams)=>void] => {
  const records = useSelector((state: Array<IRecord>) => state)
  const dispatch = useDispatch<Dispatch<ISetRecordsAction>>()

  const updateGridRow = ( params: IGridRowUpdateParams): void => {
    const { fromRow, toRow, updated } = params
    const rows = records.slice();

    for (let i = fromRow; i <= toRow; i++) {
      rows[i] = { ...rows[i], ...updated };
    }
    dispatch(setRecords(rows))
  };

  return [records, updateGridRow]
}

export default useRecords
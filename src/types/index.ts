export interface IRecord {
  id:number;
  title:string;
	first:string;
	last:string;
}

export interface ISetRecordsAction {
  type:string;
  records:Array<IRecord>
}

export interface IGridRowUpdateParams  {
  fromRow:number;
  toRow: number;
  updated: {
    first?:string;
    last?:string;
    title?:string;
  }
}

export interface IColumn {
  key:string;
  name:string;
  editable:boolean;
}

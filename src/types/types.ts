export interface IName {
  name: string;
  id: string;
}

export interface IGroup {
  people: IName[];
  groupName: string;
  id: string;
}

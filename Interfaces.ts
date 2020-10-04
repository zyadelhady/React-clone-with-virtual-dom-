export interface IFiber {
  type?: string | ((props: IProps) => IFiber);
  dom?: HTMLElement | Text | null;
  props: IProps;
  parent?: IFiber;
  child?: IFiber;
  sibling?: IFiber;
  alternate?: IFiber;
  effectTag?: Effects;
  hooks?: IHooks[];
}

interface IProps {
  nodeValue?: String;
  children: IFiber[];
}

type Effects = 'UPDATE' | 'DELETION' | 'PLACEMENT';

export interface IHooks {
  state: any;
  queue: any[];
}

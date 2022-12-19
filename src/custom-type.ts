export type FunctionType = (...any: any[]) => any;
export type LoopFn<ReturnType> = (
  current: Record<any, any>,
  loopIndex: number
) => ReturnType;

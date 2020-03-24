import { EmployeeState } from './employees.state';
import { PositionState } from './positions.state';

export const ackAll = 'ACK_ALL';
export class AckAllAction {
  readonly type = ackAll;
}

export const ackAllSuccess = 'ACK_ALL_SUCCESS';
export class AckAllSuccessAction {
  readonly type = ackAllSuccess;
}

export const initialLoad = 'INITIAL_LOAD';
export class InitialLoadAction {
  readonly type = initialLoad;
  // note: readonly in a constructor acts like public, protected, or private
  // and creates a property on the object (with public visibility)
  constructor(readonly state: AppState) {}
}

export interface AppState {
  employees: EmployeeState;
  positions: PositionState;
}

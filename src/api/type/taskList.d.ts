import type {
  DeleteRequest,
  Task,
  TaskListResponse,
  TaskListResponse,
} from './shared';

//get - /{teamId}/groups/{groupId}/task-lists/{id}
export type GetTaskListParams = {
  id: number;
  date?: string;
};

export type GetTaskListResponse = TaskListResponse & {
  tasks: Task[];
};

//patch - /{teamId}/groups/{groupId}/task-lists/{id}
export type UpdateTaskListParams = {
  groupId: number;
  id: number;
};

export type UpdateTaskListRequest = {
  name: string;
};

export type UpdateTaskListResponse = TaskListResponse;

//delete -/{teamId}/goprsu/{ groupId }/task-lists/{id}
export type DeleteTaskListRequest = DeleteRequest;

//post - /{teamId}/groups/{groupId}/task-lists
export type CreateTaskListRequest = {
  name: string;
};

export type CreateTaskListParams = {
  groupId: string;
};

export type CreateTaskListResponse = TaskListResponse;

//patch - /{teamId}/groups/{groupId}/task-lists/{id}/order
export type UpdateTaskListOrderRequest = {
  displayIndex: number;
};

export type UpdateTaskListOrderParams = {
  groupId: string;
  id: string;
};

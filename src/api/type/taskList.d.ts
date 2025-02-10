import type {
  DeleteRequest,
  Task,
  TaskListResponse,
  TaskListResponse,
} from './shared';

//get - /{teamId}/groups/{groupId}/task-lists/{id}
type GetTaskListParams = {
  id: number;
  date?: string;
};

type GetTaskListResponse = TaskListResponse & {
  tasks: Task[];
};

//patch - /{teamId}/groups/{groupId}/task-lists/{id}
type UpdateTaskListParams = {
  groupId: number;
  id: number;
};

type UpdateTaskListRequest = {
  name: string;
};

type UpdateTaskListResponse = TaskListResponse;

//delete -/{teamId}/goprsu / { groupId } / task - lists / { id }
type DeleteTaskListRequest = DeleteRequest;

//post - /{teamId}/groups/{groupId}/task-lists
type CreateTaskListRequest = {
  name: string;
};

type CreateTaskListParams = {
  groupId: string;
};

type CreateTaskListResponse = TaskListResponse;

//patch - /{teamId}/groups/{groupId}/task-lists/{id}/order
type UpdateTaskListOrderRequest = {
  displayIndex: number;
};

type UpdateTaskListOrderParams = {
  groupId: string;
  id: string;
};

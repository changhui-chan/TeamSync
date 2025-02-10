import type { DeleteRequest, TaskRecurringResponse } from './shared';

//post - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks
type CreateTaskRequest = {
  name: string;
  description: string;
  startDate: string;
  frequencyType: Frequency;
  monthDay: number;
};

type CreateTaskParams = {
  groupId: string;
  taskListId: string;
};

type CreateTaskResponse = TaskRecurringResponse;

//get -/{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks
interface GetTasksParams {
  groupId: string;
  taskListId: string;
  date?: string;
}

type GetTasksResponse = TaskResponse[];

//get - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}
type GetTaskParams = {
  taskId: string;
};

type GetTaskResponse = TaskResponse;

//patch - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}
type UpdateTaskParams = {
  taskId: string;
};

type UpdateTaskRequest = {
  name: string;
  description: string;
  done: boolean;
};

type UpdateTaskResponse = {
  displayIndex: number;
  writerId: number;
  userId: number;
  deletedAt: string;
  frequency: Frequency;
  description: string;
  name: string;
  recurringId: number;
  doneAt: string;
  date: string;
  updatedAt: string;
  id: number;
};

//delete - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}
type DeleteTasksRequest = DeleteRequest;

//patch = /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{id}/order
type UpdateTaskOrderParams = {
  taskListId: string;
  id: string;
};

type UpdateTaskOrderRequest = {
  displayIndex: number;
};

//delete - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}/recurring/{recurringId}
type DeleteRecurringTaskRequest = {
  recurringId: string;
};

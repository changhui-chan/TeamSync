import type { DeleteRequest, TaskRecurringResponse } from './shared';

//post - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks
export type CreateTaskParams = {
  groupId: string;
  taskListId: string;
};

export type CreateTaskRequest = {
  name: string;
  description: string;
  startDate: string;
  frequencyType: Frequency;
  monthDay: number;
};

export type CreateTaskResponse = TaskRecurringResponse;

//get -/{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks
export interface GetTasksParams {
  groupId: string;
  taskListId: string;
  date?: string;
}

export type GetTasksResponse = TaskResponse[];

//get - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}
export type GetTaskParams = {
  taskId: string;
};

export type GetTaskResponse = TaskResponse;

//patch - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}
export type UpdateTaskParams = {
  taskId: string;
};

export type UpdateTaskRequest = {
  name: string;
  description: string;
  done: boolean;
};

export type UpdateTaskResponse = {
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
export type DeleteTasksParams = DeleteRequest;

//patch = /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{id}/order
export type UpdateTaskOrderParams = {
  taskListId: string;
  id: string;
};

export type UpdateTaskOrderRequest = {
  displayIndex: number;
};

//delete - /{teamId}/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}/recurring/{recurringId}
export type DeleteRecurringTaskParams = {
  recurringId: string;
};

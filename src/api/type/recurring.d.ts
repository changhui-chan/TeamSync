import type { Frequency } from './shared';

//post - /{teamId}/groups/{groupId}/task-lists/{taskListId}/recurring
export type CreateRecurringTaskParams = {
  groupId: string;
  taskListId: string;
};

export type CreateRecurringTaskRequest = {
  name: string;
  description: string;
  startDate: string;
  frequencyType: Frequency;
  monthDay: number;
};

export type CreateRecurringTaskResponse = {
  writerId: number;
  groupId: number;
  taskListId: number;
  monthDay: number;
  weekDays: number[];
  frequencyType: Frequency;
  startDate: string;
  updatedAt: string;
  createdAt: string;
  description: string;
  name: string;
  id: number;
};

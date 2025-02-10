export enum Frequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  ONCE = 'ONCE',
}

export interface User {
  image: string;
  nickname: string;
  id: number;
}

export interface Writer {
  image: string;
  nickname: string;
  id: number;
}

export interface TaskResponse {
  doneBy: {
    user: User;
  };
  writer: Writer;
  displayIndex: number;
  commentCount: number;
  deletedAt: string;
  recurringId: number;
  frequency: Frequency;
  updatedAt: string;
  doneAt: string;
  date: string;
  description: string;
  name: string;
  id: number;
}

export interface TaskListResponse {
  displayIndex: number;
  groupId: number;
  updatedAt: string;
  createdAt: string;
  name: string;
  id: number;
}

export interface TaskRecurringResponse {
  recurring: {
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
}

export interface DeleteRequest {
  id: number;
}

export type MessageResponse = {
  message: string;
};

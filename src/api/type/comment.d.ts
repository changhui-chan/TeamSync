import type { MessageResponse, User } from './shared';

type TaskComments200Response = {
  string;
};

type TaskCommentsResponse =
  | { code: 200; data: TaskComments200Response }
  | { code: 403 | 404; data: MessageResponse };

//get - /{teamId}/tasks/{taskId}/comments
export type GetTaskCommentsParams = {
  taskId: string;
};

export type GetTaskCommentsAPIResponse = TaskCommentsResponse;

//post - /{teamId}/tasks/{taskId}/comments
export type CreateTaskCommentParams = {
  taskId: string;
};

export type CreateTaskCommentRequest = {
  content: string;
};

export type CreateTaskCommentResponse = {
  content: string;
  updatedAt: string;
  createdAt: string;
  id: number;
  user: User;
};

//patch - /{teamId}/tasks/{taskId}/comments/{commentId}
export type UpdateTaskCommentParams = {
  commentId: string;
};

export type UpdateTaskCommentRequest = {
  content: string;
};

export type UpdateTaskCommentAPIResponse = TaskCommentsResponse;

//delete - /{teamId}/tasks/{taskId}/comments/{commentId}
export type DeleteTaskCommentRequest = {
  commentId: string;
};

export type DeleteTaskCommentAPIResponse = TaskCommentsResponse;

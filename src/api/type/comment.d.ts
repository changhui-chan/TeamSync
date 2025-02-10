import type { MessageResponse, User } from './shared';

type TaskComments200Response = {
  string;
};

type TaskCommentsResponse =
  | { code: 200; data: TaskComments200Response }
  | { code: 403 | 404; data: MessageResponse };

//get - /{teamId}/tasks/{taskId}/comments
type GetTaskCommentsParams = {
  taskId: string;
};

type GetTaskCommentsAPIResponse = TaskCommentsResponse;

//post - /{teamId}/tasks/{taskId}/comments
type CreateTaskCommentParams = {
  taskId: string;
};

type CreateTaskCommentRequest = {
  content: string;
};

type CreateTaskCommentResponse = {
  content: string;
  updatedAt: string;
  createdAt: string;
  id: number;
  user: User;
};

//patch - /{teamId}/tasks/{taskId}/comments/{commentId}
type UpdateTaskCommentParams = {
  commentId: string;
};

type UpdateTaskCommentRequest = {
  content: string;
};

type UpdateTaskCommentAPIResponse = TaskCommentsResponse;

//delete - /{teamId}/tasks/{taskId}/comments/{commentId}
type DeleteTaskCommentRequest = {
  commentId: string;
};

type DeleteTaskCommentAPIResponse = TaskCommentsResponse;

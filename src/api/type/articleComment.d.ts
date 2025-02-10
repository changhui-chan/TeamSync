import type { MessageResponse, Writer } from './shared';

type Comment200Response = {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

type Comments200Response = {
  nextCursor: number;
  list: Comment200Response[];
};

type CommentResponse =
  | { code: 200; data: Comment200Response }
  | { code: 403 | 404; data: MessageResponse };

type CommentsResponse =
  | { code: 200; data: Comments200Response }
  | { code: 404; data: MessageResponse };

// post - /{teamId}/articles/{articleId}/comments
export type CreateArticleCommentParams = {
  articleId: string;
};

export type CreateArticleCommentRequest = {
  content: string;
};

export type CreateArticleCommentResponse = CommentResponse;

// get - /{teamId}/articles/{articleId}/comments
export type GetArticleCommentsParams = {
  articleId: string;
  limit: number;
  cursor?: number;
};

export type GetArticleCommentsResponse = CommentsResponse;

// patch - /{teamId}/comments/{commentId}
export type UpdateCommentParams = {
  commentId: string;
};

export type UpdateCommentRequest = {
  content: string;
};

export type UpdateCommentResponse = CommentResponse;

// delete - /{teamId}/comments/{commentId}
type DeleteCommentRequest = {
  commentId: string;
};

export type DeleteCommentResponse =
  | { code: 200; data: { id: number } }
  | { code: 404; data: MessageResponse };

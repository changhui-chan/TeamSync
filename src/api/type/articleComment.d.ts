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
type CreateArticleCommentParams = {
  articleId: string;
};

type CreateArticleCommentRequest = {
  content: string;
};

type CreateArticleCommentResponse = CommentResponse;

// get - /{teamId}/articles/{articleId}/comments
type GetArticleCommentsParams = {
  articleId: string;
  limit: number;
  cursor?: number;
};

type GetArticleCommentsResponse = CommentsResponse;

// patch - /{teamId}/comments/{commentId}
type UpdateCommentParams = {
  commentId: string;
};

type UpdateCommentRequest = {
  content: string;
};

type UpdateCommentResponse = CommentResponse;

// delete - /{teamId}/comments/{commentId}
type DeleteCommentRequest = {
  commentId: string;
};

type DeleteCommentResponse =
  | { code: 200; data: { id: number } }
  | { code: 404; data: MessageResponse };

import type { MessageResponse, Writer } from './shared';

interface Articles200Response {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  title: string;
  id: number;
}

interface Article200Response extends Articles200Response {
  commentCount: number;
  isLiked: true;
  content: string;
}

type ArticleParams = {
  articleId: string;
};

interface ArticleRequest {
  image: string;
  content: string;
  title: string;
}

type ArticleResponse =
  | {
      code: 200;
      data: Article200Response;
    }
  | { code: 403 | 404; data: MessageResponse };

//post - /{teamId}/articles
export type CreateArticleRequest = ArticleRequest;

export type CreateArticleResponse = Articles200Response;

//get - /{teamId}/articles
export type GetArticlesParams = {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
};

export type GetArticlesResponse = {
  totalCount: number;
  list: Articles200Response[];
};

//get - /{teamId}/articles/{articleId}
export type GetArticleParams = ArticleParams;

export type GetArticleResponse = ArticleResponse;

//patch - /{teamId}/articles/{articleId}
export type UpdateArticleParams = ArticleParams;

export type UpdateArticleRequest = ArticleRequest;

export type UpdateArticleResponse = ArticleResponse;

//delete - /{teamId}/articles/{articleId}
export type DeleteArticleRequest = ArticleParams;

export type DeleteArticleResponse =
  | {
      code: 200;
      data: { id: number };
    }
  | { code: 403 | 404; data: MessageResponse };

//post - /{teamId}/articles/{articleId}/like
export type CreateArticleLikeParams = ArticleParams;

export type CreateArticleLikeRequest = ArticleResponse;

//delete - /{teamId}/articles/{articleId}/like
export type DeleteArticleLikeRequest = ArticleParams;

export type DeleteArticleLikeResponse = ArticleResponse;

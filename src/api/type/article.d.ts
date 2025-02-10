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
type CreateArticleRequest = ArticleRequest;

type CreateArticleResponse = Articles200Response;

//get - /{teamId}/articles
type GetArticlesParams = {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
};

type GetArticlesResponse = {
  totalCount: number;
  list: Articles200Response[];
};

//get - /{teamId}/articles/{articleId}
type GetArticleParams = ArticleParams;

type GetArticleResponse = ArticleResponse;

//patch - /{teamId}/articles/{articleId}
type UpdateArticleParams = ArticleParams;

type UpdateArticleRequest = ArticleRequest;

type UpdateArticleResponse = ArticleResponse;

//delete - /{teamId}/articles/{articleId}
type DeleteArticleRequest = ArticleParams;

type DeleteArticleResponse =
  | {
      code: 200;
      data: { id: number };
    }
  | { code: 403 | 404; data: MessageResponse };

//post - /{teamId}/articles/{articleId}/like
type CreateArticleLikeParams = ArticleParams;

type CreateArticleLikeRequest = ArticleResponse;

//delete - /{teamId}/articles/{articleId}/like
type DeleteArticleLikeRequest = ArticleParams;

type DeleteArticleLikeResponse = ArticleResponse;

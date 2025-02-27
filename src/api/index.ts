import type {
  Article,
  ArticleComment,
  Auth,
  Comment,
  Group,
  Image,
  OAuth,
  Recurring,
  Task,
  TaskList,
  User,
} from './type';
import { requestData } from './util/apiService';
import { createQueries } from './util/createQueries';

//User
export const getUser = () =>
  createQueries<undefined, User.GetUserResponse>(`/user`, undefined);

export const patchUser = (data: User.UpdateUserProfileRequest) =>
  requestData<
    undefined,
    User.UpdateUserProfileRequest,
    User.UpdateUserResponse
  >('patch', `/user`, data, undefined);

export const deleteUser = () =>
  requestData<undefined, undefined, undefined>(
    'delete',
    `/user`,
    undefined,
    undefined
  );

export const getUserGroups = () =>
  createQueries<undefined, User.GetUserGroupsResponse>(
    `/user/groups`,
    undefined
  );

export const getUserMemberships = () =>
  createQueries<undefined, User.GetUserMembershipsResponse>(
    `/user/memberships`,
    undefined
  );

export const getUserHistory = () =>
  createQueries<undefined, User.GetUserHistoryResponse>(
    `/user/history`,
    undefined
  );

export const postUserSendResetPasswordEmail = (
  data: User.SendResetPasswordEmailRequest
) =>
  requestData<
    undefined,
    User.SendResetPasswordEmailRequest,
    User.SendResetPasswordEmailResponse
  >('post', `/user/send-reset-password-email`, data, undefined);

export const patchUserResetPassword = (data: User.ResetPasswordRequest) =>
  requestData<
    undefined,
    User.ResetPasswordRequest,
    User.UpdateResetPasswordResponse
  >('patch', `/user/reset-password`, data, undefined);

export const patchUserPassword = (data: User.UpdatePasswordRequest) =>
  requestData<
    undefined,
    User.UpdatePasswordRequest,
    User.UpdatePasswordResponse
  >('patch', `/user/password`, data, undefined);

//TaskList
export const getTaskListsId = (params: TaskList.GetTaskListParams) =>
  createQueries<TaskList.GetTaskListParams, TaskList.GetTaskListResponse>(
    `/groups/{groupId}/task-lists/{id}`,
    params
  );

export const patchTaskListsId = (
  data: TaskList.UpdateTaskListRequest,
  params: TaskList.UpdateTaskListParams
) =>
  requestData<
    TaskList.UpdateTaskListParams,
    TaskList.UpdateTaskListRequest,
    TaskList.UpdateTaskListResponse
  >('patch', `/groups/{groupId}/task-lists/{id}`, data, params);

export const deleteTaskListId = (params: TaskList.DeleteTaskListParams) =>
  requestData<TaskList.DeleteTaskListParams, undefined, undefined>(
    'delete',
    `/groups/{groupId}/task-lists/{id}`,
    undefined,
    params
  );

export const postTaskLists = (
  data: TaskList.CreateTaskListRequest,
  params: TaskList.CreateTaskListParams
) =>
  requestData<
    TaskList.CreateTaskListParams,
    TaskList.CreateTaskListRequest,
    TaskList.CreateTaskListResponse
  >('post', `/groups/{groupId}/task-lists`, data, params);

export const patchTaskListsOrder = (
  data: TaskList.UpdateTaskListOrderRequest,
  params: TaskList.UpdateTaskListOrderParams
) =>
  requestData<
    TaskList.UpdateTaskListOrderParams,
    TaskList.UpdateTaskListOrderRequest,
    undefined
  >('post', `/groups/{groupId}/task-lists/{id}/order`, data, params);

//Task
export const postTasks = (
  data: Task.CreateTaskRequest,
  params: Task.CreateTaskParams
) =>
  requestData<
    Task.CreateTaskParams,
    Task.CreateTaskRequest,
    Task.CreateTaskResponse
  >('post', `/groups/{groupId}/task-lists/{taskListId}/tasks`, data, params);

export const getTasks = (params: Task.GetTasksParams) =>
  createQueries<Task.GetTasksParams, Task.GetTasksResponse>(
    `/groups/{groupId}/task-lists/{taskListId}/tasks`,
    params
  );

export const getTasksId = (params: Task.GetTaskParams) =>
  createQueries<Task.GetTaskParams, Task.GetTaskResponse>(
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}`,
    params
  );

export const patchTasksId = (
  data: Task.UpdateTaskRequest,
  params: Task.UpdateTaskParams
) =>
  requestData<
    Task.UpdateTaskParams,
    Task.UpdateTaskRequest,
    Task.UpdateTaskResponse
  >(
    'patch',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}`,
    data,
    params
  );

export const deleteTasksId = (params: Task.DeleteTasksParams) =>
  requestData<Task.DeleteTasksParams, undefined, undefined>(
    'delete',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}`,
    undefined,
    params
  );

export const patchTasksIdOrder = (
  data: Task.UpdateTaskOrderRequest,
  params: Task.UpdateTaskOrderParams
) =>
  requestData<
    Task.UpdateTaskOrderParams,
    Task.UpdateTaskOrderRequest,
    undefined
  >(
    'patch',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{id}/order`,
    data,
    params
  );

export const deleteTasksIdRecurringId = (
  params: Task.DeleteRecurringTaskParams
) =>
  requestData<Task.DeleteRecurringTaskParams, undefined, undefined>(
    'delete',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}/recurring/{recurringId}`,
    undefined,
    params
  );

//Recurring
export const postTaskListsRecurring = (
  data: Recurring.CreateRecurringTaskRequest,
  params: Recurring.CreateRecurringTaskParams
) =>
  requestData<
    Recurring.CreateRecurringTaskParams,
    Recurring.CreateRecurringTaskRequest,
    Recurring.CreateRecurringTaskResponse
  >(
    'post',
    `/groups/{groupId}/task-lists/{taskListId}/recurring`,
    data,
    params
  );

//Oauth
export const postOauthApps = (data: OAuth.CreateOAuthAppRequest) =>
  requestData<
    undefined,
    OAuth.CreateOAuthAppRequest,
    OAuth.CreateOAuthAppResponse
  >('post', `/oauthApps`, data, undefined);

//Image
export const postImagesUpload = (data: Image.UploadImageRequest) =>
  requestData<undefined, Image.UploadImageRequest, Image.UploadImageResponse>(
    'post',
    `/oauthApps`,
    data,
    undefined
  );

//Group
export const getGroupsId = (params: Group.GetGroupParams) =>
  createQueries<Group.GetGroupParams, Group.GetGroupResponse>(
    `/groups/{id}`,
    params
  );

export const patchGroupsId = (
  data: Group.UpdateGroupRequest,
  params: Group.UpdateGroupParams
) =>
  requestData<
    Group.UpdateGroupParams,
    Group.UpdateGroupRequest,
    Group.UpdateGroupResponse
  >('patch', `/groups/{id}`, data, params);

export const deleteGroupsId = (params: Group.DeleteGroupParams) =>
  requestData<Group.DeleteGroupParams, undefined, undefined>(
    'delete',
    `/groups/{id}`,
    undefined,
    params
  );

export const postGroups = (data: Group.CreateGroupRequest) =>
  requestData<
    Group.UpdateGroupParams,
    Group.CreateGroupRequest,
    Group.CreateGroupResponse
  >('post', `/groups`, data, undefined);

export const getGroupsMemberId = (params: Group.GetGroupMemberParams) =>
  createQueries<Group.GetGroupMemberParams, Group.GetGroupMemberResponse>(
    `/groups/{id}/member/{memberUserId}`,
    params
  );

export const deleteGroupsMemberId = (params: Group.GroupMemberParams) =>
  requestData<Group.GroupMemberParams, undefined, undefined>(
    'delete',
    `/groups/{id}/member/{memberUserId}`,
    undefined,
    params
  );

export const getGroupsInvitation = (params: Group.GetGroupInvitationParams) =>
  createQueries<
    Group.GetGroupInvitationParams,
    Group.GetGroupInvitationResponse
  >(`/groups/{id}/invitation`, params);

export const postGroupsAcceptInvitation = (
  data: Group.AcceptGroupInvitationRequest
) =>
  requestData<
    undefined,
    Group.AcceptGroupInvitationRequest,
    Group.AcceptGroupInvitationResponse
  >('post', `/groups/accept-invitation`, data, undefined);

export const postGroupsMember = (data: Group.AddGroupMemberRequest) =>
  requestData<
    undefined,
    Group.AddGroupMemberRequest,
    Group.AddGroupMemberResponse
  >('post', `/groups/{id}/member`, data, undefined);

export const getGroupsTasks = (params: Group.GetGroupTasksParams) =>
  createQueries<Group.GetGroupTasksParams, Group.GroupTaskResponse>(
    `/groups/{id}/tasks`,
    params
  );

//Comment
export const getTasksComments = (params: Comment.GetTaskCommentsParams) =>
  createQueries<
    Comment.GetTaskCommentsParams,
    Comment.GetTaskCommentsAPIResponse
  >(`/tasks/{taskId}/comments`, params);

export const postTasksComments = (
  data: Comment.CreateTaskCommentRequest,
  params: Comment.CreateTaskCommentParams
) =>
  requestData<
    Comment.CreateTaskCommentParams,
    Comment.CreateTaskCommentRequest,
    Comment.CreateTaskCommentResponse
  >('post', `/tasks/{taskId}/comments`, data, params);

export const patchTasksCommentsId = (
  data: Comment.UpdateTaskCommentRequest,
  params: Comment.UpdateTaskCommentParams
) =>
  requestData<
    Comment.UpdateTaskCommentParams,
    Comment.UpdateTaskCommentRequest,
    Comment.UpdateTaskCommentAPIResponse
  >('patch', `/tasks/{taskId}/comments/{commentId}`, data, params);

export const deleteTasksCommentsId = (
  params: Comment.DeleteTaskCommentParams
) =>
  requestData<
    Comment.DeleteTaskCommentParams,
    undefined,
    Comment.DeleteTaskCommentAPIResponse
  >('delete', `/tasks/{taskId}/comments/{commentId}`, undefined, params);

//Auth
export const postSignUp = (data: Auth.SignUpRequest) =>
  requestData<undefined, Auth.SignUpRequest, Auth.SignUpResponse>(
    'post',
    '/auth/signUp',
    data,
    undefined
  );

export const postSignIn = (data: Auth.SignInRequest) =>
  requestData<undefined, Auth.SignInRequest, Auth.SignInResponse>(
    'post',
    '/auth/signIn',
    data,
    undefined
  );

export const postRefreshToken = (data: Auth.RefreshTokenRequest) =>
  requestData<undefined, Auth.RefreshTokenRequest, Auth.RefreshTokenResponse>(
    'post',
    '/auth/refresh-token',
    data,
    undefined
  );

export const postSignInProvider = (
  data: Auth.SocialSignInRequest,
  params: Auth.SocialSignInParams
) =>
  requestData<
    Auth.SocialSignInParams,
    Auth.SocialSignInRequest,
    Auth.SocialSignInResponse
  >('post', '/auth/signIn/provider', data, params);

//ArticleComment
export const postArticlesComments = (
  data: ArticleComment.CreateArticleCommentRequest,
  params: ArticleComment.CreateArticleCommentParams
) =>
  requestData<
    ArticleComment.CreateArticleCommentParams,
    ArticleComment.CreateArticleCommentRequest,
    ArticleComment.CreateArticleCommentResponse
  >('post', '/articles/{articleId}/comments', data, params);

export const getArticlesComments = (
  params: ArticleComment.GetArticleCommentsParams
) =>
  createQueries<
    ArticleComment.GetArticleCommentsParams,
    ArticleComment.GetArticleCommentsResponse
  >(`/articles/{articleId}/comments`, params);

export const patchCommentsId = (
  data: ArticleComment.UpdateCommentRequest,
  params: ArticleComment.UpdateCommentParams
) =>
  requestData<
    ArticleComment.UpdateCommentParams,
    ArticleComment.UpdateCommentRequest,
    ArticleComment.UpdateCommentResponse
  >('patch', '/comments/{commentId}', data, params);

export const deleteCommentsId = (params: ArticleComment.DeleteCommentParams) =>
  requestData<
    ArticleComment.DeleteCommentParams,
    undefined,
    ArticleComment.DeleteCommentResponse
  >('delete', '/comments/{commentId}', undefined, params);

//Article
export const postArticles = (data: Article.CreateArticleRequest) =>
  requestData<
    undefined,
    Article.CreateArticleRequest,
    Article.CreateArticleResponse
  >('post', '/articles', data, undefined);

export const getArticles = (params: Article.GetArticlesParams) =>
  createQueries<Article.GetArticlesParams, Article.GetArticlesResponse>(
    `/articles`,
    params
  );

export const getArticlesId = (params: Article.GetArticleParams) =>
  createQueries<Article.GetArticleParams, Article.GetArticleResponse>(
    `/articles`,
    params
  );

export const patchArticlesId = (
  data: Article.UpdateArticleRequest,
  params: Article.UpdateArticleParams
) =>
  requestData<
    Article.UpdateArticleParams,
    Article.UpdateArticleRequest,
    Article.UpdateArticleResponse
  >('patch', '/articles/{articleId}', data, params);

export const deleteArticlesId = (params: Article.DeleteArticleParams) =>
  requestData<
    Article.DeleteArticleParams,
    undefined,
    Article.DeleteArticleResponse
  >('delete', '/articles/{articleId}', undefined, params);

export const postArticlesLike = (params: Article.CreateArticleLikeParams) =>
  requestData<
    Article.CreateArticleLikeParams,
    undefined,
    Article.CreateArticleLikeResponse
  >('post', '/articles/{articleId}/like', undefined, params);

export const deleteArticlesLike = (params: Article.DeleteArticleLikeParams) =>
  requestData<
    Article.DeleteArticleLikeParams,
    undefined,
    Article.DeleteArticleLikeResponse
  >('delete', '/articles/{articleId}/like', undefined, params);

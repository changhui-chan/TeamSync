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
import { createMutations } from './util/createMutations';
import { createQueries } from './util/createQueries';

//User
export const getUser = (customOptions = {}) =>
  createQueries<undefined, User.GetUserResponse>(
    `/user`,
    undefined,
    customOptions
  );

export const patchUser = (
  data: User.UpdateUserProfileRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    User.UpdateUserProfileRequest,
    User.UpdateUserResponse
  >('patch', `/user`, data, undefined, customOptions);

export const deleteUser = (customOptions = {}) =>
  createMutations<undefined, undefined, undefined>(
    'delete',
    `/user`,
    undefined,
    undefined,
    customOptions
  );

export const getUserGroups = (customOptions = {}) =>
  createQueries<undefined, User.GetUserGroupsResponse>(
    `/user/groups`,
    undefined,
    customOptions
  );

export const getUserMemberships = (customOptions = {}) =>
  createQueries<undefined, User.GetUserMembershipsResponse>(
    `/user/memberships`,
    undefined,
    customOptions
  );

export const getUserHistory = (customOptions = {}) =>
  createQueries<undefined, User.GetUserHistoryResponse>(
    `/user/history`,
    undefined,
    customOptions
  );

export const postUserSendResetPasswordEmail = (
  data: User.SendResetPasswordEmailRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    User.SendResetPasswordEmailRequest,
    User.SendResetPasswordEmailResponse
  >('post', `/user/send-reset-password-email`, data, undefined, customOptions);

export const patchUserResetPassword = (
  data: User.ResetPasswordRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    User.ResetPasswordRequest,
    User.UpdateResetPasswordResponse
  >('patch', `/user/reset-password`, data, undefined, customOptions);

export const patchUserPassword = (
  data: User.UpdatePasswordRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    User.UpdatePasswordRequest,
    User.UpdatePasswordResponse
  >('patch', `/user/password`, data, undefined, customOptions);

//TaskList
export const getTaskListsId = (
  params: TaskList.GetTaskListParams,
  customOptions = {}
) =>
  createQueries<TaskList.GetTaskListParams, TaskList.GetTaskListResponse>(
    `/groups/{groupId}/task-lists/{id}`,
    params,
    customOptions
  );

export const patchTaskListsId = (
  data: TaskList.UpdateTaskListRequest,
  params: TaskList.UpdateTaskListParams,
  customOptions = {}
) =>
  createMutations<
    TaskList.UpdateTaskListParams,
    TaskList.UpdateTaskListRequest,
    TaskList.UpdateTaskListResponse
  >('patch', `/groups/{groupId}/task-lists/{id}`, data, params, customOptions);

export const deleteTaskListId = (
  params: TaskList.DeleteTaskListParams,
  customOptions = {}
) =>
  createMutations<TaskList.DeleteTaskListParams, undefined, undefined>(
    'delete',
    `/groups/{groupId}/task-lists/{id}`,
    undefined,
    params,
    customOptions
  );

export const postTaskLists = (
  data: TaskList.CreateTaskListRequest,
  params: TaskList.CreateTaskListParams,
  customOptions = {}
) =>
  createMutations<
    TaskList.CreateTaskListParams,
    TaskList.CreateTaskListRequest,
    TaskList.CreateTaskListResponse
  >('post', `/groups/{groupId}/task-lists`, data, params, customOptions);

export const patchTaskListsOrder = (
  data: TaskList.UpdateTaskListOrderRequest,
  params: TaskList.UpdateTaskListOrderParams,
  customOptions = {}
) =>
  createMutations<
    TaskList.UpdateTaskListOrderParams,
    TaskList.UpdateTaskListOrderRequest,
    undefined
  >(
    'post',
    `/groups/{groupId}/task-lists/{id}/order`,
    data,
    params,
    customOptions
  );

//Task
export const postTasks = (
  data: Task.CreateTaskRequest,
  params: Task.CreateTaskParams,
  customOptions = {}
) =>
  createMutations<
    Task.CreateTaskParams,
    Task.CreateTaskRequest,
    Task.CreateTaskResponse
  >(
    'post',
    `/groups/{groupId}/task-lists/{taskListId}/tasks`,
    data,
    params,
    customOptions
  );

export const getTasks = (params: Task.GetTasksParams, customOptions = {}) =>
  createQueries<Task.GetTasksParams, Task.GetTasksResponse>(
    `/groups/{groupId}/task-lists/{taskListId}/tasks`,
    params,
    customOptions
  );

export const getTasksId = (params: Task.GetTaskParams, customOptions = {}) =>
  createQueries<Task.GetTaskParams, Task.GetTaskResponse>(
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}`,
    params,
    customOptions
  );

export const patchTasksId = (
  data: Task.UpdateTaskRequest,
  params: Task.UpdateTaskParams,
  customOptions = {}
) =>
  createMutations<
    Task.UpdateTaskParams,
    Task.UpdateTaskRequest,
    Task.UpdateTaskResponse
  >(
    'patch',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}`,
    data,
    params,
    customOptions
  );

export const deleteTasksId = (
  params: Task.DeleteTasksParams,
  customOptions = {}
) =>
  createMutations<Task.DeleteTasksParams, undefined, undefined>(
    'delete',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}`,
    undefined,
    params,
    customOptions
  );

export const patchTasksIdOrder = (
  data: Task.UpdateTaskOrderRequest,
  params: Task.UpdateTaskOrderParams,
  customOptions = {}
) =>
  createMutations<
    Task.UpdateTaskOrderParams,
    Task.UpdateTaskOrderRequest,
    undefined
  >(
    'patch',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{id}/order`,
    data,
    params,
    customOptions
  );

export const deleteTasksIdRecurringId = (
  params: Task.DeleteRecurringTaskParams,
  customOptions = {}
) =>
  createMutations<Task.DeleteRecurringTaskParams, undefined, undefined>(
    'delete',
    `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}/recurring/{recurringId}`,
    undefined,
    params,
    customOptions
  );

//Recurring
export const postTaskListsRecurring = (
  data: Recurring.CreateRecurringTaskRequest,
  params: Recurring.CreateRecurringTaskParams,
  customOptions = {}
) =>
  createMutations<
    Recurring.CreateRecurringTaskParams,
    Recurring.CreateRecurringTaskRequest,
    Recurring.CreateRecurringTaskResponse
  >(
    'post',
    `/groups/{groupId}/task-lists/{taskListId}/recurring`,
    data,
    params,
    customOptions
  );

//Oauth
export const postOauthApps = (
  data: OAuth.CreateOAuthAppRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    OAuth.CreateOAuthAppRequest,
    OAuth.CreateOAuthAppResponse
  >('post', `/oauthApps`, data, undefined, customOptions);

//Image
export const postImagesUpload = (
  data: Image.UploadImageRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    Image.UploadImageRequest,
    Image.UploadImageResponse
  >('post', `/oauthApps`, data, undefined, customOptions);

//Group
export const getGroupsId = (params: Group.GetGroupParams, customOptions = {}) =>
  createQueries<Group.GetGroupParams, Group.GetGroupResponse>(
    `/groups/{id}`,
    params,
    customOptions
  );

export const patchGroupsId = (
  data: Group.UpdateGroupRequest,
  params: Group.UpdateGroupParams,
  customOptions = {}
) =>
  createMutations<
    Group.UpdateGroupParams,
    Group.UpdateGroupRequest,
    Group.UpdateGroupResponse
  >('patch', `/groups/{id}`, data, params, customOptions);

export const deleteGroupsId = (
  params: Group.DeleteGroupParams,
  customOptions = {}
) =>
  createMutations<Group.DeleteGroupParams, undefined, undefined>(
    'delete',
    `/groups/{id}`,
    undefined,
    params,
    customOptions
  );

export const postGroups = (
  data: Group.CreateGroupRequest,
  customOptions = {}
) =>
  createMutations<
    Group.UpdateGroupParams,
    Group.CreateGroupRequest,
    Group.CreateGroupResponse
  >('post', `/groups`, data, undefined, customOptions);

export const getGroupsMemberId = (
  params: Group.GetGroupMemberParams,
  customOptions = {}
) =>
  createQueries<Group.GetGroupMemberParams, Group.GetGroupMemberResponse>(
    `/groups/{id}/member/{memberUserId}`,
    params,
    customOptions
  );

export const deleteGroupsMemberId = (
  params: Group.GroupMemberParams,
  customOptions = {}
) =>
  createMutations<Group.GroupMemberParams, undefined, undefined>(
    'delete',
    `/groups/{id}/member/{memberUserId}`,
    undefined,
    params,
    customOptions
  );

export const getGroupsInvitation = (
  params: Group.GetGroupInvitationParams,
  customOptions = {}
) =>
  createQueries<
    Group.GetGroupInvitationParams,
    Group.GetGroupInvitationResponse
  >(`/groups/{id}/invitation`, params, customOptions);

export const postGroupsAcceptInvitation = (
  data: Group.AcceptGroupInvitationRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    Group.AcceptGroupInvitationRequest,
    Group.AcceptGroupInvitationResponse
  >('post', `/groups/accept-invitation`, data, undefined, customOptions);

export const postGroupsMember = (
  data: Group.AddGroupMemberRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    Group.AddGroupMemberRequest,
    Group.AddGroupMemberResponse
  >('post', `/groups/{id}/member`, data, undefined, customOptions);

export const getGroupsTasks = (
  params: Group.GetGroupTasksParams,
  customOptions = {}
) =>
  createQueries<Group.GetGroupTasksParams, Group.GroupTaskResponse>(
    `/groups/{id}/tasks`,
    params,
    customOptions
  );

//Comment
export const getTasksComments = (
  params: Comment.GetTaskCommentsParams,
  customOptions = {}
) =>
  createQueries<
    Comment.GetTaskCommentsParams,
    Comment.GetTaskCommentsAPIResponse
  >(`/tasks/{taskId}/comments`, params, customOptions);

export const postTasksComments = (
  data: Comment.CreateTaskCommentRequest,
  params: Comment.CreateTaskCommentParams,
  customOptions = {}
) =>
  createMutations<
    Comment.CreateTaskCommentParams,
    Comment.CreateTaskCommentRequest,
    Comment.CreateTaskCommentResponse
  >('post', `/tasks/{taskId}/comments`, data, params, customOptions);

export const patchTasksCommentsId = (
  data: Comment.UpdateTaskCommentRequest,
  params: Comment.UpdateTaskCommentParams,
  customOptions = {}
) =>
  createMutations<
    Comment.UpdateTaskCommentParams,
    Comment.UpdateTaskCommentRequest,
    Comment.UpdateTaskCommentAPIResponse
  >(
    'patch',
    `/tasks/{taskId}/comments/{commentId}`,
    data,
    params,
    customOptions
  );

export const deleteTasksCommentsId = (
  params: Comment.DeleteTaskCommentParams,
  customOptions = {}
) =>
  createMutations<
    Comment.DeleteTaskCommentParams,
    undefined,
    Comment.DeleteTaskCommentAPIResponse
  >(
    'delete',
    `/tasks/{taskId}/comments/{commentId}`,
    undefined,
    params,
    customOptions
  );

//Auth
export const postSignUp = (data: Auth.SignUpRequest, customOptions = {}) =>
  createMutations<undefined, Auth.SignUpRequest, Auth.SignUpResponse>(
    'post',
    '/auth/signUp',
    data,
    undefined,
    customOptions
  );

export const postSignIn = (data: Auth.SignInRequest, customOptions = {}) =>
  createMutations<undefined, Auth.SignInRequest, Auth.SignInResponse>(
    'post',
    '/auth/signIn',
    data,
    undefined,
    customOptions
  );

export const postRefreshToken = (
  data: Auth.RefreshTokenRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    Auth.RefreshTokenRequest,
    Auth.RefreshTokenResponse
  >('post', '/auth/refresh-token', data, undefined, customOptions);

export const postSignInProvider = (
  data: Auth.SocialSignInRequest,
  params: Auth.SocialSignInParams,
  customOptions = {}
) =>
  createMutations<
    Auth.SocialSignInParams,
    Auth.SocialSignInRequest,
    Auth.SocialSignInResponse
  >('post', '/auth/signIn/provider', data, params, customOptions);

//ArticleComment
export const postArticlesComments = (
  data: ArticleComment.CreateArticleCommentRequest,
  params: ArticleComment.CreateArticleCommentParams,
  customOptions = {}
) =>
  createMutations<
    ArticleComment.CreateArticleCommentParams,
    ArticleComment.CreateArticleCommentRequest,
    ArticleComment.CreateArticleCommentResponse
  >('post', '/articles/{articleId}/comments', data, params, customOptions);

export const getArticlesComments = (
  params: ArticleComment.GetArticleCommentsParams,
  customOptions = {}
) =>
  createQueries<
    ArticleComment.GetArticleCommentsParams,
    ArticleComment.GetArticleCommentsResponse
  >(`/articles/{articleId}/comments`, params, customOptions);

export const patchCommentsId = (
  data: ArticleComment.UpdateCommentRequest,
  params: ArticleComment.UpdateCommentParams,
  customOptions = {}
) =>
  createMutations<
    ArticleComment.UpdateCommentParams,
    ArticleComment.UpdateCommentRequest,
    ArticleComment.UpdateCommentResponse
  >('patch', '/comments/{commentId}', data, params, customOptions);

export const deleteCommentsId = (
  params: ArticleComment.DeleteCommentParams,
  customOptions = {}
) =>
  createMutations<
    ArticleComment.DeleteCommentParams,
    undefined,
    ArticleComment.DeleteCommentResponse
  >('delete', '/comments/{commentId}', undefined, params, customOptions);

//Article
export const postArticles = (
  data: Article.CreateArticleRequest,
  customOptions = {}
) =>
  createMutations<
    undefined,
    Article.CreateArticleRequest,
    Article.CreateArticleResponse
  >('post', '/articles', data, undefined, customOptions);

export const getArticles = (
  params: Article.GetArticlesParams,
  customOptions = {}
) =>
  createQueries<Article.GetArticlesParams, Article.GetArticlesResponse>(
    `/articles`,
    params,
    customOptions
  );

export const getArticlesId = (
  params: Article.GetArticleParams,
  customOptions = {}
) =>
  createQueries<Article.GetArticleParams, Article.GetArticleResponse>(
    `/articles`,
    params,
    customOptions
  );

export const patchArticlesId = (
  data: Article.UpdateArticleRequest,
  params: Article.UpdateArticleParams,
  customOptions = {}
) =>
  createMutations<
    Article.UpdateArticleParams,
    Article.UpdateArticleRequest,
    Article.UpdateArticleResponse
  >('patch', '/articles/{articleId}', data, params, customOptions);

export const deleteArticlesId = (
  params: Article.DeleteArticleParams,
  customOptions = {}
) =>
  createMutations<
    Article.DeleteArticleParams,
    undefined,
    Article.DeleteArticleResponse
  >('delete', '/articles/{articleId}', undefined, params, customOptions);

export const postArticlesLike = (
  params: Article.CreateArticleLikeParams,
  customOptions = {}
) =>
  createMutations<
    Article.CreateArticleLikeParams,
    undefined,
    Article.CreateArticleLikeResponse
  >('post', '/articles/{articleId}/like', undefined, params, customOptions);

export const deleteArticlesLike = (
  params: Article.DeleteArticleLikeParams,
  customOptions = {}
) =>
  createMutations<
    Article.DeleteArticleLikeParams,
    undefined,
    Article.DeleteArticleLikeResponse
  >('delete', '/articles/{articleId}/like', undefined, params, customOptions);

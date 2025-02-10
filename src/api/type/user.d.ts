import type { MessageResponse } from './shared';

interface Group {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
}

interface Membership {
  group: Group;
  role: string;
  userImage: string;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
}

interface TaskDone {
  displayIndex: number;
  writerId: number;
  userId: number;
  deletedAt: string;
  frequency: Frequency;
  description: string;
  name: string;
  recurringId: number;
  doneAt: string;
  date: string;
  updatedAt: string;
  id: number;
}

// get - /{teamId}/user
type GetUser = {
  teamId: string;
  image: string;
  nickname: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  id: number;
  memberships: Membership[];
};

// patch - /{teamId}/user
type UpdateUserProfileRequest = {
  nickname: string;
  image: string;
};

type UpdateUserResponse = MessageResponse;

//get - /{teamId}/user/groups
type GetUserGroupsResponse = Group[];

//get - /{teamId}/user/memberships
type GetUserMembershipsResponse = Membership[];

//get - /{teamId}/user/history
type GetUserHistoryResponse = {
  tasksDone: TaskDone[];
};

//post - /{teamId}/user/send-reset-password-email
type SendResetPasswordEmailRequest = {
  email: string;
  redirectUrl: string;
};

type SendResetPasswordEmailResponse = MessageResponse;

//patch - /{teamId}/user/reset-password
type ResetPasswordRequest = {
  passwordConfirmation: string;
  password: string;
  token: string;
};

type UpdateResetPasswordResponse = MessageResponse;

//patch - /{teamId}/user/password
type UpdatePasswordRequest = {
  passwordConfirmation: string;
  password: string;
};

type UpdatePasswordResponse = MessageResponse;

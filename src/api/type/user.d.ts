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
export type GetUserResponse = {
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
export type UpdateUserProfileRequest = {
  nickname: string;
  image: string;
};

export type UpdateUserResponse = MessageResponse;

//get - /{teamId}/user/groups
export type GetUserGroupsResponse = Group[];

//get - /{teamId}/user/memberships
export type GetUserMembershipsResponse = Membership[];

//get - /{teamId}/user/history
export type GetUserHistoryResponse = {
  tasksDone: TaskDone[];
};

//post - /{teamId}/user/send-reset-password-email
export type SendResetPasswordEmailRequest = {
  email: string;
  redirectUrl: string;
};

export type SendResetPasswordEmailResponse = MessageResponse;

//patch - /{teamId}/user/reset-password
export type ResetPasswordRequest = {
  passwordConfirmation: string;
  password: string;
  token: string;
};

export type UpdateResetPasswordResponse = MessageResponse;

//patch - /{teamId}/user/password
export type UpdatePasswordRequest = {
  passwordConfirmation: string;
  password: string;
};

export type UpdatePasswordResponse = MessageResponse;

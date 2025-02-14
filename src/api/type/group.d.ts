import type { DeleteRequest, TaskListResponse, TaskResponse } from './taskList';

enum Role {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

type GroupMember = {
  role: Role;
  userImage: string;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
};

interface TaskListSummary extends TaskListResponse {
  tasks: string[];
}

interface GroupRequest {
  image: string;
  name: string;
}

interface GroupResponse {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
}

//get - /{teamId}/groups/{id}
export type GetGroupParams = {
  id: string;
};

export type GetGroupResponse = GroupResponse & {
  members: GroupMember[];
  taskLists: TaskListSummary[];
};

//patch - /{teamId}/groups/{id}
export type UpdateGroupParams = {
  id: string;
};

export type UpdateGroupRequest = GroupRequest;

export type UpdateGroupResponse = {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
};

//delete - /{teamId}/groups/{id}
export type DeleteGroupParams = DeleteRequest;

//post - /{teamId}/groups
export type CreateGroupRequest = GroupRequest;

export type CreateGroupResponse = GroupResponse;

//get - /{teamId}/groups/{id}/member/{memberUserId}
export type GetGroupMemberParams = {
  id: string;
  memberUserId: string;
};

export type GetGroupMemberResponse = GroupMember;

//delete - /{teamId}/groups/{id}/member/{memberUserId}
export type GroupMemberParams = DeleteRequest & {
  memberUserId: string;
};

//get - /{teamId}/groups/{id}/invitation
export type GetGroupInvitationParams = {
  id: string;
};

export type GetGroupInvitationResponse = string;

//post - /{teamId}/groups/accept-invitation
export type AcceptGroupInvitationRequest = {
  userEmail: string;
  token: string;
};

export type AcceptGroupInvitationResponse = {
  groupId: number;
};

//post - /{teamId}/groups/{id}/member
export type AddGroupMemberRequest = {
  userEmail: string;
};

export type AddGroupMemberResponse = {
  groupId: number;
};

//get - /{teamId}/groups/{id}/tasks
export type GetGroupTasksParams = {
  id: string;
  date?: string;
};

export type GroupTaskResponse = TaskResponse[];

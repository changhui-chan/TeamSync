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
type GetGroupParams = {
  id: string;
};

type GetGroupResponse = GroupResponse & {
  members: GroupMember[];
  taskLists: TaskListSummary[];
};

//patch - /{teamId}/groups/{id}
type UpdateGroupParams = {
  id: string;
};

type UpdateGroupRequest = GroupRequest;

type UpdateGroupResponse = {
  teamId: string;
  updatedAt: string;
  createdAt: string;
  image: string;
  name: string;
  id: number;
};

//delete - /{teamId}/groups/{id}
type DeleteGroupRequest = DeleteRequest;

//post - /{teamId}/groups
type CreateGroupRequest = GroupRequest;

type CreateGroupResponse = GroupResponse;

//get - /{teamId}/groups/{id}/member/{memberUserId}
type GetGroupMemberParams = {
  id: string;
  memberUserId: string;
};

type GetGroupMemberResponse = GroupMember;

//delete - /{teamId}/groups/{id}/member/{memberUserId}
type GroupMemberRequest = DeleteRequest & {
  memberUserId: string;
};

//get - /{teamId}/groups/{id}/invitation
type GetGroupInvitationParams = {
  id: string;
};

type GetGroupInvitationResponse = string;

//post - /{teamId}/groups/accept-invitation
type AcceptGroupInvitationRequest = {
  userEmail: string;
  token: string;
};

type AcceptGroupInvitationResponse = {
  groupId: number;
};

//post - /{teamId}/groups/{id}/member
type AddGroupMemberRequest = {
  userEmail: string;
};

type AddGroupMemberResponse = {
  groupId: number;
};

//get - /{teamId}/groups/{id}/tasks
type GetGroupTasksParams = {
  id: string;
  date?: string;
};

type GroupTaskResponse = TaskResponse[];

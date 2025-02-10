//post - /{teamId}/images/upload
export type UploadImageRequest = {
  image: File;
};

export type UploadImageResponse = {
  url: string;
};

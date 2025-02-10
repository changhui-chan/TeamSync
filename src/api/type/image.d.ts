//post - /{teamId}/images/upload
type UploadImageRequest = {
  image: File;
};

type UploadImageResponse = {
  url: string;
};

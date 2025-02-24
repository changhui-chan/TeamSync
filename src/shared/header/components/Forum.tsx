import { useRouter } from 'next/router';

const Forum = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <p
        onClick={() => {
          navigateTo('/boards');
        }}
      >
        자유게시판
      </p>
    </div>
  );
};

export default Forum;

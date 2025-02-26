import Image from 'next/image';

import { useIsMobile, useIsTablet } from '@/hook/useDevice';

const Home = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <div>
      <div>헤더 import 영역</div>
      <div>
        <h3>
          함께 만들어가는 투두 리스트{' '}
          <Image
            src="/icon/ic-repair.svg"
            alt="리페어 아이콘"
            width={56}
            height={56}
          />
        </h3>
        <h3>TeamSync</h3>
      </div>
      <Image
        src={
          isTablet
            ? '/image/img-bannerTablet.svg'
            : isMobile
              ? '/image/img-bannerMobile.svg'
              : '/image/img-banner.svg'
        }
        fill
        alt="배너 이미지"
      />
      <button type="button">지금 시작하기</button>
      <section>
        <div>
          <Image
            src="/image/img-home1.svg"
            alt="홈1 이미지"
            width={285}
            height={330}
          />
          <div>
            <div>
              <Image
                src="/icon/ic-folderFill.svg"
                alt="폴더 아이콘"
                width={24}
                height={24}
              />
            </div>
            <p>
              그룹으로
              <br />할 일을 관리해요
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Image
                src="/icon/ic-messageAltFill.svg"
                alt="메일 아이콘"
                width={24}
                height={24}
              />
            </div>
            <p>
              간단하게 멤버들을
              <br />
              초대해요
            </p>
          </div>
          <Image
            src="/image/img-home2.svg"
            alt="홈2 이미지"
            width={275}
            height={335}
          />
        </div>
        <div>
          <Image
            src="/image/img-home3.svg"
            alt="홈3 이미지"
            width={290}
            height={340}
          />
          <div>
            <div>
              <Image
                src="/icon/ic-done.svg"
                alt="체크 아이콘"
                width={24}
                height={24}
              />
            </div>
            <p>할 일도 간편하게 체크해요</p>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <h3>지금 바로 시작해보세요</h3>
          <p>팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법</p>
        </div>
        <Image
          src="/image/img-footer.svg"
          alt="푸터 이미지"
          width={810}
          height={250}
        />
      </footer>
    </div>
  );
};

export default Home;

import Image from 'next/image';
import { IoMdSettings } from 'react-icons/io';

const Team = () => {
  return (
    <div>
      <div>헤더 import 영역</div>
      <section>
        <p>경영관리팀</p>
        <div>
          <Image
            src="/image/image-maskGroup.svg"
            alt="마스크 이미지"
            width={180}
            height={65}
          />
          <IoMdSettings color="#fff" />
        </div>
      </section>
      <section>
        <div>
          <div>
            <h4>할 일 목록</h4>
            <p>(4개)</p>
          </div>
          <p>+ 새로운 목록 추가하기</p>
        </div>
        <div>
          <div>색깔 영역</div>
          <p>법인 설립</p>
          <div>
            <div>
              <div>동그란 아이콘</div>
              <div>3/5</div>
            </div>
            <div>더보기 아이콘</div>
          </div>
        </div>
        <div>
          <div>색깔 영역</div>
          <p>변경 등기</p>
          <div>
            <div>
              <div>동그란 아이콘</div>
              <div>5/5</div>
            </div>
            <div>더보기 아이콘</div>
          </div>
        </div>
        <div>
          <div>색깔 영역</div>
          <p>정기 추종</p>
          <div>
            <div>
              <div>동그란 아이콘</div>
              <div>3/5</div>
            </div>
            <div>더보기 아이콘</div>
          </div>
        </div>
        <div>
          <div>색깔 영역</div>
          <p>법인 설립</p>
          <div>
            <div>
              <div>동그란 아이콘</div>
              <div>3/5</div>
            </div>
            <div>더보기 아이콘</div>
          </div>
        </div>
      </section>
      <section>
        <h4>리포트</h4>
        <div>
          <div>
            <div>동그란 아이콘</div>
            <div>
              <p>오늘의 진행 상황</p>
              <div>25%</div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>오늘의 할 일</p>
                <div>20개</div>
              </div>
              <Image
                src="/icon/icon-head.svg"
                alt="아저씨 아이콘"
                width={32}
                height={32}
              />
            </div>
            <div>
              <div>
                <p>한 일</p>
                <div>5개</div>
              </div>
              <Image
                src="/icon/icon-sign.svg"
                alt="칠판 아이콘"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h4>멤버</h4>
            <p>(6명)</p>
          </div>
          <p>+ 새로운 멤버 초대하기</p>
        </div>
        <div>
          <div>
            <Image
              src="/icon/ic-defaultAvatar.svg"
              alt="기본 아바타 이미지"
              width={32}
              height={32}
            />
            <div>
              <p>Username</p>
              <p>Useremail</p>
            </div>
            <div>더보기 아이콘</div>
          </div>
          <div>
            <Image
              src="/icon/ic-defaultAvatar.svg"
              alt="기본 아바타 이미지"
              width={32}
              height={32}
            />
            <div>
              <p>Username</p>
              <p>Useremail</p>
            </div>
            <div>더보기 아이콘</div>
          </div>
          <div>
            <Image
              src="/icon/ic-defaultAvatar.svg"
              alt="기본 아바타 이미지"
              width={32}
              height={32}
            />
            <div>
              <p>Username</p>
              <p>Useremail</p>
            </div>
            <div>더보기 아이콘</div>
          </div>
          <div>
            <Image
              src="/icon/ic-defaultAvatar.svg"
              alt="기본 아바타 이미지"
              width={32}
              height={32}
            />
            <div>
              <p>Username</p>
              <p>Useremail</p>
            </div>
            <div>더보기 아이콘</div>
          </div>
          <div>
            <Image
              src="/icon/ic-defaultAvatar.svg"
              alt="기본 아바타 이미지"
              width={32}
              height={32}
            />
            <div>
              <p>Username</p>
              <p>Useremail</p>
            </div>
            <div>더보기 아이콘</div>
          </div>
          <div>
            <Image
              src="/icon/ic-defaultAvatar.svg"
              alt="기본 아바타 이미지"
              width={32}
              height={32}
            />
            <div>
              <p>Username</p>
              <p>Useremail</p>
            </div>
            <div>더보기 아이콘</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

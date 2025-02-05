import { toast } from 'react-toastify';

export const successToast = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const warningToast = (message: string) => {
  toast.warning(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const infoToast = (message: string) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

// position	string	토스트 위치 설정 (top-right, top-left, bottom-right, bottom-left, top-center, bottom-center)
// autoClose	number	자동 닫힘 시간(ms), false로 설정하면 자동으로 닫히지 않음
// hideProgressBar	boolean	true이면 프로그레스 바 숨김, 기본값은 false
// closeOnClick	boolean	클릭 시 토스트 닫힘 여부
// pauseOnHover	boolean	마우스를 올리면 일시 정지할지 여부
// draggable	boolean	드래그해서 이동 가능 여부
// theme	string	light, dark, colored 중 선택

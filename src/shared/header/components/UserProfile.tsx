import { useState } from 'react';
import { FaUserLarge } from 'react-icons/fa6';

import { useIsDesktop } from '@/hook/useDevice';

import UserProfileDropdown from './UserProfileDropdown';

const UserProfile = () => {
  const [username, setUsername] = useState('안테나');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isDesktop = useIsDesktop();

  const handleUserProfileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        className="flex cursor-pointer flex-row items-center gap-[8]"
        onClick={handleUserProfileDropdown}
      >
        {isDesktop ? (
          <div className="flex flex-row items-center gap-[8]">
            <FaUserLarge />
            <p>{username}</p>
          </div>
        ) : (
          <FaUserLarge />
        )}
      </div>
      {isDropdownOpen && <UserProfileDropdown />}
    </div>
  );
};

export default UserProfile;

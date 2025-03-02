import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import TeamNavDropdown from './TeamNavDropdown';

const TeamNav = () => {
  const [team, setTeam] = useState('경영관리팀');
  const [teamList, setTeamList] = useState([
    '경영관리팀',
    '프로덕트팀',
    '콘텐츠팀',
    '마케팅팀',
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTeamChangeDropdown = () => {
    let temp = Math.floor(Math.random() * teamList.length);
    while (team === teamList[temp]) {
      temp = Math.floor(Math.random() * teamList.length);
    }
    setTeam(teamList[temp]);
  };

  return (
    <div className="w-[100px] cursor-pointer">
      <div
        className="flex select-none flex-row items-center justify-between text-[16px]"
        onClick={handleTeamChangeDropdown}
      >
        <p>{team}</p>
        <IoIosArrowDown />
      </div>
      {isDropdownOpen && <TeamNavDropdown />}
    </div>
  );
};

export default TeamNav;

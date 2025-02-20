import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

import Sidebar from './Sidebar';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IoMenu color={'#64748B'} />
        {isMenuOpen && <Sidebar />}
      </div>
    </div>
  );
};

export default Menu;

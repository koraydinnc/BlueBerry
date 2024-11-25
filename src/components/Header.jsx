import { Button, Col, Row, Dropdown, Menu, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';
import ButtonBG from '../assets/ButtonBG.png';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      {['Hikayemiz', 'Blueberry', 'Ürünlerimiz', 'Faydaları', 'Tarifler'].map((item, index) => (
        <Menu.Item key={index}>
          <a
            href={`/${item.toLowerCase()}`}
            className="hover:text-blue-800 font-hussar"
          >
            {item}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  const story = (
    <Menu>
      {['Hikayemiz', 'Zaman Çizelgemiz'].map((item, index) => (
        <Menu.Item key={index}>
          <a
            href={`/${item.toLowerCase().replace(/ /g, '-')}`}
            className="hover:text-blue-800 font-hussar"
          >
            {item}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header className="w-full px-4 py-2 bg-white shadow-md">
      <Row className="items-center justify-between">
        <Col xs={8} sm={6} md={6} className="flex justify-start cursor-pointer">
          <motion.img
            onClick={() => navigate('/')}
            src={Logo}
            alt="Logo"
            className="w-18 sm:w-32 md:w-48 m-4 ml-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Col>

        <Col xs={8} sm={12} md={12} className="flex justify-center">
          <Dropdown
            overlay={menu}
            trigger={['click']}
            className="sm:hidden"
            overlayClassName="custom-dropdown"
          >
            <Button type="text" className="text-blue-600 font-hussar font-semibold">
              Menü <DownOutlined />
            </Button>
          </Dropdown>

          <motion.ul
            className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8 text-blue-600 font-hussar font-semibold text-sm sm:text-base md:text-lg"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {['Hikayemiz', 'Blueberry', 'Ürünlerimiz', 'Faydaları', 'Tarifler'].map((item, index) => (
              <motion.li
                key={index}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item === 'Hikayemiz' ? (
                  <Dropdown overlay={story} trigger={['hover']} placement="bottom">
                    <a className="hover:text-blue-800 font-hussar font-bold flex items-center">
                      {item} <DownOutlined className="ml-1" />
                    </a>
                  </Dropdown>
                ) : item === 'Ürünlerimiz' ? (
                  <Tooltip
                    title={
                      <div
                        className="font-bold"
                        style={{ textAlign: 'left', lineHeight: '2.5' }}
                      >
                        <p>Taze Blueberry</p>
                        <p>Dondurulmuş Blueberry</p>
                      </div>
                    }
                    placement="bottom"
                    overlayInnerStyle={{
                      backgroundColor: '#7EB426',
                      color: 'white',
                      borderRadius: '8px',
                      padding: '10px',
                    }}
                  >
                    <a className="hover:text-blue-800 font-extrabold font-hussar flex items-center">
                      {item} <DownOutlined className="ml-1" />
                    </a>
                  </Tooltip>
                ) : (
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-blue-800 font-hussar font-bold"
                  >
                    {item}
                  </a>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </Col>

        <Col xs={8} sm={6} md={6} className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              type="button"
              className="mr-12 bg-cover bg-center bg-no-repeat text-white font-hussar font-bold px-6 py-3 rounded-lg hover:brightness-90 sm:px-8 sm:py-4 text-lg sm:text-xl"
              style={{ backgroundImage: `url(${ButtonBG})` }}
            >
              <span className="opacity-0">Sipariş</span>
            </button>
          </motion.div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;

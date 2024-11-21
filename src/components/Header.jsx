import { Button, Col, Row, Dropdown, Menu } from 'antd';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';
import ButtonBG from '../assets/HomePage/ButtonBG.png';
import { DownOutlined } from '@ant-design/icons';

const Header = () => {
  const menu = (
    <Menu>
      {['Hikayemiz', 'Blueberry', 'Ürünlerimiz', 'Faydaları', 'Tarifler'].map((item, index) => (
        <Menu.Item key={index}>
          <a href={`#${item.toLowerCase()}`} className="hover:text-blue-800 font-bold">
            {item}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header className="w-full px-4 py-2 bg-white">
      <Row className="items-center justify-between">
        <Col xs={6} sm={6} md={6} className="flex justify-start">
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-32 sm:w-32 md:w-52"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </Col>

        <Col xs={6} sm={12} md={12} className="flex justify-center">
          <Dropdown overlay={menu} trigger={['click']} className="block sm:hidden">
            <Button type="text" className="text-blue-600 font-semibold">
              Menü <DownOutlined />
            </Button>
          </Dropdown>

          <motion.ul
            className="hidden sm:flex space-x-4 sm:space-x-6 md:space-x-8 text-blue-600 font-semibold text-sm sm:text-base md:text-lg"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
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
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-800 font-bold">
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </Col>

        <Col xs={12} sm={6} md={6} className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button type="default" className="custom-button">
              Sipariş Ver
            </button>
          </motion.div>
        </Col>
      </Row>
      <style jsx>{`
        .custom-button {
          background-image: url(${ButtonBG});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          border: none;
          color: white;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 8px;
        }

        .custom-button:hover {
          filter: brightness(0.9);
        }
      `}</style>
    </header>
  );
};

export default Header;

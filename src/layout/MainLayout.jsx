import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='h-screen'>{children}</div>
    </div>
  );
};

export default MainLayout;
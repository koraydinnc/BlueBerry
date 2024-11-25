import { Card } from "antd";
import Hikaye from "../assets/hıkayemızz.png";
import HikayeBaslik from "../assets/hıkayemızbaslık.png";


const StoryPage = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
        
          <Card
            hoverable
            className="shadow-lg"
            cover={
              <img
                src={Hikaye}
                alt="Patika'nın Hikayesi"
                className="object-cover rounded-lg"
              />
            }
          >
          
          </Card>
        </div>
     </div>
    </div>
  );
};

export default StoryPage;

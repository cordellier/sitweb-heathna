// src/components/HeaderClients.js
import useRenardImages from '../hooks/useTemplatesImages';
import { HEADER_CLIENTS_TITLE, HEADER_CLIENTS_SUBTITLE } from '../Constants/headerClientsText';

const HeaderClients = () => {
  const imageUrls = useRenardImages();

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": imageUrls.length }}>
        {imageUrls.map((src, index) => (
          <div
            key={index}
            className="item"
            style={{ "--position": index + 1 }}
          >
            <img src={src} alt={`Image client ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="content">
        <div className="author"></div>
        <div className="model">
          <h1>{HEADER_CLIENTS_TITLE}</h1>
          <h2>{HEADER_CLIENTS_SUBTITLE}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderClients;

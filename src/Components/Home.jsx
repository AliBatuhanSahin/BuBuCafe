/* eslint-disable react/no-unescaped-entities */
import '../Components/styles/home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="homeBottom">
        <h1>Bu'Bu Cafe</h1>
        <p>
        Bu'Bu Cafe, lezzetli kahve çeşitleriyle de öne çıkıyor. Usta baristaların özenle hazırladığı espresso, latte, cappuccino gibi klasik kahve çeşitleriyle birlikte, özel karışımlar ve organik kahveler de menüde yer alıyor. Ayrıca, taze demlenmiş çay çeşitleri ve sağlıklı atıştırmalıklar da, burayı sadece bir kahve dükkanından öte bir deneyim haline getiriyor.
        Girişte sizi karşılayan sıcak atmosfer, içeri adım attığınız anda kendinizi evinizde hissettiriyor. Rahat koltuklar, ahşap detaylar ve huzurlu bir dekorasyon, burayı günün stresinden uzaklaşmak için ideal bir mekan haline getiriyor. Duvarlardaki sanat eserleri ve kitap raflarındaki zengin içerik, ziyaretçilere farklı düşünce dünyalarına yolculuk etme fırsatı sunuyor 
        </p>
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home
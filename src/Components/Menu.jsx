import '../Components/styles/Menu.css'
import MenuItem from './MenuItem'
import {Data} from './Data'

const Menu = () => {
  return (
    <div className="menu">
      {/* Kahveler */}
      <h1 style={{ color: 'rgba(255, 223, 186, 0.7)' }} className="menuTitle">Kahveler</h1>
      <div className="menuList">
        {Data.filter(item => item.category === 'coffe').map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              style={{ backgroundColor: 'rgba(255, 223, 186, 0.5)' }} 
            />
          );
        })}
      </div>

      {/* Soğuk İçecekler */}
      <h1 style={{ color: 'rgba(173, 216, 230, 0.7)' }} className="menuTitle">Soğuk İçecekler</h1>
      <div className="menuList">
        {Data.filter(item => item.category === 'coldDrink').map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              style={{ backgroundColor: 'rgba(173, 216, 230, 0.5)' }} 
            />
          );
        })}
      </div>

      {/* Çaylar */}
      <h1 style={{ color: 'rgba(144, 238, 144, 0.7)' }} className="menuTitle">Çaylar</h1>
      <div className="menuList">
        {Data.filter(item => item.category === 'tea').map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              style={{ backgroundColor: 'rgba(144, 238, 144, 0.5)' }} 
            />
          );
        })}
      </div>
    </div>
  );
};


export default Menu;

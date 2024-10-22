// eslint-disable-next-line react/prop-types
const MenuItem = ({ image, name, content, price, style }) => {
    return (
      <div>
        <div style={style} className="menuItem">
          <div style={{ backgroundImage: `url(${image})` }}></div>
          <h1 style={{ marginBottom: "10px" }}>{name}</h1>
          <h6 style={{ marginTop: "20", fontSize: "12px" }}>{content}</h6>
          <p style={{ marginTop: "20px", marginBottom: "10px" }}>
            <i style={{ color: "brown" }}>{price} ₺</i>
          </p>
        </div>
      </div>
    );
  };
  
  export default MenuItem;
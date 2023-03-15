import "./ListCard.css"

const ListCard= (props) => {
  const {list} = props;
    return (
      <div className="listCard">
        <h2>ListCard</h2>
        <div className="row">
          {list.map((item)=>{
            return(
              <div className="card">
                <img src={item.img} alt="Licorne"></img>
                <div className="card-body">
                  <p>{item.title}</p>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default ListCard
  
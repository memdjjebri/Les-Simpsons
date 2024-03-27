function Avatar (props) {
  
  return (
    <div>
      <img src={props.image} alt="Bart Simpson" />
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
    
    </div>
  );
};

export default Avatar;

import React from 'react'
import Button from './Button'

const CardBody = ({title, text, url}) => {
    // console.log('this is props', props);
    // console.log('current props.title', props.title);

  return (
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}
        </p>
        <Button url={url}/>
      </div>
  );
};
//* Above is example of Object Destructuring

//* Below is using the props parameter and grabbing the data using dot notation
// const CardBody = (props) => {
//     console.log('this is props', props);
//     console.log('current props.title', props.title);

//   return (
//     <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">{props.text}
//         </p>
//         <Button url={props.url}/>
//       </div>
//   );
// };



export default CardBody;
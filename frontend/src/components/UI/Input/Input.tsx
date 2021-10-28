import React from 'react';

interface IProps {
  nice: string;
}

const Input = React.forwardRef<IProps, IProps>((props) => (
  <div>{props.nice}</div>
));

export default Input;

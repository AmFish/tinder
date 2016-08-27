import React, { PropTypes } from 'react';
import styles from './styles.css';
import Icon from 'components/Icon';


const styleMapping = {
  superlike: {
    marginBottom: 3,
  },
  pass: {
    left: 4,
  },
};

function Button(props) {
  return (
    <button
      className={styles[props.type]}
      onClick={() => {
        props.onClick(props.id, props.hash, props.type);
      }}
    >
      {props.children ? props.children : <Icon type={props.type} style={styleMapping[props.type]} />}
    </button>);
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  type: PropTypes.string,
  id: PropTypes.string,
  hash: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;



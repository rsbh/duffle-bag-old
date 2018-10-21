import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'


const colorMap = {
  default: '#3498db',
  success : '#2ecc71',
  warning: '#f39c12',
  danger: '#e74c3c'
}

const fontSizeMap = {
  'small' : '.75em',
  'normal': '1em',
  'large': '1.25em'
}

const getAttributes = props => {
  const color = props.appearance === 'primary' || props.appearance === 'primary-pill' ? 'white' : colorMap[props.intent]
  const border = `2px solid ${colorMap[props.intent]}`
  const borderRadius = props.appearance === 'pill' || props.appearance === 'primary-pill'  ? '40px': '3px'
  const padding = props.appearance === 'pill' || props.appearance === 'primary-pill' ? '0.25em 1.5em': '0.25em 1em'
  const bgColor = props.appearance === 'primary' || props.appearance === 'primary-pill' ? colorMap[props.intent] : 'white' 
  const fontSize = fontSizeMap[props.size]
  const cursor = props.disabled ? 'not-allowed': 'pointer'
  return {
    color,
    border,
    borderRadius,
    padding,
    bgColor,
    fontSize,
    cursor
  }
}

const ButtonBase = styled.button`
  margin: 2px;
  width: ${props => props.full ? '100%' : ''};
  font-size: ${props => getAttributes(props).fontSize};
  background-color:  ${props => getAttributes(props).bgColor};
  padding: ${props => getAttributes(props).padding};
  border-radius: ${props => getAttributes(props).borderRadius};
  color: ${props => getAttributes(props).color};
  border: ${props => getAttributes(props).border};
  cursor: ${props => getAttributes(props).cursor};

`;



class Button extends React.Component {
  render() {
    return <ButtonBase {...this.props}>Button</ButtonBase>;
  }
}

Button.propTypes = {
  intent: PropTypes.string,
  appearance: PropTypes.string,
  full: PropTypes.bool,
  size: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  intent: 'default',
  appearance: 'default',
  full: false,
  size: 'normal',
  disabled: false
}

export default Button;

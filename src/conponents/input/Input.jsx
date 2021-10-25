import { forwardRef, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";

import {InputBeforeIcon, InputControl, StyledInput} from "./Input.styles";

const Input =  forwardRef((props, ref) => {
   const { value, onChanger, type, beforeIcon, ...remainingProps } = props;
   const [currentValue, setCurrentValue] = useState("");
   const icons = {
      search: <BiSearch size={25}/>,
   }

   useEffect(() => {
      setCurrentValue(value);
   }, [value]);

   const onChangeHandler = (ev) => {
      setCurrentValue(ev.target.value);
      onChanger?.(ev);
   }

   return (
       <InputControl>
          {beforeIcon && <InputBeforeIcon> {icons[beforeIcon]}</InputBeforeIcon>}
          <StyledInput  ref={ref} type={type}  value={currentValue} onChange={onChangeHandler} {...remainingProps}  />
       </InputControl>
   )

});

Input.propTypes = {
   /** data input default **/
   currentValue: PropTypes.string,
   /** change cb **/
   onChanger: PropTypes.func,
   /** icon before input **/
   beforeIcon: PropTypes.string,
}

Input.defaultProps = {
   beforeIcon: null,
}

export default Input;
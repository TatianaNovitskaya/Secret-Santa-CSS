
import {useState} from "react";

import {Label, PasswordField, TextField} from "@redwoodjs/forms";

import Icon from "src/components/Icon/Icon";

const ShowHidePassword = ({label, name, ...rest}) => {

  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  const handleClick = () => {
    setIsPasswordShowing((prevValue) => !prevValue);

  }

  return (
    <div className="relative field">
      <Label name={name}>{label}</Label>
      {isPasswordShowing ? (
        <TextField name={name} placeholder="" {...rest}/>
      ) : (
        <PasswordField name={name} placeholder="" {...rest}/>
      )}

      < button className="absolute top-8 right-6" onClick={handleClick}>
        {isPasswordShowing ? (
          <Icon id={"eyeOpened"} size={32}/>
        ) : (
          <Icon id={"eyeClosed"} size={32}/>
        )}
      </button>
    </div>
  )
}

export default ShowHidePassword

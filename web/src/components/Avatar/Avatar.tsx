import Icon from "src/components/Icon/Icon";
import Indicator from "src/components/Indicator/Indicator";

interface AvatarProps {
  avatar?: string,
  alt?: string,
  letter?: string,
  icon?: string,
  isSantaHatShowing?: boolean,
  indicator?: 'success' | 'warning' | 'error' | null
}

const Avatar = ({avatar, alt, letter, icon, isSantaHatShowing, indicator}: AvatarProps) => {
  return (
    <div className={"relative inline-block"}>
      {avatar && (
        <img src={avatar} alt={alt}
             className={"h-18 w-18 rounded-full object-cover border-white border-avatar"}/>
      )}
      {letter && !avatar &&(
        <div
          className={"center h-18 w-18 rounded-full border-white border-avatar bg-spanishGreen text-2xl font-bold uppercase text-white"}>
          {letter}
        </div>
      )}
      {icon && !letter && !avatar && (
        <div
          className={"center h-18 w-18 rounded-full border-vistaBlue border-avatar bg-spanishGreen text-2xl font-bold uppercase text-white"}>
          <Icon id={icon} size={32}/>
        </div>
      )}
      {isSantaHatShowing && (
          <img src="/images/santa-hat.png" alt="Santa Hat" className={"absolute -right-[15px] -top-[19px]"}/>
      )}
      {indicator && (
       <div className={"absolute bottom-0 right-0"}>
            <Indicator status={indicator}/>
        </div>
      )}
    </div>
  )
}

export default Avatar

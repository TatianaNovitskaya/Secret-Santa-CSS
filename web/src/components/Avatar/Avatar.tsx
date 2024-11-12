import Icon from "src/components/Icon/Icon";

const Avatar = () => {
  return (
    <div>
      <img src="/images/placeholder__avatar-01.png" alt="Amy Dutton"
           className={"h-18 w-18 rounded-full object-cover border-white border-avatar"}/>

      <div
        className={"center h-18 w-18 rounded-full border-white border-avatar bg-spanishGreen text-2xl font-bold uppercase text-white"}>
        A
      </div>

      <div
        className={"center h-18 w-18 rounded-full border-vistaBlue border-avatar bg-spanishGreen text-2xl font-bold uppercase text-white"}>
        <Icon id="eyeClosed" size={32}/>
      </div>

      <div className={"relative inline-block"}>
        <img src="/images/placeholder__avatar-01.png" alt="Amy Dutton"
             className={"h-18 w-18 rounded-full object-cover border-white border-avatar"}/>
        <img src="/images/santa-hat.png" alt="Santa Hat" className={"absolute -right-[15px] -top-[19px]"}/>
      </div>

      <div className={"relative inline-block"}>
        <img src="/images/placeholder__avatar-01.png" alt="Amy Dutton"
             className={"h-18 w-18 rounded-full object-cover border-white border-avatar"}/>
        <div className={"rounded-full center h-6 w-6 border-2 border-white bg-spanishGreen text-white"}>
          <Icon id={"check"} size={16}/>
        </div>
      </div>
    </div>
  )
}

export default Avatar

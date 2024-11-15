import Icon from "src/components/Icon/Icon";

interface IndicatorProps{
  status: 'success' | 'warning' | 'error'
}
const Indicator = ({status}: IndicatorProps) => {
  return (
    <>
      {/*success*/}
      {status === 'success' && (
        <div className={"indicator bg-spanishGreen text-white"}>
          <Icon id={"check"} size={16}/>
        </div>
      )}
      {/*error*/}
      {status === 'error' && (
      <div className={"indicator bg-orangeRed text-white"}>
        <Icon id={"minus"} size={16}/>
      </div>
      )}
      {/*question*/}
      {status === 'warning' && (
      <div className={"indicator bg-supernova text-black"}>
        <Icon id={"question"} size={16}/>
      </div>
      )}
    </>
  )
}

export default Indicator

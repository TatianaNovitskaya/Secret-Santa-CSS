const Footer = () => {
  return (
    <footer className={"fixed left-0 right-0 bottom-0 bg-acadia dark:bg-blackPearl pt-20 pb-16 z-0"}>
      <img src="/images/logo__secret-santa--small.svg" alt="Secret Santa" className={"mx-auto relative mb-16"}/>
      <div className={"text-center text-scotchMist font-sans font-medium "}>
        <p className="mb-4">Copyright ©2023. <a href="https://ahhacreative.com" target="_target" rel="noreferrer" className={"underline hover:no-underline"}>Ah Ha Creative, LLC</a>. All Rights Reserved.</p>
        <p>Terms & Conditions . Privacy Policy . Disclaimers</p>
      </div>
    </footer>
  )
}

export default Footer

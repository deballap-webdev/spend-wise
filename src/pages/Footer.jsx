const Footer = () => {
  const yr = new Date().getFullYear()
  return <div className="fixed bottom-0 z-20 w-full border-t border-t-BORDER p-2 text-LIGHT-TEXT text-[0.8rem]  bg-white ">© {yr} spendWise</div>;
};

export default Footer;

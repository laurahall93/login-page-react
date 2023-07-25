import companyLogo from "../img/yoga-pose.jpeg";

export default function Header(): JSX.Element {
  return (
    <>
      <h1>Body&Balance</h1>
      <img src={companyLogo} alt="egle pose yoga" />
    </>
  );
}

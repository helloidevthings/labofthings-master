import Link from "next/link";
import Styles from "./styled";
import PortfolioCard from "../../components/Parts/PortfolioCard";

export default () => {
  const portfolioNav = [
    { name: "Cineworld", path: "/cineworld" },
    {
      name: "Level Up Buttercup",
      path: "/levelupbuttercup",
    },
    { name: "Fillauer", path: "/fillauer" },
    { name: "Barbell", path: "/barbell" },
    { name: "Curious Dog", path: "/curiousdog" },
    {
      name: "Every Brilliant Thing",
      path: "/brilliant",
    },
    { name: "Bourbon", path: "/bourbon" },
    {
      name: "Cleveland State",
      path: "/cleveland",
    },
    { name: "Bakos Interiors", path: "/bakos" },
    {
      name: "Bennet Galleries",
      path: "/bennetgalleries",
    },
    { name: "Elaine Seat", path: "/elaine" },
  ];
  return (
    <Styles>
      <PortfolioCard details={portfolioNav} />
    </Styles>
  );
};

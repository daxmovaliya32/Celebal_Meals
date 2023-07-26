import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
import Auth from "./Auth";

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>CelebalMeals</h1>
        <Auth />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

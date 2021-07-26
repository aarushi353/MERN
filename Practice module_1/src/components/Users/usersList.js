import react from "react";
import classes from "./Userslist.module.css";
import Card from "../UI/Card";
const usersList = (props) => {
  return (<Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default usersList;

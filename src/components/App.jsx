import Button from "./Button/Button";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: "#ad8686"
      }}
    >
      Кнопочка
      <Button
        text="Search"
        type ="button"
        width ="161px"
        height = "70px"
        backgroundColor = "#8BAA36"
        borderRadius = "24px 44px"
        textColor = "#FAFAFA"
        />
           <Button
        text="Search"
        type ="button"
        width ="161px"
        height = "70px"
        backgroundColor = "#22252A"
        borderRadius = "24px 44px"
        textColor = "#FAFAFA"
        />
         <Button
        text="Other categories"
        type ="button"
        width ="239px"
        height = "61px"
        backgroundColor = "transparent"
        textColor = "#22252A"
        border="2px solid #8BAA36"
        borderRadius = "24px 44px"
        />
          <Button
        text="Sign in"
        type ="button"
        width ="141px"
        height = "67px"
        backgroundColor = "transparent"
        textColor = "#FAFAFA"
        border="2px solid #FAFAFA"
        borderRadius = "24px 44px"
        />
           <Button
        text="Subscribe"
        type ="button"
        width ="339px"
        height = "60px"
        backgroundColor = "#8BAA36"
        textColor = "#FAFAFA"
        borderRadius = "6px"
        />
    </div>
  );
};

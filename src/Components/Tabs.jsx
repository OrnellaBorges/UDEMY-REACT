export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //const ButtonsContainer = buttonsContainer; // il contient la valeur "menu" passé en props via Tabs
  //ce qui remplace la valeur entre les chevrons et donc etre dynamique je peux choisir de mettre div ou ul ou autre
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

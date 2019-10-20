import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`welcomeScreen correctly renders`, () => {
  const tree = renderer
     .create(<WelcomeScreen
       gameTime={5}
       errorCount={3}
       onClick={jest.fn()}
     />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

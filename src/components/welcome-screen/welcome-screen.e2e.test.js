import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

it(`test bunton click launch callback`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(
      <WelcomeScreen
        gameTime={5}
        errorCount={3}
        onStartButtonClick={clickHandler} />
  );

  wrapper.find(`.welcome__button`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

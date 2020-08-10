import App from "../App";

describe("App", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  test("Check h1 text content", () => {
    expect(component.find("h1").text()).toBe("Mugisha's React App");
  });
});

import Button from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: "Red",
  backgroundColor: "red",
  size: "md",
  color: "white",
};

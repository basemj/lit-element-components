import CdButton, { CdButtonProps } from '.';

CdButton();

export default {
  title: 'Atoms/CdButton',
  argTypes: {
    label: String,
    eventListener: String,
    componentstyle: String,
  },
  parameters: {
    actions: {
      handles: ['button-x-clicked'],
    },
  },
};

type ComponentProps = CdButtonProps & {
  componentstyle: string;
}

type TemplateType = {
  bind: (args: any) => {args: ComponentProps};
};

const template: TemplateType = (args: ComponentProps) => `<cd-button class="${args.componentstyle}" eventListener="${args.eventListener}" label="${args.label}" />`;

export const Primary = template.bind({});
Primary.args = {
  label: 'Click here',
  eventListener: 'button-x-clicked',
  componentstyle: 'primary',
};

export const Secondary = template.bind({});
Secondary.args = {
  label: 'Martin',
  eventListener: 'button-x-clicked',
  componentstyle: 'secondary',
};

// TODO: firgure out how to display event.detail in actions tab of storybook
document.addEventListener('button-x-clicked', (event: any) => console.log(event.detail));

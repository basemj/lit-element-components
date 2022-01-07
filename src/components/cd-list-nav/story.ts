import CdListNav, { CdListNavProps } from '.';

CdListNav();

export default {
  title: 'Atoms/CdListNav',
};

type ComponentProps = CdListNavProps;

type TemplateType = {
  bind: (args: any) => {args: ComponentProps};
};

const template: TemplateType = (args: ComponentProps) => `<cd-list-nav navArray=${args.navArray}></cd-list-nav>`;

var navListArray = [
  {
      id: 'Order-History',
      title: 'essilor.label.editorder.title',
      url: 'Order-History',
      icon: 'icon-myorder-small',
      selected: false
  },
  {
      id: 'Address-List',
      title: 'label.addressbook',
      url: 'Address-List',
      selected: true
  },
  {
      id: 'PaymentInstruments-List',
      title: 'essilor.label.paymentdetail.title',
      url: 'PaymentInstruments-List',
      icon: 'icon-cc-card',
      selected: false
  }
];

export const Primary = template.bind({});
Primary.args = {
  navArray: JSON.stringify(navListArray)
};

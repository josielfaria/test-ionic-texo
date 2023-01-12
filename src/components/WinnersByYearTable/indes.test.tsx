import { render } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IonCardTitle } from '@ionic/react';
import WinnersByYearTable from '.';

describe('WinnersByYearTable', () => {
  let component: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    component = <WinnersByYearTable />;
    wrapper = shallow(component);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('render component', () => {
    const { baseElement } = render(component);
    expect(baseElement).toBeDefined();
  });

  test('checking title', () => {
    const title = wrapper.find(IonCardTitle);
    expect(title).toHaveLength(1);
    expect(title.text()).toBe('List movie winners by year');
  });
});

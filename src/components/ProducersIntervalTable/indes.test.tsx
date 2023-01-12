import { render, screen, within } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IonCardTitle } from '@ionic/react';
import { mockProducersInterval } from './mock';
import ProducersIntervalTable from '.';

describe('ProducersIntervalTable', () => {
  let component: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    component = <ProducersIntervalTable data={mockProducersInterval} />;
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
    expect(title.text()).toBe(
      'Producers with longest and shortest interval between wins'
    );
  });

  test('if it is showing data in the SMALLEST range table', () => {
    render(component);
    const name = mockProducersInterval.min[0].producer;
    const tableId = screen.getByTestId('table-producers-min');
    const textData = within(tableId).queryByText(name);
    expect(textData).toBeTruthy();
  });

  test('if it is NOT showing data in the SMALLEST range table', () => {
    render(component);
    const randomName = 'datarandom';
    const tableId = screen.getByTestId('table-producers-min');
    const textData = within(tableId).queryByText(randomName);
    expect(textData).not.toBeTruthy();
  });

  test('if it is showing data in the LARGEST range table', () => {
    render(component);
    const name = mockProducersInterval.max[0].producer;
    const tableId = screen.getByTestId('table-producers-max');
    const textData = within(tableId).queryByText(name);
    expect(textData).toBeTruthy();
  });

  test('if it is NOT showing data in the LARGEST range table', () => {
    render(component);
    const randomName = 'datarandom';
    const tableId = screen.getByTestId('table-producers-max');
    const textData = within(tableId).queryByText(randomName);
    expect(textData).not.toBeTruthy();
  });
});

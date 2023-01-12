import { render, screen, within } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IonCardTitle } from '@ionic/react';
import { mockYearsMultipleWinners } from './mock';
import YearsMultipleWinnersTable from '.';

describe('YearsMultipleWinnersTable', () => {
  let component: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    component = <YearsMultipleWinnersTable data={mockYearsMultipleWinners} />;
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
    expect(title.text()).toBe('List years with multiple winners');
  });

  test('if it is showing data in the table', () => {
    render(component);
    const year = mockYearsMultipleWinners.years[0].year;
    const tableId = screen.getByTestId('table-multiple-winners');
    const textData = within(tableId).queryByText(year);
    expect(textData).toBeTruthy();
  });

  test('if it is NOT showing data in the table', () => {
    render(component);
    const randomYear = '1600';
    const tableId = screen.getByTestId('table-multiple-winners');
    const textData = within(tableId).queryByText(randomYear);
    expect(textData).not.toBeTruthy();
  });
});

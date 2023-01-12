import { render, screen, within } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IonCardTitle } from '@ionic/react';
import { mockTopStudios } from './mock';
import TopStudiosTable from '.';

describe('TopStudiosTable', () => {
  let component: any;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    component = <TopStudiosTable data={mockTopStudios} />;
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
    expect(title.text()).toBe('Top 3 studios with winners');
  });

  test('if it is showing data in the table', () => {
    render(component);
    const name = mockTopStudios.studios[0].name;
    const tableId = screen.getByTestId('table-top-studios');
    const textData = within(tableId).queryByText(name);
    expect(textData).toBeTruthy();
  });

  test('if it is not showing data in the table', () => {
    render(component);
    const randomName = 'datarandom';
    const tableId = screen.getByTestId('table-top-studios');
    const textData = within(tableId).queryByText(randomName);
    expect(textData).not.toBeTruthy();
  });
});

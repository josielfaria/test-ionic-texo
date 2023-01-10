import { render, screen, within } from '@testing-library/react';
import { shallow } from 'enzyme';
import DashboardPage from '.';
import WinnersByYearTable from '../../components/WinnersByYearTable';
import YearsMultipleWinnersTable from '../../components/YearsMultipleWinnersTable';
import TopStudiosTable from '../../components/TopStudiosTable';
import ProducersIntervalTable from '../../components/ProducersIntervalTable';

describe('DashboardPage', () => {
  test('render page', () => {
    const { baseElement } = render(<DashboardPage />);
    expect(baseElement).toBeDefined();
  });

  test('there is a title on the ion page', () => {
    render(<DashboardPage />);
    const title = screen.getByTestId('ion-page');
    const titleDashboard = within(title).getAllByText('Dashboard')
    expect(titleDashboard).toBeTruthy();
  })

  it('render component YearsMultipleWinnersTable', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find(YearsMultipleWinnersTable)).toHaveLength(1);
  });

  it('render component TopStudiosTable', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find(TopStudiosTable)).toHaveLength(1);
  });

  it('render component ProducersIntervalTable', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find(ProducersIntervalTable)).toHaveLength(1);
  });

  it('render component WinnersByYearTable', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper.find(WinnersByYearTable)).toHaveLength(1);
  });
});

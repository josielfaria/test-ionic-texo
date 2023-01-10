import { render, screen, within } from '@testing-library/react';
import { shallow } from 'enzyme';
import MovieListPage from '.';
import MovieListTable from '../../components/MovieListTable';

describe('MovieListPage', () => {
  test('render page', () => {
    const { baseElement } = render(<MovieListPage />);
    expect(baseElement).toBeDefined();
  });

  test('there is a title on the ion page', () => {
    render(<MovieListPage />);
    const title = screen.getByTestId('ion-page');
    const titleDashboard = within(title).getAllByText('List')
    expect(titleDashboard).toBeTruthy();
  })

  it('render component MovieListTable', () => {
    const wrapper = shallow(<MovieListPage />);
    expect(wrapper.find(MovieListTable)).toHaveLength(1);
  });
});

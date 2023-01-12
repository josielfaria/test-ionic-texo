import { render, screen, within } from '@testing-library/react';
import { shallow } from 'enzyme';
import MovieListPage from '.';
import MovieListTable from '../../components/MovieListTable';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:8100/page/movie-list',
  }),
}));

describe('MovieListPage', () => {
  const component = <MovieListPage />;
  const wrapper = shallow(component);
  const movieListTableComponent = wrapper.find(MovieListTable);
  render(<MovieListPage />);

  test('render page', () => {
    const { baseElement } = render(<MovieListPage />);
    expect(baseElement).toBeDefined();
  });

  test('if there is a title on the ion page', () => {
    render(<MovieListPage />);
    const header = screen.getByTestId('ion-page');
    const titleDashboard = within(header).getAllByText('List');
    expect(titleDashboard).toBeTruthy();
  });

  test('if there is MovieListTable component on the page', () => {
    render(<MovieListPage />);
    expect(wrapper.find(MovieListTable)).toHaveLength(1);
  });

  it('should have updateMovieList as prop', () => {
    expect(typeof movieListTableComponent.props().updateMovieList).toBe(
      'function'
    );
  });

  it('should have updatePageMovieList as prop', () => {
    expect(typeof movieListTableComponent.props().updatePageMovieList).toBe(
      'function'
    );
  });
});

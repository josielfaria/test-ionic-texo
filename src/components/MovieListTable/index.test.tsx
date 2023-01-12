import { render, screen, within } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import { mockMovieList1, mockMovieList2 } from './mock';
import MovieListTable from '.';

describe('MovieListTable', () => {
  let component: any;
  let wrapper: ShallowWrapper;
  let titleText: string;

  beforeEach(() => {
    const updateMovieList = jest.fn();
    const updatePageMovieList = jest.fn();
    component = (data: any) => (
      <MovieListTable
        data={data}
        updateMovieList={updateMovieList}
        updatePageMovieList={updatePageMovieList}
      />
    );
    wrapper = shallow(component(mockMovieList1));
    titleText = mockMovieList1.content[0].title;
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('render page', () => {
    const { baseElement } = render(component(null));
    expect(baseElement).toBeDefined();
  });

  test('if the data MovieList has been loaded', () => {
    render(component(mockMovieList1));
    const tableId = screen.getByTestId('table-movie-list');
    const textData = within(tableId).queryByText(titleText);
    expect(textData).toBeTruthy();
  });

  test('if the data MovieList has NOT been loaded', () => {
    render(component(mockMovieList2));
    const tableId = screen.getByTestId('table-movie-list');
    const textData = within(tableId).queryByText(titleText);
    expect(textData).not.toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

describe('Index page', () => {
  test('renders index', async () => {
    const { page } = await getPage({
      route: '/index',
    });

    render(page);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

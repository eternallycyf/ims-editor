import { render } from '@testing-library/react';

import { Foo } from '@ims-view/foo';
import React from 'react';

test('Foo', () => {
  const { container } = render(<Foo />);

  expect(container).toMatchSnapshot();
});

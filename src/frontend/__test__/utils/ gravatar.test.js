import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'carlos@extrasistemas.com';
  const gravatarUrl = 'https://gravatar.com/avatar/5814accff448aaebb4c1d2a73d5193fc';
  expect(gravatarUrl).toEqual(gravatar(email));
});
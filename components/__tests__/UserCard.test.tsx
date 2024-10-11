// FILE: components/__tests__/UserCard.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import UserCard from '../UserCard';

describe('UserCard', () => {
  const user = {
    id: '4',
    firstName: 'Toni',
    lastName: 'Kroos',
    age: '31',
    active: true,
  };

  it('displays the correct user information', () => {
    const { getByText } = render(<UserCard {...user} />);

    expect(getByText(`ID: ${user.id}`)).toBeTruthy();
    expect(getByText(`Full Name: ${user.firstName} ${user.lastName}`)).toBeTruthy();
    expect(getByText(`Age: ${user.age}`)).toBeTruthy();
    expect(getByText('Active: Yes')).toBeTruthy();
  });

  it('displays inactive status correctly', () => {
    const inactiveUser = { ...user, active: false };
    const { getByText } = render(<UserCard {...inactiveUser} />);

    expect(getByText('Active: No')).toBeTruthy();
  });
});
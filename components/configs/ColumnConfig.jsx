export const columnConfig = {
  columns: [
      { title: 'id', content: user => user.id },
      { title: 'name', content: ({ name }) => name },
      { title: 'email', content: ({ email }) => <Email email={email} /> },
      { title: 'Phone', content: ({ phone }) =>phone }
    ]
  };

  export function Email({ email }) {
    return <a href={'mailto:' + email}>{email}</a>
  }
import classes from "@/components/Table/UserTable.module.css";

export function UserTable({ users, config }) {
  return <table className={classes.styleTable}> 
    <thead>
      <tr>
        {config.columns.map(column => <td key={column.title}>{column.title}</td>)}
      </tr>
    </thead>
    <tbody>
      {users.map(user => <tr key={user.id}>
        {config.columns.map(({ title, content }) => <td key={title}>
          {content(user)}
        </td>)}
      </tr>)}
    </tbody>
  </table>
}
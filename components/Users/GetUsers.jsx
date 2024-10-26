import { useEffect, useState } from "react";
import { UserTable } from "../Table/UserTable";
import { columnConfig } from "../configs/ColumnConfig";
import { Spinner } from "../Spin/Spinner";



export function GetUsers({ url }) {
    const
        [users, setData] = useState(null),
        [loading, setLoading] = useState(true),
        [error, setError] = useState(null);

    useEffect(() => {
        setData(null);
        setError(null);
        async function fetchUsers() {
            try {
                const
                    response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Ошибка');
                }

                const
                    result = await response.json();
                setData(result);
                setLoading(false);

            } catch (err) {
                setError(err);
            }
        };
        fetchUsers();
    }, [url]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (users)
        return <UserTable users={users} config={columnConfig} />
    return <Spinner />;
};
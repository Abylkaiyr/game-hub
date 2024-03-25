import { useEffect, useState } from "react";
import userServie, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";


const useUsers = () => {
      const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userServie.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return { users, error, loading, setUsers, setError };
}

export default useUsers;
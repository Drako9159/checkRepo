import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries.js";
export default function useRepositories() {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
  const { repositories = null } = data;
  /*
  const [repositories, setRepositories] = useState(null);
  async function fetchRepositories() {
    try {
      const res = await globalThis.fetch(
        "http://192.168.1.170:5000/api/repositories"
      );
      const data = await res.json();
      setRepositories(data.edges);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchRepositories();
  }, []);
*/
  const repositoriesNodes = repositories
    ? repositories.map((edge) => edge.node)
    : [];
  return { loading, repositories: repositoriesNodes, refetch };
}

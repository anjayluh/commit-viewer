
const servers: any = {
  dev: {
    github: " https://api.github.com/",
  }
}
const evVar = process.env.REACT_APP_ENV || "dev";
const environment = evVar.trim();
export const env = servers[environment];

const repositoryURL = env.github;
export const localRoutes = {
  home: "/",
  details: '/details'
};

export const remoteRoutes = {
  trendingRepos: repositoryURL + "search/repositories",
  commitHistory: repositoryURL + "repos/"
};